var e = require('prompt-sync')();
var BMaior = Number(e('Base maior do trapézio:'));
var BMenor = Number(e('Base menor do trapézio:'));
var Altura = Number(e('Altura do trapézio:'));
var calc = ((BMaior + BMenor) * Altura)/2;
console.log('A Área do Trapézio é:',calc);