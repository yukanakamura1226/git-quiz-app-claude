import { test, expect } from '@playwright/test';

test.describe('Gitクイズアプリケーション（修正版）', () => {
  test.beforeEach(async ({ page }) => {
    // ローカルストレージをクリアしてテストの独立性を保つ
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  });

  test('ページが正しく読み込まれること', async ({ page }) => {
    await page.goto('/');
    
    // タイトルが表示されること
    await expect(page.locator('h4').first()).toHaveText('Gitクイズ');
    
    // 進行状況が表示されること
    await expect(page.locator('text=問題 1 / 10')).toBeVisible();
    
    // プログレスバーが表示されること
    await expect(page.locator('[role="progressbar"]')).toBeVisible();
    
    // 最初の質問が表示されること
    await expect(page.locator('h5')).toContainText('Gitでローカルリポジトリを初期化するコマンドは？');
  });

  test('選択肢を選んで回答できること', async ({ page }) => {
    await page.goto('/');
    
    // 最初は回答ボタンが無効であること
    const submitButton = page.locator('button:has-text("回答する")');
    await expect(submitButton).toBeDisabled();
    
    // 正解の選択肢（git init）を選択
    await page.locator('label:has-text("git init")').click();
    
    // 回答ボタンが有効になること
    await expect(submitButton).toBeEnabled();
    
    // 回答ボタンをクリック
    await submitButton.click();
    
    // 正解メッセージが表示されること
    await expect(page.locator('text=正解！')).toBeVisible();
    await expect(page.locator('text=git initコマンドでローカルリポジトリを初期化します。')).toBeVisible();
    
    // 次の問題ボタンが表示されること
    await expect(page.locator('button:has-text("次の問題")')).toBeVisible();
  });

  test('不正解の場合も適切に表示されること', async ({ page }) => {
    await page.goto('/');
    
    // 間違った選択肢を選択
    await page.locator('label:has-text("git start")').click();
    await page.locator('button:has-text("回答する")').click();
    
    // 不正解メッセージが表示されること
    await expect(page.locator('text=不正解')).toBeVisible();
    await expect(page.locator('text=git initコマンドでローカルリポジトリを初期化します。')).toBeVisible();
  });

  test('簡単なクイズフローをテスト', async ({ page }) => {
    await page.goto('/');
    
    // 3問だけ進める（テスト時間短縮のため）
    for (let i = 1; i <= 3; i++) {
      // 進行状況を確認
      await expect(page.locator(`text=問題 ${i} / 10`)).toBeVisible();
      
      // 最初の選択肢を選択
      await page.locator('[type="radio"]').first().click();
      
      // 回答する
      await page.locator('button:has-text("回答する")').click();
      
      // 結果が表示されるまで待つ
      await expect(page.locator('.MuiAlert-root')).toBeVisible();
      
      if (i < 3) {
        // 次の問題へ
        await page.locator('button:has-text("次の問題")').click();
      }
    }
  });

  test('リセット機能が動作すること', async ({ page }) => {
    await page.goto('/');
    
    // 問題を進める
    await page.locator('[type="radio"]').first().click();
    await page.locator('button:has-text("回答する")').click();
    await page.locator('button:has-text("次の問題")').click();
    
    // 2問目に到達していることを確認
    await expect(page.locator('text=問題 2 / 10')).toBeVisible();
    
    // リセットボタンをクリック
    await page.locator('button:has-text("リセット")').click();
    
    // 最初の問題に戻ることを確認
    await expect(page.locator('text=問題 1 / 10')).toBeVisible();
    await expect(page.locator('h5')).toContainText('Gitでローカルリポジトリを初期化するコマンドは？');
  });

  test('プログレスバーが正しく更新されること', async ({ page }) => {
    await page.goto('/');
    
    // 最初の進行状況を確認（10%）
    const progressBar = page.locator('[role="progressbar"]');
    await expect(progressBar).toHaveAttribute('aria-valuenow', '10');
    
    // 2問目に進む
    await page.locator('[type="radio"]').first().click();
    await page.locator('button:has-text("回答する")').click();
    await page.locator('button:has-text("次の問題")').click();
    
    // 進行状況が更新されることを確認（20%）
    await expect(progressBar).toHaveAttribute('aria-valuenow', '20');
  });

  test('キーボードナビゲーション（基本）', async ({ page }) => {
    await page.goto('/');
    
    // ラジオボタンにフォーカスして選択
    await page.locator('[type="radio"]').first().focus();
    await page.keyboard.press('Space');
    
    // 選択されることを確認
    await expect(page.locator('[type="radio"]').first()).toBeChecked();
    
    // 回答ボタンにフォーカスして実行
    await page.locator('button:has-text("回答する")').focus();
    await page.keyboard.press('Enter');
    
    // 結果が表示されることを確認
    await expect(page.locator('.MuiAlert-root')).toBeVisible();
  });

  test('レスポンシブデザインが機能すること', async ({ page }) => {
    // モバイルビューポートでテスト
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // ページが正しく表示されること
    await expect(page.locator('h4').first()).toHaveText('Gitクイズ');
    await expect(page.locator('text=問題 1 / 10')).toBeVisible();
    
    // 選択肢が適切に表示されること
    await expect(page.locator('label:has-text("git init")')).toBeVisible();
    await expect(page.locator('label:has-text("git start")')).toBeVisible();
  });

  test('エラー状態の確認', async ({ page }) => {
    await page.goto('/');
    
    // 選択肢を選ばずに回答ボタンの状態を確認
    const submitButton = page.locator('button:has-text("回答する")');
    await expect(submitButton).toBeDisabled();
    
    // 選択肢を選択すると有効になることを確認
    await page.locator('[type="radio"]').first().click();
    await expect(submitButton).toBeEnabled();
  });
});