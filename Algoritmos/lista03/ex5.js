var e = require('prompt-sync')();
let bonus;
   
for(let clientes=1; clientes<=15; clientes++){
    var nome = String(e("Nome cliente: "));
    var valor = Number(e("Valor da compra R$"));
    if(valor<1000){
        bonus = valor *10 /100;
        console.log("O bônus de cliente",nome,"é de 10% R$"+bonus)

    }else{
        bonus = valor *15 /100;
        console.log("O bônus de cliente",nome,"é de 15% R$"+bonus)

    }
}