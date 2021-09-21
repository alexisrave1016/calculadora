class Display {
    constructor(displayValorAnterior,displayValorActual){
        this.displayValorActual=displayValorActual;
        this.displayValorAnterior=displayValorAnterior;
        this.operaciones= new Operaciones();
        this.tipoOperaciones= undefined;
        this.valorActual='';
        this.valorAnterior='';
        this.signos= {
            sumar:'+',
            restar:'-',
            multiplicar:'x',
            dividir:'÷'
        }
    }

    borrar(){
        this.valorActual=this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo(){
        this.valorActual=''
        this.valorAnterior=''
        this.tipoOperaciones= undefined;
        this.imprimirValores();
    }

    computar(tipo){
        this.tipoOperaciones !=='igual' && this.calcular();
        this.tipoOperaciones= tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual='';
        this.imprimirValores();
    }

    agregarNumero(numero){
        if(numero=== '.' && this.valorActual.includes('.'))return
        this.valorActual= this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores(){
        this.displayValorActual.textContent= this.valorActual;
        this.displayValorAnterior.textContent= `${this.valorAnterior}${this.signos[this.tipoOperaciones] || ''}`;
    }

    calcular(){
        const valorAnterior= parseFloat(this.valorAnterior);
        const valorActual= parseFloat(this.valorActual);

        if( isNaN(valorActual) || isNaN(valorAnterior))return
        this.valorActual= this.operaciones[this.tipoOperaciones](valorAnterior, valorActual);
    }
}