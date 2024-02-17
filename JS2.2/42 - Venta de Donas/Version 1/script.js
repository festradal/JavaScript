function extraerNumeroDesdeElemento(elemento){
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);

    return miNumero

}

function calcular(){
    let ventas1, ventas2, ventas3, ventas4, ventas5, ventas6;

    ventas1 =extraerNumeroDesdeElemento("ventaTienda1");
    ventas2 =extraerNumeroDesdeElemento("ventaTienda2");
    ventas3 =extraerNumeroDesdeElemento("ventaTienda3");
    ventas4 =extraerNumeroDesdeElemento("ventaTienda4");
    ventas5 =extraerNumeroDesdeElemento("ventaTienda5");
    ventas6 =extraerNumeroDesdeElemento("ventaTienda6");

    let totalVentas = ventas1 + ventas2 + ventas3 + ventas4 + ventas5 +ventas6;

    let mensajeSalida = "Total Ventas: "+totalVentas;

    let elementoSalida = document.getElementById("parrafoSalida");

    elementoSalida.textContent = mensajeSalida;

    
}