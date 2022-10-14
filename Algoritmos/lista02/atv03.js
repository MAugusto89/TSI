var e = require('prompt-sync')();
var n1 = Number(e('Digite o primeiro número:'));
var n2 = Number(e('Digite o segundo número:'));
if (n1 > n2) {
    console.log('O primeiro número é o maior',n1);
}else if (n1 < n2) {
    console.log('O segundo número é o maior',n2);
}else if (n1 == n2) {
    console.log('O primeiro',n1,'e o segundo',n2,' número são iguais');
}else if(n1,n2 != Number){console.log('Valores inseridos Inválidos');}