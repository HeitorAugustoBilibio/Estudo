exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome"> <br>
    Outro campo: <input type="text" name="aquioutrocampo">
    <button>Enviar</button>
    </form>
    `);
}

exports.trataPost = (req, res) => {
    res.send('EI sou sua nova rota de post')
}