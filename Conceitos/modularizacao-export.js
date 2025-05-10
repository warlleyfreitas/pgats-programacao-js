//const quantidadePetiscosDisponiveis = 4

/*
for (let petisco = 1; petisco <= quantidadePetiscosDisponiveis; petisco++) {
  console.log(`Dando o petisco de nº ${petisco} para o Totó`)
}

console.log(`Satisfeito, chega de petiscos por hoje!`)
*/

const quantidadePetiscos = 5
alimentarDog(quantidadePetiscos)

function alimentarDog (){
    for (let i = 1; i <= quantidadePetiscos; i++) {
        console.log(i <= quantidadePetiscos ? `Ganhei ${i} petisco. Quero mais!` : 'Agora estou satisfeito!');
    }
}

export {
    alimentarDog
}

