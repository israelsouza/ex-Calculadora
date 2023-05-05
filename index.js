/*  1. Capturar elementos
    2. Reconhecer números e sinais
    3. Realizar operação escolhida
    4. Exibir resultado na tela
*/

const somar = document.getElementById('somar');
const subtrair = document.getElementById('subtrair');
const dividir = document.getElementById('dividir');
const multiplicar = document.getElementById('multiplicar');

somar.addEventListener('click', () => {
    n1 = prompt('Digite o primeiro valor');
    if (n1 == '') return alert('digite um valor')

    n2 = prompt('Digite o segundo valor');
    if (n2 == '') return alert('digite um valor')

    alert(`A soma entre ${n1} e ${n2} é igual a ${parseInt(n1) + parseInt(n2)}`);
})

subtrair.addEventListener('click', () => {
    n1 = prompt('Digite um valor');
    if (n1 < 0 || n1 == '') return alert('Digite um valor maior que 0')

    n2 = prompt('Digite outro valor');
    if (n2 == '') return alert('digite um valor')
    
    alert(`A subtração entre ${n1} e ${n2} é igual a ${parseInt(n1) - parseInt(n2)}`);
})

dividir.addEventListener('click', () => {
    n1 = prompt('Digite o primeiro valor');
    if (n1 < 1 || n1 == '') return alert('Digite um valor maior que 0')

    n2 = prompt('Por quanto deseja dividir?');
    if (n2 < 1 || n2 == '') return alert('Digite um valor maior que 0')

    resultadoDivisao = parseFloat(n1) / parseFloat(n2);

    alert(`A divisão entre ${n1} e ${n2} é igual a ${resultadoDivisao.toFixed(2)}`)
})

multiplicar.addEventListener('click', () =>{
    n1 = prompt('Digite um valor maior que 0');
    if ( n1<1 || n1=='' ){   return alert('Digite um valor maior que 0')   };

    n2 = prompt('Digite outro valor maior que 0');
    if ( n2<1 || n2=='' ){   return alert('Digite um valor maior que 0')   };
    
    resultadoMultiplicacao = parseInt(n1) * parseInt(n2);
    alert(`O multiplicação entre ${n1} e ${n2} é igual a ${resultadoMultiplicacao}`);
})