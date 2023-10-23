/*
Object.value
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

--------------Já vimos-----------------------
Object.keys (retorna as chaves)
Object.freeze (Congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

/*------------------ Object.assign -----------------
const produto = {nome: 'Produto', preco: 1.8}
const outraCoisa = Object.assign({}, produto, {material: 'aluminio'})//Copia outro Obj

outraCoisa.nome = "Luiz Otavio"
outraCoisa.preco = 2.6
console.log(produto)
console.log(outraCoisa)
*/
/*---------------------Object.getOwnPropertyDescriptor-----------------------
const produto = {nome: 'Produto', preco: 1.8}
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')) //Mostra as configurações
produto.nome = 'Outra cosa'
delete produto.nome
console.log(produto)
*/

const produto = {nome: 'Produto', preco: 1.8, material: 'aluminio'}
console.log(Object.values(produto)) // Pega apenas os valores
console.log(Object.entries(produto)) // Trasforma cada chave e valor em  Array

for ([chave, valor, material] of Object.entries(produto)){
    console.log(chave, valor, material)
}