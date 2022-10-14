var e = require ('prompt-sync')();

let idade=0, altura=0, mediaAltura=0,contAltura=0, cont50=0, i=0;

do{
    idade = Number(e('Digite a idade:'))    
    if (idade <= 0) {
        console.log('Programa Encerrado');
        break;
    }
    altura = Number(e('Digite a altura:'))
    console.log('----------------------------');
    if (idade >= 50) {
        contAltura = contAltura + altura;
        cont50++;
    }

    idade++

} while (i <= 0);

mediaAltura = contAltura / cont50;
console.log('A média das Altura das Pessoas com mais de 50 anos é:',mediaAltura);