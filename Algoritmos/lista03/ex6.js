var e = require('prompt-sync')();
let ingressos=120, gasto=200, i=5;
do {
    console.log('Valor do Ingresso R$:', i);
    console.log('Ingressos:', ingressos);
    console.log('Gasto R$:', gasto);
    console.log('Lucro R$',(i*ingressos)-gasto);
    console.log('----------------------------');
    i = i - 0.50
    ingressos = ingressos + 26
} while (i>=1);