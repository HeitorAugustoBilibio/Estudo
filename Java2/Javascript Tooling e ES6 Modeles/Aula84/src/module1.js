export const nome = 'Heitor';
export const sobrenome = 'Bilibio';
export const idade = 30;

export function soma(x, y){
    return x + y;
}

export default class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
//export {nome as default, sobrenome, idade }


