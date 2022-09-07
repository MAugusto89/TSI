const ent = require('prompt-sync')();
var idade = Number(ent('Digite a idade: '));
if (idade>60) {
    console.log('A idade 10 é: ', idade);
}