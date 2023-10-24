//Super classe
function ContaBancaria(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

ContaBancaria.prototype.sacar = function(valor){
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }

    this.saldo -= valor;
    this.verSaldo()
};

ContaBancaria.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo()
};

ContaBancaria.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta}` +
    `Saldo: R$${this.saldo.toFixed(2)}`)
};


function ContaCorrente(agencia, conta, saldo, limite){
    ContaBancaria.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(ContaBancaria.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor){
    if((this.saldo + this.limite) < valor) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }

    this.saldo -= valor;
    this.verSaldo()
};

function ContaPoupanca(agencia, conta, saldo){
    ContaBancaria.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(ContaBancaria.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca


const cc = new ContaCorrente(11, 22, 0, 100)
cc.depositar(10)
cc.sacar(110)
cc.sacar(1)

const cp = new ContaPoupanca(12, 33, 0, )
cp.depositar(10)
cp.sacar(110)
cp.sacar(1)

//Polimorfismo: fazer metodos se comportarem de forma diferente em classes filhas de um mesmo pai

