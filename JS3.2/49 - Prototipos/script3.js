//creacion de un prototipo usando funciones constructoras
function Vehiculo(marca, modelo){
    this.marca = marca;
    this.modelo = modelo;
}

Vehiculo.prototype.getter = function(){
    return `Vehiculo marca: ${this.marca}, modelo: ${this.modelo}`
}

const coche = new Vehiculo('Toyota','Corolla');
informacion=coche.getter();
console.log(informacion)