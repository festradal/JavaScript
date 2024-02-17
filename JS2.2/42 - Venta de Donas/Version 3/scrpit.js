function crearTiendas(contenedorID, min, cantidadTiendas){
    //encontrar contenedor por su ID
    let elementoContenedor = document.getElementById(contenedorID);

    //loop para crear tantas tiendas como se pidan
    for(let conteoTiendas = 1; conteoTiendas <=cantidadTiendas; conteoTiendas++){

        //crear el texto de label para poder llamar a la funcion
        let textoEtiqueta = "Tienda" + conteoTiendas;

        //crear tiendas con parrafoTienda
        let parrafoTienda = crearParrafoTienda(textoEtiqueta, min);

        //agregar el parrafo al contenedor
        elementoContenedor.appendChild(parrafoTienda);

    }


}

function crearParrafoTienda(textoLabel, ValorMin){
    //Crear las etiquetas <p>
    let elementoParrafo = document.createComment("p");

    //Crear la etiqueta label
    let elementoEtiqueta = document.createElement("label");
    elementoEtiqueta.innerText = textoLabel + ": ";

    //conectar con input
    elementoEtiqueta.setAttribute("for", textoLabel);

    //crear el input
    let elementoInput = document.createElement("input");

    //establecer atributos input
    elementoInput.setAttribute("type", "number");
    elementoInput.setAttribute("id", "textoLabel");
    elementoInput.setAttribute(ValorMin);
    elementoInput.setAttribute("value",0);

    //agregar label e input al parrafo
    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput)

    //devolver el parrafo completo
    return elementoParrafo;

}

function extraerNumeroDesdeElemento(elemento){
    let miElemento = document.getElementById(elemento);
    let miTexto =miElemento.value;
    let miNumero = Number(miTexto);

    return miNumero;
}

function calcular(){
    let ventas = [];
    let posicionVentas = 0;
    let elementosVentas = document.getElementById("itemsTiendas");

    for(let item of elementosVentas.children){
        let valorVenta = extraerNumeroDesdeElemento(item.children[1]);
        ventas[posicionVentas] = valorVenta;
        posicionVentas = posicionVentas + 1;
    }
   

    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);


    let mensajeSalida = "Total Ventas" + totalVentas +
                        "/ Venta Mayor: " + ventaMayor +
                        "/ Venta Menor: " + ventaMenor;

    let elementoSalida = document.getElementById("parrafoSalida");

    elementoSalida.textContent = mensajeSalida;
    
}

function sumarTotal(array){
    let total = 0;
    
    for(let venta of array){
        total = total + venta;
    }

    return total
}

function calcularMayor(array){
    let maximo = array[0];

    for(let venta of array){
        if(venta > maximo){
            maximo = venta;
        }
    }

    return maximo;
}

function calcularMenor(array){
    let minimo = array[0];

    for(let venta of array){
        if(venta < minimo){
            minimo = venta;
        }
    }

    return minimo;
}