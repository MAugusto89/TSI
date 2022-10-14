var e = require ('prompt-sync')();

let mediaSal=0, maior=0, menor=0;
let contSal=0, cont=0, menorSal=0, i;
let salario, Nfilhos, contFilhos=0, mediaFilhos =0;

do {
    salario = Number(e('Salário R$'))
    Nfilhos = Number(e('Número de filhos:'))
    contSal += salario;
    contFilhos += Nfilhos;

    if (salario <= 150) {
        menorSal++;
    }
    if (salario > maior && salario != 0) {
        maior = salario;
    }else if (salario > menor && salario < maior && salario != 0) {
        menor = salario;
    }
    console.log('Digite um valor NEGATIVO para encerrar o programa !!');

    cont++;
} while (i != 0);

mediaSal = contSal / cont;
mediaFilhos = contFilhos / cont;

console.log('Média de SALÁRIO da população R$',mediaSal);
console.log('---------------------------------------');
console.log('Média do número de FILHOS :',mediaFilhos);
console.log('---------------------------------------');
console.log('Maior salário R$'+maior);
console.log('---------------------------------------');
console.log('Porcentagem de pessoas com Salário de até R$150,00 R:',menorSal*100/cont);
console.log('---------------------------------------');