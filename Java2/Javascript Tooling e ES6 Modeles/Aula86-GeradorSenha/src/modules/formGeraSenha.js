    import geraSenha from "./geradores";


    const senhaGerada = document.querySelector('.senha-gerada');
    const qntCaracteres = document.querySelector('.qntCaracteres');
    const chkMaiusculas = document.querySelector('.chk-maiuscula');
    const chkMinusculas = document.querySelector('.chk-minusculas');
    const chkNumeros = document.querySelector('.chk-numeros');
    const chkSimbolos = document.querySelector('.chk-simbolos')
    const botao = document.querySelector('.gerar-senha');

    export default () => {
        botao.addEventListener('click', () => {
            senhaGerada.innerHTML = gera();
        });
    };

    function gera(){
        const senha = geraSenha(
            qntCaracteres.value,
            chkMaiusculas.checked,
            chkMinusculas.checked,
            chkNumeros.checked,
            chkSimbolos.checked
        );
        return senha || 'Nada selecionado.';
    }