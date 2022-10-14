var e = require('prompt-sync')();
var  HorasT = Number(e('Horas trabalhadas:'));
var SalarioMin = Number(e('Salário  Mínimo:'));
var HorasExtras = Number(e('Horas Extras:'));
var calcHoraT= SalarioMin/8;
var calcHoraEx= SalarioMin/4;
var calcSalarioBruto= HorasT * calcHoraT;
var calcHoraEx2= HorasExtras * calcHoraEx;
var calcSalarioReceber= calcSalarioBruto + calcHoraEx2;

console.log('Valor da hora trabalhada:',calcHoraT,'\nValor da hora extra:',calcHoraEx,'\nSalário Bruto:',calcSalarioBruto,'\nValor das horas extras a receber:',calcHoraEx2,'\nSalário a receber:', calcSalarioReceber);