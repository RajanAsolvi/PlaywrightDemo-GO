import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home'
import { LoginPage } from '../pages/login'
import { testData } from '../utils/excelUtils'
import { appVar } from '../appVariables/appVariables'
import { randomNo } from '../utils/randomNo'


test.beforeEach(async ({ page }) => 
{
    const Home = new HomePage (page)
    await Home.gotoSignInPage()
      
  });


test('TC_001_ECommerce_Regression_Valid_LogOut', async ({ page }) => {

    test.setTimeout(20000);
    const Login = new LoginPage (page)

    const UserName =  testData('LogOut','TC_001_ECommerce_Regression_Valid_LogOut','UserName')
    const Password =  testData('LogOut','TC_001_ECommerce_Regression_Valid_LogOut','Password')
    


    console.log("************Running the LogOutModuleTestScenarios*************");
    console.log("************Running the Successful login Out Test case & redirected to Login Page*************");
    await Login.login(UserName,Password) 
    await Login.successLoginCheck()
    await Login.logOut()
    console.log("The User "+ UserName +" is logged in & logged out Successfully");
      
});





