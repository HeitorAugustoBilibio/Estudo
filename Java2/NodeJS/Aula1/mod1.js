class Pessoa {
    constructor(nome){
        this.nome = nome
    }
}


const nome = 'Heitor';
const sobrenome = 'Bilibio'

module.exports = {
    nome, sobrenome, Pessoa
}

// exports = {
// NÃO FUNCIONA
// }




// const nome = 'Heitor'
// const sobrenome = 'Bilibio'

// const falaNome = () => nome + ' ' + sobrenome

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome

// this.qualquercoisa = 'o que eu quiser exporta'

