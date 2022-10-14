var e = require ('prompt-sync')();

let maior=0, menor=0, i=0;

do {
    i=Number(e('Número:'))
    if (i == 0) {
        console.log('Fim do programa');
        break;
    }else if (i < 0) {
        console.log('O Valor Inserido É Negativo');
    }else if (i> maior && i!=0) {
        maior = i;
    }else if (i < maior && i > menor && i!=0) {
        menor = i;
    }
} while (i!=0);
console.log('O maior valor digitado:',maior);
console.log('O menor valor digitado:',menor);
