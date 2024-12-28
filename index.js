// elementos html
// const primeiroValor = document.getElementById('valorUm');
// const segundoValor = document.getElementById('valorDois');
const resultadoFinal = document.getElementById('resultado');

const operacaoAdicao = document.getElementById('somar');
const operacaoSubtracao = document.getElementById('subtrair');
const operacaoMultiplicacao = document.getElementById('multiplicar');
const operacaoDivisao = document.getElementById('dividir');
const reset = document.getElementById('reset');

const todosOsNumeros = document.querySelectorAll("div.numero-valor")

const mensagemDeErro = 'Selecione 2 valores antes de fazer a operação'

var n1 = 0
var n2 = 0

// manipulação arrays

for (let i = 0; i < todosOsNumeros.length; i++) {
    todosOsNumeros[i].setAttribute('value', i + 1)
}

todosOsNumeros.forEach(numero => {

    numero.addEventListener('click', () => {

        if (n1 == 0) {
            n1 = numero.getAttribute('value')
        } else {
            n2 = numero.getAttribute('value')
        }

    });

});

// funções

function limpandoAsVariaveisNumericas() {
    n1 = 0
}

function verificarSeValoresPreenchidos() {
    if (n1 == 0 || n2 == 0)  return true     
    else                     return false
}


function criandoEAnexandoParagrafo(val1, val2, resultadoOperacao, msgCalculo) {
    paragrafo = document.createElement('p');
    paragrafo.innerHTML = `A ${msgCalculo} de ${val1} por ${val2} é igual a ${resultadoOperacao} `;
    resultadoFinal.innerHTML = '';
    resultadoFinal.appendChild(paragrafo);
}

reset.addEventListener('click', () => {
    n1 = 0
    n2 = 0
    resultadoFinal.innerHTML = 'Selecione os números e a operação desejada'
})


// Events Listeners

operacaoAdicao.addEventListener('click', () => {
    if (verificarSeValoresPreenchidos()) {
        resultadoFinal.innerHTML = `${mensagemDeErro}`;
    } else {
        resultadoAdicao = Number(n1) + Number(n2);
        criandoEAnexandoParagrafo(n1, n2, resultadoAdicao, 'soma')
        limpandoAsVariaveisNumericas()
    }
})

operacaoSubtracao.addEventListener('click', () => {
    if (verificarSeValoresPreenchidos()) {
        resultadoFinal.innerHTML = `${mensagemDeErro}`;
    }
    else {
        resultadoSubtracao = n1 - n2;
        criandoEAnexandoParagrafo(n1, n2, resultadoSubtracao, 'subtração');
        limpandoAsVariaveisNumericas()
    }
})

operacaoMultiplicacao.addEventListener('click', () => {
    if (verificarSeValoresPreenchidos()) {
        resultadoFinal.innerHTML = `${mensagemDeErro}`;
    } else {
        resultadoMultiplicacao = n1 * n2;
        criandoEAnexandoParagrafo(n1, n2, resultadoMultiplicacao, 'multiplicação');
        limpandoAsVariaveisNumericas()
    }
})

operacaoDivisao.addEventListener('click', () => {
    if (verificarSeValoresPreenchidos()) {
        resultadoFinal.innerHTML = `${mensagemDeErro}`;
    } else {
        resultadoDivisao = (n1 / n2).toFixed(2);
        criandoEAnexandoParagrafo(n1, n2, resultadoDivisao, 'divisão')
        limpandoAsVariaveisNumericas()
    }
})