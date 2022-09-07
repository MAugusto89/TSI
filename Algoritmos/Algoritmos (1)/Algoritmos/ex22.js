var e = require('prompt-sync')();
var N = Number(e('Número de lados do polígono:'));
var calc = (N * (N-3)) /2;
console.log('Número de diagonais:',calc);