Feature: Login no Backoffice

    Scenario: Verifica login invalido
        Given acesso o site backoffice
        When digito um email invalido
        Then devo visualizar mensagem de login incorreto

    # Scenario: Verifica senha invalida
    #     Given acesso o site backoffice
    #     When digito uma senha invalida
    #     Then devo visualizar mensagem de senha incorreta

    # Scenario: Verifica Environment invalido
    #     Given acesso o site backoffice
    #     When digito um environment incorreto
    #     Then devo visualizar mensagem de environment nao encontrado

    # Scenario: Verifica Organization invalida
    #     Given acesso o site backoffice
    #     When digito uma organization invalida
    #     Then devo visualizar mensagem de organization invalida

    # Scenario: Verifica esqueci minha senha com email aleatório
    #     Given acesso o site backoffice
    #     When clico em esqueci minha senha e digito email aleatorio
    #     Then devo visualizar mensagem de email incorreta, tente novamente

    # Scenario: Verifica esqueci minha senha com email invalido
    #     Given acesso o site backoffice
    #     When clico em esqueci minha senha e digito email invalido
    #     Then devo visualizar mensagem de email invalido

    # Scenario: Verifica esqueci minha senha com email valido
    #     Given acesso o site backoffice
    #     When clico em esqueci minha senha e digito email valido
    #     Then devo visualizar mensagem de instrucoes no email

    # Scenario: Fazer login
    #     Given acesso o site backoffice
    #     When clico em esqueci minha senha e digito email valido
    #     Then devo visualizar mensagem de instrucoes no email