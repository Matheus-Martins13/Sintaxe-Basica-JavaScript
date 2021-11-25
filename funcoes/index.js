/* function soma(x = 0, y = 0) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return 'Valor não numérico.'
    }else{
        const resultado = x + y;
        return resultado;
    }
}

const resultado = soma();
console.log(resultado);
 */

// Função anônima

/* const raiz = function (n) {
    return n ** 0.5;
};


console.log(raiz(9));
 */


// Arrow function  (se tiver apenas um parâmetro, não precisamos de parênteses):
const raiz = n => n ** 0.5;

console.log(raiz(36));
