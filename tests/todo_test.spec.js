import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');

  async function addTodoItem(item) {
    await page.getByTestId('text-input').click();
    await page.getByTestId('text-input').fill(item);
    await page.getByTestId('text-input').press('Enter');
  }

  const todoItems = ['walking', 'exercise', 'eat', 'sleep'];
  for (const item of todoItems) {
    await addTodoItem(item);
  }
  
  const checkItems = ['eat', 'sleep'];
  for (const item of checkItems) {
    await page.getByRole('listitem').filter({ hasText: item }).getByTestId('todo-item-toggle').check();
  }

  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await expect(page.getByText('sleep')).toBeVisible();
  await page.getByRole('button', { name: 'Clear completed' }).click();

  // To check failure Screenshot and video recording
  await expect(page.locator('.todo-list li')).toHaveCount(2);
});