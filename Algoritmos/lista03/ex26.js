var e = require ('prompt-sync')();
let idades, mediaIdade=0, cont=0, contIdade=0, i;

do {
    idades = Number(e('Idade:'))
    console.log('Para finalizar digite 0 !!');
    if (idades == 0) {
        break;
    }
    contIdade += idades;
    cont++;
} while (i != 0);
mediaIdade = contIdade / cont
console.log('Média das idades:',mediaIdade);