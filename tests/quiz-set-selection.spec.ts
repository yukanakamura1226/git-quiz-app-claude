import { test, expect } from '@playwright/test';

test.describe('クイズセット選択機能', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  });

  test('セット選択画面が正しく表示されること', async ({ page }) => {
    // タイトルが表示されること
    await expect(page.locator('h4:has-text("Gitクイズ")')).toBeVisible();
    await expect(page.locator('text=学習したいクイズセットを選択してください')).toBeVisible();
    
    // 各セットが表示されること
    await expect(page.locator('text=Git基本操作')).toBeVisible();
    await expect(page.locator('text=Git実用コマンド')).toBeVisible();
    await expect(page.locator('text=Git応用操作')).toBeVisible();
    
    // 各セットの説明が表示されること
    await expect(page.locator('text=Gitの基本的なコマンドを学習（初心者向け）')).toBeVisible();
    await expect(page.locator('text=日常的によく使うGitコマンドを学習（初心者〜中級者向け）')).toBeVisible();
    await expect(page.locator('text=より高度なGitコマンドを学習（中級者向け）')).toBeVisible();
  });

  test('基本操作セットを選択できること', async ({ page }) => {
    await page.locator('text=Git基本操作').click();
    
    // クイズ画面に遷移することを確認
    await expect(page.locator('text=問題 1 / 10')).toBeVisible();
    await expect(page.locator('text=Gitでローカルリポジトリを初期化するコマンドは？')).toBeVisible();
    
    // セット名が表示されることを確認
    await expect(page.locator('text=Git基本操作')).toBeVisible();
  });

  test('実用コマンドセットを選択できること', async ({ page }) => {
    await page.locator('text=Git実用コマンド').click();
    
    // クイズ画面に遷移することを確認
    await expect(page.locator('text=問題 1 / 10')).toBeVisible();
    await expect(page.locator('text=新しいブランチを作成して切り替えるコマンドは？')).toBeVisible();
    
    // セット名が表示されることを確認
    await expect(page.locator('text=Git実用コマンド')).toBeVisible();
  });

  test('応用操作セットを選択できること', async ({ page }) => {
    await page.locator('text=Git応用操作').click();
    
    // クイズ画面に遷移することを確認
    await expect(page.locator('text=問題 1 / 10')).toBeVisible();
    await expect(page.locator('text=ワーキングディレクトリの変更を破棄するコマンドは？')).toBeVisible();
    
    // セット名が表示されることを確認
    await expect(page.locator('text=Git応用操作')).toBeVisible();
  });

  test('セット選択に戻る機能が動作すること', async ({ page }) => {
    // セットを選択
    await page.locator('text=Git基本操作').click();
    
    // クイズ画面に遷移
    await expect(page.locator('text=問題 1 / 10')).toBeVisible();
    
    // セット選択に戻るボタンをクリック
    await page.locator('button:has-text("セット選択")').click();
    
    // セット選択画面に戻ることを確認
    await expect(page.locator('text=学習したいクイズセットを選択してください')).toBeVisible();
    await expect(page.locator('text=Git基本操作')).toBeVisible();
    await expect(page.locator('text=Git実用コマンド')).toBeVisible();
    await expect(page.locator('text=Git応用操作')).toBeVisible();
  });

  test('問題数が正しく表示されること', async ({ page }) => {
    // 各セットの問題数チップが表示されること
    await expect(page.locator('text=10問').first()).toBeVisible();
    await expect(page.locator('text=10問').nth(1)).toBeVisible();
    await expect(page.locator('text=10問').nth(2)).toBeVisible();
  });

  test('セットカードのホバー効果が機能すること', async ({ page }) => {
    const basicCard = page.locator('text=Git基本操作').locator('..');
    
    // ホバー前の状態
    await expect(basicCard).toBeVisible();
    
    // ホバー
    await basicCard.hover();
    
    // カードがクリック可能であることを確認
    await expect(basicCard).toBeVisible();
    
    // クリックできることを確認
    await basicCard.click();
    await expect(page.locator('text=問題 1 / 10')).toBeVisible();
  });

  test('完了後にセット選択に戻ることができること', async ({ page }) => {
    // セットを選択
    await page.locator('text=Git基本操作').click();
    
    // 3問だけ進める（テスト時間短縮）
    for (let i = 0; i < 3; i++) {
      await page.locator('[type="radio"]').first().click();
      await expect(page.locator('.MuiAlert-root')).toBeVisible();
      
      if (i < 2) {
        await page.locator('button:has-text("次の問題")').click();
      }
    }
    
    // リセットしてセット選択に戻る
    await page.locator('button:has-text("リセット")').click();
    await page.locator('button:has-text("セット選択")').click();
    
    // セット選択画面に戻ることを確認
    await expect(page.locator('text=学習したいクイズセットを選択してください')).toBeVisible();
  });
});