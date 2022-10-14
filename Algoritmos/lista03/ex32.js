var e = require ('prompt-sync')();

let numero, cont1=0, cont2=0, cont3=0, cont4=0, cont=0;

do {
    console.log('Obs: Digite 0 para SAIR');
    numero = Number(e('Digite um número:'))
    
    if (numero != 0) {
        if (numero <= 35 ) {
            cont1++;
        }
        if (numero > 0) {
            cont2++;
        }
        if (numero >= 50 && numero <= 100) {
            cont3++;
        }
        if(numero >= 10 && numero <= 20) {
            cont4++;
        }
    }else{
        break;
    }
    cont++;
} while (numero != 0);

console.log('A quantidade de números inferiores a 35:',cont1);
console.log('A media de números positivos:',cont2 / cont);
console.log('A porcentagem de números entre 50 e 100 entre todos os números digitados:',cont3 * 100 / cont);
console.log('A porcentagem de números entre 10 e 20 entre os números menores que 50:',cont4 * 100 / 50);