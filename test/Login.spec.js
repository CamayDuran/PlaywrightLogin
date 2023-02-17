const { test, expect } = require('@playwright/test');

test('login positive scenario', async ({ page }) => { //Login with the correct user name and password
    
    await page.goto('https://demoqa.com/login'); //go to website
    await page.getByPlaceholder('UserName').type('camay@gmail.com'); //Write the user name in the UserName field
    await page.getByPlaceholder('Password').type('Camay123*'); //Write the password in the Password field
    await page.getByRole('button', { name: 'Login' }).click(); //Click the login button
    await page.locator('div').filter({ hasText: 'Profile' }).first().elementHandle(); //verify that you went to the profile page
 });

 test('login wrong password', async ({ page }) => { //Login with wrong password
    
    await page.goto('https://demoqa.com/login');
    await page.getByPlaceholder('UserName').type('camay@gmail.com');
    await page.getByPlaceholder('Password').type('123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByText('Invalid username or password!').elementHandle(); //Verify that the correct error message is coming
 });

 test('login wrong UserName', async ({ page }) => { //Login with wrong password
    
    await page.goto('https://demoqa.com/login');
    await page.getByPlaceholder('UserName').type('yanlis@gmail.com');
    await page.getByPlaceholder('Password').type('Camay123*');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByText('Invalid username or password!').elementHandle(); //Verify that the correct error message is coming
 });