
const simbol = '!@#$%&*()_-=+[]{}^~;:.,<>';

const rand = (min, max) => String(Math.floor(Math.random() * (max - min) + min));
const geraNumeros = () => String.fromCharCode(rand(48, 57));
const geraLetraMai = () => String.fromCharCode(rand(65, 90));
const geraLetraMin = () => String.fromCharCode(rand(97, 122));
const geraSimbolo = () => {
    const aleatorio = rand(0, simbol.length);
    return simbol[aleatorio];
}

export default function geraSenha (qnt, maiuscula, minuscula, numeros, simbolos){
    const senhaArray = [];
    qnt = Number(qnt);

    for(let i = 0; i < qnt; i++){
        maiuscula && senhaArray.push(geraLetraMai());
        minuscula && senhaArray.push(geraLetraMin());
        numeros && senhaArray.push(geraNumeros());
        simbolos && senhaArray.push(geraSimbolo());
    }

    return senhaArray.join('').slice(0, qnt);
}



