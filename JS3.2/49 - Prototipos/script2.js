const Animal = function(nombre){
    this.nombre = nombre;
}


Animal.prototype.hacerSonido = function(){
    console.log('Haciendo un sonido generico')
}

const perro = new Animal('Max');
perro.hacerSonido();



