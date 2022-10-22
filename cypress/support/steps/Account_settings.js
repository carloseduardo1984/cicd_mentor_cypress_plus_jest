/* global Given, Then, When */

import AccessPage from '../pageobjects/AccessPage'
const MyPage = new AccessPage
const url = Cypress.config("baseUrl")

Given("a simple user access home page", () => {
    MyPage.accessSite()
    
})

When("select the page setup for EN language", () => {
    
   // MyPage.select_language()

})

Then("the new languege is available", () => {
    //loginPage.visualizarBotaoCadastro();
})