#language: pt
Funcionalidade: Reconhecimento facial do Clockin WEB
    Eu, como usuário, quero bater o ponto através do reconhecimento facial.
 
    Contexto:
        Dado que eu estou acessando o sistema do Clock-in web
        E estou logado com "joao.varella+1@totvs.com.br" e "123456"

    Cenario: Clock-in por reconhecimento facial
        Quando a camera de reconhecimento facial é exibida
        E clico em clock-in para camera fazer a foto do rosto
        E aparece minhas informações de identificação "Antonio Sousa"
        Então confirmo a batida do ponto clicando em clock-in
