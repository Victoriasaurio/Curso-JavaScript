/**DESESTRUCTURACIÓN */
c = console.log

let arr = ['Hola', 'mundo', 'Home']
let [a1, a2, a3] = arr //Toma los valores de posición del array 

c(arr)
c(a1)
c(a2)
c(a3)

/**AGREGAR Y QUITAR VALORES A UN ARRAY */
arr.push(2) //Agrega un valor al array
c(arr)

arr.pop() //Elimina el último valor del array
c(arr)

arr.unshift('Pato') //Agrega un elemento al principio del array
c(arr)

arr.shift() //Elimina un elemento al final del array
c(arr)

/**SPLICE 
 * Agrega valores en posiciones personalizadas dentro del array
 */
//Agrega un valor en la posición dos y no elimina ningún valor
arr.splice(2, 0, 'Samuka')
c(arr)

//Agrega un valor y elimina
arr.splice(1, 1, 'world')
c(arr)

/**SPLIT
 * Divide los valores en posiciones individuales
 * REVERSE
 * Ordena los valores de forma inversa
 * JOIN
 * Une los valores
 */
let name = 'Victoriasaurio'
let ord1 = name.split('')
let ord2 = name.split('').reverse()
let ord3 = name.split('').reverse().join('')
c(ord3)

const reverseText = string => string.split('').reverse().join('')
c(reverseText('Patosaurio'))

/**ORDENA ELEMENTOS DE UN ARRAY ---> VER EN EL ARCHIVO NOTES-04 */

let numeros = [100, 58, 0, 5, 47, 96, 250, 5, 23, 46, 7, 3]
let numbers = [100, 58, 0, 5, 47, 96, 250, 5, 23, 46, 7, 3, 96]

/**MATH SPREAD */
let num = [10, 25, 34]