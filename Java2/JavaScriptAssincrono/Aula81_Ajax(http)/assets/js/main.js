// const request = obj =>  {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest ();
//         xhr.open(obj.method, obj.url, true) ;
//         xhr.send();
    
    
//         xhr.addEventListener('load', () => {
//             if(xhr.status >= 200 && xhr.status < 300){
//                 resolve(xhr.responseText);
//             } else {
//                 reject(xhr.statusText)
//             }
//         });
//     });
// };

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

 
    

    // const objConfig = {
    //     method: 'GET',
    //     url: href,
    // };


    async function carregaPagina(el){
        try{
            const href = el.getAttribute('href');
            const response = await fetch(href)
        
            if(response.status !== 200) throw new Error('ERRO 404!!!');
        
        
            const html = await response.text()
            CarregaResultado(html)
        } catch(e) {
            console.log(e)
        }
}
    // fetch(href)
    //     .then(response => {
    //         if(response.status !== 200) throw new Error('ERRO 404!!!');
    //         return response.text()
    //     })
    //     .then(html => CarregaResultado(html))
    //     .catch (e => console.log(e))

    

  
function CarregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}




fetch('pagina.html')
    .then(resposta => {
        if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO');
        return resposta.text();
    })
    .then(html => console.log(html))
    .catch(e => console.error(e))
    //.catch(e => console.warn(e))
