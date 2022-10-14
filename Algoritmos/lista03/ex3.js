var e = require("prompt-sync")();
var primo
for (let i = 92;  i <= 1478 ; i++) {
    if (i == 0 || i == 1) {
        primo = 0;
    }else {
        primo = 1;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                primo = 0;
            }
        }
    }
    if (primo == 1) {
        console.log(i, 'é um número primo');
    }
}
