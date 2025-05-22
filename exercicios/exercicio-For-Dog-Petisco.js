
const quantidadePetiscos = 5

for(let petiscoEntregue = 1; petiscoEntregue <= quantidadePetiscos; petiscoEntregue++){
    
    if (quantidadePetiscos > 0){
        console.log("O dog ganhou ", petiscoEntregue,  "petisco!")
    }
}

console.log("O dog está satisfeito!")

console.log("-------------------------------------------\n") 

darPetiscoParaDog(quantidadePetiscos)

function darPetiscoParaDog (quantidadePetisco){
    for(let petiscoEntregue = 1; petiscoEntregue <= quantidadePetiscos; petiscoEntregue++){
    
        if (quantidadePetiscos > 0){
            console.log("O dog ganhou ", petiscoEntregue,  "petisco!")
        }
    }
    console.log("O dog está satisfeito!") 
}