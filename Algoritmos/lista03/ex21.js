var e = require ('prompt-sync')();
let numero;
let contN=1;
numero = Number(e('Numero:'))

for(let i = 1; i <= numero; i++){
    contN *= i;
}

console.log('Fatorial de ',numero,'! =',contN);