//Filter, Map, Reduce
//Filter - Filtrar Array
//Map - Modifica Array
//Reduce - Reduz Array pra um único valor

//----------------------------------Filter-------------------------------
// Sempre retorna um Array, com a mesma quantidade de elementous ou menos.

// Retorne os números maiores que 10 - Atividade
//const numeros  = [5, 50, 80, 1, 2, 3, 55, 8, 7, 11, 15, 22, 27];


// const numerosFiltrados = numeros.filter(valor => valor > 10)
// console.log(numerosFiltrados)

//-------mesma coisa mais longa-------------- 
// for (let valor of numeros){
//     if (10 < valor) {
//          console.log(valor)
//     }
// }
//-------------------------------------------- 

// Retorna as Pessoas que tem o nome com 5 letras ou mais
// Retorna as Pessoas com mais de 50 anos
// Retorna as Pessoas cujo o nome termina com a
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5)
const pessoasVelhas = pessoas.filter(obj => obj.idade >50)
const pessoasTerminaA = pessoas.filter(function(valor){
    return valor.nome.toLowerCase().endsWith('a');
});

//console.log(pessoasComNomeGrande)
// console.log(pessoasVelhas)
console.log(pessoasTerminaA)
