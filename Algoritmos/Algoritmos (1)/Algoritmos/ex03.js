var e = require('prompt-sync')();
var n1 = Number(e('Número1:'));
var n2 = Number(e('Número2 diferente de 0(zero):'));
if(n2 == 0){
    console.log('O numero 2 recebeu o valor 0(zero).');
}
else{
    var calc = n1/n2;
    console.log('A divisão dos valores digitados é:', calc);
}
