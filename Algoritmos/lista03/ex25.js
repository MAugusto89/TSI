var e = require ('prompt-sync')();

let mediaFinal, frequencia, nota=0, maior=0, menor=0;
let nota1, nota2, nota3, i, matricula, reprov, contReprov=0;
let porcentagem, cont=1;

do {
    matricula = String(e('Matrícula: '));
    nota1 = Number(e('Nota 1: '));
    nota2 = Number(e('Nota 2: '));
    nota3 = Number(e('Nota 3: '));
    frequencia = Number(e('Frequência: '));
    mediaFinal = (nota1+nota2+nota3)/3;
    console.log('Matrícula do Aluno:',matricula);
    console.log('Media Final:',mediaFinal);
    if ( mediaFinal >= 6 && frequencia >= 40) {
        console.log('Aluno APROVADO !!');
    }else if(mediaFinal<6 && frequencia < 40){
        console.log('Aluno REPROVADO !!');
        reprov++;
    }
    if (frequencia < 40) {
        contReprov++;
    }
    nota = mediaFinal;
    cont++;
    i++;
} while (cont <= 10);


if (nota > maior && nota != 0) {
    maior = nota;
}else if (nota > menor && nota < maior && nota != 0) {
    menor = nota;
}

porcentagem = contReprov * 100 / cont;

console.log('Maior nota:',maior,'E Menor nota:',menor,'da turma !')
console.log('O total de alunos reprovados: ')
console.log('A porcetagem de alunos reprovados por frequência abaixo mínima necessária:',porcentagem)