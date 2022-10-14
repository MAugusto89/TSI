var e = require ('prompt-sync')();

let cod, precoCusto, mediaSem=0, mediaCom=0, NovoPreco, i=0;
precoAntigo=0, preco = 0;

do {
    console.log('Produto',i);
    cod = Number(e('Código Produto:'));
    precoCusto = Number(e('Preço de Custo R$'));
    precoAntigo = precoAntigo + precoCusto;
    mediaSem = mediaSem + precoAntigo;
    NovoPreco = precoAntigo + (precoAntigo*20/100);
    mediaCom = mediaCom + NovoPreco;
    preco = preco + precoCusto;
    i++
} while (cod < 0);

console.log(precoAntigo);
console.log(mediaSem);
console.log(NovoPreco);
console.log(mediaCom);