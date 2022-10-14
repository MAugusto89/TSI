var e = require('prompt-sync')();
var n1 = Number(e('Número 01:'));
var n2 = Number(e('Número 02:'));
var calc;
var user = Number(e('Digite um valor de 1 a 4 para exercutar uma operação lógica:'))
if (user == 1) {
    calc = (n1 + n2)/2;
    console.log('Média dos valores digitados',calc);
}else if(user == 2){
    if (n1 > n2) {
        calc = n1-n2
        console.log('A diferença do número maior para o menor é',calc);
    }else if(n1<n2){
        calc=n2-n1
        console.log('A diferença do número maior para o menor é',calc);
    }
}else if(user == 3){
    calc = n1*n2;
    console.log('O produto dos número digitados é',calc);
}else if (user == 4) {
    calc = n1/n2;
    console.log('Divisão do primeiro pelo segundo número é:',calc);
}