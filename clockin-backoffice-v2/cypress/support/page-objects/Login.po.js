/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements;

import UtilsSelectors from '../page-objects/generic-po/selectors/utils.selectors'
const utilsSelectors = new UtilsSelectors;

const url = Cypress.config("baseUrl")

class LoginPage {
    acessarSite() {
        cy.visit(url)
    }

    digitandoLogin(email,password) {
        cy.get(loginElements.email()).type(email);
        cy.get(loginElements.password()).type(password, { log: false });

        cy.get(loginElements.botaoLogin()).click();
    }
    digitandoEnvironment(environment) {
        cy.get(loginElements.environment()).type(environment);
    }
    digitandoOrganization(organization) {
        cy.get(loginElements.resetOrganization()).click();
        cy.get(loginElements.organization()).type(organization);
        cy.get(loginElements.botaoLogin()).click();
    }
    digitandoEmResetDeSenha(email) {
        cy.get(loginElements.forgotPassword()).click();
        cy.get(loginElements.email()).type(email);
        cy.get(loginElements.botaoLogin()).click();
    }
    digitandoEmResetDeSenhaSemSubmeter(email) {
        cy.get(loginElements.forgotPassword()).click();
        cy.get(loginElements.email()).type(email);
    }
    visualizarLoginInvalido() {
        cy.contains(loginElements.gateError(), 'Incorrect login was used.').should('be.visible');
    }
    visualizarSenhaInvalida() {
        cy.contains(loginElements.gateError(), 'Incorrect password was used').should('be.visible');
    }
    visualizarEnvironmentInvalido() {
        cy.contains(utilsSelectors.li(), 'Environment not found').should('be.visible');
    }
    visualizarOrganizationInvalida() {
        cy.contains(utilsSelectors.p(), 'Invalid organization, please try again.').should('be.visible');
    }
    visualizarEmailInvalidoTenteNovamente() {
        cy.contains(utilsSelectors.p(), 'Invalid email account, please try again.').should('be.visible');
    }
    visualizarEmailInvalido() {
        cy.contains(utilsSelectors.p(), 'Invalid Email').should('be.visible');
    }
    visualizarInstrucoesNoEmail() {
        cy.contains(utilsSelectors.p(), ' An email with instructions to reset your password has been sent to ').should('be.visible');
    }
}

export default LoginPage;