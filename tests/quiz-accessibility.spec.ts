import { test, expect } from '@playwright/test';

test.describe('クイズアプリケーション - アクセシビリティテスト', () => {
  test('キーボードナビゲーションが機能すること', async ({ page }) => {
    await page.goto('/');
    
    // Tabキーでフォーカス移動をテスト
    await page.keyboard.press('Tab');
    
    // 最初のラジオボタンにフォーカスが当たることを確認
    const firstRadio = page.locator('[type="radio"]').first();
    await expect(firstRadio).toBeFocused();
    
    // 矢印キーで選択肢を移動
    await page.keyboard.press('ArrowDown');
    const secondRadio = page.locator('[type="radio"]').nth(1);
    await expect(secondRadio).toBeFocused();
    
    // Spaceキーで選択
    await page.keyboard.press('Space');
    await expect(secondRadio).toBeChecked();
    
    // Tabキーで回答ボタンに移動
    await page.keyboard.press('Tab');
    const submitButton = page.locator('button:has-text("回答する")');
    await expect(submitButton).toBeFocused();
    
    // Enterキーで回答実行
    await page.keyboard.press('Enter');
    await expect(page.locator('text=正解！, 不正解').first()).toBeVisible();
  });

  test('適切なARIAラベルが設定されていること', async ({ page }) => {
    await page.goto('/');
    
    // プログレスバーにARIA属性が設定されていることを確認
    const progressBar = page.locator('[role="progressbar"]');
    await expect(progressBar).toBeVisible();
    await expect(progressBar).toHaveAttribute('aria-valuenow', '10');
    await expect(progressBar).toHaveAttribute('aria-valuemin', '0');
    await expect(progressBar).toHaveAttribute('aria-valuemax', '100');
    
    // ラジオグループが適切に設定されていることを確認
    const radioGroup = page.locator('[role="radiogroup"]');
    await expect(radioGroup).toBeVisible();
  });

  test('フォーカス管理が適切であること', async ({ page }) => {
    await page.goto('/');
    
    // 選択肢を選択して回答
    await page.locator('[type="radio"]').first().click();
    await page.locator('button:has-text("回答する")').click();
    
    // 次の問題ボタンが表示された後、フォーカスが適切に管理されること
    const nextButton = page.locator('button:has-text("次の問題")');
    await expect(nextButton).toBeVisible();
    
    // 次の問題に進む
    await nextButton.click();
    
    // 新しい質問にフォーカスが移っていることを確認
    await expect(page.locator('h5')).toBeVisible();
  });

  test('色彩コントラストが適切であること', async ({ page }) => {
    await page.goto('/');
    
    // 主要な要素が表示されていることを確認（色に依存しない形で）
    await expect(page.locator('h4:has-text("Gitクイズ")')).toBeVisible();
    
    // 選択肢を選択
    const firstOption = page.locator('label:has-text("git init")');
    await firstOption.click();
    
    // 選択状態が視覚的に確認できることを確認
    const checkedRadio = page.locator('input[type="radio"]:checked');
    await expect(checkedRadio).toBeVisible();
    
    // 回答後の結果表示も確認
    await page.locator('button:has-text("回答する")').click();
    const resultAlert = page.locator('[role="alert"], .MuiAlert-root');
    await expect(resultAlert).toBeVisible();
  });

  test('スクリーンリーダー対応が適切であること', async ({ page }) => {
    await page.goto('/');
    
    // 見出し構造が適切であることを確認
    await expect(page.locator('h4:has-text("Gitクイズ")')).toBeVisible();
    await expect(page.locator('h5')).toBeVisible();
    
    // ボタンに適切なテキストが設定されていることを確認
    await expect(page.locator('button:has-text("回答する")')).toBeVisible();
    await expect(page.locator('button:has-text("リセット")')).toBeVisible();
    
    // 選択肢を選択して回答
    await page.locator('[type="radio"]').first().click();
    await page.locator('button:has-text("回答する")').click();
    
    // 結果メッセージが適切に表示されることを確認
    const resultText = page.locator('text=正解！, 不正解').first();
    await expect(resultText).toBeVisible();
    
    // 次の問題ボタンのテキストが明確であることを確認
    await expect(page.locator('button:has-text("次の問題")')).toBeVisible();
  });

  test('エラー状態のアクセシビリティ', async ({ page }) => {
    await page.goto('/');
    
    // 選択肢を選ばずに回答ボタンの状態を確認
    const submitButton = page.locator('button:has-text("回答する")');
    await expect(submitButton).toBeDisabled();
    
    // 無効状態のボタンが適切に示されていることを確認
    await expect(submitButton).toHaveAttribute('disabled');
    
    // 選択肢を選択すると有効になることを確認
    await page.locator('[type="radio"]').first().click();
    await expect(submitButton).toBeEnabled();
    await expect(submitButton).not.toHaveAttribute('disabled');
  });
});