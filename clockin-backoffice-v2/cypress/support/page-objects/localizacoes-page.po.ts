/// <reference types="Cypress" />

import { UtilsSelectors } from "./generic-po/selectors/utils.selectors";

export class Localizacoes {
  email = "#email";
  senha = "#password";
  botaoRealizarLogin = ".gate-btn";
  iconeMenu = "po-menu-item > .po-menu-item-link > .po-menu-item";
  tableContainer = ".po-table-main-container";
  tr = "tr";
  td = "td";
  botaoAdicionarLocalizacao = '[p-kind="primary"] > .po-button';
  botaoRemoverLocalizacao = ".po-page-list-actions";
  campoCodigo = ".po-lg-3 > .ng-valid > po-field-container > .po-field-container > .po-field-container-content > .po-input";
  campoDescricao = ".po-lg-5 > .ng-untouched > po-field-container > .po-field-container > .po-field-container-content > .po-input";
  selectFusoHorario = ".po-lg-4 > .ng-untouched > po-field-container > .po-field-container > .po-select-container > .po-select-button";
  selectFusoHorarioSaoPaulo = ":nth-child(199) > .po-select-item";
  campoEndereco = "#address-input-0 > po-field-container > .po-field-container > .po-field-container-content > .po-input";
  campoRaio = "#address-radius-0 > po-field-container > .po-field-container > .po-field-container-content > .po-input";
  botaoSalvarLocalizacao = ".po-button-modal-first-action > .po-button";
  modalAdicionarLocalizacao = ".po-modal-content";

  realizarLogin(email: string, senha: string): void {
    cy.get(this.email).type(email);
    cy.get(this.senha).type(senha, { log: false });
    cy.get(this.botaoRealizarLogin).click();
  }
  acessarLocalizacoes(): void {
    cy.get(UtilsSelectors.menu).click();
    cy.get(this.iconeMenu)
      .contains(" Localizações ")
      .click();
  }
  localizarLocalizacaoCadastradaEditar(): void {
    cy.get(this.tableContainer)
      .contains(this.tr, "Localizações teste Kaic Cypress")
      .then((row: any) => {
        const children = row[0].children;
        cy.get(children[5]).click();
      });
  }
  cadastrarLocalizacaoComTodosCamposPreenchidos(): void {
    cy.get(this.botaoAdicionarLocalizacao).click();
    cy.get(this.campoCodigo).type("9585870");
    cy.get(this.campoDescricao).type("Localizações teste Kaic Cypress");
    cy.get(this.selectFusoHorario).click();
    cy.get(this.selectFusoHorarioSaoPaulo).click();
    cy.get(this.campoEndereco)
      .type("R. Augusta")
      .wait(500);
    cy.contains("Brasil").click();
    cy.get(this.campoRaio).type("500");
    cy.get(this.botaoSalvarLocalizacao, { timeout: 30000 }).click();
    cy.get(this.modalAdicionarLocalizacao).should("not.exist");
  }
  editarLocalizacao() {
    cy.get(this.campoEndereco).clear();

    cy.get(this.campoEndereco)
      .type("Rua manguari")
      .wait(500);
    cy.contains("SP").click();
    cy.get(this.campoRaio).type("500");
    cy.get(this.botaoSalvarLocalizacao).click();
    cy.get(this.modalAdicionarLocalizacao, { timeout: 30000 }).should("not.exist");
  }

  removerLocalizacao() {
    cy.get(this.tableContainer)
      .contains(this.tr, "Localizações teste Kaic Cypress")
      .then((row: any) => {
        const children = row[0].children;
        cy.get(children[0]).click();

        cy.get(this.botaoRemoverLocalizacao).contains("Remover").click();
      });
  }

  visualizarLocalizacaoCadastrada() {
    cy.get(this.tableContainer)
      .contains(this.td, "Localizações teste Kaic Cypress")
      .should("be.visible");
  }
  visualizarLocalizacaoAtualizada() {
    cy.get(this.tableContainer)
      .contains(this.td, "Rua Manguari, Jardim Andarai")
      .should("be.visible");
  }
  naoDevoVisualizarLocalizacao() {
    cy.get(this.tableContainer)
      .contains(this.td, "Rua Manguari, Jardim Andarai", { timeout: 30000 })
      .should("not.exist");
  }
}
