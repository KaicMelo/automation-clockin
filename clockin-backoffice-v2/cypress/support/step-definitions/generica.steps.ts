/// <reference types="Cypress" />
import { Given } from "cypress-cucumber-preprocessor/steps";
import { Generica } from "../page-objects/generic-po/generica.po";

const generica = new Generica();

Given("acesso o backoffice", () => {
  generica.acessarBackoffice();
});

Given("realizo login", () => {
  generica.realizarLogin();
});
