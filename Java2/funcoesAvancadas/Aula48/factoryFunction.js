//Factory Function (função fabrica) ou Método (Essa aula)
//Construct Function (Função construtora) (Aula posterior)
function criarPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}` 
        },

        //Setter
        set nomeCompleto(valor){
            valor = valor.split (' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
            console.log(valor)
        },

        fala(assunto){
            return `${this.nome} está falando sobre ${assunto}.`;
        },
        altura: altura,
        peso: peso,
        //Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
};

const p1 = criarPessoa('Luiz', 'Rodolfo', 1.76, 60)
const p2 = criarPessoa('João', 'Roberto', 1.86, 90)
const p3 = criarPessoa('Maria', 'Moro', 1.68, 55)

console.log(p1.imc)
console.log(p2.imc)
console.log(p3.imc)
