function geradorDeTagsDeIdentificacao(nomePet) {
    return nomePet.toUpperCase()
}

function verificarSePodeSerAdotado(idadePet, portePet) {
    if (idadePet == 1 && portePet === 'M') {
        return true
    } else {
        return false
    }
}

function calcularConsumoDeRacao(nomePet, diasConsumo, pesoPet) {
    var consumoDiario = pesoPet * 300
    return consumoDiario
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

    listaPet.forEach(pet => {
        if (pet === 'Pipoca') {
            nomePet = pet
        }
    });

    return nomePet
}

export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}