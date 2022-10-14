var e = require('prompt-sync')();
var n1, n2, n3, n4, calc;
n1 = Number(e('Nota 01:'));
n2 = Number(e('Nota 02:'));
n3 = Number(e('Nota 03:'));
n4 = Number(e('Nota 04:'));
calc = (n1 + n2 + n3 + n4) / 4;
if (calc >= 7) {
    console.log("Estudante Aprovado !!",calc);
}else{
    console.log('!Aluno Reprovado!',calc);
}
