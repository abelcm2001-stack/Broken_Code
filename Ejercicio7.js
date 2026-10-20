function procesarDatos(datos, callback) {
    callback(datos);
}
 
procesarDatos([1,2,3], function(d) {
    console.log("Datos recibidos:", d);
});
// El error es que la función callback no estaba siendo llamada correctamente (dat en vez de datos).
