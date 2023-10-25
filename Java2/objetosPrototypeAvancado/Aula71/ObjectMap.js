const pessoas = [
    {id: 3, nome: 'Heitor'},
    {id: 2, nome: 'Gabriel'},
    {id: 1, nome: 'Raul'},
];

// const novaPessoas = {};
// for (const pessoa of pessoas){
//     const { id } = pessoa;
//     novaPessoas[id] = { ...pessoa }
// }

const novaPessoas = new Map()
for (const pessoa of pessoas){
    const { id } = pessoa;
    novaPessoas.set(id, {...pessoa})
}

// for (const pessoas of novaPessoas ){
//     console.log(pessoas)
// }

novaPessoas.delete(2)
console.log(novaPessoas)