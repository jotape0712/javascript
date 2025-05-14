
listaDeNumerosSorteados = []
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let pontuacao = 0;
let botaoChutar = document.getElementById('verificarChute');

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
exibirTextoNaTela('h2', `Pontuação: ${pontuacao}`)

function verificarChute() {
     let chute = document.querySelector('input').value;
     // Pega o valor do input colocado pelo usuario no codigo HTML.

     if (chute == numeroSecreto) {
          pontuacao++
          
          let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
          exibirTextoNaTela('h1', 'Acertou!')
          exibirTextoNaTela('h2', `Pontuação: ${pontuacao}`)
          exibirTextoNaTela("p", `Você descobriu o numero secreto após ${tentativas} ${palavraTentativa}!`)
          botaoChutar.disabled = true;
     }
          else {
               if (chute > numeroSecreto) {
                    exibirTextoNaTela('p', 'O numero secreto é menor!') 
                    
               }
               else {
                    exibirTextoNaTela('p', 'O numero secreto é maior!')
               }
               tentativas++
               limparCampo();
          }
     }




function gerarNumeroAleatorio() {
     let numeroEscolhido = parseInt(Math.random() * 4 + 1);
     if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
          return gerarNumeroAleatorio();
     }  else {
          listaDeNumerosSorteados.push(numeroEscolhido);
          // "Push" adiciona item ao final da lista
          console.log(listaDeNumerosSorteados)
          return numeroEscolhido;
     }
}

function limparCampo() {
     chute = document.querySelector('input')
     chute.value = ''

}

function reiniciarJogo() {
     botaoChutar.disabled = false;
     numeroSecreto = gerarNumeroAleatorio();
     limparCampo();
     tentativas = 1;
     exibirTextoNaTela('h1', 'Jogo do número secreto!')
     exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10')
}

