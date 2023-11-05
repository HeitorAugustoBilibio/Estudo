
exports.paginaInicial = (req, res) => {
    // req.flash('info', 'Olá Mundo');
    // req.flash('error', 'ERROOO');    flash => Só pode ser chamado uma unica vez, após deve ser criado dnv
    // req.flash('success', 'SUCESSO');
    //                                  session => Pode ser chamado enquanto a sessão estiver disponivel 
    res.render('index', {
        titulo: 'Este sera o Titulo da pagina',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    })
    return
}

exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}