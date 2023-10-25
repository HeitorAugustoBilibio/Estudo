class DispositivoEletronico {
    constructor(nome, ){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado) {
            console.log(`${this.nome} já esta ligado`)
            return;
        }

        this.ligado = true;
    }
    desligar(){
        if(!this.ligado) {
            console.log(`${this.nome} já esta desligado`)
            return;
        }

        this.ligado = false;
    }
}

class Smarthphone extends DispositivoEletronico {
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;

    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }

    ligar(){
        console.log("Olha você alterou o método ligar")
    }
}

const s1 = new Smarthphone('Sansung', 'Preto', 'S10')

s1.ligar()
console.log(s1)

const t1 = new Tablet('iPad', true);
t1.ligar()
t1.ligar()
console.log(t1)
