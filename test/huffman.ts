'use strict';

import { expect } from 'chai';
import { AlgoritmoCompressaoHuffman } from '../src/huffman';

describe('AlgoritmoCompressaoHuffman class', () => {
	it('should create an instance using its constructor', () => {
		const example: AlgoritmoCompressaoHuffman = new AlgoritmoCompressaoHuffman();
		expect(example, 'example should exit').to.exist; // tslint:disable-line:no-unused-expression
	});

	it('Testa o metodo huffman comprimeCaractere e comprimeCaractere e  com o texto ABC', () => {
		const example: AlgoritmoCompressaoHuffman = new AlgoritmoCompressaoHuffman();
		const param: string = 'ABC';
		const returnValue: string = example.comprimeCaractere(param);
		expect(returnValue).to.equal('01110', 'returns the value passed as a parameter');
	});

	it('Testa o metodo huffman comprimeFequenciaCaractere com o texto AB', () => {
		const example: AlgoritmoCompressaoHuffman = new AlgoritmoCompressaoHuffman();
		const param: string = 'AB';
		const returnValue: string = example.comprimeCaractere(param);
		expect(returnValue).to.equal('10', 'returns the value passed as a parameter');
	});
	it('Testa o metodo huffman comprimeFequenciaCaractere com o texto ABC', () => {
		const example: AlgoritmoCompressaoHuffman = new AlgoritmoCompressaoHuffman();
		const param: string = 'ABCD';
		const returnValue: string = example.comprimeCaractere(param);
		expect(returnValue).to.equal('01001110', 'returns the value passed as a parameter');
	});
	it('Testa o metodo huffman comprimeFequenciaCaractere com o texto ABCDE', () => {
		const example: AlgoritmoCompressaoHuffman = new AlgoritmoCompressaoHuffman();
		const param: string = 'ABCDE';
		const returnValue: string = example.comprimeCaractere(param);
		expect(returnValue).to.equal('101111100100', 'returns the value passed as a parameter');
	});
	it('Testa o metodo huffman comprimeFequenciaCaractere com o texto AAABCBBBDEEEEEEE', () => {
		const example: AlgoritmoCompressaoHuffman = new AlgoritmoCompressaoHuffman();
		const param: string = 'AAABCBBBDEEEEEEEE';
		const returnValue: string = example.comprimeCaractere(param);
		expect(returnValue).to.equal('111111111101101101010110000000000', 'returns the value passed as a parameter');
	});
	it('Testa o metodo huffman comprimeFequenciaCaractere com o texto bom esse bombom', () => {
		const example: AlgoritmoCompressaoHuffman = new AlgoritmoCompressaoHuffman();
		const param: string = 'bom esse bombom';
		const returnValue: string = example.comprimeCaractere(param);
		expect(returnValue).to.equal('010011111010110010010111001001110100111', 'returns the value passed as a parameter');
	});
	it('Testa o metodo huffman descomprimeFequenciaCaractere com o texto abcdeaaaaa', () => {
		const example: AlgoritmoCompressaoHuffman = new AlgoritmoCompressaoHuffman();
		const param: string = example.comprimeCaractere('abcdeaaaaa');
		const returnValue: string = example.descomprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('abcdeaaaaa', 'returns the value passed as a parameter');
	});
	it('Testa o metodo descomprimeFequenciaCaractere com o texto Meu amor e verdadeiro', () => {
		const example: AlgoritmoCompressaoHuffman = new AlgoritmoCompressaoHuffman();
		const param: string =  example.comprimeCaractere('Meu amor e verdadeiro');
		const returnValue: string = example.descomprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('Meu amor e verdadeiro', 'returns the value passed as a parameter');
	});
});