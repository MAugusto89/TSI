var e = require('prompt-sync')();
var AnoNasc = Number(e('Ano em que você nasceu:'));
var AnoAtual = Number(e('Ano em que você está:'));
var IdadeAnos = AnoAtual - AnoNasc
var IdadeMeses = (AnoAtual - AnoNasc)*12;
var IdadeDias = (AnoAtual - AnoNasc)*365;
var IdadeSemanas = (AnoAtual - AnoNasc)*52;
console.log('Sua idade em Anos:',IdadeAnos, '\n'+'Sua idade em Meses:',IdadeMeses, '\n'+'Sua idade em Dias:',IdadeDias, '\n'+'Sua idade em Semanas:',IdadeSemanas);