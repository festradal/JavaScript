function evaluarCompra(){
    let elementoRespuesta = document.getElementById("desicion");

    let elementoPrecio = document.getElementById("textoPrecio");
    let precio = elementoPrecio.value;

    if(precio<5){
        elementoRespuesta.textContent = "Compra dos cartones de leche"
    }
}

//Si cuesta 5 o menos que compre dos cartones de leche
//si cuesta 8 o menos que compre 1 carton de leche
//si cuesta más que muestre en pantalla "No comprar"