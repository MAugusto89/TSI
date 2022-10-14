var e = require ('prompt-sync')();
let Vcarro, aVista, qtdeParcelas=6, juros=3;
Vcarro = Number(e('Preço do veículo R$'));
aVista = Vcarro - (20*100/Vcarro);
console.log('O preço do Carro à vista R$',aVista);
for(let i = 1; i <= 10; i++){
    console.log('Quantidade Parcelas:');
    console.log(qtdeParcelas+'x R$'+(Vcarro/qtdeParcelas).toFixed(2));
    console.log('Percentual de Acréscimo sobre o preço final');
    console.log(juros+'%  R$'+(juros+(juros*100/Vcarro)).toFixed(2));
    console.log('---------------------------------------------');
    qtdeParcelas = qtdeParcelas + 6;
    juros = juros + 3;
}