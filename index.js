/*  1. Capturar elementos
    2. Reconhecer números e sinais
    3. Realizar operação escolhida
    4. Exibir resultado na tela
    CAIXA DE RESPOSTA PRECISA SER LIMPA APÓS SEGUNDO CLICK BOTAO 
    FAZER TEXTO COM CSS DINAMICO, E RETIRAR createTextNode()
*/

const somar = document.getElementById('somar');
const subtrair = document.getElementById('subtrair');
const dividir = document.getElementById('dividir');
const multiplicar = document.getElementById('multiplicar');
const resultado = document.getElementById('resultado');

somar.addEventListener('click', () => {

    n1 = prompt('Digite o primeiro valor');
    if (n1 == '') return alert('digite um valor')

    n2 = prompt('Digite o segundo valor');
    if (n2 == '') return alert('digite um valor')

    texto = document.createTextNode(`A soma de ${n1} e ${n2} é igual a ${parseInt(n1) + parseInt(n2)}`);
    resultado.appendChild(texto);
})

subtrair.addEventListener('click', () => {
    n1 = prompt('Digite um valor');
    if (n1 < 0 || n1 == '') return alert('Digite um valor maior que 0')

    n2 = prompt('Digite outro valor');
    if (n2 == '') return alert('digite um valor')
    
    texto = document.createTextNode(`A subtração de ${n1} por ${n2} é igual a ${parseInt(n1) - parseInt(n2)}`);
    resultado.appendChild(texto);
})

dividir.addEventListener('click', () => {
    n1 = prompt('Digite o primeiro valor');
    if (n1 < 1 || n1 == '') return alert('Digite um valor maior que 0')

    n2 = prompt('Por quanto deseja dividir?');
    if (n2 < 1 || n2 == '') return alert('Digite um valor maior que 0')

    resultadoDivisao = parseFloat(n1) / parseFloat(n2);

    texto = document.createTextNode(`A divisão entre ${n1} e ${n2} é igual a ${resultadoDivisao.toFixed(2)}`);
    resultado.appendChild(texto);
})

multiplicar.addEventListener('click', () =>{
    n1 = prompt('Digite um valor maior que 0');
    if ( n1<1 || n1=='' ){   return alert('Digite um valor maior que 0')   };

    n2 = prompt('Digite outro valor maior que 0');
    if ( n2<1 || n2=='' ){   return alert('Digite um valor maior que 0')   };
    
    resultadoMultiplicacao = parseInt(n1) * parseInt(n2);

    texto = document.createTextNode(`A multiplicação de ${n1} por ${n2} é igual a ${resultadoMultiplicacao}`);
    resultado.appendChild(texto);
})