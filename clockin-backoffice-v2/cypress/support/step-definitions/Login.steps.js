/* global Given, Then, When */

import LoginPage from '../page-objects/Login.po'
const loginPage = new LoginPage

const emailFake = Cypress.env('emailFake');
const password = Cypress.env('password');

Given("acesso o site backoffice", () => {
    loginPage.acessarSite();
})

When("digito um email invalido", () => {
    loginPage.digitandoLoginInvalido(emailFake,password);
})

Then("devo visualizar mensagem de login incorreto", () => {
    loginPage.visualizarLoginInvalido();
})