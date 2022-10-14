var e = require('prompt-sync')();
var sal = Number(e('Valor do seu SALÁRIO R$'));
var calc;
if (sal <= 300) {
    calc = sal+(sal*35)/100;
    console.log('Você tem direito a 35% e seu salário vai ficar R$'+calc);
}else if(sal > 300){
    calc = sal+(sal*15)/100;
    console.log('Você tem direito a 15% e seu salário vai ficar R$'+calc);
}else if (sal != Number) {
    console.log('Valor digitado inválido');
}