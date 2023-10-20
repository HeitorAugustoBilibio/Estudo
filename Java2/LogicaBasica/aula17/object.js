function criarPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade}
}

//const pessoa1 = criarPessoa('Luis', 'Otavio', 25)

const pessoa1 = {
    nome: 'Matheus',
    sobrenome: 'Miranda',
    idade: 18,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    },

    incrementa() {
        this.idade++;
    }
};

pessoa1.fala();
    