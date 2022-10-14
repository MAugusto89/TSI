var e = require('prompt-sync')();
var altura = Number(e('Sua ALTURA: '));
var sexo = String(e('Seu SEXO: '));
var calc;

if (sexo === 'masculino' || sexo === 'MASCULINO' || sexo === 'Masculino') {
    calc=(72.7*altura)-58;
    console.log('Seu peso ideal',calc.toFixed(2));
}else if(sexo ===  'feminino' || sexo ===  'Feminino' || sexo ===  'FEMININO'){
    calc=(62.1*altura)-44.7;
    console.log('Seu peso ideal',calc.toFixed(2));
}