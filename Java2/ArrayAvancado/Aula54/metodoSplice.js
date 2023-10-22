//             -5          -4         -3      -2         -1
//              0          1         2         3          4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']


//Push
//nomes.splice(nomes.length, 0, 'Luiz');

//unshift
nomes.splice(2, 0, 'Luiz', 'Matheus')
console.log(nomes);

//nomes.splice(indice, delete, elem1, elem2, elem3);
//Pop
//const removidos = nomes.splice(-1, 1);

//Shift
//const removidos = nomes.splice(0, 1)