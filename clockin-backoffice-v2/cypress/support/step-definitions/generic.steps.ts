/// <reference types="Cypress" />
import { Given } from "cypress-cucumber-preprocessor/steps";
import { Generic } from "../page-objects/generic-po/generic-page.po";

const generic = new Generic();

Given("acesso o backoffice", () => {
  generic.acessarBackoffice();
});

Given("realizo login", () => {
  generic.realizarLogin();
});
