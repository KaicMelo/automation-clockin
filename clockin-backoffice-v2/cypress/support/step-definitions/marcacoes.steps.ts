import { Marcacoes } from "../page-objects/marcacoes-page.po"
import { Given, When,Then, And } from "cypress-cucumber-preprocessor/steps";

const marcacoes = new Marcacoes();


And("acesso a area de marcacoes", function () {
    marcacoes.acessarMarcacoes();

  });
  And("valido o total de marcacoes", function () {
    marcacoes.validarTotaldeMarcacoes();

  });

  And("seleciono o filtro semana passada", function () {
    marcacoes.selecionoFiltroSemanaPassada();

  });

  And("seleciono o filtro mes passado", function () {
    marcacoes.selecionoFiltroMesPassado();

  });

  And("clico no nome do funcionario e visualizo a tela de detalhes", function () {
    marcacoes.clicoNoNomeDoFuncionario();

  });

 
  
  