//A cada vez que chamar a função geradora
//Irá retorna um valor diferente definido por ***yield***

function* geradora1(){
    //Codigo qualquer
    yield 'Valor1';
    //Codigo qualquer
    yield 'Valor2';
    //Codigo qualquer
    yield 'Valor3';
    
}

// const g1 = geradora1();
// for (let valor of g1){
//     console.log(valor)
// }

function* geradora2(){
    let i = 0;

    while(true){
        yield i;
        i++;
    }
}
// const g2 = geradora2();
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)

function* geradora3(){
    yield 1
    yield 2
    yield 3
    yield 4
}

function* geradora4(){
    yield* geradora3();
    yield 5
    yield 6
}

const g4 = geradora4();

function* geradora5(){
    yield function(){
        console.log('Vim do y1')
    };

    return function(){
        console.log('Vim do return')
    }
    
    // ...

    yield function(){
        console.log('Vim do y2')
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1()
func2()