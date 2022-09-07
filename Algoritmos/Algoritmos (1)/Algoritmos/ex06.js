var e = require('prompt-sync')();
var S = Number(e('Salário R$'));
var V = Number(e('Vendas:'));
var calc01= V * 4;
var calc02= S+((S * calc01)/100);
console.log(calc02);