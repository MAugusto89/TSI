var e = require('prompt-sync')();
var saldoMedio = Number(e('Valor do seu SALDO MÉDIO R$'));
var calc;
if (saldoMedio > 400) {
    calc = saldoMedio+(saldoMedio*30)/100;
    console.log('Valor do crédito é de 30% e seu saldo médio vai ficar R$'+calc);
}else if(saldoMedio <= 400 && saldoMedio >300){
    calc = saldoMedio+(saldoMedio*25)/100;
    console.log('Valor do crédito é de 25% e seu saldo médio vai ficar R$'+calc);
}else if(saldoMedio <= 300 && saldoMedio > 200){
    calc = saldoMedio+(saldoMedio*25)/100;
    console.log('Valor do crédito é de 20% e seu saldo médio vai ficar R$'+calc);
}else if(saldoMedio>200){
    calc = saldoMedio+(saldoMedio*10)/100;
    console.log('Valor do crédito é de 10% e seu saldo médio vai ficar R$'+calc);
}else if (saldoMedio != Number) {
    console.log('Valor digitado inválido');
}