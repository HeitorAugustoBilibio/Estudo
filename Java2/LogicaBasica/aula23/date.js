// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia) ; //01/01/1970 Timestamp unix ou época unix
// const data = new Date(2019, 3); // a, m, d, h, M, s, ms

function zeroAEsquerda (num) {
   return num>=10 ? num : `0${num}`
}

function formataData (data){
   const dia = zeroAEsquerda(data.getDate());
   const mes = zeroAEsquerda(data.getMonth() +1);
   const ano = zeroAEsquerda(data.getFullYear());
   const hora = zeroAEsquerda(data.getHours());
   const min = zeroAEsquerda(data.getMinutes());
   const seg = zeroAEsquerda(data.getSeconds());

   return `${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);


// const data = new Date('2019-04-20 20:15:59.100');
// console.log('Dia', data.getDate()); 
// console.log('Dia', data.getMonth() + 1); //Mês começa em zero
// console.log('Dia', data.getFullYear());
// console.log('Dia', data.getHours());
// console.log('Dia', data.getMinutes());
// console.log('Dia', data.getSeconds());
// console.log('Dia', data.getMilliseconds());
// console.log('Dia semana', data.getDay()); // 0 Domingo, - 6 Sábado
// console.log(Date.now());