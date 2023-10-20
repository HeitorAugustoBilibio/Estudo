// Função definida com a palavra FUNCTION
// Possui uma variavel arguments que sustenta todos os argumentos enviados

// function funcao({nome, sobrenome, idade}){
//     console.log(nome, sobrenome, idade);
// };
// let obj = {nome: 'Luiz', sobrenome:"Otavio", idade: 25};
//-----------------------------------------------------------------------
// function funcao([valor1, valor2, valor3]){
//     console.log(valor1, valor2, valor3);
// };

// funcao(['Luiz', 'Oliveira', 25]);

// function conta(operador, acumulador, ...numeros){
//     for (let numero of numeros){
//         if (operador === '+') acumulador += numero;
//         if (operador === '-') acumulador -= numero;
//         if (operador === '/') acumulador /= numero;
//         if (operador === '*') acumulador *= numero;
//     }
//     console.log(acumulador)
// };

// conta('+', 1, 20,30,40,50)

//---------------------------------------------------------------
const conta = (...args) => { console.log(args);};
conta('+', 1, 20, 40, 50,);