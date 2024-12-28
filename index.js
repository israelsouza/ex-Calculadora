// elementos html
// const primeiroValor = document.getElementById('valorUm');
// const segundoValor = document.getElementById('valorDois');
const resultadoFinal = document.getElementById('resultado');

const operacaoAdicao = document.getElementById('somar');
const operacaoSubtracao = document.getElementById('subtrair');
const operacaoMultiplicacao = document.getElementById('multiplicar');
const operacaoDivisao = document.getElementById('dividir');

const todosOsNumeros = document.querySelectorAll("div.numero-valor")
var numerosComValue = []

var n1 = 0
var n2

adicionarValor()
function adicionarValor() {
    for (let i = 0; i < todosOsNumeros.length; i++) {
        numerosComValue.push(todosOsNumeros[i].setAttribute('value', i + 1))
    }
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


function criandoEAnexandoParagrafo(val1, val2, resultadoOperacao, msgCalculo) {
    paragrafo = document.createElement('p');
    paragrafo.innerHTML = `A ${msgCalculo} de ${val1} por ${val2} é igual a ${resultadoOperacao} `;
    resultadoFinal.innerHTML = '';
    resultadoFinal.appendChild(paragrafo);
}

operacaoAdicao.addEventListener('click', () => {

    resultadoAdicao = Number(n1) + Number(n2);
    criandoEAnexandoParagrafo(n1, n2, resultadoAdicao, 'soma')
    limpandoAsVariaveisNumericas()
    
})

operacaoSubtracao.addEventListener('click', () => {

    resultadoSubtracao = n1 - n2;
    criandoEAnexandoParagrafo(n1, n2, resultadoSubtracao, 'subtração');
    limpandoAsVariaveisNumericas()    
    
})

operacaoMultiplicacao.addEventListener('click', () => {

    resultadoMultiplicacao = n1 * n2;
    criandoEAnexandoParagrafo(n1, n2, resultadoMultiplicacao, 'multiplicação');
    limpandoAsVariaveisNumericas()
    
})

operacaoDivisao.addEventListener('click', () => {

    resultadoDivisao = (n1 / n2).toFixed(2);
    criandoEAnexandoParagrafo(n1, n2, resultadoDivisao, 'divisão')
    limpandoAsVariaveisNumericas()
    
})