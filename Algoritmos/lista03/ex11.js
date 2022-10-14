var e = require ('prompt-sync')();
let codigo=0, valor1=0,valor2=0, tvalor=0, pvalor=0, V=0, P=0
for(i = 0; i <= 15; i++){
    codigo = String(e('Digite o código de pagamento V(à vista) ou P(à prazo) R$'))
    if (codigo == 'V') {
        valor1= Number(e('Digite o valor da compra R$'))
        V = V + valor1;
    }else if(codigo == 'P'){
        valor2=Number(e('Digite o valor da compra R$'))
        P = P + valor2
    }
}
tvalor = (V + P)
pvalor = (P/3)
console.log('O valor total das compras à vista R$',V);
console.log('O valor total das compras à prazo R$',P);
console.log('O valor total das compras efetuadas:',tvalor);
console.log('O valor da primeira prestação das compras à prazo juntas R$',pvalor);