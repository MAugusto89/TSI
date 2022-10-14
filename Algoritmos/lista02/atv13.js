var e = require('prompt-sync')();
var Vproduto = Number(e('Valor do prduto R$'));
var calc;
console.log('----------TABELA 01----------');
if (Vproduto <= 50) {
    calc = Vproduto+(Vproduto*5)/100;
    console.log('Seu produto com aumento de 5% irá ficar R$'+calc);
}else if(Vproduto > 50 && Vproduto<=100){
    calc = Vproduto+(Vproduto*10)/100;
    console.log('Seu produto com aumento de 10% irá ficar R$'+calc);
}else if(Vproduto > 100){
    calc = Vproduto+(Vproduto*15)/100;
    console.log('Seu produto com aumento de 15% irá ficar R$'+calc);
}else if (Vproduto != Number) {
    console.log('Valor digitado inválido');
}
console.log('----------TABELA 02----------');
if (Vproduto <= 80) {
    console.log('Seu produto está CLASSIFICADO como BARATO');
}else if(Vproduto > 80 && Vproduto<=120){
    console.log('Seu produto está CLASSIFICADO como NORMAL');
}else if(Vproduto > 120 && Vproduto<=200){
    console.log('Seu produto está CLASSIFICADO como CARO');
}else if(Vproduto>200){
    console.log('Seu produto está CLASSIFICADO como MUITO CARO');
}else if (Vproduto != Number) {
    console.log('Valor digitado inválido');
}