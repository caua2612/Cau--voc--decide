const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
      enunciado: "Assim que saiu da escola vocẽ se depara com uma nova tecnologia, um chat que consegue responder todas as duvidas que uma pessoa pode ter, ele tambem, rega imagens e audios super realistas. Qual o seu primeiro pensamento?",
      alternativas: [
        "Isso é assustador!",
        "Isso é maravilhoso!"
      ]
    },

    {
       enunciado: "com a descoberta dessa tecnologia chamada inteligencia artificial (ia), uma professora de tecnologia de uma wescola decidiu fazer uma sequencia de aulas sobre essa ferramenta. no fim de uma aula ela pede que você escreva um trabalho sobre o uso da i.a. em sala de aula. Qual atitude você toma?",
      alternativas: [
        "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique em uma linguagem que facilite o intendimento.",
        "esreve o trabalho com base nas convesas que teve com colegas, algumas pesquisas na internet de conhecimentos proprios sobre o tema."
      ]
    },

    {
      enunciado: "Pergunta 3",
      alternativas: [
        "Resposta 1",
        "Resposta 2"
      ]
    },

    {
      enunciado: "Pergunta 4",
      alternativas: [
        "Resposta 1",
        "Resposta 2"
      ]
    },

    {
      enunciado: "Pergunta 5",
      alternativas: [
        "Resposta 1",
        "Resposta 2"
      ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}


function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas();
}

mostraPergunta() ;