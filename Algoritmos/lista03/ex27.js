var e = require('prompt-sync')();
var rodando = 1, canal4=0, canal5=0, canal7=0, canal12=0;
let canal=0, assistindo;


while (rodando != 0) {
  canal = Number(e("Digite o canal:"));
  if (canal == 0) {
    break;
  }
  assistindo = Number(e("Digite a quantidade de pessoas assistindo:"));

  if (canal === 4) {  
    canal4 = canal4+ assistindo;
   } 
   if (canal === 5) {
    canal5 = canal5+ assistindo;
   } 
   if (canal === 7) {
    canal7 = canal7+ assistindo;
   } 
   if (canal === 12) {
    canal12 = canal12+ assistindo;
   }  
   console.log("Digite 0 para terminar");
   rodando++;
}

console.log("Assistindo canal 4 porcentagem de ",canal4/4);
console.log("Assistindo canal 5 porcentagem de ",canal5/4);
console.log("Assistindo canal 7 porcentagem de ",canal7/4);
console.log("Assistindo canal 12 porcentagem de ",canal12/4);
