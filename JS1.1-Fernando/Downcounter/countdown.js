/* Se crea una función con nombre getRemainTime con un parametro deadline son nombres cualquiera */
const getRemainTime = (deadline) => {
    /* Hay que tomar en cuenta que new Date() devuelve la fecha actual y dentro del parentesis se puede dejar un parametro para cambiar dicha fecha a otra fecha */
    let now = new Date(),
    /* remainTime da el tiempo en milisegundos, un segundo tiene 1000 milisegundos, el tiempo siempre lo dará en milisegundos */
    remainTime = (new Date(deadline) - now + 1000) / 1000,
    /* math.floor sirve para redondear */
    /* truco para concatenar 0 mientras sea menor a 9, el metodo slice con parametro (-2) slice obtiene un fragmento de un string empieza a buscar desde atrás con el -2 si tuviera solamente un digito concatena un 0 */
    remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
    /* porque hay 60 segundos en un minuto  */
    remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
    /* porque hay 3600 segundos en una hora */
    remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
    /* ya no aumentamos el 0 porque no tiene sentido y quitamos el slice(-2) recordar que primero opera multiplicación y luego división */
    remainDays = Math.floor(remainTime / (3600 * 24))

    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
};

console.log(getRemainTime('Feb 16 2024 12:59:44 GMT-0600'));

const countdown = (deadline, elem, finalMessage) => {
    const el = document.getElementById(elem);

    const timerUpdate = setInterval( () => {
        let t = getRemainTime(deadline);
        el.innerHTML = `${t.remainDays} Días ${t.remainHours} Horas ${t.remainMinutes} Minutos ${t.remainSeconds} Segundos`;

        if (t.remainTime <= 1) {
            clearInterval(timerUpdate);
            el.innerHTML = finalMessage;
        }
    }, 1000)
};

countdown('Mar 04 2024 14:00:00 GMT-0600', 'clock', 'Buena tarde');


const Animal = function(raza, color){
    this.raza = raza;
    this.color = color;
}

Animal.prototype.get = function(){
    return (`El perro es de raza ${this.raza}, y de color ${this.color}`);
}

const bulldog = new Animal('BullDog Ingles', 'Blanco con manchas cafes');
console.log(bulldog.get());