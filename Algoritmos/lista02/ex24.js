var e = require('prompt-sync')();
var preco = Number(e('Preço do produto R$'))
console.log('---CATEGORIA---\n1-Limpeza---------2-Alimentação----------3-Vestuário');
var categoria = Number(e('R='));
console.log('---SITUAÇÃO---\nR-PRODUTOS DE REFRIGERAÇÃO\nN-NÃO PRECISAM DE REFRIGERAÇÃO');
var situacao = String(e('R='));
var calc=0, calcIp, novoPreco;

/*O valor do aumento sobre o preço*/
switch (categoria) {
    case 1:
        if (preco<=25) {
            calc = (preco*5/100)
        }else{
            calc = (preco*12/100)
        }
        break;
    case 2:
        if (preco<=25) {
            calc = (preco*8/100)
            
        }else{
            calc = (preco*15/100)
        }
        break;
    case 3:
        if (preco<=25) {
            calc = (preco*10/100)
        }else{
            calc = (preco*18/100)
        }
        break;
    default:
        console.log('ERRO');
        
}      

/*O valor do imposto sobre o preço*/
if (categoria == 2 && situacao == 'R') {
    calcIp = (preco*5/100)
    console.log('Imposto aplicado ao produto R$'+calcIp);
}else if(categoria!=2 && situacao!='R'){
    calcIp = (preco*8/100)
    console.log('Imposto aplicado ao produto R$'+calcIp);
}else{
    console.log('erro');
}

/*Novo preço preço + aumento imposto*/
novoPreco = preco+calc-calcIp;
console.log('Com desconto seu produto fica R$'+novoPreco);
if (novoPreco <= 50) {
    console.log('Seu produto está na categoria Barato');
}else if(novoPreco>50 && novoPreco<120){
    console.log('Seu produto está na categoria Normal');
}else if(novoPreco>=120){
    console.log('Seu produto está na categoria Caro');
}else{
    console.log('erro');
}