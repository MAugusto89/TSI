var e = require ('prompt-sync')();

let TipoAcao, precoCompra=0, precoVenda=0, i, guardaLucro=0, cont=0;
let calcLucro=0, contAcao=0, contAcao2=0;

do {
    TipoAcao = String(e('Letra da ação a ser comercializada (Letra F encerra o sistema):'))
    if (TipoAcao == 'F') {
        break;
    }
    precoCompra= Number(e('Preço de compra da Ação R$'))
    precoVenda= Number(e('Preço venda da Ação R$'))

    calcLucro = precoCompra-precoVenda;

    if (calcLucro >= 1000) {
        contAcao++;
    }
    if (calcLucro <= 200) {
        contAcao2++;
    }
    guardaLucro = guardaLucro + calcLucro;
    cont++;
    i++;
} while (i != 0);

console.log('Lucro de cada ação R$',calcLucro);
console.log('Quantidade de ação com lucro superior a R$1.000,00 :',contAcao);
console.log('Quantidade de ação com lucro inferior a R$200,00 :',contAcao2);
console.log('Lucro total R$'+(guardaLucro+cont));
