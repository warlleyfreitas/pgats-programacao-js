function geradorDeTagsDeIdentificacao(nomePet){
    return nomePet.toUpperCase()
}

function verificarSePodeSerAdotado(idadePet, portePet){
    if (idadePet == 1 && portePet == 'M'){
        return true;
    }
}

function calcularConsumoDeRacao(nomePet, diasConsumo, pesoPet){
    if (nomePet == 'Pitoco' && diasConsumo == 1 && pesoPet == 14.5){
        return 4350
    }
}

function decidirTipoDeAtividadePorPorte(portePet){
    let atividade = ''
    switch (portePet){
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

async function buscarDadoAsync(){
    var nomePet = 'Pipoca'
    return nomePet
}

export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}