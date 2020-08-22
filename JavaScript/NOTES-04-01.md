# SPREAD OPERATOR EN ARRAY
Elimina elementos duplicados en un array.
SET toma el primer valor que se encuentre duplicado.

    SPREAD OPERATOR === ...

### EJEMPLO DE SPREAD OPERATOR
let numbers = [100, 58, 0, 5, 47, 96, 250, 5, 23, 46, 7, 3, 96]
[...new Set(numbers)]
// [100, 58, 0, 5, 47, 96, 250, 5, 23, 46, 7, 3]
***************************
Elimina el número 96 que está duplicado
***************************
*****
Creando una función para eleiminar los duplicados
const deleteDuplicates = arr => [...new Set(arr)]
deleteDuplicates(numbers)
    
    OR

deleteDuplicates(['a','b','a'])
// ["a","b"]
*****

# MATH con Arrays
Math no recibe arrays sino una lista de valores.
Se resuelve agregado un spread operator.

### EJEMPLO MATH
Math.min(45,12,85,10,63)
    //10
Math.max(45,12,85,10,63)
    //85
************************
Para obtener los valores en una lista utilizamos el spread.
************************
let num = [10,25,34]
Math.min(...num)
    //10    
Math.max(...num)
    //34    
