var e = require('prompt-sync')();
var Vproduto = Number(e('Valor do prduto R$'));
var codigoProduto = Number(e('Código:'));
var calc;
if (Vproduto <= 30) {
    console.log('Seu produto não recebrá desconto e o valor antigo e atual irá ficar R$'+Vproduto);
}else if(Vproduto > 30 && Vproduto<=100){
    calc = Vproduto*10/100;
    console.log('Seu produto com desconto de 10% irá ficar R$'+(Vproduto-calc),'referente ao antigo preço de R$'+Vproduto,'e o valor do desconto é R$'+calc);
}else if(Vproduto > 100){
    calc = Vproduto*15/100;
    console.log('Seu produto com desconto de 15% irá ficar R$'+(Vproduto-calc),'referente ao antigo preço de R$'+Vproduto,'e o valor do desconto é R$'+calc);
}else if (Vproduto != Number) {
    console.log('Valor digitado inválido');
}