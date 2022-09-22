/// <reference types="Cypress" />
import { Given,Then } from 'cypress-cucumber-preprocessor/steps';

const url: any = Cypress.config("baseUrl");

Given('acesso o backoffice', function () {
  cy.visit(url);
});

Then('devo visualizar meu avatar', function() {
  cy.get("po-avatar").should("be.visible");
});