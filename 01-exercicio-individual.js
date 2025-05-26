/*
    Crie uma função que pega uma lista de inteiros e strings
    e retorna uma nova lista sem as strings.
*/

const listaInteirosStrings = [ -1, 'null', 'Hello World', 10, 50, 'teste', '20000' ]
const listaInteiros = removeStringsDaLista(listaInteirosStrings)

console.log(listaInteiros)

function removeStringsDaLista(lista){
    return lista.filter( item => typeof item === "number")
}
