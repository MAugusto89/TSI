var e = require('prompt-sync')();
var p1 = Number(e('Valor do produto R$'));
var calc = p1-(p1*10/100);
console.log('O valor do produto com 10% de desconto é R$',calc);