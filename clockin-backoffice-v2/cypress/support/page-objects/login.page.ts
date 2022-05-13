/// <reference types="Cypress" />

import { LoginElements } from "../elements/login-elements";
import { UtilsSelectors } from "./generic-po/selectors/utils.selectors";

const url: any = Cypress.config("baseUrl");

class LoginPage {
  acessarSite() {
    cy.visit(url);
  }

  digitandoLogin(email:string, password:string) {
    cy.get(LoginElements.email).type(email);
    cy.get(LoginElements.password).type(password, { log: false });

    cy.get(LoginElements.botaoLogin).click();
  }
  digitandoEnvironment(environment:string) {
    cy.get(LoginElements.environment).type(environment);
  }
  digitandoOrganization(organization:string) {
    cy.get(LoginElements.resetOrganization).click();
    cy.get(LoginElements.organization).type(organization);
    cy.get(LoginElements.botaoLogin).click();
  }
  digitandoEmResetDeSenha(email:string) {
    cy.get(LoginElements.forgotPassword).click();
    cy.get(LoginElements.email).type(email);
    cy.get(LoginElements.botaoLogin).click();
  }
  digitandoEmResetDeSenhaSemSubmeter(email:string) {
    cy.get(LoginElements.forgotPassword).click();
    cy.get(LoginElements.email).type(email);
  }
  visualizarLoginInvalido() {
    cy.contains(LoginElements.gateError, "Incorrect login was used.").should(
      "be.visible"
    );
  }
  visualizarSenhaInvalida() {
    cy.contains(
      LoginElements.gateError,
      "Incorrect password was used"
    ).should("be.visible");
  }
  visualizarEnvironmentInvalido() {
    cy.contains(UtilsSelectors.li, "Environment not found").should(
      "be.visible"
    );
  }
  visualizarOrganizationInvalida() {
    cy.contains(
      UtilsSelectors.p,
      "Invalid organization, please try again."
    ).should("be.visible");
  }
  visualizarEmailInvalidoTenteNovamente() {
    cy.contains(
      UtilsSelectors.p,
      "Invalid email account, please try again."
    ).should("be.visible");
  }
  visualizarEmailInvalido() {
    cy.contains(UtilsSelectors.p, "Invalid Email").should("be.visible");
  }
  visualizarInstrucoesNoEmail() {
    cy.contains(
      UtilsSelectors.p,
      " An email with instructions to reset your password has been sent to "
    ).should("be.visible");
  }
}

export default LoginPage;
