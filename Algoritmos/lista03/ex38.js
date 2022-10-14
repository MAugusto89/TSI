var e = require ('prompt-sync')();

let Salario, calcS, mesesTrabalhado, DecimoTerceiro, menu;

do {
    console.log('\n/// SEJA BEM VINDO ///');
    console.log('---------- Menu de Opções --------');
    console.log('1.Novo Salário // 2.Férias // 3.Décimo Terceiro // 4.Sair');
    menu = Number(e('Escolha umas das opções ACIMA:'))
    switch (menu) {
        case 1:
            Salario = Number(e('Seu salário R$'))
            if (Salario<=350) {
                calcS = Salario*115/100;
            }else if (Salario>350 && Salario<=600) {
                calcS = Salario*110/100;
            }else if (Salario>600) {
                calcS = Salario*105/100;
            }
            console.log('Novo Salário R$'+calcS);
            break;
        case 2:
            Salario = Number(e('Seu salário R$'))
            calcS = Salario + Salario/3;
            console.log('Valor das Férias R$'+calcS);
            break;
        case 3:
            Salario = Number(e('Seu salário R$'))
            mesesTrabalhado = Number(e('Meses Trabalhado:'))
            if (mesesTrabalhado > 12) {
                console.log('O valor inserido ultrapassa 12 meses !!');
                break;
            }else{
                DecimoTerceiro = Salario*mesesTrabalhado/12;
            }
            console.log('Valor do décimo terceiro R$'+DecimoTerceiro);
        case 4:
            console.log('Programa Encerrado');
            break
        default:
            break;
    }    
} while (menu != 4);

