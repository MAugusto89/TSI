var e = require('prompt-sync')();
var Hora = Number(e('Digite um valor em hora:'));
var Minutos = Number(e('Digite uma valor em minutos:'));
calcM = Hora*60;
calcMTotal= Minutos + calcM;
calcS = calcMTotal*60;
console.log('Hora digitada em minutos:',calcM,'\nTotal dos minutos:',calcMTotal,'\nMinutos em Segundos:',calcS);
