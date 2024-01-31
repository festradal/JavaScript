function calcularLitros(){
    //variables
    var elementoKm = document.getElementById("textoKm");
    //Convierte el valor id en String
    var textoKm = elementoKm.value;
    //Convierte textoKm en Numero
    var cantKm = Number(textoKm);

    //Factor para la operación
    var cantLitros = (cantKm/8.8);

    var resultado = document.getElementById("textoResultado");
    resultado.textContent = "Carga "+ cantLitros.toFixed(2) + "Litros de Combustible";
}