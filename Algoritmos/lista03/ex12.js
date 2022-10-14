var e = require ('prompt-sync')();
let idade, kg = 0; h = 0, pessoas=0;
let contIdade=0; mediaH=0, contkg=0, contPessoas=0;
for(i = 0; i <= 1; i++){
    console.log('Pessoa',pessoas);
    idade = Number(e('Idade:'))
    h = Number(e('Altura:'))
    kg = Number(e('Peso:'))
    if (idade > 50) {
        contIdade++;
    }else if(idade => 10 && idade <= 20){
        pessoas++;
        mediaH = mediaH + h;
    }
    if (kg <= 40) {
        contkg++;
    }
    contPessoas++;
}
var calcMedia = mediaH/pessoas;
var calckg = contkg * 100 / contPessoas;

console.log('Quantidade de pessoas com idade superior a 50:',contIdade);
console.log('Média das Alturas de pessoas com idade entre 10 e 20:',calcMedia);
console.log('Porcentagem de pessoas com pesso inferior a 40kg, em relação ao total de pessoas:', calcKg);