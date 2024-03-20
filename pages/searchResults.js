// This Page contains the Objects,it properties & the methods related to Search Results Page

import { appVar } from '../appVariables/appVariables'
import { test,expect } from '@playwright/test';

exports.SearchResultsPage = class SearchResultsPage
{
    constructor(page)
    {
    this.page = page
    this.logIn_link = page.locator('//a[text()="Log in"]')
    this.searchBox = page.locator('//input[@placeholder="Search store"]')
    this.searchBtn = page.locator('//button[@type="submit"]')
    this.searchBookName = page.locator('//div[@data-productid="39"]/div[@class="details"]/h2/a')
    this.addToCart_btn = page.locator('//div[@class="add-to-cart"]/div/button[@type="button" and text()="Add to cart"]')
    this.addToCart_successMsg = page.locator('//div[@class="bar-notification success"]/p')
    this.shoppingCart_icon = page.locator('//span[text()="Shopping cart"]')
    this.new_table = page.locator('//table[@class="cart"]')
    }

    
        async searchResultsDisplay(SearchItem)
            {
                await test.step("Verify the user is able to enter the search term & click the Search button", async()=>
                    {
                        await this.page.keyboard.press("PageDown")
                        await this.page.waitForTimeout(2000);
                        await expect(this.searchBookName,'Verify the book name is correct').toContainText(SearchItem)
                        await this.page.waitForTimeout(1000);
                        await this.searchBookName.click()  
                        await this.page.waitForTimeout(1000);
                        await this.addToCart_btn.click()
                        await expect(this.addToCart_successMsg,'Verify the book is added to the cart').toContainText('The product has been added to your')
                        //await this.page.pause()
                    })
    }



    
}