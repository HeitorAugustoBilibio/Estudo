//new Array(); []

//------------------Revisao-------------------------
// const pessoa1 = new Object();
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otavio';
// pessoa1.idade = 41;
// pessoa1.falarNome = function(){
//     return (`${this.nome} está falando seu nome`)
// };
// pessoa1.getDataNascimento = function(){
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };

// for (let chave in pessoa1){
//     console.log(pessoa1[chave])
// }
//----------------------------------------------------

//Factory Function / Constructor Function / Classe

//Factory Function
// function criaPessoa(nome,sobrenome){
//     return {
//         nome, 
//         sobrenome,
//         get nomeCompleto(){
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }

// const p1 = criaPessoa('Luiz', 'Otavio');
// console.log(p1.nomeCompleto)

//Constructor
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this) // NÃO DEIXA ALTERAR/DELETAR NADA
}

// {} <- this / New cria um novo obj e adc this ao obj criado
//p1 = {EnderecoMemoria} -> valor
//p1.EnderecoMemoria = {nome: 'Maria'}
//p1 = {novoEnderecoMemoria} NÃO PODE COM CONST
const p1 = new Pessoa('Luiz', 'Miranda');
p1.nome = 'Maria'
console.log(p1);
