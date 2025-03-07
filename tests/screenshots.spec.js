import { test, expect } from '@playwright/test'

test.describe('Responsive Visual Regression', () => {
  const viewports = [
    { width: 1920, height: 1080, name: 'desktop' },
    { width: 1366, height: 768, name: 'laptop' },
    { width: 768, height: 1024, name: 'tablet' },
    { width: 375, height: 667, name: 'mobile' },
  ]

  for (const viewport of viewports) {
    test(`Test visuel sur ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height })
      await page.goto('http://localhost:5173/')

      // Capturer le screenshot en masquant l'élément avec la classe 'avatar'
      await expect(page).toHaveScreenshot(`screenshot-${viewport.name}.png`, {
        mask: [page.locator('.avatar')],
      })
    })
  }
})
