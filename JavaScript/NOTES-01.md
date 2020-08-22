# ¿Cómo funciona JavaScript?

# Tipos de datos
Primitivos:

    - null
    - undefined  ->   Variable sin asignación de valor
    - number
    - string
    - boolean
    - symbol

Compuestos:

    - Object (array[], object{}, function(){})

Función no es un tipo de datos es un subtipo de objeto.

# Operadores
## Unario
Utiliza 1 valor
### EJEMPLO UNARIO
typeof 5

## Ternario 
**Utiliza 3 valores**
### EJEMPLO TERNARIO
let age = prompt('Dime tu edad')
let isAdult = age >= 18
            ? 'Eres mayor de edad' //TRUE
            = 'Aún eres un niño'    //FALSE
alert(isAdult)

# Corto circuito
Evalua y toma el valor que exista.
### EJEMPLO CORTO CIRCUITO
#### ||
***
let c = null || 25
c   //Imprime 25
***
let a
let b = a || 5
b   //Imprime 5
#### && 
Evalua si el primer dato es falso, se queda con ese.
let a = null && 
a   //Imprime undefined