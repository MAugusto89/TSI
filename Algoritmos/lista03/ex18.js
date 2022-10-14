var e = require ('prompt-sync')();
let n, nPar, nPrimo, soma;

for (let i = 1;  i < 10; i++) {
    n = Number(e('Número:'))
    if (n == 0 || n == 1) {
        nPrimo = 0;
    }else{
        nPrimo = 1;
        for(let M = 2; M < numero; M++){
            if(numero % M ==0){
                nPrimo =0;
            }
        }
    }
    if (nPrimo == 1) {
        console.log(n,'é um número Primo');
        soma = soma + i;
    }else if(nPrimo == 0){
        nPar = nPar+i;
        console.log(numero, " é numero par") ;
    }
}

console.log(soma, " é a soma numeros primos") ;
console.log(nPar, " é a soma numeros pares") ;