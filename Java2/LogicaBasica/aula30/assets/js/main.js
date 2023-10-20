const container = document.querySelector('.container');



// const div = document.createElement('div');
// const p = document.createElement('p');
// const footer = document.createElement('footer');
// const section = document.createElement('section');
//                      0                  1                  2                   3
const elementos = [
    { frase: "frase1", tag: 'p'}, 
    {frase: "frase2", tag: 'div'}, 
    {frase: "frase3", tag: 'section'}, 
    {frase: "frase4", tag: 'footer'}
]
 
const colocaElementosNaTela = function(){
    for(let i = 0; i < elementos.length; i++){
        const { tag, frase } = elementos[i];

        elementoCriado = document.createElement(tag);
        elementoCriado.innerText = frase;
        container.appendChild(elementoCriado);
    }
}

colocaElementosNaTela();
//   for(let i = 0; i < array.length; i++) {

//     function criaElemento(array){
//         return document.createElement(array[i][tag]);
//     }
//     tag = criaElemento(array[i]['tag']);
    

//     p.innerHTML = (array[i]['frase']);
//     div.innerHTML = (array[i]['frase']);
//     footer.innerHTML = (array[i]['frase']);
//     section.innerHTML = (array[i]['frase']);

//     lugar.appendChild(p);
//     lugar.appendChild(div);
//     lugar.appendChild(footer);
//     lugar.appendChild(section);
//   }
  //lugar.innerHTML = "vsfd fdp"

//   for(obj of array) {
//     console.log(obj.frase);
//  }

//Eu de amanhã SLA ESSA POHA DO KRL RESOLVA SEU MERDA SEM NEXO

