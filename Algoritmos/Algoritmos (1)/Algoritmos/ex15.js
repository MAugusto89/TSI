var e = require('prompt-sync')();
var Salario = Number(e('Salário do João R$'))
var Conta1 = Number(e('Valor da Primeira Conta R$'))
var Conta2 = Number(e('Valor da Segunda Conta R$'))
var calcConta1 = Conta1+(Conta1 * 2 /100);
var calcConta2 = Conta2+(Conta2 * 2 /100);
var calcFinal = Salario-calcConta1-calcConta2;
console.log('Valor da Conta 1 com 2% de de Juros por atraso R$'+calcConta1,'\nValor da Conta 2 com 2% de de Juros por atraso R$'+calcConta2,'\nRestante do Salário do João R$'+calcFinal);