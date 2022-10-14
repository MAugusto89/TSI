var e = require('prompt-sync')();
var tipo = Number(e('Tipo de investimento:'));
var value = Number(e('Valor do investimento R$'));
switch (tipo) {
    case 1:
        var calc = value*103/100;
        console.log('Tipo de investimento é POUPANÇA e rendimento mensal de 3% vai ficar R$'+calc);
        break;
    case 2:
        var calc = value*104/100;
        console.log('Tipo de investimento é RENDA FIXA e rendimento mensal de 4% vai ficar R$'+calc);
        break;
    default:
        console.log('Opção inválida!!');
        break;
}