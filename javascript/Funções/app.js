
let numeroSecreto = gerarNumeroAleatorio();

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto!';   

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';

function exibirTextoNaTela(tag, texto) {   
     let campo = document.querySelector(tag);  
     campo.innerHTML = texto; 
}

// Função utilizada para facilitar o uso das funções acima!

exibirTextoNaTela('h1', 'Jogo do número secreto!')
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10')

function verificarChute() {
     let chute = document.querySelector('input').value;
     // Pega o valor do input colocado pelo usuario no codigo HTML.

     console.log(chute == numeroSecreto);
     // Ira mostrar no console se é True ou False.
}

function gerarNumeroAleatorio() {
     return parseInt(Math.random() * 10 + 1);
}