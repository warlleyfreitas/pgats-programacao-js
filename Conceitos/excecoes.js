
try{
    console.log("Tentando conectar com o banco...")
    throw new Error("Pet nao quis alimento")
} catch (excecao){
    //console.log(excecao)
    console.log(excecao.name)
    console.log(excecao.message)
} finally {
    console.log("Sempre serei executado")
}