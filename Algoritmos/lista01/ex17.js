const e = require('prompt-sync')();
var Raio = Number(e('Valor do RAIO:'));
var Comprimento = 2*3.14*Raio;
var Area = 3.14*(Raio*=2);
var Volume = 4/3*3.14*(Raio*=3).toFixed(2);
console.log('Valor do Raio da Esfera:',Raio,'\nValor do Comprimento da Esfera:',Comprimento,'\nValor da Área da Esfera:',Area,'\nValor do Volume da Esfera:',Volume);