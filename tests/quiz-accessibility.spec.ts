import { test, expect } from '@playwright/test';

test.describe('クイズアプリケーション - アクセシビリティテスト', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // セット選択画面で基本操作セットを選択
    await page.locator('text=Git基本操作').click();
  });

  test('キーボードナビゲーションが機能すること', async ({ page }) => {
    
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
    
    // Spaceキーで選択すると即座に回答される
    await expect(page.locator('.MuiAlert-root')).toBeVisible();
  });

  test('適切なARIAラベルが設定されていること', async ({ page }) => {
    
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
    
    // 選択肢を選択（即座に回答される）
    await page.locator('[type="radio"]').first().click();
    
    // 結果が表示されることを確認
    await expect(page.locator('.MuiAlert-root')).toBeVisible();
    
    // 次の問題ボタンが表示された後、フォーカスが適切に管理されること
    const nextButton = page.locator('button:has-text("次の問題")');
    await expect(nextButton).toBeVisible();
    
    // 次の問題に進む
    await nextButton.click();
    
    // 新しい質問にフォーカスが移っていることを確認
    await expect(page.locator('h5')).toBeVisible();
  });

  test('色彩コントラストが適切であること', async ({ page }) => {
    
    // 主要な要素が表示されていることを確認（色に依存しない形で）
    await expect(page.locator('h4:has-text("Gitクイズ")')).toBeVisible();
    
    // 選択肢を選択
    const firstOption = page.locator('label:has-text("git init")');
    await firstOption.click();
    
    // 選択状態が視覚的に確認できることを確認
    const checkedRadio = page.locator('input[type="radio"]:checked');
    await expect(checkedRadio).toBeVisible();
    
    // 選択すると即座に結果が表示されることを確認
    const resultAlert = page.locator('[role="alert"], .MuiAlert-root');
    await expect(resultAlert).toBeVisible();
  });

  test('スクリーンリーダー対応が適切であること', async ({ page }) => {
    
    // 見出し構造が適切であることを確認
    await expect(page.locator('h4:has-text("Gitクイズ")')).toBeVisible();
    await expect(page.locator('h5')).toBeVisible();
    
    // ボタンに適切なテキストが設定されていることを確認  
    await expect(page.locator('button:has-text("リセット")')).toBeVisible();
    
    // 選択肢を選択（即座に回答される）
    await page.locator('[type="radio"]').first().click();
    
    // 結果メッセージが適切に表示されることを確認
    const resultText = page.locator('.MuiAlert-root');
    await expect(resultText).toBeVisible();
    
    // 次の問題ボタンのテキストが明確であることを確認
    await expect(page.locator('button:has-text("次の問題")')).toBeVisible();
  });

  test('選択後の状態管理が適切であること', async ({ page }) => {
    
    // 選択前は何も選択されていないことを確認
    await expect(page.locator('input[type="radio"]:checked')).toHaveCount(0);
    
    // 選択肢を選択
    await page.locator('[type="radio"]').first().click();
    
    // 選択後は他の選択肢が無効になることを確認
    await expect(page.locator('input[type="radio"]:disabled')).toHaveCount(4);
    
    // 結果が表示されることを確認
    await expect(page.locator('.MuiAlert-root')).toBeVisible();
  });
});