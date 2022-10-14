var e = require('prompt-sync')();
var n1 = Number(e('Digite o primeiro número:'));
var n2 = Number(e('Digite o segundo número:'));
var n3 = Number(e('Digite o terceiro número:'));
if (n1>n2 && n1>n3) {
    console.log('O primeiro número é o maior',n1);
}else if (n1<n2 && n2>n3) {
    console.log('O segundo número é o maior',n2);
}else if (n1<n3 && n2<n3) {
    console.log('O terceiro número é o maior',n3);
}else if (n1 == n2 && n2 == n3) {
    console.log('O primeiro',n1,'o segundo',n2,'e o terceiro',n3,'são números iguais');
}else if(n1,n2,n3 != Number){
    console.log('Valores inseridos Inválidos');
}