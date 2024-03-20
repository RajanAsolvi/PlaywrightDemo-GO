// This Page contains the Objects,it properties & the methods related to Home Page

import { appVar } from '../appVariables/appVariables'
import { test,expect } from '@playwright/test';

exports.HomePage = class HomePage
{
    constructor(page)
    {
    this.page = page
    this.logIn_link = page.locator('//a[text()="Log in"]')
    this.searchBox = page.locator('//input[@placeholder="Search store"]')
    this.searchBtn = page.locator('//button[@type="submit"]')
    this.welcome_msg = page.locator('//div[@class="page-title"]/h1')
    this.search_msg = page.locator('//div[@class="products-wrapper"]/div')
    this.searchBookName = page.locator('//div[@data-productid="39"]/div[@class="details"]/h2/a')
    this.addToCart_btn = page.locator('//div[@class="add-to-cart"]/div/button[@type="button" and text()="Add to cart"]')
    this.addToCart_successMsg = page.locator('//div[@class="bar-notification success"]/p')
    this.shoppingCart_icon = page.locator('//span[text()="Shopping cart"]')
    this.new_table = page.locator('//table[@class="cart"]')
    this.searchResultAvail = page.locator('//div[@data-productid="39"]/div[@class="details"]/h2/a')
    }

    async gotoSignInPage()
    {
        await test.step("Verify the user is able to hit the Ecomm Site successfully", async()=>
            {
                await this.page.goto(appVar.eCommProdUrl); 
                await this.logIn_link.click();
                await this.page.waitForLoadState("domcontentloaded");
                await this.welcome_msg.waitFor({ state: 'visible' })  
            })
        
    }

    async search(SearchItem)
    {
        await test.step("Verify the user is able to enter the search term & click the Search button", async()=>
            {
                await this.searchBox.clear()
                await this.searchBox.click()
                await this.searchBox.fill(SearchItem)
                await this.searchBtn.click()
                await this.page.waitForLoadState("domcontentloaded");
                await this.searchResultAvail.waitFor({ state: 'visible' }) 
            })
    }


    
}