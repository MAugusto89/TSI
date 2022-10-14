var e = require('prompt-sync')();
let contMaior=0, contIgual=0;
for(let pessoas=0; pessoas<=9; pessoas++){
    var idade = Number(e("Idade: "));
    if(idade > 18){
        contMaior++;
    }else if(idade == 18){
        contIgual++;
    }else{
        console.log('Valor inválido!');
    }
}

console.log('Pessoas maiores de 18:',contMaior);
console.log('Pessoas com idade iguais de 18:',contIgual);