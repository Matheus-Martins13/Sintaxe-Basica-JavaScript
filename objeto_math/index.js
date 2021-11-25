// Em JavaScript, temos um objeto chamado Math, onde temos vários métodos matemáticos

let num1 = 9.4657;

/*
// Arrendondar para baixo, em um número inteiro 
let num1Int = Math.floor(num1);
console.log(num1Int);
// Arrednodando para cima 
let num2Int = Math.ceil(num1);
console.log(num2Int);  // O número inteiro mais próximo para cima 
*/

// round ->  arredonda para o mais próximo, justificadamente (usando a metade como critério)
// Obs.: Exatamente na metade, vai para cima
// let num2 = Math.round(num1);
// console.log(num2);

// Podemos, em dada sequência de números, achar qual o  maior, com o método max()
// console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6));

// Podemos, em dada sequência de números, achar qual o  menor, com o método min()
// console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6));


/** Podemos gerar números aleatórios com o método random()
 * Esse método gera números aleatórios entre 0 e 1, sendo o 1 não incluso.
 * Passamos aquela 'equação' para falarmos que desejamos números entre 10 e 5.
*/
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
// console.log(aleatorio);

// Valor de pi
// console.log(Math.PI);

// Podemos pegar a raiz quadrada de um número desta forma:
num2 = Math.round(num1);
console.log(num2 ** (1/2));
// OU 
console.log(num2 ** 0.5);

// Preste atenção!
// Em JavaScript, podemos dividir um número por zero sem gerar erro. Isso pode causar erro!
