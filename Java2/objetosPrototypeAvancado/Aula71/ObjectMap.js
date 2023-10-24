const pessoas = [
    {id: 3, nome: 'Heitor'},
    {id: 2, nome: 'Gabriel'},
    {id: 1, nome: 'Raul'},
];

const novaPessoas = {};
for (const pessoa of pessoas){
    const { id } = pessoa;
    novaPessoas[id] = { ...pessoa }
}
console.log(novaPessoas)