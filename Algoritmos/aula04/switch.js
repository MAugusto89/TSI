/*Switch especificar um devários blocos de código a serem executados*/
var e = require('prompt-sync')();
var semaforo = String(e('digite a cor do semáforo: '));
switch (semaforo) {
    case 'vermelho':
    case 'VERMELHO':
        console.log('Semáforo está Vermelho, !!PARE!!');
        break;
    case 'amarelo':
    case 'AMARELO':
        console.log('Semáforo está Amarelo, !ATENÇÃO!');
        break;
    case 'verde':
    case 'VERDE':
        console.log('Semáforo está Verde, SIGA');
        break;
    default:
        console.log('VALOR INVÁLIDO');
        break;
}