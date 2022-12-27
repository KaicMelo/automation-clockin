import { Empresas } from './../page-objects/empresas-page.po';
import { When,Then, And } from "cypress-cucumber-preprocessor/steps";

const empresas = new Empresas();

before( () => {
  empresas.carregarFixture();
});

And("acesso a area de empresas", () => {
  empresas.acessarEmpresas();
})
And("cadastro nova empresa com todos os campos preenchidos corretamente", function () {
  empresas.cadastrarEmpresaComTodosCamposPreenchidos();
});
And("pesquiso a empresa cadastrada", function () {
  empresas.pesquisarPorEmpresa();
});

Then("devo visualizar a empresa cadastrada na lista de empresas", function () {
  empresas.visualizarEmpresaCadastrada();
});