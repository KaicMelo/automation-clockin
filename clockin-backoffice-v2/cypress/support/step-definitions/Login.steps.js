/* global Given, Then, When */

import LoginPage from '../page-objects/Login.po'
const loginPage = new LoginPage

const email = Cypress.env('email');
const emailFake = Cypress.env('emailFake');
const password = Cypress.env('password');

Given("acesso o site backoffice", () => {
    loginPage.acessarSite();
})

When("digito um email invalido", () => {
    loginPage.digitandoLogin(emailFake,password);
})
When("digito uma senha invalida", () => {
    loginPage.digitandoLogin(email,'123456789');
})
When("digito um environment incorreto", () => {
    loginPage.digitandoEnvironment('clockinBeta');
})
When("digito uma organization invalida", () => {
    loginPage.digitandoOrganization('clockinTeste');
})
When("clico em esqueci minha senha e digito email aleatorio", () => {
    loginPage.digitandoEmResetDeSenha(emailFake);
})
When("clico em esqueci minha senha e digito email invalido", () => {
    loginPage.digitandoEmResetDeSenhaSemSubmeter('clockin');
})
When("clico em esqueci minha senha e digito email valido", () => {
    loginPage.digitandoEmResetDeSenha(email);
})

Then("devo visualizar mensagem de login incorreto", () => {
    loginPage.visualizarLoginInvalido();
})
Then("devo visualizar mensagem de senha incorreta", () => {
    loginPage.visualizarSenhaInvalida();
})
Then("devo visualizar mensagem de environment nao encontrado", () => {
    loginPage.visualizarEnvironmentInvalido();
})
Then("devo visualizar mensagem de organization invalida", () => {
    loginPage.visualizarOrganizationInvalida();
})
Then("devo visualizar mensagem de email incorreta, tente novamente", () => {
    loginPage.visualizarEmailInvalidoTenteNovamente();
})
Then("devo visualizar mensagem de email invalido", () => {
    loginPage.visualizarEmailInvalido();
})
Then("devo visualizar mensagem de instrucoes no email", () => {
    loginPage.visualizarInstrucoesNoEmail();
})