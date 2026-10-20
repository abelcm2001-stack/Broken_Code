let numeros = [1, 2, 3, 4];
let suma = 0;
 
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}
 
console.log("Suma total: " + suma);
// El error es que poniendo i <= numeros.length, lo q hace es limitar el bucle a un número que no existe en el array.
// Para solucionar esto, cambio la condición del bucle a i < numeros.length, lo que hace que el bucle solo recorra hasta el último número válido del array.