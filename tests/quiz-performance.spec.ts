import { test, expect } from '@playwright/test';

test.describe('クイズアプリケーション - パフォーマンステスト', () => {
  test('ページの読み込み速度が適切であること', async ({ page }) => {
    const startTime = Date.now();
    
    await page.goto('/');
    
    // ページが完全に読み込まれるまで待つ
    await page.waitForLoadState('networkidle');
    
    const loadTime = Date.now() - startTime;
    
    // 3秒以内に読み込まれることを確認
    expect(loadTime).toBeLessThan(3000);
    
    // 主要な要素が表示されていることを確認
    await expect(page.locator('h4:has-text("Gitクイズ")')).toBeVisible();
    await expect(page.locator('text=学習したいクイズセットを選択してください')).toBeVisible();
  });

  test('ユーザーインタラクションのレスポンス時間', async ({ page }) => {
    await page.goto('/');
    
    // セット選択のレスポンス時間を測定
    const startTime = Date.now();
    
    await page.locator('text=Git基本操作').click();
    
    // クイズ画面への遷移を確認
    await expect(page.locator('text=問題 1 / 10')).toBeVisible();
    
    const responseTime = Date.now() - startTime;
    
    // 500ms以内にレスポンスすることを確認
    expect(responseTime).toBeLessThan(500);
  });

  test('連続操作でのパフォーマンス', async ({ page }) => {
    await page.goto('/');
    
    // セットを選択
    await page.locator('text=Git基本操作').click();
    
    const operationTimes: number[] = [];
    
    // 5問分の操作を行い、各操作時間を記録
    for (let i = 0; i < 5; i++) {
      const startTime = Date.now();
      
      // 選択肢を選択（即座に回答される）
      await page.locator('[type="radio"]').first().click();
      
      // 結果が表示されるまで待つ
      await expect(page.locator('.MuiAlert-root')).toBeVisible();
      
      const operationTime = Date.now() - startTime;
      operationTimes.push(operationTime);
      
      // 最後の問題でなければ次へ進む
      if (i < 4) {
        await page.locator('button:has-text("次の問題")').click();
      }
    }
    
    // 全ての操作が1秒以内に完了することを確認
    operationTimes.forEach((time, index) => {
      expect(time).toBeLessThan(1000);
    });
    
    // 平均操作時間が500ms以内であることを確認
    const averageTime = operationTimes.reduce((sum, time) => sum + time, 0) / operationTimes.length;
    expect(averageTime).toBeLessThan(500);
  });
});