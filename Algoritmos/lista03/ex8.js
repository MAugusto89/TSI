var e = require('prompt-sync')();
let cont1=0, cont2=0, cont3=0, cont4=0, cont5=0, contTotal=0;
for(let pessoas=0; pessoas<=4; pessoas++){
    var idade = Number(e("Idade: "));
    if(idade <= 15){
        cont1++;
    }else if(idade>=16 && idade<=30){
        cont2++;
    }else if(idade>=31 && idade<=45){
        cont3++;
    }else if(idade>=46 && idade<=60){
        cont4++;
    }else if(idade>=61){
        cont5++;
    }else{
        console.log('Valor inválido!');
    }
    contTotal++;
}
var calc1 = 100/contTotal*cont1;
var calc2 = 100/contTotal*cont1;
console.log('Pessoas da FAIXA ETÁRIA 1 (até 15 anos): ',cont1);
console.log('Pessoas da FAIXA ETÁRIA 2 (de 16 a 30 anos): ',cont2);
console.log('Pessoas da FAIXA ETÁRIA 3 (de 31 a 45 anos): ',cont3);
console.log('Pessoas da FAIXA ETÁRIA 4 (de 46 a 60 anos): ',cont4);
console.log('Pessoas da FAIXA ETÁRIA 5 (acima de 61 anos): ',cont5);
console.log('O valor da porcentagem da(s) PESSOA(s) da PRIMEIRA fileira em relção ao total de PESSOA(S) é de:'+calc1+'%');
console.log('O valor da porcentagem da(s) PESSOA(s) da ÚLTIMA fileira em relção ao total de PESSOA(S) é de:'+calc2+'%');