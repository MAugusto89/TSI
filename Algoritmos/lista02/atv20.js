var e = require('prompt-sync')();
var idade = Number(e('Sua IDADE: '));

if (idade>5 && idade<7) {
    console.log('Categoria INFANTIL');
}else if(idade>8  && idade<10){
    console.log('Categoria JUVENIL');
}else if(idade>11  && idade<15){
    console.log('Categoria ADOLESCENTE');
}else if(idade>16  && idade<30){
    console.log('Categoria ADULTO');
}else if(idade>30){
    console.log('Categoria SÊNIOR');
}else{
    console.log('Valor inválido');
}