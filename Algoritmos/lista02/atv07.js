var e = require('prompt-sync')();
var sal = Number(e('Valor do seu SALÁRIO R$'));
var calc;
if (sal <= 500) {
    calc = sal+(sal*30)/100;
    console.log('Seu salário com aumento irá ficar R$'+calc);
}else if(sal > 500){
    console.log('Você não tem direito ao AUMENTO');
}else if (sal != Number) {
    console.log('Valor digitado inválido');
}