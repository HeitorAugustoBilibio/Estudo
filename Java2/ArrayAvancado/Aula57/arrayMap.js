//Filter, Map, Reduce
//Filter - Filtrar Array
//Map - Modifica Array
//Reduce - Reduz Array pra um único valor

//----------------------------------Map-------------------------------


// Dobre os Números - Atividade
// const numeros  = [5, 50, 80, 1, 2, 3, 55, 8, 7, 11, 15, 22, 27];
// const numerosDobro = numeros.map(valor => valor * 2);
// console.log(numerosDobro)

//  Para cada elemento:
//  Rettorne apenas uma String com o nome da pessoa
//  Remova apenas a chave nome do objeto
//  Adicione uma chave ID em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

// const arrayNome = pessoas.map(obj => obj.nome)
// console.log(arrayNome)

// const nomeRemove = pessoas.map(obj => ({idade: obj.idade}))
// console.log(nomeRemove)

const chaveId = pessoas.map(function(obj, indice) {
    const newObj = {...obj}
    newObj.id = indice + 1;
    return newObj;
})
console.log(chaveId)
console.log(pessoas)