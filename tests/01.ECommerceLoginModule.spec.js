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


test('TC_001_ECommerce_Regression_Valid_Login', async ({ page },testInfo) => {

    

    test.setTimeout(10000);
    const Login = new LoginPage (page)

    const UserName =  testData('Login','TC_001_ECommerce_Regression_Valid_Login','UserName')
    const Password =  testData('Login','TC_001_ECommerce_Regression_Valid_Login','Password')
    


    console.log("************Running the LoginModuleTestScenarios*************");
    console.log("************Running the Successful login Test case*************");
    
      await Login.login(UserName,Password) 
      await Login.successLoginCheck()
      console.log("The User "+ UserName + " is logged in Successfully");
 
});


test('TC_002_ECommerce_Regression_InValid_UserLogin', async ({ page }) => {

  test.setTimeout(20000);
  const Login = new LoginPage (page)


  const UserName =  testData('Login','TC_002_ECommerce_Regression_InValid_UserLogin','UserName')
  const Password =  testData('Login','TC_002_ECommerce_Regression_InValid_UserLogin','Password')
  
  console.log("************Running the Unsuccessful login Test case*************");
  //await Login.login('InvalidUserName',UserName,Password) 
  await Login.login(UserName,Password) 
  await Login.errorMsg()
  console.log("The User "+ UserName +" is not logged in Successfully & thrown an error message");
    
});

test('TC_003_ECommerce_Regression_InValid_UserPwd', async ({ page }) => {

  test.setTimeout(30000);
  const Login = new LoginPage (page)


  const UserName =  testData('Login','TC_003_ECommerce_Regression_InValid_UserPwd','UserName')
  const Password =  testData('Login','TC_003_ECommerce_Regression_InValid_UserPwd','Password')
  
  console.log("************Running the Unsuccessful login Test case*************");
  //await Login.login('InvalidUserPwd',UserName,Password) 
  await Login.login(UserName,Password) 
  await Login.errorMsg()
  console.log("The User "+ UserName +" is not logged in Successfully & thrown an error message");
    
});



