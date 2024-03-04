const Fruta = function(nombre, color){
    this.nombre = nombre;
    this.color = color;
};

Fruta.prototype.get = function(){
    return `Una deliciosa fruta llamada ${this.nombre} de color ${this.color}`
};

const manzana = new Fruta('manzana','rojo');
const uva = new Fruta('uva','morado')
console.log(manzana.get());
console.log(uva.get());