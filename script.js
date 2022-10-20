var base;
base = "aazefhh453bcc4";
console.log(CompararIguais(base));
function CompararIguais(texto) {
    var resultado = texto.match(/(.)(?=.*\1)/gi);
    return resultado;
}
