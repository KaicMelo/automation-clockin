#language: pt
Funcionalidade: Realizar validações em Localizações
    Eu, como usuário, quero testar todas as funcionalidade das localizações no Backoffice.

    Cenario: Login Backoffice
        Quando acesso o backoffice
        E relizo login com credencias validas
        Então devo visualizar meu avatar

    Cenario: Cadastrar nova localização
        Quando acesso a area de localizacoes
        E acesso a area de localizacoes
        E cadastro nova localizacao com todos os campos preenchidos corretamente 
        Então devo visualizar a localizacao cadastrada na lista de localizacoes

    Cenario: Editar localização
        Quando acesso a area de localizacoes
        E localizo minha localização cadastrada, clico em editar
        E edito minha localização
        Então devo visualizar a localizacao atualizada na lista de localizacoes

    Cenario: Excluir localização
        Quando acesso a area de localizacoes
        E seleciono minha localização cadastrada, clico em remover
        Então não devo visualizar a localizacao na lista de localizacoes