var ent = require('prompt-sync')();
var hora = Number(ent('Digite a Hora: '));
if (hora<=12) {
    console.log('Bom dia!');
}else if (hora>12 && hora<=18) {
    console.log('Boa tarde!');
}else{
    console.log('Boa noite!');
}