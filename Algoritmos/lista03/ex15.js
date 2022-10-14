var e = require ('prompt-sync')();
let numero, contTrinta=0;
for(i = 1; i <= 10; i++){
    numero = Number(e('Número:'))

    if (numero >= 30 && numero <= 90) {
        contTrinta++;
    }
}

console.log('Quantidade de número de 30 a 90:',contTrinta);