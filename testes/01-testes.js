
import { exibirNomeDogFormatado } from '../conceitos/testes-de-unidade.js'
import assert from 'node:assert'

describe('Testes do Projeto', () =>{
    it('Primeiro teste', () => {
        assert.strictEqual(exibirNomeDogFormatado('Mimosa'), 'MIMOSA')
    });

    it('Segundo teste', () => {
        throw new Error()
    });
})