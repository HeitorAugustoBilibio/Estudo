const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Continue continua para a proxima interação
//Break sai do laço

for (let i in numeros){
    let numero = numeros[i];
    if (numero === 2 ){
        console.log('pulei o numero 2')
        continue;
    }

    console.log(numero);
    if (numero === 7 ){
        console.log('7 encontrado, saindo');
        break;
    }
   
}