/*--------------------------Logica-------------------------
CPF 106 609 919 - 77

1X 0X 6X 6X 0x 9x 9x 1x 9x      
10 9  8  7  6  5  4  3  2
10 0 48 42  0 45 36  3 18 = 202 

11 - (202 % 11) = 7 (Primeiro digito)
//Se o numero for maior que 9, consideramos 0 

1X 0X 6X 6X 0x 9x 9x 1x 9x 7x
11 10 9  8  7  6  5  4  3  2
11 0 54 48  0 54 45  4 27 14 = 257

11 - (257 % 11) = 7 (Segundo digito)
//Se o numero for maior que 9, consideramos 0 

106.609.919.77 === 106.609.919.77

*/

function ValidaCPF(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function (){
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    
    
    const novoCPF = cpfParcial + digito1 + digito2
    return novoCPF === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    let total = cpfArray.reduce((ac, val) => {

        ac += (regressivo * Number(val))
        regressivo --
        return ac;
    }, 0)

    const digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito);
}

ValidaCPF.prototype.isSequencia = function(){
    const sequencia =  this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF('106-609-919-77');
console.log(cpf.valida())