const numero = Number(prompt('Digite um Numero'));
const numeroTitulo= document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numero1 = numero
numeroTitulo.innerHTML += numero;
texto.innerHTML += `<p>A Raiz do seu numero é ${numero ** (1/2)}</p>`;
texto.innerHTML += `<p>O seu numero é um numero ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>O seu numero é NaN ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredonda pra cima ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredonda pra baixo ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Seu numero com 2 casas decimais ${numero.toFixed(2)}</p>`;



