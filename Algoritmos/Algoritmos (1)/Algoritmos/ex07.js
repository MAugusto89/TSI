var e =  require('prompt-sync')();
var Peso = Number(e('Seu peso Kg '));
var calc1 = Peso+(Peso*15/100); 
var calc2 = Peso-(Peso*20/100);
console.log('Seu peso com 15% a mais:',calc1+'kg', 'Seu peso com 20% a menos:',calc2+'kg');