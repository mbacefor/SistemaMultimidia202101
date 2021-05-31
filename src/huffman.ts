'use strict';

import { Logger } from 'sitka';
import { Util } from './util';
import { Node } from './Node'


export class AlgoritmoCompressaoHuffman {
    /* Private Instance Fields */

    private _logger: Logger;

    private _dicionario: Map<string, string>;

    private _dicionarioGerado: Map<string, Node>;

    private _listaNode = new Array();

    /* Constructor */

    constructor() {
        this._logger = Logger.getLogger({ name: this.constructor.name });
        this._dicionario = new Map();
        this._dicionario.set('A', '001');
        this._dicionario.set('001', 'A');
        this._dicionario.set('B', '010');
        this._dicionario.set('010', 'B');
        this._dicionario.set('C', '101');
        this._dicionario.set('101', 'C');
        this._dicionario.set('D', '111');
        this._dicionario.set('111', 'D');
        this._dicionarioGerado = new Map();
    }

    private calculaPeso(param: string): void {
        for (const value of param) {
            if (this._dicionarioGerado.has(value)) {
                const nodeObtido = this._dicionarioGerado.get(value);
                if (nodeObtido !== undefined)
                    nodeObtido._peso++;
            }
            else {
                const novoNode = new Node(1, value);
                this._dicionarioGerado.set(value, novoNode);
            }
        }
    }

    private montaArvoreBinaria(): void {
        // Iterate over map values
        for (const value of this._dicionarioGerado.values()) {
            this._listaNode.push(value);
        }
        this._listaNode.sort((a: Node, b: Node) => (a._peso <= b._peso) ? 1 : -1);

        while (this._listaNode.length > 1) {
            const node1 = this._listaNode.pop();
            const node2 = this._listaNode.pop();
            const node3 = new Node(node1._peso + node2._peso, node1._caracter + node2._caracter);
            node3._nodeEsquerdo = node1;
            node3._nodeDireito = node2;
            this._listaNode.push(node3);
            this._listaNode.sort((a: Node, b: Node) => (a._peso <= b._peso) ? 1 : -1);
        }
    }

    private calculaBinario(): void {
        // Iterate over map values
        for (const value of this._listaNode.values()) {
            value.calculaBinario('');
        }
    }

    private montaDicionario(): void {
        this._dicionario.clear();
        for (const value of this._dicionarioGerado.values()) {
            this._dicionario.set(value._caracter, value._represtaBinario);
            this._dicionario.set(value._represtaBinario, value._caracter);
        }
    }

    /**
     * Método que comprime uma sequencia de string usando o algoritmo de
     * frequencia de caracteres
     * @param param
     * @returns
     */
    public comprimeCaractere(param: string): string {
        this._logger.debug('Entrada: ' + param);
        this._logger.debug('Entrada(B): ' + Util.string2bin(param));
        this.calculaPeso(param);
        this.montaArvoreBinaria();
        this.calculaBinario();
        this.montaDicionario();
        let i = 0;
        let textoComprimido: string = '';
        // fazer loop em todos os caracteres da string de entrada
        while (i < param.length) {
            let caracter: any = param.charAt(i);
            if (this._dicionario.has(caracter))
                caracter = this._dicionario.get(caracter);
            textoComprimido += caracter;
            i++;
        }
        this._logger.debug('Saida: ' + textoComprimido);
        this._logger.debug('%: ' + 100*(textoComprimido).length/Util.string2bin(param).length);
        return textoComprimido;
    }

    /**
     * Metodo que descomprime uma sequencia de caracteres usando o algoritmo de
     * frequencia de caracteres
     * @param param
     * @returns
     */
    public descomprimeFequenciaCaractere(param: string): string {
        this._logger.debug('Received: ' + param);
        let i = 0;
        let textoDescomprimido: any = '';
        // fazer loop em todos os caracteres da string de entrada
        let j = 0;
        while (i < param.length) {
            const caracter = param.substring(i, ++j);
            if (this._dicionario.has(caracter)) {
                textoDescomprimido += this._dicionario.get(caracter);
                i = j;
            }
        }
        this._logger.debug('Return: ' + textoDescomprimido);
        return textoDescomprimido;
    }
}