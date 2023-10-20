//return
//Retorna um valor
//Termina a função


// function criaPessoa(nome, sobrenome){
//     return {nome, sobrenome};
// }

// const p1 = criaPessoa('Luiz', 'Inacio')
// const p2 = {
//     nome: 'Nome',
//     sobrenome:'Ruim'
// }

// console.log(p1, p2)


// ***************Exemplo Boneca Russa ***************
// function falaFrase(comeco) {
//     function falaResto(resto){
//         return comeco + ' ' + resto;
//     }

//     return falaResto;
// }

// const olaMundo = falaFrase('Olá')
// console.log (olaMundo('Mundo'))

function criaMultiplicador (multiplicador){
    //Multiplicador
    return function (n){
        //Número
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
console.log(duplica(50))


