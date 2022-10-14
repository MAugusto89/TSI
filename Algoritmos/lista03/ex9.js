var e = require ('prompt-sync')();
var n =  Number(e('Número para ver sua tabuada: '))

for(let i = 0; i <= 10; i++){
    console.log(n,'X',i,'=',n*i);
}