function geradorDeTagsDeIdentificacao(nomePet) {
    return nomePet.toUpperCase()
}

function verificarSePodeSerAdotado(idadePet, portePet) {
    if (idadePet == 1 && portePet == 'M') {
        return true
    } else {
        return false
    }
}

function calcularConsumoDeRacao(nomePet, diasConsumo, pesoPet) {
    if (pesoPet == 14.5) {
        let consumoDiario = diasConsumo * 4350
        return consumoDiario
    }
}

function decidirTipoDeAtividadePorPorte(portePet) {
    let atividade = ''

    switch (portePet) {
        case 'grande':
            atividade = 'correr no parcãometro';
            break;
        case 'medio':
            atividade = 'brincar no quintal';
            break;
        case 'pequeno':
            atividade = 'brincar dentro de casa';
            break;
        default:
            atividade = 'inválido';
    }

    return atividade
}

async function buscarDadoAsync() {
    const listaPet = ['Pantera', 'Pipoca', 'Bethoven', 'Charmosinha']
    var nomePet

    try {
        // Este bloco poderia ser uma consulta em uma API externa
        console.log("Buscando dados de forma assíncrona, aguarde...")
        listaPet.forEach(pet => {
            if (pet === 'Pipoca') {
                nomePet = pet
            }
        });
    } catch (exception) {
        console.log(exception)
    } 
    
    return nomePet
}

export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}