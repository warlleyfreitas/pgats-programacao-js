/*
    Retorne o numero de vogais no texto fornecido. Consideraremos a, e, i, o, u como vogais para este Kata.
    O texto de entrada conterá apenas letras minúsculas e/ou espaços. Letras acentuadas não fazem parte desse desafio.
*/

const texto = 'lorem ipsum dor amet            a'

var quantidadeVogais = contadorVogais(texto)

console.log(`O texto possui ${quantidadeVogais} vogais!`)

function contadorVogais(texto){
    const regex = /[aeiou]/g
    const quantidade = texto.match(regex)
    
    return quantidade ? quantidade.length : 0
}
