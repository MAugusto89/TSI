var e = require ('prompt-sync')();

let NumeroPositivo=0, NumeroNegativo=0, numero, calcPositivo, calcNegativo, calcTotal, i=0;

do{
    console.log('//Digite 0 para Sair//');
    numero = Number(e('NÚMERO(S):'))    
    if (numero > 0) {
        NumeroPositivo = NumeroPositivo + numero;
    }else if (numero < 0) {
        NumeroNegativo = NumeroNegativo + numero
    }else if (numero == 0){
        console.log('Programa Encerrado');
        break;
    }

} while (i <= 0);

calcPositivo = NumeroPositivo;
calcNegativo = NumeroNegativo;
calcTotal = calcNegativo + calcPositivo;

console.log('A SOMA dos números positivos são:',calcPositivo);
console.log('A SOMA dos números negativos são:',calcNegativo);
console.log('A SOMA total é:',calcTotal);