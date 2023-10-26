function aleatorio(min = 0, max = 3) {
    min *= 1000;
    max *= 3000
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO SEU FDP, ESCREVE ESSA MERDA DIREITO')
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}   

// esperaAi('Fase1', aleatorio())
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase2', aleatorio())
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperaAi('Fase3', aleatorio())
//     })
//     .then(fase => {
//         console.log(fase)
//         return fase;
//     })
//     .then(fase =>{
//         console.log(`Terminamos na ${fase}`)
//     })
//     .catch(e => console.log(e));

async function executa(){
    try{
        const fase1 = await esperaAi('Fase1', aleatorio())
        console.log(fase1);
    
        const fase2 = await esperaAi('Fase2', aleatorio())
        console.log(fase2);
    
        const fase3 = await esperaAi(2, aleatorio())
        console.log(fase3);
    
        console.log('Terminamos na fase: ', fase3)
    } catch(e) {
        console.log(e)
    }       
}

executa();

const teste2 = esperaAi('qlq', 5000);
console.log(teste2)//  executado antes da promise atribuit valor
//ou seja não foi usado then nem await

/*
 pending -> pendente
 fullfilled -> resolvida
 rejected  -> rejeitada 
 */