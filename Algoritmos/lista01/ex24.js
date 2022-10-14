var e = require('prompt-sync')();
var Dinheiro = Number(e('Quantos você tem R$'));
ConvertD = Dinheiro * 1.80;
ConvertA = Dinheiro * 2;
ConvertL = Dinheiro * 1.57;
console.log('O valor em Real que é R$'+Dinheiro,'\nConvertido em Dólar, ficou USDT$'+ConvertD,'\nConvertido em Marco Alemão ficou ℳ ',ConvertA,'\nConvertido em Libra Esterlina ficou £'+ConvertL.toFixed(2));