import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home'
import { LoginPage } from '../pages/login'
import { SearchResultsPage } from '../pages/searchResults'
import { ShoppingCartPage } from '../pages/shoppingCart'
import { testData } from '../utils/excelUtils'
import { appVar } from '../appVariables/appVariables'
import { randomNo } from '../utils/randomNo'


test.beforeEach(async ({ page }) => 
{
    const Home = new HomePage (page)
    await Home.gotoSignInPage()
    //await Home.searchBox()
      
  });


test('TC_001_ECommerce_Regression_ShoppingCart', async ({ page }) => {

    test.setTimeout(30000);
    const Login = new LoginPage (page)
    const Home = new HomePage (page)
    const SearchResults = new SearchResultsPage (page)
    const ShoppingCart = new ShoppingCartPage (page)

    const UserName =  testData('Shopping','TC_001_ECommerce_Regression_Shopping','UserName')
    const Password =  testData('Shopping','TC_001_ECommerce_Regression_Shopping','Password')
    const SearchItem =  testData('Shopping','TC_001_ECommerce_Regression_Shopping','SearchItem')
    const Sku =  testData('Shopping','TC_001_ECommerce_Regression_Shopping','Sku')
    const Product =  testData('Shopping','TC_001_ECommerce_Regression_Shopping','Product')
    const Price =  testData('Shopping','TC_001_ECommerce_Regression_Shopping','Price')
    const Quantity =  testData('Shopping','TC_001_ECommerce_Regression_Shopping','Quantity')
    const Total =  testData('Shopping','TC_001_ECommerce_Regression_Shopping','Total')
    


    console.log("************Running the ShoppingModuleModuleTestScenarios*************");
    console.log("************Running the Add item to cart & check OutTest case*************");
    await Login.login(UserName,Password) 
    console.log("The User "+ UserName +" is loggedin Successfully");
    //console.log('The global SupplierName created is ' + globalSupplierName);
    await Home.search(SearchItem)
    await SearchResults.searchResultsDisplay(SearchItem)
    console.log("The Search Item " + SearchItem +"is searched Successfully");
    await ShoppingCart.shoppingCart(Sku,Product,Price,Quantity,Total)
    console.log("The User is able to add the shopping cart & verify the item present");
    await Login.logOut()
    console.log("The User "+ UserName +" is logged in & logged out Successfully");
    
      
});





