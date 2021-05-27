'use strict';

import { expect } from 'chai';
import { AlgoritmoCompressaoHuffman } from '../src/huffman';

describe('AlgoritmosCompressao class', () => {
	it('should create an instance using its constructor', () => {
		const example: AlgoritmoCompressaoHuffman = new AlgoritmoCompressaoHuffman();
		expect(example, 'example should exit').to.exist; // tslint:disable-line:no-unused-expression
	});

	it('Testa o metodo comprimeFequenciaCaractere com o texto AAABCBBBDEEEEEEE', () => {
		const example: AlgoritmoCompressaoHuffman = new AlgoritmoCompressaoHuffman();
		const param: string = 'AAABCBBBDEEEEEEEE';
		const returnValue: string = example.comprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('00101010111101000101', 'returns the value passed as a parameter');
	});
	it('Testa o metodo comprimeFequenciaCaractere com o texto ABC', () => {
		const example: AlgoritmoCompressaoHuffman = new AlgoritmoCompressaoHuffman();
		const param: string = 'ABC';
		const returnValue: string = example.comprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('001010101', 'returns the value passed as a parameter');
	});

	it('Testa o metodo comprimeFequenciaCaractere com o texto AB', () => {
		const example: AlgoritmoCompressaoHuffman = new AlgoritmoCompressaoHuffman();
		const param: string = 'AB';
		const returnValue: string = example.comprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('001010', 'returns the value passed as a parameter');
	});
	it('Testa o metodo comprimeFequenciaCaractere com o texto ABC', () => {
		const example: AlgoritmoCompressaoHuffman = new AlgoritmoCompressaoHuffman();
		const param: string = 'ABCD';
		const returnValue: string = example.comprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('001010101111', 'returns the value passed as a parameter');
	});
	it('Testa o metodo comprimeFequenciaCaractere com o texto ABCDE', () => {
		const example: AlgoritmoCompressaoHuffman = new AlgoritmoCompressaoHuffman();
		const param: string = 'ABCDE';
		const returnValue: string = example.comprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('00101010111101000101', 'returns the value passed as a parameter');
	});
	
	it('Testa o metodo descomprimeFequenciaCaractere com o texto 001010', () => {
		const example: AlgoritmoCompressaoHuffman = new AlgoritmoCompressaoHuffman();
		const param: string = '001010';
		const returnValue: string = example.descomprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('AB', 'returns the value passed as a parameter');
	});
	it('Testa o metodo descomprimeFequenciaCaractere com o texto 00101010111101000101', () => {
		const example: AlgoritmoCompressaoHuffman = new AlgoritmoCompressaoHuffman();
		const param: string = '00101010111100001111';
		const returnValue: string = example.descomprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('ABCDE', 'returns the value passed as a parameter');
	});
});