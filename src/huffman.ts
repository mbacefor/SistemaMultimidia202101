'use strict';

import { Logger } from 'sitka';
import { Util } from './util';

export class AlgoritmoCompressaoHuffman {
    /* Private Instance Fields */

    private _logger: Logger;

    private _dicionario: Map<string, string>;

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
    }

    /**
     * Método que comprime uma sequencia de string usando o algoritmo de
     * frequencia de caracteres
     * @param param
     * @returns
     */
    public comprimeFequenciaCaractere(param: string): string {
        this._logger.debug('Entrada: ' + param);
        this._logger.debug('Entrada(B): ' + Util.string2bin(param));

        let i = 0;
        let textoComprimido: string = '';
        // fazer loop em todos os caracteres da string de entrada
        while (i < param.length) {
            let caracter: any = param.charAt(i);
            if (this._dicionario.has(caracter))
                caracter = this._dicionario.get(caracter);
            else caracter = Util.string2bin(caracter);
            textoComprimido += caracter;
            i++;
        }
        this._logger.debug('Saida: ' + textoComprimido);
        this._logger.debug('Saida (B): ' + Util.string2bin(textoComprimido));
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
        while (i < param.length) {
            const caracter = param.substring(i, i + 3 + 1);
            if (this._dicionario.has(caracter)) {
                textoDescomprimido = this._dicionario.get(caracter);
                i += 3;
            }
            else {
                textoDescomprimido += String.fromCharCode (Util.bin2dec(param.substring(i,i+8+1)));
                i+=8;
            }
        }
        this._logger.debug('Return: ' + textoDescomprimido);
        return textoDescomprimido;
    }
}