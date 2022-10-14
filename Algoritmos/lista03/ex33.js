var e = require ('prompt-sync')();

let menu, n1, n2, n3, calcAritmetico, calcPonderado;

do {
    console.log('---------- Menu de Opções --------');
    console.log('1.MÉDIA ARITMÉTICA // 2.MÉDIA PONDERADA // 3.SAIR');
    menu = String(e('Escolha umas das opções ACIMA:'))
    
    if (menu == '1') {
        n1 = Number(e('Nota 1:'))
        n2 = Number(e('Nota 2:'))
        calcAritmetico = (n1 + n2) / 2;
        console.log('Média Aritmética:',calcAritmetico);
    }else if (menu == '2') {
        n1 = Number(e('Nota 1(peso 2):'))
        n2 = Number(e('Nota 2(peso 7):'))
        n3 = Number(e('Nota 3(peso 5):'))
        calcPonderado = ((n1*2) + (n2*7) + (n3*5)) / (2+7+5);
        console.log('Média Ponderada:',calcPonderado);
    }else if (menu == '3') {
        console.log('!!Programa ENCERRADO!!');
        break;
    }else{
        console.log('Opção INVÁLIDA');
        break;
    }
        
} while (menu != 3);
