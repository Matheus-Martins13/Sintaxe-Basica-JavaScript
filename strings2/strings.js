let string = "O rato roeu a roupa do rei de roma";
console.log(string[3]);  // t

// Outra forma de fazer a mesma coisa:

console.log(string.charAt(3));  // t

// Buscando elementos através do índice:

console.log(string.indexOf('Um'));  // mostra onde começa a palava

// Podemos filtrar para mostrar o índice de um elemento n partindo de um índice x
console.log(string.indexOf('t', 4));  // encontre o elemento 't' partindo do índice 4 --> r = 6


// O método lastIndexOf() faz a mesma coisa, só que começando a busca pelo final da string
console.log(string.lastIndexOf('t'));  // ele retorna o índice normalmente.


// replace - substitui um por outro (Aceita expressões lineares):
console.log(string.replace(/r/g, '#'));  // vai substituir todos os r

// Para ver o tamanho utilizamos o atributo de função length (string.length)

// Fatiando a string
console.log(string.slice(2, 6));  // o último índice não é incluso  // r = rato
// Também podemos usar negativos como índice.
console.log(string.slice(-5));

console.log(string.substring(string - 5, string - 1));

// convertendo  a string em um array
console.log(string.split(' '));
// se quisermos que isso ocorra em n resultados:
console.log(string.split(' ', 2));

// Maiúsculas
console.log(string.toUpperCase());

// Minúscula 
console.log(string.toLowerCase());
