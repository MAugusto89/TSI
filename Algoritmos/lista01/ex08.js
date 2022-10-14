var e = require('prompt-sync')();
var Peso = Number(e('Digite seu peso Kg '));
var calcG = Peso * 1000;
console.log('Seu peso convertido em Gramas é:',calcG+'g');