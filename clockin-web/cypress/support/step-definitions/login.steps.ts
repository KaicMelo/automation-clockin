import { Login } from '../page-objects/login-page.po'
import { Given } from 'cypress-cucumber-preprocessor/steps';

const login = new Login();

Given('estou logado com {string} e {string}', function (name: string, password: string) {
    login.writeFields(name, password);
    login.clickOnLogin();
    cy.wait('@postLogin')
  });