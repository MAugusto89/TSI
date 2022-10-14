var e = require('prompt-sync')();
var sal = Number(e('Valor do seu SALÁRIO R$'));
var calc;
if (sal <= 300) {
    calc = sal+(sal*15)/100;
    console.log('Seu salário com aumento de 15% irá ficar R$'+calc);
}else if(sal > 300 && sal<=600){
    calc = sal+(sal*10)/100;
    console.log('Seu salário com aumento de 10% irá ficar R$'+calc);
}else if(sal > 600 && sal<=900){
    calc = sal+(sal*5)/100;
    console.log('Seu salário com aumento de 5% irá ficar R$'+calc);
}else if(sal > 900){
    console.log('Você não tem direito ao aumento');
}else if (sal != Number) {
    console.log('Valor digitado inválido');
}