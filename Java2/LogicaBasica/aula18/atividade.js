function nomeAleatorio() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    const pessoas = [];

    // form.onsubmit = function(evento) {
    //     evento.preventDefault();
    //     alert(1);
    //     console.log('foi enviado')
    // };

    function recebeEventoForm(evento) {
        evento.preventDefault();
       const nome = form.querySelector('.nome');
       const sobrenome = form.querySelector('.sobrenome');
       const peso = form.querySelector('.peso');
       const altura = form.querySelector('.altura');
       
        let novaPesosas  = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso : peso.value,
            altura : altura.value
       };

       pessoas.push(novaPesosas)

       console.log(pessoas)
       document.querySelector('.resultado').innerHTML = `<p>${nome.value},${sobrenome.value},${peso.value},${altura.value}</p>`
       
    }

    
    

    form.addEventListener('submit', recebeEventoForm);
}
nomeAleatorio();