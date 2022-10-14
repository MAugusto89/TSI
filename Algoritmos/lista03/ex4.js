var e = require('prompt-sync')();
var a = 0, b = 0, c = 0, d = 0, arma;
let grupo = 1;
let i = 0;
let j = 4;
while( grupo <= 5) {
    console.log('Grupo 0'+grupo);
    a = Number(e('Digite número 1:'));
    b = Number(e('Digite número 2:'));
    c = Number(e('Digite número 3:'));
    d = Number(e('Digite número 4:'));
    arma++;
    grupo++;
}
console.log('Ordem digitada');
console.log(a, b, c, d);

console.log("ordem crescente") ;
for( i= 0;i<=4; i++)
{
    console.log(a++, b++, c++, d++);
}
console.log("ordem decrescente") ;
for(j= 4;j>=0; j--)
{   
    console.log(a++, b++, c++, d++);
}


//Incompleto