/// <reference types="Cypress" />

import { LocalizacoesSelectors } from './generic-po/selectors/localizacoes.selectors';
import { UtilsSelectors } from "./generic-po/selectors/utils.selectors";

export class Localizacoes {
  codigo: string = '';
  descricao: string = '';
  endereco_1: string = '';
  endereco_2: string = '';

  timeOut: number = 30000;
  
  carregarFixture(): void {
    cy.fixture('localizacoes').then(fixture => {
      this.codigo = fixture.codigo
      this.descricao = fixture.descricao
      this.endereco_1 = fixture.endereco_1
      this.endereco_2 = fixture.endereco_2
    });
  }
  acessarLocalizacoes(): void {
    cy.get(UtilsSelectors.menu).click();
    cy.get(LocalizacoesSelectors.iconeMenu)
      .contains(" Localizações ")
      .click();
  }
  localizarLocalizacaoCadastradaEditar(): void {
    cy.get(LocalizacoesSelectors.tableContainer)
      .contains(LocalizacoesSelectors.tr, this.descricao)
      .then((row: any) => {
        const children = row[0].children;
        cy.get(children[5],{ timeout: this.timeOut }).click();
      });
  }
  cadastrarLocalizacaoComTodosCamposPreenchidos(): void {
    cy.get(LocalizacoesSelectors.botaoAdicionarLocalizacao).click();
    cy.get(LocalizacoesSelectors.campoCodigo).type(this.codigo);
    cy.get(LocalizacoesSelectors.campoDescricao).type(this.descricao);
    cy.get(LocalizacoesSelectors.selectFusoHorario).click();
    cy.get(LocalizacoesSelectors.selectFusoHorarioSaoPaulo).click();
    cy.get(LocalizacoesSelectors.campoEndereco)
      .type(this.endereco_1)
      .wait(500);
    cy.contains("Brasil").click();
    cy.get(LocalizacoesSelectors.campoRaio).type("500");
    cy.get(LocalizacoesSelectors.botaoSalvarLocalizacao).click();
    cy.get(LocalizacoesSelectors.modalAdicionarLocalizacao,{ timeout: this.timeOut }).should("not.exist");
  }
  editarLocalizacao() {
    cy.get(LocalizacoesSelectors.campoEndereco).clear();

    cy.get(LocalizacoesSelectors.campoEndereco)
      .type(this.endereco_2)
      .wait(500);
    cy.contains("SP").click();
    cy.get(LocalizacoesSelectors.campoRaio).type("500");
    cy.get(LocalizacoesSelectors.botaoSalvarLocalizacao).click();
    cy.get(LocalizacoesSelectors.modalAdicionarLocalizacao, { timeout: this.timeOut }).should("not.exist");
  }

  removerLocalizacao() {
    cy.get(LocalizacoesSelectors.tableContainer)
      .contains(LocalizacoesSelectors.tr, this.descricao)
      .then((row: any) => {
        const children = row[0].children;
        cy.get(children[0]).click();

        cy.get(LocalizacoesSelectors.botaoRemoverLocalizacao).contains("Remover").click();
      });
  }
  pesquisarPorLocalizacao() {
    cy.get('.po-page-list-filter-wrapper > .po-field-container-content > .po-input').type(this.descricao);
    cy.get('.po-field-container-content > .po-field-icon-container-right > .po-icon').click();
    cy.get('.po-disclaimer-remove').click();
  }

  visualizarLocalizacaoCadastrada() {
    cy.get(LocalizacoesSelectors.tableContainer)
      .contains(LocalizacoesSelectors.td, this.descricao)
      .should("be.visible");
  }
  visualizarLocalizacaoAtualizada() {
    cy.get(LocalizacoesSelectors.tableContainer)
      .contains(LocalizacoesSelectors.td, "Rua Manguari, Jardim Andarai")
      .should("be.visible");
  }
  naoDevoVisualizarLocalizacao() {
    cy.get(LocalizacoesSelectors.tableContainer)
      .contains(LocalizacoesSelectors.td, "Rua Manguari, Jardim Andarai", { timeout: this.timeOut })
      .should("not.exist");
  }
}
