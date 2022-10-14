var e = require ('prompt-sync')();
let opiniao=0, idade=0, pessoas=0;
let mediaIdade1=0, qtdeRegular=0, contPessoa=0, P=0;

console.log('// BEM VINDO AO SISTEMA DE AVALIAÇÃO //');

for(i = 1; i <= 15; i++){
    console.log('Pessoa',i);

    console.log('3.Ótimo // 2.Bom // 1.Regular');
    opiniao=Number(e('Escolha umas das opções acima:'));
    idade = Number(e('Sua idade:'));

    if (opiniao == 3) {
        mediaIdade1 = mediaIdade1 + idade;
        contPessoa++;
    }
    if (opiniao == 1){
        qtdeRegular++;
    }
    if (opiniao == 2){
        P++;
    }
    pessoas++;
}
var calcMedia1 = mediaIdade1/contPessoa;
var calcPorcentagem = P * 100 / pessoas;

console.log('Media das Idades de pessoas que responderam 3.ÓTIMO :',calcMedia1);
console.log('Quantidade de pessoas que responderam 1.REGULAR :',qtdeRegular);
console.log('Porcentagem de pessoas que respondeu 2.BOM :',calcPorcentagem);