// IEEE 754-2008  ->  Padrão para precisão numérica de números reais utilizado pelo JavaScript


let num1 = 0.7;
let num2 = 0.1;

num1 += num2; // devia ter 0.8
num1 += num2; // devia ter 0.9
num1 += num2; // devia ter 1.0

// num1 = num1.toFixed(2);  // usar o toFixed, mesmo que deixe o número com o valor desejado, não é 
// suficiente para a engine do JavaScrip entender que isso é um valor inteiro (se for o caso).

// Forma correta:
num1 = Number(num1.toFixed(2));

console.log(num1);

 console.log(Number.isInteger(num1));

// console.log(num1.toString() + num2);  // convertendo temporariamente em string
// console.log(typeof num1);

// num1 = num1.toString() // Convertendo definitivamente

// representação binária do número:
//console.log(num1.toString(2)); 

// Arredondado 
// console.log(num1.toFixed(2)); // Arredondando para 2 casas decimais

// Verificando se um número é inteiro
// console.log(Number.isInteger(num1)); // Vai retornar um boo

// Conta NaN
// let temp = num1 * 'Olá';
//console.log(Number.isNaN());  // Isso é uma conta inválida? -> boo





