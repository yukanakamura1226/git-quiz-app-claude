import { test, expect } from '@playwright/test';

test.describe('Gitクイズアプリケーション', () => {
  test.beforeEach(async ({ page }) => {
    // ローカルストレージをクリアしてテストの独立性を保つ
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    
    // セット選択画面で基本操作セットを選択
    await page.locator('text=Git基本操作').click();
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
    // 正解の選択肢（git init）を選択
    await page.locator('label:has-text("git init")').click();
    
    // 正解メッセージが表示されること
    await expect(page.locator('text=正解！')).toBeVisible();
    await expect(page.locator('text=git initコマンドで')).toBeVisible();
    
    // 次の問題ボタンが表示されること
    await expect(page.locator('button:has-text("次の問題")')).toBeVisible();
  });

  test('不正解の場合も適切に表示されること', async ({ page }) => {
    // 間違った選択肢を選択
    await page.locator('label:has-text("git start")').click();
    
    // 不正解メッセージが表示されること
    await expect(page.locator('text=不正解')).toBeVisible();
    await expect(page.locator('text=git initコマンドで')).toBeVisible();
  });

  test('クイズを最後まで進めることができること', async ({ page }) => {
    await page.goto('/');
    
    // 全10問を進める
    for (let i = 1; i <= 10; i++) {
      // 進行状況を確認
      await expect(page.locator(`text=問題 ${i} / 10`)).toBeVisible();
      
      // 最初の選択肢を選択（即座に回答される）
      await page.locator('[type="radio"]').first().click();
      
      // 結果が表示されるまで待つ
      await expect(page.locator('.MuiAlert-root')).toBeVisible();
      
      if (i < 10) {
        // 次の問題へ
        await page.locator('button:has-text("次の問題")').click();
      } else {
        // 最後の問題では結果画面へ
        await page.locator('button:has-text("結果を見る")').click();
      }
    }
    
    // 最終結果画面が表示されること
    await expect(page.locator('text=クイズ完了！')).toBeVisible();
    await expect(page.locator('text=スコア:')).toBeVisible();
    await expect(page.locator('text=正答率:')).toBeVisible();
    await expect(page.locator('button:has-text("もう一度挑戦する")')).toBeVisible();
  });

  test('リセット機能が動作すること', async ({ page }) => {
    // 問題を進める
    await page.locator('[type="radio"]').first().click();
    await expect(page.locator('.MuiAlert-root')).toBeVisible();
    await page.locator('button:has-text("次の問題")').click();
    
    // 2問目に到達していることを確認
    await expect(page.locator('text=問題 2 / 10')).toBeVisible();
    
    // リセットボタンをクリック
    await page.locator('button:has-text("リセット")').click();
    
    // 最初の問題に戻ることを確認
    await expect(page.locator('text=問題 1 / 10')).toBeVisible();
    await expect(page.locator('h5')).toContainText('Gitでローカルリポジトリを初期化するコマンドは？');
  });

  test('もう一度挑戦する機能が動作すること', async ({ page }) => {
    await page.goto('/');
    
    // クイズを完了まで進める（簡略化）
    for (let i = 1; i <= 10; i++) {
      await page.locator('[type="radio"]').first().click();
      await expect(page.locator('.MuiAlert-root')).toBeVisible();
      
      if (i < 10) {
        await page.locator('button:has-text("次の問題")').click();
      } else {
        await page.locator('button:has-text("結果を見る")').click();
      }
    }
    
    // 完了画面から再挑戦
    await page.locator('button:has-text("もう一度挑戦する")').click();
    
    // 最初の問題に戻ることを確認
    await expect(page.locator('text=問題 1 / 10')).toBeVisible();
    await expect(page.locator('h5')).toContainText('Gitでローカルリポジトリを初期化するコマンドは？');
  });

  test('ローカルストレージに状態が保存されること', async ({ page }) => {
    // 問題を進める
    await page.locator('[type="radio"]').first().click();
    await expect(page.locator('.MuiAlert-root')).toBeVisible();
    await page.locator('button:has-text("次の問題")').click();
    
    // ページをリロード
    await page.reload();
    
    // 状態が復元されていることを確認
    await expect(page.locator('text=問題 2 / 10')).toBeVisible();
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

  test('プログレスバーが正しく更新されること', async ({ page }) => {
    await page.goto('/');
    
    // 最初の進行状況を確認（10%）
    const progressBar = page.locator('[role="progressbar"]');
    await expect(progressBar).toHaveAttribute('aria-valuenow', '10');
    
    // 2問目に進む
    await page.locator('[type="radio"]').first().click();
    await expect(page.locator('.MuiAlert-root')).toBeVisible();
    await page.locator('button:has-text("次の問題")').click();
    
    // 進行状況が更新されることを確認（20%）
    await expect(progressBar).toHaveAttribute('aria-valuenow', '20');
  });

  test('説明文が適切に表示されること', async ({ page }) => {
    await page.goto('/');
    
    // 回答後に説明が表示されることを確認
    await page.locator('[type="radio"]').first().click();
    
    // 説明文が表示されること
    await expect(page.locator('text=git initコマンドで')).toBeVisible();
  });
});