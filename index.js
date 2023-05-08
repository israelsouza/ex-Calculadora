/*  1. Capturar elementos
    2. Reconhecer números e sinais
    3. Realizar operação escolhida
    4. Exibir resultado na tela
    - Validação de campo vazio ou com mais de 34 caracteres
*/
const primeiroValor = document.getElementById('valorUm');
const segundoValor = document.getElementById('valorDois');

const somar = document.getElementById('somar');

somar.addEventListener('click', () => {
    n1 = Number(primeiroValor);
    console.log(n1);
    n2 = Number(segundoValor);
    console.log(n2);

    if (n1 = '' || n2 == '' || n1.length < 1 || n2 < 1 ) {
        alert('ERRO, CAMPOS VAZIOS');
        console.log(primeiroValor, segundoValor);
    } else {
        alert('Campo preenchido')
        console.log(primeiroValor, segundoValor);
    }
})

/*

const subtrair = document.getElementById('subtrair');
const dividir = document.getElementById('dividir');
const multiplicar = document.getElementById('multiplicar');

const resultado = document.getElementById('resultado');
const erroLimite = 'O campo não pode estar vazio ou exceder o limite de 34 caracteres. Tente novamente.';
const erroNotNumber = 'Preencha todos os valores.';


function quantidadeCaracteres(valor){
    if (valor.length < 1 || valor.length >= 35) {
        alert(erroLimite);
        return false;
    }
    else {
        return true
    }
}

function verificarSeENumero(valor){
    if(valor >= 0 || valor <= 0) {
        return true;
    } else {
        alert(erroNotNumber);
        return false;
    }
}

function resetPadraoResultado() {
    resultado.innerHTML = '';
    resultado.style.minHeight = '50px';
}



subtrair.addEventListener('click', () => {
    n1 = prompt('Digite o primeiro valor');
    console.log(n1);
    n2 = prompt('Digite o segundo valor');
    console.log(n2);

    if (quantidadeCaracteres(n1) == true && quantidadeCaracteres(n2) == true){
        if (verificarSeENumero(n1) == true && verificarSeENumero(n2) == true) {
            resultadoSubtracao = `${Number(n1)-Number(n2)}`;

            paragrafo = document.createElement('p');
            paragrafo.innerHTML = `O resultado da subtração de ${n1} por ${n2} é igual a ${Number(resultadoSubtracao.value)}`;

            resultado.appendChild(paragrafo);
        }
    }
})

dividir.addEventListener('click', () => {
    n1 = Number(prompt('Digite o primeiro valor'));
    n2 = Number(prompt('Por quanto deseja dividir?'));

    if (quantidadeCaracteres(n1) == true && quantidadeCaracteres(n2) == true) {
        if (verificarSeENumero(n1) == true && verificarSeENumero(n2) == true) {
            if (n1 <= 1 || n2 <= 1) {
                alert('Insira valores maiores que 1');
                resetPadraoResultado();
            } else {
                resultadoDivisao = parseFloat(n1) / parseFloat(n2);
                paragrafo = document.createElement('p');      
                paragrafo.innerHTML = `A divisão de ${n1} por ${n2} é igual a ${resultadoDivisao}`;

                resetPadraoResultado();
                resultado.appendChild(paragrafo);
            }
        }
    }    
})

multiplicar.addEventListener('click', () =>{
    n1 = Number(prompt('Digite o primeiro valor'));
    n2 = Number(prompt('Por quanto deseja multiplicar?'));

    if (quantidadeCaracteres(n1) == true && quantidadeCaracteres(n2) == true) {
        if (verificarSeENumero(n1) == true && verificarSeENumero(n2) == true) {
            if (n1 <= 0 || n2 <= 0) {
                alert('Insira valores maiores que 1');
                resetPadraoResultado();
            }else {
                paragrafo = document.createElement('p');      
                paragrafo.innerHTML = `A multiplicação de ${n1} por ${n2} é igual a ${n1 * n2}`;

                resetPadraoResultado();
                resultado.appendChild(paragrafo);
            }
        }
    }
}) */