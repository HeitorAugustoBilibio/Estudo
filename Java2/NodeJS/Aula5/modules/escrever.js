const fs = require('fs').promises;

module.exports = (caminho, dados) =>{
    fs.writeFile(caminho, dados, {flag: 'w'}); //APAGA
    //fs.writeFile(caminho, dados, {flag: 'a'}); ACRESCENTA
}

