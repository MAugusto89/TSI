var e = require('prompt-sync')();
var nota1 = Number(e("Nota 01:"));
var nota2 = Number(e("Nota 02:"));
var media = (nota1+nota2)/2;
if (media >= 0 && media <4 ) {
    console.log('REPROVADO',media);
}else if (media>=4 && media<7) {
    console.log('ExAmE',media);
} else if (media>=7 && media<=10) {
    console.log('!!Aprovado!!',media);
}