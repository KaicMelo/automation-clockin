#language: pt
Funcionalidade: Localizações
    Eu, como usuário, quero testar todas as funcionalidade das localizações no Backoffice.

    Cenario: Cadastrar nova localização
        Quando acesso o backoffice
        E realizo login
        E acesso a area de localizacoes
        E cadastro nova localizacao com todos os campos preenchidos corretamente 
        Então devo visualizar a localizacao cadastrada na lista de localizacoes
    
    Cenario: Pesquisar localização
        Quando acesso a area de localizacoes
        E pesquiso a localização cadastrada
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