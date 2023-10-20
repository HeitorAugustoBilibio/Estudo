//Declaração de função (Function hoisting)
falaOi();//<---Hoisting


function falaOi(){
    console.log('Oie');
};

//First-class objects (Objetos de primeira classe)
//Function Expression
const souUmDado = function (){
    console.log('Sou um dado.');
};
souUmDado();

// function executaFuncao(funcao){
//     console.log("Vou executar sua função souUmDado")
//     funcao();
// }
// executaFuncao(souUmDado);

//Arrow Function
const FuncaoArrow = () => {console.log('Sou uma Arrow Function')};
FuncaoArrow();

//Dentro de um Objeto 

const obj = {
    falar(){
        console.log('Estou falando');
    }
};
obj.falar();

