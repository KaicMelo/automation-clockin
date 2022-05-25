/// <reference types="Cypress" />
import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('que eu estou acessando o sistema do Clock-in web', function () {
  cy.visit('https://mobile.carol.ai/totvsbrasil/apps/dev/carolclockinweb/3.31.2/index.html')
  cy.intercept('POST', '**/api/v1/oauth2/token').as('postLogin')
  cy.intercept('POST', '**/api/v2/queries/named/labelsList?indexType=MASTER&fields=mdmGoldenFieldAndValues&pageSize=9999').as('post1')
  cy.intercept('POST', '**/api/v2/queries/named/clockineventtype?pageSize=999').as('post2')
  cy.intercept('GET', '**/api/v1/tenantApps/clockinapp/settings?checkAllSpaces=true').as('get1')
  cy.intercept('GET', '**/api/v1/users/assignedTenantsForCurrentUser').as('get2')
  cy.intercept('GET', '**/api/v1/tenantApps?pageSize=999').as('get3')
  cy.intercept('GET', '**/api/v1/tenantApps/9daa2b0ea47b44a2b50de3865cfe2fb3/aiprocesses?entitySpace=WORKING&checkAllSpaces=true').as('get4')
  cy.intercept('GET', '**/api/v1/getSelectedUserPhotos').as('get5')
  cy.intercept('GET', '**/api/v1/getUserInfo').as('get6')
  cy.intercept('GET', '**/api/v1/users/current').as('get7')
  cy.intercept('POST', '**/api/v1/confirm').as('postConfirm')
  cy.intercept('POST', '**/api/v1/submit').as('postVerif')
  cy.intercept('POST', '**/api/v2/queries/named/employeePhotoRecord?pageSize=1').as('postPhotoRecord')
  cy.intercept('POST', '**/api/v1/recognize').as('postRecog')
});