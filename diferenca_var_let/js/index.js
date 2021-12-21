// DIferença var e let

/**
 * Quando se declara uma variável com o var, ela pode ser redeclarada várias vezes,
 * já com o let, isso gera um erro. O recomendável é utilizar o let.
 * Ao se declarar uma variável sem o var ou o let, estamos declarando uma variável global,
 * o que pode causar erros severos dentro do seu programa. 
 * A variável let possui escopo de bloco, a variável var possui escopo de função.
*/

var nome = 'Luiz';
console.log('nome');
var nome = 'Otávio';
console.log('nome');
