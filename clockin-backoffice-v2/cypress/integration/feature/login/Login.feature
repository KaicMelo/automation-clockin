Feature: Login no Backoffice

    Scenario: Verifica login invalido
        Given acesso o site backoffice
        When digito um email invalido
        Then devo visualizar mensagem de login incorreto