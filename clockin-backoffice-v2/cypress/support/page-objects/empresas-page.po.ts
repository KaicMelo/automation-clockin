/// <reference types="Cypress" />

import { SeletoresEmpresas } from "./generic-po/selectors/empresas.selectors";
import { SeletoresReutilizaveis } from "./generic-po/selectors/utils.selectors";

export class Empresas {
  codigo: string = '';
  nome: string = '';
  cnpj: string = '';
  ceicno: string = '';
  endereco: string = '';

  timeOut: number = 30000;

  carregarFixture(): void {
    cy.fixture('empresas').then(fixture => {
      this.codigo = fixture.codigo
      this.nome = fixture.nome
      this.cnpj = fixture.cnpj
      this.ceicno = fixture.ceicno
      this.endereco = fixture.endereco
    });
  }

  acessarEmpresas() {
    cy.get(SeletoresReutilizaveis.menu, { timeout: this.timeOut }).should(
      "exist"
    );
    cy.get(SeletoresReutilizaveis.menu).click();
    cy.get(SeletoresReutilizaveis.iconeMenu).contains(" Empresas ").click();
  }
  cadastrarEmpresaComTodosCamposPreenchidos(): void {
    cy.get(SeletoresReutilizaveis.botaoAdicionar).click();
    cy.get(SeletoresEmpresas.codigo).type(this.codigo);
    cy.get(SeletoresEmpresas.nome).type(this.nome);
    cy.get(SeletoresEmpresas.cnpj).type(this.cnpj);
    cy.get(SeletoresEmpresas.ceicno).type(this.ceicno)
    cy.get(SeletoresEmpresas.endereco).type(this.endereco).wait(500);
    cy.contains("Brasil").click();
    cy.get(SeletoresReutilizaveis.botaoSalvar).click();
        cy.get(SeletoresReutilizaveis.modalAdicionar, {
      timeout: this.timeOut,
    }).should("not.exist");
  }

  pesquisarPorEmpresa(){
    cy.get(SeletoresReutilizaveis.caixaDeFiltro).type(this.nome);
    cy.get(SeletoresReutilizaveis.botaoCaixaDeFiltro).click();
    cy.get(SeletoresReutilizaveis.disclaimerRemover).click();
  }

  visualizarEmpresaCadastrada() {
    cy.get(SeletoresReutilizaveis.overlay,{ timeout: this.timeOut }).should("not.exist");
    cy.get(SeletoresReutilizaveis.tableContainer)
      .contains(SeletoresReutilizaveis.td, this.nome)
      .should("be.visible");
  }
}