//For Of é uma propriedade que recebe somente valores em Arrays

/*const one = {
    name : 'Marcelo',
    idade : '36'
}

for (const index in user) {
    console.log(user[index]);
}
----vai dar erro*/


const two = [
    "Marcio", "10"
]
for (const i in two) {
    console.log(two[i]);
}