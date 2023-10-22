//Valor por referencia
//                 0         1         2
//const nomes = new Array('Eduardo', 'Maria', 'Joana')
const nomes = ['Eduardo', 'Maria', 'Joana'];
//const novo = [...nomes];



console.log(nomes.length) //Numero de indices
nomes.unshift('Joao') //Cria indice no Começo
nomes.push('Wallace') //Cria indice no final
console.log(nomes);


//const removido = novo.pop(); //Remove do final
//const removido = novo.shift(); //Remove do começo
const novo = nomes.slice(0, -1); //remove o ultimo indce
console.log(novo);

// const pessoa = 'Luiz Otavio Miranda';
// const separado = pessoa.split(' '); //Trasforma em Array "Pessoa"
const pessoas = [ 'Luiz', 'Otavio', 'Miranda' ]
const pessoa = pessoas.join(' ')
console.log(pessoa)

