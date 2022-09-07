var e = require('prompt-sync')();
var Largura = Number(e('Largura:'))
var Comprimento = Number(e('Comprimento:'))
var m2 = Largura * Comprimento;
var Luz = m2 * 18;
console.log('Dimensões do local em metros quadrados',m2+'m²\nPotência da Iluminação que deve ser usada:',Luz+'W');