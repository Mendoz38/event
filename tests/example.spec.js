// @ts-check
import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Evently App')
})

// test('Active color', async ({ page }) => {
//   await page.goto('http://localhost:5173/maps')

//   // Vérifier si l'élément est visible et actif
//   const isActive = await page.isVisible('a.router-link-active[aria-current="page"][href="/"]')

//   expect(isActive).toBeTruthy()
// })
