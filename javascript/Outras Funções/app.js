
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let pontuacao = 0;

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

     // }
     





function gerarNumeroAleatorio() {
     return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
     chute = document.querySelector('input')
     chute.value = ''

}

function reiniciarJogo() {
     gerarNumeroAleatorio();
     limparCampo();
     tentativas = 1;
     exibirTextoNaTela('h1', 'Jogo do número secreto!')
     exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10')
}

