import validator from "validator";

export default class Contatos {
    constructor(formClass){
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events(){
        this.form.addEventListener("submit", (e) => {
          e.preventDefault();
          this.valida(e)
        });
    }

    valida(e){
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]')
        let error = false;

        if(!validator.isEmail(emailInput.value)){
            alert('TA ERRADO ESSE EMAIL EM')
            error = true;
        }
        if(!error) el.submit()
    }
}