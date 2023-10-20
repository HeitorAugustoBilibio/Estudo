const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let sec = 0;
let interval;
function cronometro(sec) {
    let data = new Date(sec * 1000)

    return data.toLocaleTimeString('pt-Br', {
        hour12: false,
        timeZone: 'GMT'
    });

}

function start() {
    interval = setInterval(function () {
        sec++;
        relogio.innerHTML = cronometro(sec)
    }, 1000)
}

document.addEventListener('click', (e) => {
    const el = e.target;

    if (el.classList.contains('iniciar')) {
        relogio.style.color = 'black'
        clearInterval(interval);
        start()
    }

    if (el.classList.contains('pausar')) {
        clearInterval(interval);
        relogio.style.color = 'red';
    }

    if (el.classList.contains('zerar')) {
        clearInterval(interval);
        relogio.innerHTML = '00:00:00';
        sec = 0;
        relogio.style.color = 'black';
        
        
    }
});


// iniciar..el('click', function(event){
//     start()
// })
// pausar.addEventListener('click', function(event){
//     clearInterval(interval);
// })
// zerar.addEventListener('click', function(event){
//     sec = 0
//     relogio.innerHTML = cronometro(sec)
// })