// IIFE --> Immediately invoked function expression

(function(idade, peso, altura){
    const sobrenome = 'Miranda';
    function criarNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criarNome('Luiz'));
    }

    falaNome();
    console.log(idade, peso, altura)
})(18, 60, 1.76);