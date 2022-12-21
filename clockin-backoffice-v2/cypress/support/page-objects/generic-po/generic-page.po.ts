/// <reference types="Cypress" />

import { UtilsSelectors } from "./selectors/utils.selectors";

export class Generic {
  url: any = Cypress.config("baseUrl");

  acessarBackoffice() {
    cy.visit(this.url);
  }

  realizarLogin() {
    cy.get(UtilsSelectors.email).type(Cypress.env("email"));
    cy.get(UtilsSelectors.senha).type(Cypress.env("password"), { log: false });
    cy.get(UtilsSelectors.botaoRealizarLogin).click();
  }
}
