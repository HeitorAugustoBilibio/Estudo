
exports.paginaInicial = (req, res) => {
    // req.flash('info', 'Olá Mundo');
    // req.flash('error', 'ERROOO');    flash => Só pode ser chamado uma unica vez, após deve ser criado dnv
    // req.flash('success', 'SUCESSO');
    res.render('index')
    return
}

exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}