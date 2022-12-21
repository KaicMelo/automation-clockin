import { Localizacoes } from './../page-objects/localizacoes-page.po';
import { Then,And } from "cypress-cucumber-preprocessor/steps";

const localizacoes = new Localizacoes();

before( () => {
  localizacoes.carregarFixture();
});

And("acesso a area de localizacoes", function () {
  localizacoes.acessarLocalizacoes();
});
And("cadastro nova localizacao com todos os campos preenchidos corretamente", function () {
  localizacoes.cadastrarLocalizacaoComTodosCamposPreenchidos();
});
And("localizo minha localização cadastrada, clico em editar", function () {
  localizacoes.localizarLocalizacaoCadastradaEditar(); 
});
And("edito minha localização", function () {
  localizacoes.editarLocalizacao(); 
});
And("seleciono minha localização cadastrada, clico em remover", function () {
  localizacoes.removerLocalizacao(); 
});
And("pesquiso a localização cadastrada", function () {
  localizacoes.pesquisarPorLocalizacao(); 
});

Then("devo visualizar a localizacao cadastrada na lista de localizacoes", function () {
  localizacoes.visualizarLocalizacaoCadastrada();
});
Then("devo visualizar a localizacao atualizada na lista de localizacoes", function () {
  localizacoes.visualizarLocalizacaoAtualizada();
});
Then("não devo visualizar a localizacao na lista de localizacoes", function () {
  localizacoes.naoDevoVisualizarLocalizacao();
});