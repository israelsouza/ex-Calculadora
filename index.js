// elementos html
const primeiroValor = document.getElementById('valorUm');
const segundoValor = document.getElementById('valorDois');
const resultadoFinal = document.getElementById('resultado');

const operacaoAdicao = document.getElementById('somar');
const operacaoSubtracao = document.getElementById('subtrair');
const operacaoMultiplicacao = document.getElementById('multiplicar');
const operacaoDivisao = document.getElementById('dividir');

// mensagens de erros
const erroPreenchaOsCampos = 'Preencha todos os campos com valores diferentes de 0 para prosseguir.';
const erroCaracteresMuitoLongos = 'Insira um número que possua até 20 digitos.';
const erroValorNegativo = 'Insira um valor maior que 0 para realizar o cálculo.';

// funções
function camposVazios(valorUm, valorDois){
    if (valorUm == '' || valorDois == '') return true
    else return false
}

function quantidadeCaracteres(valorUm, valorDois){
    if (valorUm.toString().length >= 21 || valorDois.toString().length >= 21) return true
    else return false
}

function criandoEAnexandoParagrafo(val1, val2, resultadoOperacao, msgCalculo) {
    paragrafo = document.createElement('p');
    paragrafo.innerHTML = `A ${msgCalculo} de ${val1} por ${val2} é igual a ${resultadoOperacao} `;
    resultadoFinal.innerHTML = '';
    resultadoFinal.appendChild(paragrafo);
}

function valorNegativo(elem1, elem2){
    if (elem1 < 0 || elem2 < 0) return true
    else return false
}

operacaoAdicao.addEventListener('click', () => {
    n1 = Number(primeiroValor.value);
    n2 = Number(segundoValor.value);
    
    if (camposVazios(n1, n2) == true) {
        alert(erroPreenchaOsCampos);                 
    } else if (quantidadeCaracteres(n1, n2) == true) {
        alert(erroCaracteresMuitoLongos);
    } else {
        resultadoAdicao = n1 + n2;
        criandoEAnexandoParagrafo(n1, n2, resultadoAdicao, 'soma')
    }
})

operacaoSubtracao.addEventListener('click', () => {
    n1 = Number(primeiroValor.value);
    n2 = Number(segundoValor.value);

    if ( camposVazios(n1, n2) == true) {
        alert(erroPreenchaOsCampos);
    } else if (quantidadeCaracteres(n1, n2) == true) {
        alert(erroCaracteresMuitoLongos);
    } else {
        resultadoSubtracao = n1 - n2;
        criandoEAnexandoParagrafo(n1, n2, resultadoSubtracao, 'subtração');
    }
})

operacaoMultiplicacao.addEventListener('click', () => {
    n1 = Number(primeiroValor.value);
    n2 = Number(segundoValor.value);

    if ( camposVazios(n1, n2) == true ) {
        alert(erroPreenchaOsCampos);
    } else if(quantidadeCaracteres(n1,n2) == true) {
        alert(erroCaracteresMuitoLongos);
    } else if( valorNegativo(n1, n2) == true) {
        alert(erroValorNegativo);
    } else {                
        resultadoMultiplicacao = n1 * n2;
        criandoEAnexandoParagrafo(n1, n2, resultadoMultiplicacao, 'multiplicação');
    }
})

operacaoDivisao.addEventListener('click', () => {
    n1 = Number(primeiroValor.value);
    n2 = Number(segundoValor.value);

    if (camposVazios(n1, n2) == true) {
        alert(erroPreenchaOsCampos);
    } else if (quantidadeCaracteres(n1, n2) == true) {
        alert(erroCaracteresMuitoLongos);
    } else if (valorNegativo(n1, n2) == true) {
        alert(erroValorNegativo);
    } else {
        resultadoDivisao = n1 / n2;
        criandoEAnexandoParagrafo(n1, n2, resultadoDivisao, 'divisão')
    }
})