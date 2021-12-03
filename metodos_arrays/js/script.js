//alert("Tudo certo por aqui!");

// Métodos para arrays

let numbers = [1, 2, 3, 4];
let names = ['Maria Eduarda', 'Marcos', 'Antônio', 'Lesly'];

console.log(numbers);
console.log(names);

//for(let i = 0; i < numbers.length; i++){ 
//    alert("Seja bem vindo(a), " + names[i])
//}

// forEach
numbers.forEach(function(item, index){ console.log("Index: " + index, "Item: " + item)});

// push
numbers.push(5);
names.push("Aurélio");
console.log(numbers.length, names.length);

// pop 
numbers.pop();
names.pop();
console.log(numbers.length, names.length);

// shift 
numbers.shift();
names.shift();
console.log(numbers.length, names.length);

// unshift
numbers.unshift(1);
names.unshift("Maria Joaquina");

// indexOf
console.log(numbers.indexOf(3));
console.log(names.indexOf("Antônio"));

// slice 
console.log(numbers.slice(0, 3));

// splice
names.splice(0, 3, "Marco Aurélio");
console.log(names);

// Manipulando objetos
let object = {string: "Marco Aurélio", number: 1, array: ["array"], boolean: true, objetoInterno: {objetoInterno: "objetoInterno"}};

console.log(object.string);
console.log(object.number);
console.log(object.boolean);

// Desestruturação 

let string = object.string;
let number = object.number;
let array = object.array;
console.log(string);
console.log(number);
console.log(array);

// ou...

var { string, number, array, boolean, objetoInterno } = object;
console.log(string, number, array, boolean, objetoInterno);
