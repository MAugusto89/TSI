var e = require ('prompt-sync')();
let idade, kg, h, pessoas=0, corOlhos, corCabelo;
let contUm=0, mediaI=0, contOlhosA=0, contDois=0, pessoasBaixas=0;
for(i = 0; i <= 2; i++){
    console.log('Pessoa',pessoas);
    idade = Number(e('Idade:'))
    kg = Number(e('Peso:'))
    h = Number(e('Altura:'))
    corOlhos = String(e('Cor dos Olhos(A-Azul, P-Preto, V-Verde e C-Castanho):'))
    corCabelo = String(e('Cor do Cabelo(P-Preto, C-Castanho, L-Louro e R-Ruivo):'))

    if (idade > 50 && kg < 60) {
        contUm++;
    }
    if(h <= 150){
        pessoasBaixas++;
        mediaI = mediaI + idade;
    }
    if (corOlhos == 'A') {
        contOlhosA++;
    }
    if (corCabelo == 'R' && contOlhos != 'A'){
        contDois++
    }
    pessoas++;
}
var calcMedia = mediaI/pessoasBaixas;
var Porcentagem = contOlhosA*100/pessoas;

console.log('Quantidade de pessoas com idade superior a 50 e peso inferior a 60kg :',contUm);
console.log('Média da Idade das pessoas com altura inferior a 1.50:',calcMedia);
console.log('Porcentagem de pessoas com pesso inferior a 40kg, em relação ao total de pessoas:', Porcentagem);
console.log('Quantidade de pessoas Ruivas que não possuem Olhos Azuis:',contDois);
