var e = require('prompt-sync')();
var C = Number(e('Temperatura em Celsius:'));
var Convert = C * 9/5 + 32;
console.log('Temperatura em Fahrenheit:', Convert);