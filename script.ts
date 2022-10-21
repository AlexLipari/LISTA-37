// let base: string
// base = "aazefhh453bcc4"

// console.log(CompararIguais(base))

// function CompararIguais(texto: string):number {
//     let resultado = texto.match(/(.)(?=.*\1)/gi)
//     return resultado.length
// }
let frase: string
frase = "faz parte do meu show"
console.log(Transformar(frase))
function Transformar(frase: string): string {
    let resultado = frase.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase()).replace(/\s/g, '');
    return resultado
}