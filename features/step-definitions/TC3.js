const {Given, Then, When, Before, After} = require('@cucumber/cucumber')
const webdriver = require('selenium-webdriver');
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

var chrome = require('chromedriver');
const firefox = require('geckodriver');

let driver;

Before(function () {});

Given('visite a tela de login', {timeout: 15 * 1000}, function() {

    driver =  new Builder()
    .forBrowser('chrome')
    .build();    

    driver.get("https://ultima.school/");
    driver.manage().window().setRect({ width: 1364, height: 718 });
       
});

When('preencho email e senha', {timeout: 15 * 1000}, function () {

  driver.findElement(By.linkText("Log In")).click();
  driver.findElement(By.id("user_label")).sendKeys("JulianaMenezes");
  driver.findElement(By.id("user_pass")).sendKeys("ju556955");
  driver.findElement(By.id("loginform")).click();
        
});

Then('executar ação', {timeout: 15 * 1000}, function () {

  driver.findElement(By.name("wp-submit")).click();
  assert(driver.findElement(By.className("user-name")).getText() != "Juliana de Menezes");
  driver.close();
  driver.quit();    
    
});
