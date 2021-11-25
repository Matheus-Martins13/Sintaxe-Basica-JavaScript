alert('Calc');

const num1 = Number(prompt('Digite um número:'));
const num2 = Number(prompt('Digite outro número:'));

const operacao = Number(prompt('1 - Soma\n2 - Subtração\nEscolha o número da operação:'));

if (operacao === 1){
    alert(`${num1} + ${num2} = ${num1 + num2}`);
}else{
    alert(`${num1} - ${num2} = ${num1 - num2}`);
}
