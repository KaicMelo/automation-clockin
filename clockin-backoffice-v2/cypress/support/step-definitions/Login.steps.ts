/* global Given, Then, When */

import LoginPage from '../page-objects/Login.po'
const loginPage = new LoginPage

Given("acesso o site CWI", () => {
    loginPage.acessarSite();
})

When("acesso a pagina de login", () => {
    loginPage.clicarBotaoPaginaLogin();
})

Then("devo visualizar botao de recuperar senha esquecida", () => {
    loginPage.visualizarBotaoRecuperarSenha();
})