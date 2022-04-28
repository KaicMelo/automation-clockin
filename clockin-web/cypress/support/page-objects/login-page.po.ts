/// <reference types="Cypress" />

export class Login {

  private btnIdent = '.btn-primary';
  private email = '#email'
  private password = '#password'

  // carol log in 
  writeFields(name: string, password: string): void {
      cy.get(this.email).type(name);
      cy.get(this.password).type(password);
  }

  //confirm log in
  clickOnLogin(): void {
    cy.get(this.btnIdent).click();
  }
}