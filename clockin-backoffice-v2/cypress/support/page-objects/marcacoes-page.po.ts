/// <reference types="Cypress" />

import { SeletoresReutilizaveis } from './generic-po/selectors/utils.selectors';
import { SeletoresMarcacoes } from './generic-po/selectors/marcacoes.selectors';

export class Marcacoes {

    timeOut: number = 30000;

    acessarMarcacoes(): void {
        cy.get(SeletoresReutilizaveis.menu,{ timeout: this.timeOut }).should("exist");
    cy.get(SeletoresReutilizaveis.menu).click();
    cy.get(SeletoresReutilizaveis.iconeMenu).contains(" Marcações ").click();
    }

    validarTotaldeMarcacoes(): void{
        cy.get(':nth-child(1) > .po-tab-button-md > .po-tab-button-label', {timeout: this.timeOut}).should("exist");
        expect(cy.get(':nth-child(1) > .po-tab-button-md > .po-tab-button-label')).to.be.equal("Total de marcações");
    }

    selecionoFiltroSemanaPassada(): void {
        cy.get(SeletoresMarcacoes.filtroSemanaPassada,{ timeout: this.timeOut}).should("exist");
        cy.get(SeletoresMarcacoes.filtroSemanaPassada).click();
    }
    selecionoFiltroMesPassado(): void{
        cy.get(SeletoresMarcacoes.filtroMesPassado,{ timeout: this.timeOut}).should("exist");
        cy.get(SeletoresMarcacoes.filtroMesPassado).click();
    }
    clicoNoNomeDoFuncionario(): void{
        cy.get(SeletoresMarcacoes.marcacaoMaisRecenteDoFiltro, {timeout: this.timeOut}).should("exist");
        cy.get(SeletoresMarcacoes.marcacaoMaisRecenteDoFiltro).click();
    }
   

}