/*
const data = new Date(0); //argumento 0 ->  01/01/1970 Timestamp unix ou época unix
const data = new Date();  // data atual
const data = new Date(xxx); // milésimos de segundos
console.log(data.toString());
 */

// const data2 = new Date(2019, 3); // a, m, d, h, M, s, ms (os milissegundos só vão até 999, se passar disso, 1 segundo será acrescentado)
 
/* 
// Passando como string
const data = new Date('2019-04-20 20:20:59');
console.log(data.toString());

// Pegando uma informação de data específica
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - Domingo, 6 - Sábado

// Podemos obter os milésimos de segundo da data atual da seguinte forma:
console.log(Date.now());  // Do marco zero até hoje
const data2 = new Date(Date.now());
console.log(data2); */

// Função que formata data

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
