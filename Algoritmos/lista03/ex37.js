var e = require ('prompt-sync')();

let menu, n1, n2, calc;

console.log('\n/// SEJA BEM VINDO ///');
console.log('Para começar digite dois número abaixo');
n1 = Number(e('Número 1:'))
n2 = Number(e('Número 2:'))
do {
    console.log('---------- Menu de Opções --------');
    console.log('1.Soma // 2.Subtração // 3.Multiplicação // 4.Divisão // 5.Sair');
    menu = Number(e('Escolha umas das opções ACIMA:'))
    switch (menu) {
        case 1:
            calc = n1 + n2;
            console.log('A Soma dos valores digitados são:'+calc);
            break;
        case 2:
            calc = n1 - n2;
            console.log('A Subtração dos valores digitados são:'+calc);
            break;
        case 3:
            calc = n1 * n2;
            console.log('A Multiplicação dos valores digitados são:'+calc);
            break;
        case 4:
            calc = n1 / n2;
            console.log('A Divisão dos valores digitados são:'+calc);
            break;
        case 5:
            console.log('----------Programa Encerrado---------');
            break;
        default:
            break;
    }    
} while (menu != 5);