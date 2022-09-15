import { Empresas } from './../page-objects/empresas-page.po';
import { When,Then } from "cypress-cucumber-preprocessor/steps";

const empresas = new Empresas();

When("faço login e acesso as empresas", function () {
  empresas.realizarLogin(Cypress.env("email"),Cypress.env("password"))
});
When("cadastro nova empresa com todos os campos preenchidos corretamente", function () {

});

Then("devo visualizar a empresa cadastrada na lista de empresas", function () {
});