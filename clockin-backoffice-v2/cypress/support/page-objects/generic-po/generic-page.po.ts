/// <reference types="Cypress" />

import { UtilsSelectors } from './selectors/utils.selectors';

export class Genereic {
  url: any = Cypress.config("baseUrl");

  acessarBackoffice() {
    cy.visit(this.url);
  }

  realizarLogin(email: string, senha: string): void {
    cy.get(UtilsSelectors.email).type(email);
    cy.get(UtilsSelectors.senha).type(senha, { log: false });
    cy.get(UtilsSelectors.botaoRealizarLogin).click();
  }
}
