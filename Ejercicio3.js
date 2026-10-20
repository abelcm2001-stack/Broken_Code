function multiplicar(a, b) {
    let ofthejedi= a * b;
return ofthejedi;
}
let total = multiplicar(3, 4);
console.log("Total: " + total);
//El problema es que la función calculaba bien la multiplicación pero no tenia nada que devolviera el resultado, 
//por lo que salía undefined.