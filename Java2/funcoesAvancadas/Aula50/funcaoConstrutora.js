//Função construtora --> Objetos
//Função fabrica --> Objetos
// Construtora --> Pessoa (new)

function Pessoa(nome, sobrenome){
    //Private
    const ID = 123456;
    const metodoInterno = function(){

    };

    //Atributos ou métodos públicos 
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ':Sou um método')
    }
}

const p1 = new Pessoa('Luiz', 'Otavio')
const p2 = new Pessoa('Maria', 'Oliveira')

p1.metodo();