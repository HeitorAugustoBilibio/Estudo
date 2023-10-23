/*
Javascript é baseado em protótipos para passar propriedades e métodos
de um objeto para outro.

Definição de protótipo
Protótipo é O termo usado para se referir ao que foi criado pela
primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (_proto_)
que vem da propriedade prototype da função construtora que foi usada para
criá-lo. Quando tentamos acessar um membro de um objeto, primeiro O motor
do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia
de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

// Construtora -> molde(classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto =  function() {
    return this.nome + ' ' + this.sobrenome;
} 

//Instancia
const p1 = new Pessoa('Luiz', 'O.') // Pessoa <- Função Construtora
const p2 = new Pessoa('Maria', 'O.') // Pessoa <- Função Construtora
const data = new Date(); // <-- Date  = Função Construtora

console.dir(p1)
console.dir(p1.nomeCompleto())