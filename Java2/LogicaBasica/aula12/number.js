//IEEE 754 - 2008
let num1 = 1
let num2 = 2.532

//num1 += ((num1 * 100) + (num2 * 100)) / 100; // 0.8
//num1 += ((num1 * 100) + (num2 * 100)) / 100; // 0.9
//num1 += ((num1 * 100) + (num2 * 100)) / 100; // 1.0

num1 += num2; //0.8
num1 += num2; // 0.9
num1 += num2; // 1.0

num1 = Number(num1.toFixed(2));

num1 = parseFloat(num1.toFixed(2));
console. log(numl);
console. log(Number.isInteger(1.00));


//console.log(num1.toString()+ num2);
//num1 = num1.toString();
//Numero binario
//console.log(num1.toString(2));
//Casa de numeros decimais
//console.log(num2.toFixed(2));
//verifica se o numero é inteiro
//onsole.log(Number.isInteger(num1))

console.log(typeof num1)


