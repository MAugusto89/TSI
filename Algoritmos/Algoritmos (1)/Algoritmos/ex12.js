var e = require('prompt-sync')();
var SalarioMinimo = Number(e('Valor do Salário Mínimo:'));
var SalarioFuncionario = Number(e('Valor do Salário do Funcionário:'));
var calc = SalarioFuncionario / SalarioMinimo;
console.log('A quantidade de salário(s) mínimo que o funcionário recebe a mais é '+calc.toFixed(2));