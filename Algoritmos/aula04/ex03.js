const ent = require('prompt-sync')();
var notaFinal = Number(ent('Digite a nota final: '));
if (notaFinal>=6) {
    console.log('Aprovado!!');
}else if (notaFinal>=3) {
    console.log('Exame!!');
}else{
    console.log('Reprovado!!');
}