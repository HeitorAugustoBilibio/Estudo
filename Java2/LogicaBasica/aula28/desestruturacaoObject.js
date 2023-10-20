const pessoa = {
    nome: 'Astolfo',
    sobrenome: 'Ronaldo',
    idade: 65,
    endereco: {
        //rua: 'Av Brasil',
        numero: 165
    }
};

//Atribuição via desistruturação
const {nome, sobrenome, endereco: {rua = 'não existe', numero}, ...resto } = pessoa;
console.log(nome, sobrenome, rua, numero, resto)