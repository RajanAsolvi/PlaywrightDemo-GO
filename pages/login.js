// This Page contains the Objects,it properties & the methods related to Login Page
import { test,expect } from '@playwright/test';

exports.LoginPage = class LoginPage
{
    constructor(page)
    {
    this.page = page
    this.email_textbox = page.locator('//input[@id="Email"]')
    this.password_textbox = page.locator('//input[@id="Password"]')
    this.logIn_btn = page.locator('//button[text()="Log in"]')
    this.logOut_link = page.locator('//a[text()="Log out"]')
    this.logIn_link = page.locator('//a[text()="Log in"]')
    this.yourAccount_link = page.locator('//span[@class="your-account"]')
    this.myAccName_link = page.locator('//a[@class="ico-account"]')
    this.signOut_link = page.getByRole('link', { name: 'Sign out' })
    this.errorMsg_check = page.locator('//div[@class="message-error validation-summary-errors"]')
    }

    
 
  async login(username,password)
    {   
        await test.step("Enter the UserName,Password & Click the Log in button", async()=>
            {    
                await this.email_textbox.click()              
                await this.email_textbox.fill(username)
                await this.password_textbox.click()
                await this.password_textbox.fill(password)
                await this.logIn_btn.click()                               
                await this.page.waitForTimeout(2000);
                
            })  
    }


    async logOut()
            {
                await test.step("Click the LogOut button & verify its signed out successfully", async()=>{
                        await this.logOut_link.click()
                        await this.page.waitForTimeout(2000);
                        await expect(this.logIn_link,'Verify the User is Signed out Successfully').toContainText('Log in')
                        await this.page.waitForTimeout(2000);
                })
            }


    async successLoginCheck()
            {
                await test.step("Verify the user is signed in successfully", async()=>
                {
                                          
                    await this.page.waitForLoadState("domcontentloaded");
                    await this.myAccName_link.waitFor({ state: 'visible' })   
                    await expect(this.logOut_link,'Verify the User is Signed in Successfully').toContainText('Log out')
                       
                                       
                 })
           }

    async errorMsg()
          {
            await test.step("Verify the user is not logged in successfully", async()=>
            {
                    await expect(this.errorMsg_check,'Verify the User is not logged in & thrown error msg').toContainText('Login was unsuccessful')
            })
 
         }

        
    
  }
