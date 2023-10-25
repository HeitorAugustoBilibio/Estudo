class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;

    }
    falar(){
        console.log(`${this.nome} está falando`)
    }
}

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}
Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} está falando`)
}

const p1 = new Pessoa('Heitor', 'Bilibio');
const p2 = new Pessoa2('Astolfo', 'Mello');

console.log(p1.falar())
console.log(p2.falar())