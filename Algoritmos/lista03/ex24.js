var e = require ('prompt-sync')();
let pesquisa=0, sexo=0, pessoas=0;
let sim=0, nao=0, contF=0, contM=0, naoM=0, contMS=0;

console.log('// BEM VINDO AO SISTEMA DE AVALIAÇÃO //');

for(i = 1; i <= 5; i++){
    console.log('Pessoa',i);
    sexo = String(e('Sexo (M/F):'));
    console.log('Gostou do Novo Produto Lançado ?');
    console.log('1.SIM // 2.NÃO');
    pesquisa=Number(e('Escolha umas das opções acima:'));

    if (pesquisa == 1) {
        sim++;
    }else if (pesquisa == 2){
        nao++;
    }
    if (sexo == 'F' && pesquisa== 1){
        contF++;
    }
    if (sexo == 'M') {
        if (pesquisa = 2) {
            naoM++;
        }else{
            contMS++;
        }
        contM++;
    }
    pessoas++;
}
var calcPorcentagem = contM * 100 / naoM;

console.log('Quantidade de pessoas que responderam 1.SIM :',sim);
console.log('Quantidade de pessoas que responderam 2.NÃO :',nao);
console.log('O número de mulheres que responderam 1.SIM :',contF);
console.log('Porcentagem de Homens que responderam 2.NÃO entre todos os Homens analisados :',calcPorcentagem);