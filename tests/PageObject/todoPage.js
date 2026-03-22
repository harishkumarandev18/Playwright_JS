import {expect} from '@playwright/test';

export class TodoPage {
  constructor(page) {
    this.page = page;
    this.input = page.getByTestId('text-input');
    this.todoList = page.locator('.todo-list li');
    this.clearCompletedButton = page.getByRole('button', { name: 'Clear completed' });
  }

  async goto() {
    await this.page.goto('https://todomvc.com/examples/react/dist/');
    await expect(this.page).toHaveTitle('TodoMVC: React');
  }

  async addTodo(text) {
    await this.input.fill(text);
    await this.input.press('Enter');
  }

  async markCompleted(todo) {
    await this.page.getByRole('listitem')
      .filter({ hasText: todo })
      .getByTestId('todo-item-toggle')
      .check();
  }

  async filterActive() {
    await this.page.getByRole('link', { name: 'Active' }).click();
  }

  async filterCompleted() {
    await this.page.getByRole('link', { name: 'Completed' }).click();
  }

  async clearCompleted() {
    await this.clearCompletedButton.click();
  }

  async assertTodoVisible(todo) {
    await expect(this.page.getByText(todo)).toBeVisible();
  }

  async assertTodoCount(count) {
    await expect(this.todoList).toHaveCount(count);
  }

}