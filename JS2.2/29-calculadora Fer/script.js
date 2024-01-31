/* Funciones y entre el parentesis el paramentro que se utilizará, en este caso el id=resultado del HTML*/
/* Luego captura del documento el valor del elemento representado por Id que es "resultado" */
function mostrarResultado(resultado) {
    document.getElementById("resultado").value = resultado;
}

function suma() {
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(numero1 + numero2);
}



/* Función para promedio */
function promedio(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
/* console.log es para probar en consola presionando F5 y podemos utilizar Jason o JavaScript Debug Terminal */
let numeros = promedio(95, 98, 97);
console.log(`El promedio es: ${numeros}`);


/* Función para ordenar listas*/

/*for (inicialización; condición; actualización) { 
   	//sentencias a ejecutar en cada iteración 
}*/
/*
function ordenarLista() {
    /* agregar lista nueva */
/*    lista_final = []
    /* recorrer y agregar a mi lista final */

/*  for ( let i in Range(0, min(length(lst1), length(lst2))));
    lista_final.append(lst1[i]);
    lista_final.append(lst2[i]);
    return lista_final
}
resultadoLista = ordenarLista([1,3,5], [2,4,6])
console.log(resultadoLista)
*/

/* tabla de multiplicar del 5 sin incluir el 5 */
function multi (){
    for(let i = 1; i <= 10; i++){
        if(i !== 5){
            let resulta = 5 * i;
            console.log(`5 X ${i} = ${resulta}`)
        }
    }
}
multi();
/* prba, prueba */
// para comentar presionar CTRL + }