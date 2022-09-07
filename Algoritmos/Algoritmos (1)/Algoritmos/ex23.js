var e = require('prompt-sync')();
var angulo1 = Number(e('Ângulo 1:'));
var angulo2 = Number(e('Ângulo 2:'));
calc = angulo1 + angulo2 - 180;
console.log('O valor do ângulo 3 é: ',calc);
