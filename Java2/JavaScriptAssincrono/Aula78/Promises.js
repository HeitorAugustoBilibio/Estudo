function aleatorio(min, max){
    min *= 1000;
    max *= 5000
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
       if(typeof msg !== 'string' )reject(new Error('AQUI TEM ERRO EM'));
        
        setTimeout(()=> {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Conexão com BD', aleatorio(1, 3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando base no BD',  aleatorio(1, 3))
})
.then(resposta => {
    console.log(resposta);
    return esperaAi(222, aleatorio(1, 3))
})
.then(resposta => {
    console.log(resposta)
})
.then( () => {
    console.log("Eu serei o ultimo a ser exibido")
})
.catch(e => {
    console.log('ERRO', e)
});

console.log('Isso sera exibido antes de tudo')
