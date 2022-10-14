var e = require ('prompt-sync')();
let idade=0, sexo=0; pessoas=0;
let contUm=0, contDois=0, mediaIdade=0, mediaIdadeM=0, mediaIdadeF=0;
for(i = 1; i <= 7; i++){
    console.log('Pessoa',i);
    idade = Number(e('Idade:'))
    sexo = Number(e('Sexo (M/F):'))
    if (sexo = 'F') {
        mediaIdadeF = mediaIdadeF + idade;
        contUm++;
    }else if (sexo = 'M') {
        mediaIdadeM = mediaIdadeM + idade;
        contDois++;
    }

    pessoas++;
    mediaIdade = mediaIdade + idade;    
}
var calcMedia = mediaIdade/pessoas;
var calcMediaF = mediaIdadeF/contUm;
var calcMediaM = mediaIdadeM/contDois;

console.log('Idade média do grupo:',calcMedia);
console.log('Idade média das Mulheres:',calcMediaF);
console.log('Idade média dos Homens:',calcMediaM);