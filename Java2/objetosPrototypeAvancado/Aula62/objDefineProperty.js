// defineProperty - defineProperties

function Produto(nome, preco, estoque){
    Object.defineProperty(this, 'estoque', { // Uma chave
        enumerable: true, //Mostra chave
        value: estoque, //valor
        writable: true, // pode alterar
        configurable: true // configuravel
    });
    Object.defineProperties(this, { //Varias Chaves
        nome: {
            enumerable: true, //Mostra chave
            value: nome, //valor
            writable: true, // pode alterar
            configurable: true // configuravel
        },
        preco: {
            enumerable: true, //Mostra chave
            value: preco, //valor
            writable: true, // pode alterar
            configurable: true // configuravel
        },
    });
}

const p1 = new Produto('Camiseta', 59, 3)
console.log(Object.keys(p1))

for (let chave in p1){
    console.log(chave)
}