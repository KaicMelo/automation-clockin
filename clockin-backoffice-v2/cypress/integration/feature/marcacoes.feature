#language: pt
Funcionalidade: Validar a aba marcacoes
    Eu, como usuário, testar todas as funcionalidade das marcacoes no BO.

    Cenario: Validar marcacao de funcionario do mes passado no Backoffice
        Quando acesso o backoffice
        E realizo login
        E acesso a area de marcacoes
        E seleciono o filtro mes passado
        Entao clico no nome do funcionario e visualizo a tela de detalhes

    Cenario: Validar marcacao de funcionario da semana passada no Backoffice
        Quando acesso o backoffice
        E realizo login
        E acesso a area de marcacoes
        E seleciono o filtro semana passada
        Entao clico no nome do funcionario e visualizo a tela de detalhes    