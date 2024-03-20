// This Page contains the Objects,it properties & the methods related to Shopping Cart Page

import { appVar } from '../appVariables/appVariables'
import { test,expect } from '@playwright/test';

exports.ShoppingCartPage = class ShoppingCartPage
{
    constructor(page)
    {
    this.page = page
    this.logIn_link = page.locator('//a[text()="Log in"]')
    this.searchBox = page.locator('//input[@placeholder="Search store"]')
    this.searchBtn = page.locator('//button[@type="submit"]')
    this.searchBookName = page.locator('//div[@data-productid="39"]/div[@class="details"]/h2/a')
    this.searchItemHeader = page.locator('//div[@class="product-name"]/h1')
    this.addToCart_btn = page.locator('//div[@class="add-to-cart"]/div/button[@type="button" and text()="Add to cart"]')
    this.addToCart_successMsg = page.locator('//div[@class="bar-notification success"]/p')
    this.shoppingCart_icon = page.locator('//span[text()="Shopping cart"]')
    this.new_table = page.locator('//table[@class="cart"]')
    this.shoppingCartHeader = page.locator('//div[@class="page shopping-cart-page"]/div/h1')
    }

    
        

    async shoppingCart(Sku,Product,Price,Quantity,Total)
    {
        await test.step("Verify the user is able to view the shopping cart & verify the item in shopping cart", async()=>
            {
                //div[@class="product-name"]/h1
                await this.page.waitForLoadState("domcontentloaded");
                await this.searchItemHeader.waitFor({ state: 'visible' })
                await this.shoppingCart_icon.click()
                await this.shoppingTableVerify(Sku,Product,Price,Quantity,Total)
                await this.page.waitForLoadState("domcontentloaded");
                await this.shoppingCartHeader.waitFor({ state: 'visible' })
            })
    }

    async shoppingTableVerify(Sku,Product,Price,Quantity,Total)
    {
        const table = this.new_table            
        const headers = table.locator("thead");
        const rows = table.locator("tbody tr");
        const cols = rows.first().locator("td")

    for (let i = 0; i < await rows.count(); i++) 
    {
        const row = rows.nth(i);
        const tds = row.locator("td");
         for (let j = 0; j < await cols.count(); j++) 
         {

          
            if (await tds.nth(j).textContent() == Product) 
            {
                
                await this.page.waitForTimeout(2000);
                await expect(tds.nth(0),'Verify the SKU in the table').toContainText(Sku);
                await expect(tds.nth(2),'Verify the Product in the table').toContainText(Product);
                await expect(tds.nth(3),'Verify the Price in the table').toContainText(Price);
                await expect(tds.nth(5),'Verify the Total in the table').toContainText(Total);
                await this.page.waitForTimeout(2000);
                let i = await rows.count();
                break;                
                
            }
            
            
         }

    }
  }
    
}