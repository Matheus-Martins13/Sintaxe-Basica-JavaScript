/* // Forma sem o objeto:
const nome01 = 'Luiz';
const sobrenome01 = 'Silva';
const idade01 =  35;

const nome02 = 'Miranha';
const idade02 =  21;
const sobrenome02 = 'Parker';

// Com o uso de objetos 
const pessoa1 = {
    nome: 'Luiz' ,
    sobrenome: 'Mranda',
    idade: 25
};

console.log(pessoa1.nome); */

// Criando uma função que cria objetos (FACTORY) -> É uma fábrica de objetos


function criaPessoa(nome, sobrenome, idade) {
    return {
        /**
         * Ao omitir a chave (o nome antes do dois pontos -> 'nome:'),
         * estamos dizendo ao JavaScript para criar um objeto que tenha
         * que tenha os mesmos nomes para chave e para valor. Ex.:
         * nome: nome,
         * idade: idade,
         * ...
        */
        nome,
        sobrenome,
        idade
    };
}


/* const pessoa1 = criaPessoa('Luiz', 'Carrara', 21);
const pessoa2 = criaPessoa('Maraiza', 'Junior', 19);
const pessoa3 = criaPessoa('Luiza', 'Vamarker', 23);
const pessoa4 = criaPessoa('Haanna', 'Letsgo', 22);
const pessoa5 = criaPessoa('Marcia', 'Maria', 20);
 */

/* console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);
console.log(pessoa3.nome, pessoa3.sobrenome, pessoa3.idade);
console.log(pessoa4.nome, pessoa4.sobrenome, pessoa4.idade);
console.log(pessoa5.nome, pessoa5.sobrenome, pessoa5.idade); */

// Podemos ter métodos dentro dos objetos

const pessoa1 = {
    nome: 'Luiza',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {  // Não precisamos da palavra function
        console.log(`${this.nome} ${this.sobrenome} está falando oi.`);
    }
};

pessoa1.fala();

