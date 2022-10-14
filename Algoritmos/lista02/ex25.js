var e = require('prompt-sync')();
var horasExtras = Number(e('Horas Extras: '));
var faltas = Number(e('Faltas: '));
var premio = (horasExtras)-2/3*faltas;
if (premio>2400) {
    console.log('Sua gratificação R$500,00');
}else if(premio>1800 && premio<=2400){
    console.log('Sua gratificação R$400,00');
}else if(premio>1200  && premio<1800){
    console.log('Sua gratificação R$300,00');
}else if(premio>600  && prmeio<=1200){
    console.log('Sua gratificação R$200,00');
}else if(premio<=600){
    console.log('Sua gratificação R$100,00');
}else{
    console.log('Valor inválido');
}