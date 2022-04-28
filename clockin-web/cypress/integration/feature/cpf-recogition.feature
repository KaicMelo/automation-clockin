#language: pt
Funcionalidade: Reconhecimento facial do Clockin WEB por CPF
    Eu, como usuário, quero bater o ponto através do reconhecimento facial.

    Contexto:
        Dado que eu estou acessando o sistema do Clock-in web
        E estou logado com "joao.varella+1@totvs.com.br" e "123456"

    Cenario: Clock-in por cpf
        Quando a camera de reconhecimento facial é exibida
        E clico em clock-in para camera fazer a foto do rosto
        E Nao sou identificado e preciso preencher o campo de cpf com "32234538898"
        Então Confirmo o vinculo da imagem ao nome "QA TEST"