/// <reference types="Cypress" />
import { Given } from "cypress-cucumber-preprocessor/steps";
import { Generica } from "../page-objects/generic-po/generic-page.po";

const generic = new Generica();

Given("acesso o backoffice", () => {
  generic.acessarBackoffice();
});

Given("realizo login", () => {
  generic.realizarLogin();
});
