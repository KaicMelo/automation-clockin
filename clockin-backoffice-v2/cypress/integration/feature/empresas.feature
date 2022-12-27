#language: pt
Funcionalidade: Validar a aba empresas
    Eu, como usuário, testar todas as funcionalidade das empresas no BO.

    Cenario: Cadastrar nova empresa no Backoffice
        Quando acesso o backoffice
        E realizo login
        E acesso a area de empresas
        E cadastro nova empresa com todos os campos preenchidos corretamente
        E pesquiso a empresa cadastrada
        Então devo visualizar a empresa cadastrada na lista de empresas
        
    Cenario: Excluir empresa
        Quando acesso a area de empresas
        E pesquiso a empresa cadastrada
        E seleciono minha empresa cadastrada, clico em remover
        E pesquiso a empresa cadastrada
        Então não devo visualizar a empresa na lista de empresas