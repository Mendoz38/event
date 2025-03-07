import { test, expect } from '@playwright/test'

test.describe('Responsive tests', () => {
  const viewports = [
    { width: 1920, height: 1080, name: 'desktop' },
    { width: 1366, height: 768, name: 'laptop' },
    { width: 768, height: 1024, name: 'tablet' },
    { width: 375, height: 667, name: 'mobile' },
  ]

  for (const viewport of viewports) {
    test(`Test sur ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height })
      await page.goto('http://localhost:5173/')

      if (viewport.name === 'mobile' || viewport.name === 'tablet') {
        await expect(page.locator('.category-name')).toBeVisible()
      } else {
        await expect(page.locator('.category-name')).toBeHidden()
      }
    })
  }
})
