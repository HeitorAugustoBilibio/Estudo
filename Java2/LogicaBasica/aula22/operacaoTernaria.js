// (Condição) ? 'Valor verdadeiro' : 'Valor falso';
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario Normal';

const corUsuario = 'pink';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao)