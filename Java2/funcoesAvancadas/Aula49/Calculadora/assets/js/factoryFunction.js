// Factory Function retorna um Objeto

// function criaCalculadora(){
//     return{
//         display: document.querySelector('.display'),

//         inicia(){
//             this.clickBotoes();
//             this.pressionaEnter();
//         },

//         pressionaEnter() {
//             this.display.addEventListener('keyup', e => {
//                 if (e.keyCode === 13){
//                     this.realizaConta();
//                 }
//             });
//         },

//         realizaConta() {
//             let conta = this.display.value;

//             try {
//                 conta = eval(conta);

//                 if(!conta){
//                      alert('conta invalida') 
//                      return;
//                 }

//                 this.display.value = String(conta)
//             }catch(e){
//                 alert('conta invalida')
//                 return 
//             }
//         },

//         clearDisplay(){
//             this.display.value = '';
//         },

//         apagaUm(){
//             this.display.value = this.display.value.slice(0, -1);
//         },


//         clickBotoes(){
//             //this --> calculadora
//             document.addEventListener('click', e => {
//                 const el = e.target;


//                 if(el.classList.contains('btn-num')){
//                     this.btnParaDisplay(el.innerText);
//                 }

//                 if(el.classList.contains('btn-clear')){
//                     this.clearDisplay();
//                 }

//                 if(el.classList.contains('btn-del')){
//                     this.apagaUm();
//                 }

//                 if(el.classList.contains('btn-eq')){
//                     this.realizaConta()

//                 }
//             })
//         },

//         btnParaDisplay(valor){
//             this.display.value += valor;
//         },
//     };
// }

// const calculadora = criaCalculadora()
// calculadora.inicia();

//Crie a Versão Construtora
//OBS: NÃO COPIE E COLE E VÁ ARRUMANDO VOCÊ PRECISA APRENDE ANIMAL DE TETA
//não se ache um merda por não ter conseguido você já está cansado amanhã/hoje tente novamente
//Você consegue

function Calculadora() {

    this.display = document.querySelector('.display')

    this.inicia = () => {
        this.clickBotoes();
        this.pressioneEnter();
    }

    this.clickBotoes = () => {
        document.addEventListener('click', e => {
            const el = e.target

            if (el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);

            if (el.classList.contains('btn-clear')) this.clearDisplay();

            if (el.classList.contains('btn-del')) this.apagaUm();

            if (el.classList.contains('btn-eq')) this.realizaConta()

        })
    }

    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
        this.display.focus();
    }
    this.clearDisplay = () => this.display.value = '';

    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);
    

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if (!conta) {
                alert('conta invalida')
                return;
            }

            this.display.value = String(conta)
        } catch (e) {
            alert('conta invalida')
            this.display.value = '';
            return
        }
    }

    this.pressioneEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        });
    }


}

const calculadora = new Calculadora();
calculadora.inicia();