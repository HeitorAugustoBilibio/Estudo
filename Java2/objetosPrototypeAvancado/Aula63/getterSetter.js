// defineProperty -> Getter and Setters

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', { // Uma chave
        enumerable: true, //Mostra chave
        //value: estoque, //valor
        //writable: true, // pode alterar
        configurable: true, // configuravel

        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if (typeof valor !== 'number'){
                throw new TypeError('Mensagem')
            }

            estoquePrivado = valor
        }

    });
}

function criaProduto(nome){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('coisa', '')
            nome = valor;
        }
    }
}
// const p1 = new Produto('Camiseta', 59, 3)
// console.log(p1);
// p1.estoque = 600
// console.log(p1.estoque)

const p2 = criaProduto('camiseta');
p2.nome = 'qualquer coisa'
console.log(p2.nome)