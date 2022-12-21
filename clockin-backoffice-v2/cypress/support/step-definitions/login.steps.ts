import { Login } from "../page-objects/login-page.po";
import { When,Then } from "cypress-cucumber-preprocessor/steps";

const login = new Login();

When("digito um email invalido", function () {
  login.escreverLoginESenha(Cypress.env("emailFake"), Cypress.env("password"));
  login.cliqueNoLogin();
});
When("digito uma senha invalida", function () {
  login.escreverLoginESenha(Cypress.env("email"), '123456789');
  login.cliqueNoLogin();
});
When("digito um ambiente incorreto", function () {
  login.escreverAmbiente('clockinBeta');
});
When("digito uma organizacao invalida", function () {
  login.escreverOrganizacao('clockinBeta');
});
When("clico em esqueci minha senha e digito email aleatorio", function () {
  login.cliqueEsqeciSenha();
  login.escreverEmailEsqueciSenha(Cypress.env("emailFake"));
  login.cliqueNoLogin();
});
When("clico em esqueci minha senha e digito email invalido", function () {
  login.cliqueEsqeciSenha();
  login.escreverEmailEsqueciSenha("clockin");
});
When("clico em esqueci minha senha e digito email valido", function () {
  login.cliqueEsqeciSenha();
  login.escreverEmailEsqueciSenha(Cypress.env("email"));
  login.cliqueNoLogin();
});

Then("devo visualizar mensagem de login incorreto", function () {
  login.mensagemLoginIncorreto();
});
Then("devo visualizar mensagem de senha incorreta", function () {
  login.mensagemSenhaIncorreta();
});
Then("devo visualizar mensagem de ambiente nao encontrado", function () {
  login.mensagemAmbienteIncorreto();
});
Then("devo visualizar mensagem de organizacao invalida", function () {
  login.mensagemOrganizacaoInvalida();
});
Then("devo visualizar mensagem de email incorreta, tente novamente", function () {
  login.mensagemEmailIncorreto();
});
Then("devo visualizar mensagem de email invalido", function () {
  login.mensagemEmailInvalido();
});
Then("devo visualizar mensagem de instrucoes no email", function () {
  login.mensagemInstrucoesPeloEmail();
});