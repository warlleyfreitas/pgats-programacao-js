const listaBrinquedos = [
    'Bola', 
    'Osso', 
    'Corda', 
    'Sino'
]

listaBrinquedos.forEach(brinquedo => {
    console.log("O brinquedo " + brinquedo, "foi entregue!")
})

console.log("-------------------------------------------\n") 

entregarBrinquedos(listaBrinquedos)

function entregarBrinquedos (listaBrinquedos){
    listaBrinquedos.forEach(brinquedo => {
    console.log("O brinquedo " + brinquedo, "foi entregue!")
})

}