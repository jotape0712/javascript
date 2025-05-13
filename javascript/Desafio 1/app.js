let numero1 = parseFloat(prompt("Digite o primeiro numero: "))
let numero2 = parseFloat(prompt('Digite outro numero: '))
let numero3 = parseFloat(prompt("Digite outro numero"))

function calcularMedia(numero) {
    let soma = (numero1 + numero2 + numero3)
    let media = (soma / 3)
        console.log(`A media dos numeros é ${media}!`) 
        // Mostra o resltado no console
    
}

calcularMedia()

