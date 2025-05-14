function exibirTexto(tag, texto) {
     let campo = document.querySelector(tag)
     campo.innerHTML = texto;
}

exibirTexto('h1', 'Dolar -> Real')


function converter() {
     let valor = (document.querySelector('input').value);
     converter = valor * 5.80;
     exibirTexto('p', `R$ ${parseFloat(converter)}`)
}

