const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome"> <br>
    Outro campo: <input type="text" name="aquioutrocampo">
    <button>Enviar</button>
    </form>
    `);
});

app.get('/testes/:id_usuarios?/:parametro?', (req, res) => {
    // params = /profile/3/4/5
    // query =  /profile/?chave1=valor1&chave2=valor2
    //
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.nome);
});

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`o que você me enviou foi ${req.body.aquioutrocampo}`)
})

app.listen(3000, () => {
    console.log("Acessar http://localhost:3000")
    console.log("Servidor executando na porta 3000");
});