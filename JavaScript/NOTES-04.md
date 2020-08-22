# Desestructuración
Permite guargar los valores de cada posición del array en variables diferentes.
### EJEMPLO DESESTRUCTURACIÓN

    let arr = ['Hola', 'mundo', 'Home']
    let [a1, a2, a3] = arr 
***
En una sola línea de código guarda cada posición del array en una variable diferente.
***

# Agregar y quitar valores de un array
## PUSH
*********
Agrega un valor al final del array
*********
## POP
*********
Elimina el último valor del array. NO se le asigna ningún parámetro.
*********
## UNSHIFT
*********
Agrega un valor al inicio del array e imprime el valor en consola.
*********
## SHIFT
*********
Elimina el primer parámetro del array e imprime el valor en consola. NO se le asigna ningún parámetro.
*********
## SPLICE
*********
Posición personalizada
splice(startIndex, valueDelete, val1,val2,...)
Inserta valor en posiciones específicas. Definición:
1. **Primer parámetro:** Indica la posición donde se empezarán a insertar los valores.
2. **Segundo parámetro:** Indica cuantos valores se elimenarán del array
3.  **Tercer parámetro:** Indica los valores que se añadiran
*********
### EJEMPLO SPLICE
const arr = ['perú','turquía','méxico']
arr.splice(2,0,'chile','ecuador')
**********
Agrega chile y ecuador apartir de la posición 2 del array y no elimina ningún valor simplemente los corre hacia la derecha.
**********
##### EJEMPLO
arr.splice(0,1,'argentina')
**********
Agrega el valor argentina en la posición uno y elimina perú 
**********
## ELIMINAR UN VALOR DEL ARRAY
arr.splice(4,1)
**********
Elimina el valor que ocupa la posición número 4.
**********

# Ordenar elementos de un array
## SPLIT
'Hola Pato'.split('')
// ["H", "o", "l", "a", " ", "p", "a", "t", "o"]
'Hola Pato'.split('').reverse()
// ["o", "t", "a", "p", " ", "a", "l", "o", "H"]
'Hola pato'.split('').reverse().join('')
// "otaP aloH"

## SORT
Ordena las letras.
### EJEMPLO SORT CON LETRAS
let arr = ['A','Z','Q','M']
*********
arr.sort()
//['A','M','Q','Z']
*********
arr.sort().reverse()
//['Z','Q','M','A']
### EJEMPLO SORT CON NÚMEROS
Para ordenar números no es igual a ordenar las letras.
let numbers = [100,58,0,5,47,96,250]    <---------------->
numbers.sort((a.b) => a-b)
//[0, 5, 47, 58, 96, 100, 250]
*****************
Compara cada número por parejas. Si la resta da positivo significa que a es mayor y se va colocando al final de la lista.
*****************

# CONCAT
Es simular a push, la ventaja de concat es que permite añadir varios valores a una lista, en cambio push solo permite un número a la vez.
### EJEMPLO DE CONCAT
let numbers2 = [5,23,46,7,3]
numbers.concat(numbers2)
//[100,58,0,5,47,96,250,5,23,46,7,3]
**********************
También se permite pasar los números directamente.
numbers.concat(14,21,34)

# ENCONTRAR ELEMENTOS EN UN ARRAY

## indexOf
let numeros = [100,58,0,5,47,96,250,5,23,46,7,3]
numeros.indexOf(96)
// 5
**********************
Imprime la posición donde se encuentra el número 96. En caso de que el número no exista imprimerá un -1.
**********************

## find 
numeros.find(number => number > 50)
// 100
***********************
Devuelve el primer número que cumpla la condición.
***********************

## findIndex
Es similar a find con la diferencia que findIndex no devuelve el número del primer número que cumpla con la condición sino que devuelve la posición del mismo.
### EJEMPLO findIndex
numeros.find(number => number > 50)
// 0