let varA = 'A';  // B
let varB = 'B';  // C
let varC = 'C';  // A
console.log(`varA: ${varA}\nvarB: ${varB}\nvarC: ${varC}`);

console.log('--------');

/*
let aux = varA;
varA = varB;
varB = varC;
varC = aux;
console.log(`varA: ${varA}\nvarB: ${varB}\nvarC: ${varC}`);
*/

// Outra forma:

[varA, varB, varC] = [varB, varC, varA];
console.log(`varA: ${varA}\nvarB: ${varB}\nvarC: ${varC}`);
