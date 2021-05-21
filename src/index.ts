'use strict';

import { Logger } from 'sitka';

export class AlgoritmosCompressao {
	/* Private Instance Fields */

	private _logger: Logger;

	/* Constructor */

	constructor() {
		this._logger = Logger.getLogger({ name: this.constructor.name });
	}

	/* Public Instance Methods */

	public exampleMethod(param: string): string {
		this._logger.debug('Received: ' + param);
		return param;
	}

	/**
	 * Converter um numero em string de bits (Um byte)
	 * @param dec
	 */
	public dec2bin(dec: number): string {

		return dec >= 0 ? dec.toString(2).padStart(8, '0') : (~dec).toString(2).padStart(8, '0'); // eslint-disable-line no-bitwise

	}

	/**
	 * Converter uma string em string de bits
	 * @param dec
	 */
	public string2bin(str: string): string {
		let bytes: string[] = []; // char codes
		for (let p = 0; p < str.length; ++p) {
			const code = str.charCodeAt(p);
			bytes = bytes.concat([this.dec2bin(code)]);
		}
		return bytes.join('').toString();
	}

	/* Public Instance Methods */

	public comprimeFequenciaCaractere(param: string): string {
		this._logger.debug('Entrada: ' + param);
		this._logger.debug('Entrada(B): ' + this.string2bin(param));

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
		this._logger.debug('Saida (B): ' + this.string2bin(textoComprimido));
		return textoComprimido;
	}

	/* Public Instance Methods */

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