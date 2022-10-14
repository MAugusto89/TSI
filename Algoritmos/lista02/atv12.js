var e = require('prompt-sync')();
var sal = Number(e('Valor do seu SALÁRIO R$'));
var calc, ip;
if (sal <= 350) {
    ip = sal-(sal*7)/100;
    calc = ip + 100;
    console.log('Seu salário com desconto de 7% e com R$100,00 de gratificação irá ficar R$'+calc);
}else if(sal > 350 && sal<=600){
    ip = sal-(sal*7)/100;
    calc = ip + 75;
    console.log('Seu salário com desconto de 7% e com R$75,00 de gratificação irá ficar R$'+calc);
}else if(sal > 600 && sal<=900){
    ip = sal-(sal*7)/100;
    calc = ip + 50;
    console.log('Seu salário com desconto de 7% e com R$50,00 de gratificação irá ficar R$'+calc);
}else if(sal > 900){
    calc = sal-(sal*7)/100;
    console.log('Seu salário com desconto de 7% e com R$35,00 de gratificação irá ficar R$'+calc);
}else if (sal != Number) {
    console.log('Valor digitado inválido');
}