const path = require('path');
const caminhoArquivo =  path.resolve(__dirname, 'test.json');
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')


// const pessoas = [
//     {nome: 'João'},
//     {nome: 'Heitor'},
//     {nome: 'Gabriel'},
//     {nome: 'Raul'},
// ];
// const json = JSON.stringify(pessoas, '', 2);
// escreve(caminhoArquivo, json)

 async function lerArquivo (caminho){
     const dados = await ler(caminho)
     renderiza(dados);
}

function renderiza(dados){
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val.nome));
}
lerArquivo(caminhoArquivo)


   
