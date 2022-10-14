var e = require ('prompt-sync')();
let numero=1;
let contN=0;
let primo;
for(i = 2; i <= 10; i++){
    numero = Number(e('Numero:'))
    if (numero % i === 0) {
        contN++;
    }
}
console.log('Quantidade de números primos:',contN);