/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão que acessa a página de login do site
    digitandoLoginInvalido(emailFake,password) {
        cy.get(loginElements.email()).type(emailFake);
        cy.get(loginElements.password()).type(password, { log: false });

        cy.get(loginElements.botaoLogin()).click()
    }

    // Verifica se o botão tem o texto "Esqueceu sua senha?"
    visualizarLoginInvalido() {
        cy.contains(loginElements.gateError(), 'Incorrect login was used.').should('be.visible');
    }
}

export default LoginPage;