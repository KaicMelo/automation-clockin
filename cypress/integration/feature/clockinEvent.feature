#language: pt
Funcionalidade: Reconhecimento facial do Clockin WEB por evento
    Eu, como usuário, quero bater o ponto através do reconhecimento facial.

    Contexto:
        Dado que eu estou acessando o sistema do Clock-in web 
        E faço a request para habilitar o evento de dropdown
        E estou logado com "joao.varella+1@totvs.com.br" e "123456"

    Esquema do Cenario: Clock-in por evento selecionando <evento>
        Quando a camera de reconhecimento facial é exibida
        E clico em clock-in para camera fazer a foto do rosto
        E aparece minhas informações de identificação "Antonio Sousa"
        E seleciono o dropdown com "<numero>"
        Então confirmo a batida do ponto clicando em clock-in

    Exemplos:
            
            | evento             | numero |
            |  entrada           |    1   |
            |  saida             |    2   |
            |  saida para almoço |    3   |
            |  volta do almoço   |    4   |