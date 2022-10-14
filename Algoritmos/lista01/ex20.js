var e = require('prompt-sync')();
var a = Number(e('Medida do Ângulo:'));
var DParede = Number(e('Distância da Parede:'));
var calcA = a * 3.14 / 180;
var CalcT = DParede / Math.cos(calcA);
console.log('Medida da escada é:', CalcT);