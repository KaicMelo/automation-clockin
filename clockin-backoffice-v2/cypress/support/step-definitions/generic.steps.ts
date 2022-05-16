/// <reference types="Cypress" />
import { Given } from 'cypress-cucumber-preprocessor/steps';

const url: any = Cypress.config("baseUrl");

Given('acesso o backoffice', function () {
  cy.visit(url);
});