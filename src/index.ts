'use strict';

import { Logger } from 'sitka';
import { Util } from './util';

export class AlgoritmosCompressao {
	/* Private Instance Fields */

	private _logger: Logger;

	/* Constructor */

	constructor() {
		this._logger = Logger.getLogger({ name: this.constructor.name });
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
			let repeticoes = 1;
			const caracter = param.charAt(i);
			while (caracter === param.charAt(++i)) {
				repeticoes++;
			}
			textoComprimido += repeticoes + caracter;
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
		let textoDescomprimido: string = '';
		// fazer loop em todos os caracteres da string de entrada
		while (i < param.length) {
			let j: number = 0;
			while (!isNaN(Number(param.substring(i, i + j + 1)))) {
				j++;
			}
			const numeroRepeticoes: number = Number(param.substring(i, i + j)).valueOf();
			i = i + j;
			const caracter = param.charAt(i);
			let index = 0;
			for (; index < numeroRepeticoes; index++) {
				textoDescomprimido = textoDescomprimido + caracter;
			}
			i++;
		}
		this._logger.debug('Return: ' + textoDescomprimido);
		return textoDescomprimido;
	}
}