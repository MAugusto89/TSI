var e = require('prompt-sync')();
var DMaior = Number(e('Digite o valor da Diagonal Maior:'));
var DMenor = Number(e('Digite o valor da Diagonal Menor:'));
var calc = (DMenor * DMaior)/2;
console.log('A Área do Losango é:', calc);