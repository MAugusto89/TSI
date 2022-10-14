var e = require ('prompt-sync')();

let mediaSal=0, maior=0, menor=0, qtdeMulher=0, idade, sexo, salario;
let contSal=0, cont=0, maiorSal=0, menorSal=0, menorSexo=0, menorIdade=0, i;

do {
    idade = Number(e('Idade:'))
    if (idade < 0) {
        console.log('Programa Encerrado');
        break;
    }
    sexo = String(e('Sexo(M/F):'))
    salario = Number(e('Salário:'))
    contSal += salario;    
    if (idade > maior && idade != 0) {
        maior = idade;
    }else if (idade > menor && idade < maior && idade != 0) {
        menor = idade;
    }
    if (sexo == 'F' && salario <= 200) {
        qtdeMulher++;
    }
    if (salario > maiorSal && salario != 0) {
        maiorSal = salario;
    }else if (salario < maiorSal && salario > menorSal && salario != 0) {
        menorSal = salario;
        menorSexo = sexo;
        menorIdade = idade;
    }
    console.log('Digite uma idade negativa para encerrar o programa !!');
    cont++;    
} while (i != 0);

mediaSal = contSal / cont;

console.log('Média de SALÁRIO do grupo R$',mediaSal);
console.log('---------------------------------------');
console.log('Maior idade do grupo:',maior,'E menor idade do grupo:',menor);
console.log('---------------------------------------');
console.log('Quantidade de mulheres com salário até R$200,00, R=',qtdeMulher);
console.log('---------------------------------------');
console.log('A idade',menorIdade,'o Sexo',menorSexo,'pertencem a pessoa com menor Salário, que é de R$'+menorSal);