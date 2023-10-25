class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    //Método de Instância
    aumentarVolume(){
        this.volume += 2;
    }
    //Método de Instância - referente a INSTÂNCIA
    diminuiVolume(){
        this.volume -= 2;
    }

    //Método estático - referente a CLASSE
   static soma(x, y){
       return x + y
    }
}

const controle = new ControleRemoto('LG');
controle.aumentarVolume()
//controle.trocaPilha() -> ERRO
console.log(controle)
console.log(ControleRemoto.soma(1,2));
