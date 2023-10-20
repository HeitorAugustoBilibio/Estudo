//Global

function retornaFuncao(nome){
    
    return function(){
        return nome
    }
}
//dir = mostra o closures no console do navegador
//O que é o closure: Nesta função o closure dela seria 'Luiz', pois ela não encontrou a variavel no escopo dela
//então procurou no pai desta função e achou a variavel
const funcao = retornaFuncao('Astolfo')
const funcao2 = retornaFuncao('Robaldo')
console.dir(funcao)//clorure = Astolfo
console.dir(funcao2)//Closure = Robaldo

console.log(funcao(), funcao2())