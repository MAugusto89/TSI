var e = require("prompt-sync")();
var n =  Number(e('Número: '))
var i, soma=0
for (let l = 1;  l <= n ; l++) {
    console.log("1/"+l)
    soma += l
}
console.log('Soma total:',soma);