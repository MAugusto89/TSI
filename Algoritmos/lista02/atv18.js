var e = require('prompt-sync')();
var idade = Number(e('Sua idade: '))
if (idade >= 18){
    console.log('Você já atingiu a maior IDADE');
}else{
    console.log('Você não atingiu a maior IDADE');
}