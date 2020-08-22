/**EJEMPLO PARÁMETROS REST */
const sumarTodos = (...numeros) => {
    let resultado = 0
    for (i = 0; i < numeros.length; i++) {
        resultado += numeros[i]
    }
    return resultado
}

console.log(sumarTodos(1, 4, 8, 5, 10, 9))

/**EJEMPLO FUNCIONES RETORNADAS*/
const c = console.log

const doSomething = x => y => x * y
const a = doSomething(2)(2) //4
const b = doSomething(3) // y => x * y
c(doSomething(a)(b(3))) //doSomething(4)(9) 36

/**EJEMPLO DE FUNCIÓN NO PURA, MODIFICÓ LA VARIABLE v = 'Hola' */
let v = 'Hola'

const saludo = persona => {
    v = v + ' ' + persona
    return v
}
c(saludo('Victoria'))
c(v)

/**FUNCIÓN PURA */
let w = 'Hola'

const saludar = (saludo, people) => `${saludo} ${people}`
c(saludar(w, 'Pato'))
c(w)

/**FUNCION AUTOINVOCADA */
const saludar2 = ((saludo, people) => `${saludo} ${people}`)(w, 'Hope')
c(saludar2)

/**EJEMPLO DE CLOSURES*/
function aumentar() {
    let number = 0 //Esta protegida porque guarda un estado que no debe ser modificada desde afuera
    return function() {
        number++
        c(number)
    }
}

const incrementar = aumentar()

incrementar()
incrementar()
incrementar()

/**THIS */
let edad = 10
let user = {
    nombre: 'Victoriasaurio',
    edad: 21,
    getEdad() {
        c(this.edad)
    }
}
user.getEdad()