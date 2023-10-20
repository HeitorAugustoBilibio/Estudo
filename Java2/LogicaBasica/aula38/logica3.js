//Escreva uma função que receba um número e
//retorne o seguinte
//Numero divisivel por 3 = Fizz
//Numero divisivel por 5 = Buzz
//Numero divisivel por 3 e 5 FizzBuzz
//Numero NÃO é divisivel por 3 e 5 = retorna o próprio número
//Checar se o número é realmente um número = Retorna o próprio número
//Use a função com numeros de 0 a 100

// function divisivel(x){
//     if(Number.isInteger(x / 3 && x / 5)){
//         console.log(`FizzBuzz`)
//     } else if(Number.isInteger(x / 5)){
//         console.log(`Buzz`)
//     } else if(Number.isInteger(x / 3 )){
//         console.log(`Fizz`)
//     } else {
//         console.log(`Não é divisivel por 3 nem por 5`)
//     }
//     if (Number.isInteger(x)){
//         console.log(`${x} é um Número`)
//     } else {
//         console.log(`${x} não é um numero`)
//     }
// }

// for (let indice = 0; indice<=100; indice++){
//     divisivel(indice)
//     console.log("-----------------------------")
// }


//Resposta Professor

function FizzBuzz(numero){
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

console.log('a', FizzBuzz('a'))
for (let i = 0; i <= 100; i++) {
    console.log(i, FizzBuzz(i))
    console.log('____________________')
}




