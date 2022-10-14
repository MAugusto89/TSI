var e = require ('prompt-sync')();
let idade=0, kg=0, h=0, pessoas=0, pessoas190=0;
let contUm=0, mediaIdade=0, contDois=0;
for(i = 1; i <= 10; i++){
    console.log('Pessoa',pessoas);
    idade = Number(e('Idade:'))
    kg = Number(e('Peso:'))
    h = Number(e('Altura:'))

    if (kg > 90 && h<=150) {
        contUm++;
    }
    if (h >= 190){
        if (idade >= 10 && idade <= 30) {
            contDois++;
        }
        pessoas190++;
    }

    pessoas++;
    mediaIdade = mediaIdade + idade;    
}
var calcMedia = mediaIdade/pessoas;
var calc = contDois * 100 / pessoas190;

console.log('Média das idades das 10 pessoas:',calcMedia);
console.log('Quantidade de pessoas com peso superior a 90kg e altura inferior a 1.50:',contUm);
console.log('Porcentagem de pessoas com idades entre 10 e 30 entre as pessoas que medem mais de 1.90 :',calc);