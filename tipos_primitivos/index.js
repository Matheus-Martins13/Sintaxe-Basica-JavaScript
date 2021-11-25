// string, number, undefined, null, boolean, symbol

const nome = 'Martins'; // string
const nome1 = "Martins"; // string
const nome2 = `Martins`; // string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined -> Não aponta para local algum da memória
const sobrenomeAuno = null; // Nulo -> Não aponta para local algum da memória
const boolean = true; // boolean
const boolean1 = false; // boolean

console.log(typeof sobrenomeAuno, sobrenomeAuno);  // Bug javascript, o null não é um objeto!!

// Ambos estão apontados para o mesmo lugar da memória (não se aplica para tipos primitivos comuns)
const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);
