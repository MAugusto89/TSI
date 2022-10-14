var e = require ('prompt-sync')();

let menu, cont1=0, cont2=0, cont3=0, cont4=0, cont5=0, cont6=0, cont=0;

do {
    console.log('\n/// SEJA BEM VINDO AS ELEIÇÔES ///');
    console.log('---------- Menu de Opções --------');
    console.log('1.Candidato Democrátco // 2.Candidato Inexperiente //\n 3.Candidato Radical // 4.Candidato Corrupto //\n 5.Nulo // 6.Branco // 0.ENCERRAR');
    menu = String(e('Escolha umas das opções ACIMA:'))
    if (menu != 0) {
        if (menu == '1') {
            cont1++;
        }else if (menu == '2') {
            cont2++;
        }else if (menu == '3') {
            cont3++;
        }else if (menu == '4') {
            cont4++;
        }else if (menu == '5') {
            cont5++;
        }else if (menu == '6') {
            cont6++;
        }
        cont++;    
    }else{
        break;
    }
        
} while (menu != 0);

console.log('Total votos para o candidato 1 foi de:',cont1);
console.log('Total votos para o candidato 2 foi de:',cont2);
console.log('Total votos para o candidato 3 foi de:',cont3);
console.log('Total votos para o candidato 4 foi de:',cont4);
console.log('---------------------------------------');
console.log('Total de Votos Nulos:',cont5);
console.log('---------------------------------------');
console.log('Total de Votos Brancos:',cont6);
console.log('---------------------------------------');
console.log('Porcentagem de votos Nulos:',cont5 * 100 / cont);
console.log('---------------------------------------');
console.log('Porcentagem de votos Brancos:',cont6 * 100 / cont);