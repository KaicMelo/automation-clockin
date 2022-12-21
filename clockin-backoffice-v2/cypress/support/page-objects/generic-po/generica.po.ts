/// <reference types="Cypress" />

import { SeletoresReutilizaveis } from "./selectors/utils.selectors";

export class Generica {
  url: any = Cypress.config("baseUrl");

  acessarBackoffice() {
    cy.visit(this.url);
  }

  realizarLogin() {
    cy.get(SeletoresReutilizaveis.email).type(Cypress.env("email"));
    cy.get(SeletoresReutilizaveis.senha).type(Cypress.env("password"), { log: false });
    cy.get(SeletoresReutilizaveis.botaoRealizarLogin).click();
  }
}
