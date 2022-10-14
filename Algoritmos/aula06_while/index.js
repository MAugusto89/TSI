var e = require('prompt-sync')();
let loginSalvo= "admin";
let senhaSalvo= "adminadmin";
do {
    let login= String(e('Login:'));
    let senha= String(e('Senha:'));
    if (login != loginSalvo && senhaSalvo != senha) {
        console.log('Dados incorretos')
    }else{
        console.log('Bem vindo',login,"!");
    }    
} while (login != loginSalvo || senhaSalvo != senha );
