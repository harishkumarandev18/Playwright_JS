import {test} from '@playwright/test';
import {TodoPage} from '../PageObject/todoPage.js';

test('TodoMVC React app', async ({ page }) => {
  const todoPage = new TodoPage(page);

  await todoPage.goto();

  const todos = ['walking', 'exercise', 'eat', 'sleep'];
  for (const todo of todos) {
    await todoPage.addTodo(todo);
  }

  const completed = ['eat', 'sleep'];
  for (const todo of completed) {
    await todoPage.markCompleted(todo);
  }

  await todoPage.filterActive();
  await todoPage.filterCompleted();
  await todoPage.assertTodoVisible('sleep');
  await todoPage.clearCompleted();

});
