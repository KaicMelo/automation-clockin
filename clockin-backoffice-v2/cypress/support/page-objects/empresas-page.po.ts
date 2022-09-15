/// <reference types="Cypress" />

import { UtilsSelectors } from './generic-po/selectors/utils.selectors';

export class Empresas {

  email = "#email";
  senha = "#password";
  botao = ".gate-btn";
  menu = ".po-menu-mobile > .po-icon";
  empresas = ":nth-child(2) > po-menu-item > .po-menu-item-link > .po-menu-item";

  realizarLogin(email: string, senha: string): void {
      cy.get(this.email).type(email);
      cy.get(this.senha).type(senha,{ log: false });
      cy.get(this.botao).click();
      cy.get(this.menu).click();
      cy.get(this.empresas).click();
  }
}