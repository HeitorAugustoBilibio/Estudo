
function promises(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Ei sou a Promise');
            resolve();
        }, 2000)
    })
}

export default async function(){
    await promises();
    console.log('Terminou')
}