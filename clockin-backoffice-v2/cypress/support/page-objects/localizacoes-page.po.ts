/// <reference types="Cypress" />

import { SeletoresLocalizacoes } from './generic-po/selectors/localizacoes.selectors';
import { SeletoresReutilizaveis } from "./generic-po/selectors/utils.selectors";

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
    cy.get(SeletoresReutilizaveis.menu,{ timeout: this.timeOut }).should("exist");
    cy.get(SeletoresReutilizaveis.menu).click();
    cy.get(SeletoresLocalizacoes.iconeMenu)
      .contains(" Localizações ")
      .click();
  }
  localizarLocalizacaoCadastradaEditar(): void {
    cy.get(SeletoresLocalizacoes.tableContainer)
      .contains(SeletoresLocalizacoes.tr, this.descricao)
      .then((row: any) => {
        const children = row[0].children;
        cy.get(SeletoresReutilizaveis.overlay,{ timeout: this.timeOut }).should("not.exist");
        cy.get(children[5],{ timeout: this.timeOut }).click();
      });
  }
  cadastrarLocalizacaoComTodosCamposPreenchidos(): void {
    cy.get(SeletoresLocalizacoes.botaoAdicionarLocalizacao).click();
    cy.get(SeletoresLocalizacoes.campoCodigo).type(this.codigo);
    cy.get(SeletoresLocalizacoes.campoDescricao).type(this.descricao);
    cy.get(SeletoresLocalizacoes.selectFusoHorario).click();
    cy.get(SeletoresLocalizacoes.selectFusoHorarioSaoPaulo).click();
    cy.get(SeletoresLocalizacoes.campoEndereco)
      .type(this.endereco_1)
      .wait(500);
    cy.contains("Brasil").click();
    cy.get(SeletoresLocalizacoes.campoRaio).type("500");
    cy.get(SeletoresLocalizacoes.botaoSalvarLocalizacao).click();
    cy.get(SeletoresLocalizacoes.modalAdicionarLocalizacao,{ timeout: this.timeOut }).should("not.exist");
  }
  editarLocalizacao() {
    cy.get(SeletoresLocalizacoes.campoEndereco).clear();

    cy.get(SeletoresLocalizacoes.campoEndereco)
      .type(this.endereco_2)
      .wait(500);
    cy.contains("SP").click();
    cy.get(SeletoresLocalizacoes.campoRaio).type("500");
    cy.get(SeletoresLocalizacoes.botaoSalvarLocalizacao).click();
    cy.get(SeletoresLocalizacoes.modalAdicionarLocalizacao, { timeout: this.timeOut }).should("not.exist");
  }

  removerLocalizacao() {
    cy.get(SeletoresLocalizacoes.tableContainer)
      .contains(SeletoresLocalizacoes.tr, this.descricao)
      .then((row: any) => {
        const children = row[0].children;
        cy.get(children[0]).click();

        cy.get(SeletoresLocalizacoes.botaoRemoverLocalizacao).contains("Remover").click();
      });
  }
  pesquisarPorLocalizacao() {
    cy.get('.po-page-list-filter-wrapper > .po-field-container-content > .po-input').type(this.descricao);
    cy.get('.po-field-container-content > .po-field-icon-container-right > .po-icon').click();
    cy.get('.po-disclaimer-remove').click();
  }

  visualizarLocalizacaoCadastrada() {
    cy.get(SeletoresLocalizacoes.tableContainer)
      .contains(SeletoresLocalizacoes.td, this.descricao)
      .should("be.visible");
  }
  visualizarLocalizacaoAtualizada() {
    cy.get(SeletoresLocalizacoes.tableContainer)
      .contains(SeletoresLocalizacoes.td, "Rua Manguari, Jardim Andarai")
      .should("be.visible");
  }
  naoDevoVisualizarLocalizacao() {
    cy.get(SeletoresReutilizaveis.overlay,{ timeout: this.timeOut }).should("not.exist");
    cy.get(SeletoresLocalizacoes.tableContainer)
      .contains(SeletoresLocalizacoes.td, "Rua Manguari, Jardim Andarai", { timeout: this.timeOut })
      .should("not.exist");
  }
}
