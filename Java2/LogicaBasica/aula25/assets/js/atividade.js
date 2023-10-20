//  zeroAEsquerda = num =>  num>=10 ? num : `0${num}`;

// function formatHour (data){
//     const hora = zeroAEsquerda(data.getHours());
//     const min = zeroAEsquerda(data.getMinutes());
//     const seg = zeroAEsquerda(data.getSeconds());
//     return `${hora}:${min}:${seg}`;
//  }

// function getWeekDay (diaSemana){
//     let dayText;
//     switch (diaSemana){
//         case 0:
//             dayText = 'Domingo';
//             break
//         case 1:
//             dayText = 'Segunda-Feira';
//             break
//         case 2:
//             dayText = 'Terça-Feira';
//             break
//         case 3:
//             dayText = 'Quarta-Feira';
//             break
//         case 4:
//             dayText = 'Quinta-Feira';
//             break
//         case 5:
//             dayText = 'Sexta-Feira';
//             break
//         case 6:
//             dayText = 'Sábado';
//             break
//         default:
//             dayText = 'erro';
            
//     }
//     return dayText
// }
// function getMonthNumber (diaMonth){
//     let monthText;
//     switch (diaMonth){
//        case 0:
//             monthText = 'Janeiro';
//             break
//         case 1:
//             monthText = 'Fevereiro';
//             break
//         case 2:
//             monthText = 'Março';
//             break
//         case 3:
//             monthText = 'Abril';
//             break
//         case 4:
//             monthText = 'Maio';
//             break
//         case 5:
//             monthText = 'Junho';
//             break
//         case 6:
//             monthText = 'Julho';
//             break
//         case 7:
//             monthText = 'Agosto';
//             break
//         case 8:
//             monthText = 'Setembro';
//             break
//         case 9:
//             monthText = 'Outubro';
//             break
//         case 10:
//             monthText = 'Novembro';
//             break
//         case 11:
//             monthText = 'Dezembro';
//             break
//         default:
//             monthText = 'Erro mês';
//     }
//     return monthText;
// }

// const data = new Date();
// const dia = data.getDate();
// const year = data.getFullYear();
// const diaSemana = data.getDay(); 
// const diaMonth = data.getMonth();
// const monthText = getMonthNumber(diaMonth);
// const dayText = getWeekDay(diaSemana);
// const hora = formatHour(data);

// const lugarData = document.querySelector('#lugarData');
// const msg = `${dayText}, ${dia} de  ${monthText} de ${year} ${hora}`;
// lugarData.innerHTML = msg;

const lugarData = document.querySelector('#lugarData');
const data = new Date();
lugarData.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full'})
// const opcoes = {
//     dateStyle: 'full',
//     //timeStyle: 'short' SAIU DE USO
// };

