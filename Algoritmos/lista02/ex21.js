var e = require('prompt-sync')();
var valorP = Number(e('Preço do produto R$'));
var codigo = Number(e('Código de Origem:'));

if (codigo == '1') {
    console.log('Seu produto tem procedência do SUL');
}else if (codigo == '2') {
    console.log('Seu produto tem procedência do NORTE');
}else if (codigo == '3') {
    console.log('Seu produto tem procedência do LESTE');
}else if (codigo == '4') {
    console.log('Seu produto tem procedência do OESTE');
}else if (codigo == '5' || codigo == '6') {
    console.log('Seu produto tem procedência do NORDESTE');
}else if (codigo == '7' || codigo == '8' || codigo == '9') {
    console.log('Seu produto tem procedência do SUDESTE');
}else if (codigo >= '10' && codigo <= '20') {
    console.log('Seu produto tem procedência do CENTRO-OESTE');
}else if (codigo >= 21 && codigo <= 30) {
    console.log('Seu produto tem procedência do NORDESTE');
}else{
    console.log('erro');
}