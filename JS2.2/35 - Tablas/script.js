function multiplicar(){
    //Obtener el número
    let elementoTextoTabla = document.getElementById("textoTabla");
    let textoNumeroTabla = elementoTextoTabla.value;
    let numeroTabla = Number(textoNumeroTabla);

    //Obtener tabla
    let elementoTablaMultiplicar = document.getElementById("listaTabla");


    //Vaciar la tabla antes de ejecutar
    
    elementoTablaMultiplicar.innerText = "";


    //Producir y mostrar resultados
    for(let x=1; x<=10; x++){
        //Calcular el resultado
        let numeroResultado = numeroTabla*x

        //Armar el String con el resultado

        let textoResultado = numeroTabla + " por " + x + " Es igual a "+ numeroResultado;



        //Crear elementos de la lista
        let itemLista = document.createElement("li");
        itemLista.innerText = textoResultado;
        elementoTablaMultiplicar.appendChild(itemLista);
    }
}