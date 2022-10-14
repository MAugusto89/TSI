var e = require('prompt-sync')();
/*Código do produto comprado */
/*Quantidade do produto comprada */
/*Calcule e mostre */
/*O preço unitário tabela 1 */
/*o preço total */
/*o desconto tabela 2 */
/*o preço final depois do desconto */


var codigoProduto = Number(e('Código Produto de 1 a 40:'));
var qtdeProduto = Number(e('Quantidade Comprada: '));
var calcUn=0, calcTotal, calcDesconto, calcTotalDesconto;

console.log('----------TABELA 1----------');
if (codigoProduto>=1 && codigoProduto<=10) {
    calcUn = 10;
    calcTotal = qtdeProduto * calcUn;
    console.log('Preço UNITÁRIO R$'+calcUn);
    console.log('Preço TOTAL do produto SEM DESCONTO R$'+calcTotal);
}else if(codigoProduto>=11  && codigoProduto<=20){
    calcUn = 15;
    calcTotal = qtdeProduto * calcUn;
    console.log('Preço UNITÁRIO R$'+calcUn);
    console.log('Preço TOTAL do produto SEM DESCONTO R$'+calcTotal);
}else if(codigoProduto>=21  && codigoProduto<=30){
    calcUn = 20;
    calcTotal = qtdeProduto * calcUn;
    console.log('Preço UNITÁRIO R$'+calcUn);
    console.log('Preço TOTAL do produto SEM DESCONTO R$'+calcTotal);
}else if(codigoProduto>=31  && codigoProduto<=40){
    calcUn = 30;
    calcTotal = qtdeProduto * calcUn;
    console.log('Preço UNITÁRIO R$'+calcUn);
    console.log('Preço TOTAL do produto SEM DESCONTO R$'+calcTotal);
}else{
    console.log('Valor inválido');
}

console.log('----------TABELA 2----------');
console.log('COM DESCONTO');
if (calcTotal<=250) {
    calcDesconto= calcTotal-(calcTotal*5/100);
    console.log('Valor total com desconto de 5% R$'+calcDesconto);
}else if(calcTotal>250 && calcTotal<500){
    calcDesconto= calcTotal-(calcTotal*10/100);
    console.log('Valor total com desconto de 10% R$'+calcDesconto);
}else if(calcTotal>=500){
    calcDesconto= calcTotal-(calcTotal*15/100);
    console.log('Valor total com desconto de 10% R$'+calcDesconto);
}else{
    console.log('Valor inválido');
}