# Condicionales
***
let age = parseInt(prompt('Dime tu edad'), 10)  //Convierte a número
***
**NaN se considera FALSE**
### EJEMPLO
let age = parseInt(prompt('Dime tu edad'), 10)  

if(age) {
    if(age >= 18) {
        alert('Eres mayor de edad')
    } else {
        alert('Eres menor de edad')
    }
}else{
    let age = parseInt(prompt('Tu edad debe ser un número'), 10) 
}

# Truthy y falsy. No son valores booleanos
Falsy: valores que equivalen a falso.

    - 0
    - ""
    - NaN
    - undefined
    - null

Truthy: valores verdaderos

    - string no vacío
    - Número diferente de cero
    - arrays
    - object

# Break y continue
let n = 0
for(let i=0; i<=100; i++){
    if(i%8 === 0) {
        console.log(i)
        n++
    }
    if(n >= 5) break
}
***
break -> rompe el ciclo
***
continue -> Se salta la condición verdadera

# While
let i = 10
while(i--) {
    console.log(i)
}

# Do-While
Se ejecuta por lo menos una vez.

let i = 0
do {
    console.log(i)
}while(i > 0)

### SI SE DECLARA UNA VARIABLE DENTRO DE LLAVES FUERA DE ELLAS LA VARIABLE NO EXISTE.
let password = 'EDteam'
let pass 
do {
    pass = prompt('Ingrese su contraseña')
}while(pass !== password)