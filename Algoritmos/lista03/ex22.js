var e = require ('prompt-sync')();
let idade=0, kg=0, pessoas=1;
let mediaKg1=0, mediaKg2=0, mediaKg3=0, mediaKg4=0;
let fx1=0, fx2=0, fx3=0, fx4=0;
for(i = 1; i <= 15; i++){
    console.log('Pessoa',pessoas);
    idade = Number(e('Idade:'))
    kg = Number(e('Peso:'))

    if (idade >= 1 && idade <= 10) {
        mediaKg1 = mediaKg1 + kg;
        fx1++;
    }else if (idade >= 11 && idade <= 20){
        mediaKg2 = mediaKg2 + kg;
        fx2++;
    }else if (idade >= 21 && idade <= 30){
        mediaKg3 = mediaKg3 + kg;
        fx3++;
    }else if (idade >= 31){
        mediaKg4 = mediaKg4 + kg;
        fx4++;
    }
    pessoas++;
}
var calcMedia1 = mediaKg1/fx1;
var calcMedia2 = mediaKg2/fx2;
var calcMedia3 = mediaKg3/fx3;
var calcMedia4 = mediaKg4/fx4;

console.log('Media de Pesos das idades entre 1 e 10 :',calcMedia1);
console.log('Media de Pesos das idades entre 11 e 20 :',calcMedia2);
console.log('Media de Pesos das idades entre 21 e 30 :',calcMedia3);
console.log('Media de Pesos das idades maaiore que 31 :',calcMedia4);