
/*
 Luiz Otávio Miranda tem 30 anos, pesa 84 kg
 tem 1.8 de altura e seu IMC é de 25.925925925925924
 */

const nome = "Luiz Otávio";
const sobrenome = "Miranda";
const idade = 24;
const peso = 84;
const alturaM = 1.80;


let imc = peso / (alturaM * alturaM);
let data = new Date();
let year = data.getYear(); 
let anoNasc = (year + 1900) - idade

console.log(`${nome} ${sobrenome} nasceu em ${anoNasc}  tem  ${idade} anos e seu imc é ${imc}`);

