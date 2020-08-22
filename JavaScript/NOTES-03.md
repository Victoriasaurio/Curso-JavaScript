# Parámetros y argumentos
****
**PARÁMETROS**
const persona = (nombre, edad) => {
    //Code
}
****
****
**ARGUMENTOS**
console.log(persona('Victoriasaurio', 21))
****

# Parámetros rest
Permite enviar muchos parámetros.
... -> Indican un operador.

### EJEMPLO DE REST
const sumarTodos = (...numeros) => {
    console.log(numeros)
    console.log(numeros[4])
}

sumarTodos(1,4,8,7,5,9,6,4,3,1)

# Ciudadano de primera clase

    Las funciones pueden ser almacenadas en variables o constantes. (función por expresión)
    Pueden ser pasadas como argumentos de otra función. (callbacks)
    Pueden ser retornadas por otra función. (closures)
    Pueden tener métodos o propiedades. (POO)

### EJEMPLO FUNCIÓN POR EXPRESIÓN
const c = console.log

### EJEMPLO DE CLOSURES
function sumar(x) {
    return function(y) {
        return x + y
    }
}
c(sumar(5)(2))

##### MISMO EJEMPLO PERO USANDO FUNCIÓN FLECHA
***
Las flechas indican que retorna algo(lo que se encuentra a la derecha)
***
const sumar = x => y => x + y
c(sumar(5)(2))

# Funciones retornadas
const doSomething = x => y => x * y
const a = doSomething(2)(2)     //4
const b = doSomething(3)        // y => x * y
c(doSomething(a)(b(3)))         //doSomething(4)(9) 36 

# Tipos de funciones
***
## Funciones puras
No causan un efecto secundario y siempre devuelven los mismo valores para los mismos parámetros.
No los modifica nada de afuera
***
***
## Funciones autoinvocadas
Funciones que no se necesitan invocar o ejecutar.
Cuando a una función autoinvocada se le ponen paréntesis estos representan una expresión.
***
***
Funciones nombradas y anónimas
    Funciones nombradas 
        const saludar = (persona) => {}
        saludar()
    Funciones anónimas
        Funciones que no tienen nombre, por ejemplo, setTimeOut()
***

# Scope
Variable declarada dentro de llaves y que no puede ser accedida fuera de ella.

# Closure
Através de funciones internas podemos llegar a valores externos.

# THIS
### EJEMPLO THIS
let edad = 10
let user = {
    nombre: 'Victoriasaurio',
    edad: 21,
    getEdad() {
        c(this.edad)
    }
}
user.getEdad()
*****
This hace referencia a la variable edad que se encuentra dentro del objeto.
Si no ponemos la variable This, este tomará el valor de la variable edad que se encuentre fuera del objeto.
*****