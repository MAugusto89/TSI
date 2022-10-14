var e = require ('prompt-sync')();
let kg = 0, pessoas=1, mediaIdade=0, contKg=0;
for(i = 1; i <= 7; i++){
    console.log('Pessoa',pessoas);
    idade = Number(e('Idade:'));
    kg = Number(e('Peso:'));
    if (kg > 90) {
        contKg++;
    }
    pessoas++;
    mediaIdade = mediaIdade + idade;
}
let calcMedia = mediaIdade/pessoas;

console.log('Quantidade de pessoas com mais de 90Kg:',contKg);
console.log('Média das idades das sete pessoas:',calcMedia);