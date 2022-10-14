//For In é uma propiedade que recebe valores tanto de objetos quanto de Arrays

const user = {
    name : 'Marcelo',
    idade : '36'
}

for (const index in user) {
    console.log(user[index]);
}



const two = [
    "Marcio", "10"
]
for (const i in two) {
    console.log(two[i]);
}