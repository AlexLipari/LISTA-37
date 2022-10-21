// let base: string
// base = "aazefhh453bcc4"
// console.log(CompararIguais(base))
// function CompararIguais(texto: string):number {
//     let resultado = texto.match(/(.)(?=.*\1)/gi)
//     return resultado.length
// }
var frase;
frase = "faz parte do meu show";
console.log(Transformar(frase));
function Transformar(frase) {
    var resultado = frase.replace(/(^\w{1})|(\s+\w{1})/g, function (letra) { return letra.toUpperCase(); }).replace(/\s/g, '');
    return resultado;
}
