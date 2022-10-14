var e = require('prompt-sync')();
var idade = Number(e('Sua IDADE: '));
var kg = Number(e('Seu PESO: '));

if (idade<20) {
    if (kg<=60) {
        console.log('Grupo de risco 9');
    }else if (kg>60 && kg<=90) {
        console.log('Grupo de risco 8');
    }else if (kg>60) {
        console.log('Grupo de risco 7');
    }
}else if(idade>20  && idade<=50){
    if (kg<=60) {
        console.log('Grupo de risco 6');
    }else if (kg>60 && kg<=90) {
        console.log('Grupo de risco 5');
    }else if (kg>60) {
        console.log('Grupo de risco 4');
    }
}else if(idade>11  && idade<15){
    if (kg<=60) {
        console.log('Grupo de risco 3');
    }else if (kg>60 && kg<=90) {
        console.log('Grupo de risco 2');
    }else if (kg>60) {
        console.log('Grupo de risco 1');
    }
}else{
    console.log('Valor inválido');
}