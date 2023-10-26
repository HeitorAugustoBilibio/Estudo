function aleatorio(min, max){
    min *= 1000;
    max *= 3000
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
       
        
        setTimeout(()=> {
            if(typeof msg !== 'string' ){
                reject('CAI NO ERRO SEU FDP, ESCREVE ESSA MERDA DIREITO') 
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

function baixaPagina(){
    const emCache = true;
    if(emCache){
        return Promise.resolve('Pagina em cache')
    } else{
        return esperaAi('Baixei a pagina', 3000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO', e));


// Promises.all
// Promises.race
// Promises.resolve
// Promises.reject

// const promises = [
//     //'Primeiro valor',
//     esperaAi('Promises1', aleatorio(1, 5)),
//     esperaAi('Promises2', aleatorio(1, 5)),
//     esperaAi('Promises3', aleatorio(1, 5)),
//     esperaAi( 1000, aleatorio(1, 5)),
//     //'Outro valor'


// ];

// Promise.race(promises)
//     .then(function(valor){
//     console.log(valor)
//     })
//     .catch(function(erro){
//         console.log(erro)
//     })