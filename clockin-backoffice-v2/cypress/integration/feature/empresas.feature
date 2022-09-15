#language: pt
Funcionalidade: Validar a aba empresas
    Eu, como usuário, testar todas as funcionalidade das empresas no BO.

    Cenario: Cadastrar nova empresa no Backoffice
        Quando acesso o backoffice
        E faço login e acesso as empresas
        E cadastro nova empresa com todos os campos preenchidos corretamente
        Então devo visualizar a empresa cadastrada na lista de empresas
        