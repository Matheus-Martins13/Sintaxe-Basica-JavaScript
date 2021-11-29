/**
 * Tudo que fazemos no navegador, é um evento. Podemos manupular esses eventos. 
*/

// Para evitar que conflitos ocorram no escopo global, vamos utilizar funções para encapsular


function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    let contador = 0;

    function recebeEventoForm(evento) {
        /**
         * Temos uma função que recebe como parâmetro um evento, que será chamada 
         * pelo método addEventListener. Nesse caso, o evento é o submit. 
         * Com esse evento, estamos alterando o comportamento padrão dele do JavaScript, 
         * que seria, nesse caso, o de enviar o formulário.
        */

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        };

        pessoas.push(pessoa);

        resultado.innerHTML += '<p><strong>Nome:</strong> ' + pessoas[contador].nome + '</p>';
        resultado.innerHTML += '<p><strong>Sobrenome:</strong>  ' + pessoas[contador].sobrenome + '</p>';
        resultado.innerHTML += '<p><strong>Peso:</strong> ' + pessoas[contador].peso + '</p> ';
        resultado.innerHTML += '<p><strong>Altura:</strong>  ' + pessoas[contador].altura + '</p>';

        console.log(pessoas);

        evento.preventDefault();
        contador++;
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
