let base: string
base = "aazefhh453bcc4"

console.log(CompararIguais(base))

function CompararIguais(texto: string) {
    let resultado = texto.match(/(.)(?=.*\1)/gi)
    return resultado
}