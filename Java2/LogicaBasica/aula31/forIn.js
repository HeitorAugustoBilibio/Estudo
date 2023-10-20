// For In -> lê os indices ou as chaves dos objetos

const pessoa = {
    nome: 'Antonio',
    sobrenome: 'Bilibio',
    idade: 35
}

for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}

// console.log(pessoa.nome);
// console.log(pessoa['nome']);

// const frutas = ['uva', 'maça', 'pera'];

// for (let indice in frutas) {
//     console.log(frutas[indice])
// }

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])
// }