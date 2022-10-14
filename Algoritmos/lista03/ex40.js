var e = require ('prompt-sync')();

let codigoCliente, tipoDeConta=0, valorInvestido=0,calcRendimentos=0;

do {
    codigoCliente=Number(e('Código do Cliente:'))
    console.log('1--Poupança // 2--Poupança Plus // 3--Fundos de Renda Fixa');
    tipoDeConta=Number(e('Tipo de Conta:'))
    valorInvestido=Number(e('Valor do Investimento R$'))
    if (tipoDeConta == 1) {
        calcRendimentos = valorInvestido*(1+1.5)^30
    }else if (tipoDeConta == 2) {
        calcRendimentos = valorInvestido*(1+2)^30
    }else if (tipoDeConta == 3) {
        calcRendimentos = valorInvestido*(1+4)^30
    }
    console.log('Valor investido R$'+valorInvestido,'O valor com Juros R$'+calcRendimentos);
} while (codigoCliente!=0);
console.log('!! Programa encerrado !!');
