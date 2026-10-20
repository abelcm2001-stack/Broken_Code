function esPar(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
 
console.log(esPar(3));
console.log(esPar(4));

//El error es que en el if solo había un =, que js lo interpreta para asignar.
//Para solucionar esto, cambié el = por ===, que compara y veo si el resto es igual a 0.
//Error lógico.