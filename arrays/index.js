/** Os arrays, em JavaScript, aceitam qualquer tipo dentro deles,
 *  inclusive misturados, mas não é uma boa prática misturá-los.
*/ 

const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);

// console.log(alunos);
// console.log(alunos[0]);
// console.log(alunos[2]);

// Editando um elemento:
// alunos[0] = 'Eduardo';
// console.log[3] = 'Luíza';  # Adiciona um elemento ao índice 3

// Adicionando elementos a um array ao final
alunos.push('Otávio');
alunos.push('Fábio')
console.log(alunos);

// Adicionando elementos a um array ao começo
// Nesse caso, todos os elementos posteriores serão movidos 1 índice para a direita
alunos.unshift('Luiza');
console.log(alunos);

// Removendo elementos de um array (sem índice, ele remove o último elemento)
// Obs.: Essa função retorna o elemento excluído, que pode ser salvo em uma variável
let removido = alunos.pop();
console.log(removido);

// A função shft remove um elemento do começo do array
// Possui a mesma característica de retornar o valor removido
let removido2 = alunos.shift();
console.log(removido2);

// Toda vez que alteramos um elemento no meio do array, os outros 
// elementos serão realocados. 

/** 
 * Temos uma palavra reservada chamada delete, que remove um elemento no meio do
 * array, mas que não realoca os demais elementos, apenas deixa um elemento vazio
 * dentro do array.
 * 
 * delete alunos[1];
 * console.log(alunos);
*/

// Temos um tipo, em JavaScript, para elementos que não existem, o undefined
console.log(alunos[40]);

// Podemos fatiar um array, como em strings
alunos.push('Luiza');
alunos.push('Eduardo');

console.log(alunos.slice(0, 3));
console.log(alunos.slice(0, -1));

// Em JavaScript, o array não é um tipo de dado, ele é um OBJETO!
console.log(typeof alunos);  // object

// Para sabermos se estamos trabalhando com um array 
console.log(alunos instanceof Array);  // True or False
