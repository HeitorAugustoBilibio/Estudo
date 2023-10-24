const falar = {
    falar(){
        console.log(`${this.nome} está falando`)
    },
}

const beber = {
    beber(){
        console.log(`${this.nome} está bebendo`)
    },
}

const comer = {
    falar(){
        console.log(`${this.nome} está comendo`)
    },
}

//const pessoaPrototype = { ...falar, ...beber, ...comer};
const pessoaPrototype = Object.assign({}, falar, beber, comer)

function criaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('Otavio', 'Mario')
console.log(p1.beber())

const p2 = criaPessoa('Maria', 'A.')
console.log(p2)