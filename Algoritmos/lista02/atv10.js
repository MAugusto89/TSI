var e = require('prompt-sync')();
var custo = Number(e('Custo de fábrica R$'));
var distrib, ip, total;
if (custo <= 12000) {
    distrib = custo+(custo*5)/100;
    console.log('O custo final ao consumidor ficou R$'+distrib,'e o consumidor está Isento de imposto');
}else if(custo>12000 && custo<=25000){
    distrib = custo*110/100;
    ip= custo*15/100;
    total = ip + distrib;
    console.log('O custo final ao consumidor somados com Impostos de 15% ficou R$'+total);
}else if(custo>25000){
    distrib = custo+(custo*15)/100;
    ip= custo*20/100;
    total = ip + distrib;
    console.log('O custo final ao consumidor somados com Impostos de 20% ficou R$'+total);
}else if (custo != Number) {
    console.log('Valor digitado inválido');
}