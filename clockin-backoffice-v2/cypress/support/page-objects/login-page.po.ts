/// <reference types="Cypress" />

import { UtilsSelectors } from './generic-po/selectors/utils.selectors';

export class Login {

  email = "#email";
  senha = "#password";
  botaoRealizarLogin = 'button[type="submit"]';
  obterErro = ".gate-error";
  esqueciSenha = ".gate-nav";
  loginToCarol = ".gate-btn";
  ErroNoResetarSenha = ".c-danger";
  ambiente = "#tenant";
  organizacao = "#organization";
  excluirOrganizacao = ":nth-child(1) > .wrap--w-full > .side-content--right > .cw-btn-subtle";

  escreverLoginESenha(email: string, senha: string): void {
      cy.get(this.email).type(email);
      cy.get(this.senha).type(senha,{ log: false });  
  }

  cliqueNoLogin(): void {
    cy.get(this.botaoRealizarLogin).click();
  }
  cliqueEsqeciSenha(): void {
    cy.get(this.esqueciSenha).click();
  }

  escreverAmbiente(ambiente: string): void {
    cy.get(this.ambiente).clear();
    cy.get(this.ambiente).type(ambiente);
  }
  escreverOrganizacao(organizacao: string): void {
    cy.get(this.excluirOrganizacao).click(); 
    cy.get(this.organizacao).type(organizacao);
    cy.get(this.botaoRealizarLogin).click();
  }
  escreverEmailEsqueciSenha(email: string): void {
    cy.get(this.email).type(email);
  }

  mensagemLoginIncorreto(){
    cy.contains(this.obterErro, "Incorrect login was used.").should("be.visible");
  }
  mensagemSenhaIncorreta(){
    cy.contains(this.obterErro, "Incorrect password was used").should("be.visible");
  }
  mensagemAmbienteIncorreto(){
    cy.contains(UtilsSelectors.li, "Tenant not found").should("be.visible");
  }
  mensagemOrganizacaoInvalida(){
    cy.contains(this.obterErro, "Invalid organization, please try again.").should("be.visible");
  }
  mensagemEmailIncorreto(){
    cy.wait(1000);
    cy.contains(this.obterErro, "Invalid email account, please try again.").should("be.visible");
  }
  mensagemEmailInvalido(){
    cy.contains(this.ErroNoResetarSenha, "Invalid Email").should("be.visible");
  }
  mensagemInstrucoesPeloEmail(){
    cy.contains(UtilsSelectors.p, " An email with instructions to reset your password has been sent to ").should("be.visible");
  }
}