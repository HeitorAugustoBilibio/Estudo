import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';
import Contatos from './modules/Contatos';

//Login
const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');

login.init();
cadastro.init();

//Contato

const contato = new Contatos('.form-contato');

contato.init()