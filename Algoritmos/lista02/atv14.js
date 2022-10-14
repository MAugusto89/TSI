var e = require('prompt-sync')();
var salario = Number(e('Valor Salário R$'));
var calcNovo;
if (salario <= 300) {
    calcNovo = salario+(salario*50)/100;
    console.log('Seu SALÁRIO com aumento de 50% irá ficar R$'+calcNovo);
}else if(salario>300 && salario<=500){
    calcNovo = salario+(salario*40)/100;
    console.log('Seu SALÁRIO com aumento de 40% irá ficar R$'+calcNovo);
}else if(salario>500 && salario<=700){
    calcNovo = salario+(salario*50)/100;
    console.log('Seu SALÁRIO com aumento de 30% irá ficar R$'+calcNovo);
}else if(salario>700 && salario<=800){
    calcNovo = salario+(salario*50)/100;
    console.log('Seu SALÁRIO com aumento de 20% irá ficar R$'+calcNovo);
}else if(salario>800 && salario<=1000){
    calcNovo = salario+(salario*50)/100;
    console.log('Seu SALÁRIO com aumento de 10% irá ficar R$'+calcNovo);
}else if(salario>1000){
    calcNovo = salario+(salario*5)/100;
    console.log('Seu SALÁRIO com aumento de 5% irá ficar R$'+calcNovo);
}else if (Vproduto != Number) {
    console.log('Valor digitado inválido');
}