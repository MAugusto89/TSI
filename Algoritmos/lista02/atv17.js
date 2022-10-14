var e = require('prompt-sync')();
var senha = Number(e('Senha:'));

switch (senha) {
    case 4531:
        console.log('Acesso liberado !!');
        break;
    default:
        console.log('!! Acesso Negado !!');
        break;
}