var e = require('prompt-sync')();
var ValorCateto1 = Number(e('Valor do Cateto 1:'));
var ValorCateto2 = Number(e('Valor do Cateto 2:'));
var calcHipotenusa = (ValorCateto1**2) + (ValorCateto2**2);
var calcH= Math.sqrt(calcHipotenusa);
console.log('O valor da Hipotenusa é:', calcH);