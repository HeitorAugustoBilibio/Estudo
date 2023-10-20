function retornaHora (data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instancia de Date.')
    }

    if (!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-Br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });


}

try {
    const data = new Date('01-01-1970 12:48:12');
    const hora = retornaHora();
    console.log(hora);
}catch(e){
    //console.log(e)
    //Tratar erro
} finally {
    console.log('Tenha um bom dia')
}


// try{
//     //é executado quando não há erros
//     console.log(a)
//     console.log('Abri um Arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo')
// } catch(e) {
//     //é executado quando há erros
//     console.log('Tratando o erro')
// } finally{
//     //Sempre é executado
//     console.log('FINALLY: eu sempre sou executado');
//}