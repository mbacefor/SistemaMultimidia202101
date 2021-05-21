'use strict';

import { expect } from 'chai';
import { AlgoritmosCompressao } from '../dist/index';

describe('AlgoritmosCompressao class', () => {
	it('should create an instance using its constructor', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		expect(example, 'example should exit').to.exist; // tslint:disable-line:no-unused-expression
	});
	// it('should return whatever is passed to exampleMethod()', () => {
	// 	const example: AlgoritmosCompressao = new AlgoritmosCompressao();
	// 	const param: string = 'This is my param.';
	// 	const returnValue: string = example.exampleMethod(param);
	// 	expect(returnValue).to.equal(param, 'returns the value passed as a parameter');
	// });
	it('Testa o metodo comprimeFequenciaCaractere com o texto AAAAAHHHFGGGGBBPEEECCCCCCDLLLLRR', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: string = 'AAAAAHHHFGGGGBBPEEECCCCCCDLLLLRR';
		const returnValue: string = example.comprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('5A3H1F4G2B1P3E6C1D4L2R', 'returns the value passed as a parameter');
	});

	it('Testa o metodo comprimeFequenciaCaractere com o texto AB', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: string = 'AB';
		const returnValue: string = example.comprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('1A1B', 'returns the value passed as a parameter');
	});

	it('Testa o metodo comprimeFequenciaCaractere com o texto vazio', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: string = '                                    ';
		const returnValue: string = example.comprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('36 ', 'returns the value passed as a parameter');
	});

	it('Testa o metodo descomprimeFequenciaCaractere com o texto 1A2B12C', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: string = '1A2B2C';
		const returnValue: string = example.descomprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('ABBCC', 'returns the value passed as a parameter');
	});
	it('Testa o metodo descomprimeFequenciaCaractere com o texto 10A2B2C', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: string = '10A2B2C';
		const returnValue: string = example.descomprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('AAAAAAAAAABBCC', 'returns the value passed as a parameter');
	});
	it('Testa o metodo descomprimeFequenciaCaractere com o texto 10A12B2C', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: string = '10A12B2C';
		const returnValue: string = example.descomprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('AAAAAAAAAABBBBBBBBBBBBCC', 'returns the value passed as a parameter');
	});
	it('Testa o metodo descomprimeFequenciaCaractere com o texto 1A', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: string = '1A';
		const returnValue: string = example.descomprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('A', 'returns the value passed as a parameter');
	});
	it('Testa o metodo descomprimeFequenciaCaractere com o texto 1A100B', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: string = '1A90B';
		const returnValue: string = example.descomprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('ABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB', 'returns the value passed as a parameter');
	});

	it('Testa o metodo descomprimeFequenciaCaractere com o texto 1A100B', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: number = 10;
		const returnValue: string = example.dec2bin(param);
		expect(returnValue).to.equal('00001010', 'returns the value passed as a parameter');
	});
	it('Testa o metodo descomprimeFequenciaCaractere com o texto 1A100B', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: number = 0;
		const returnValue: string = example.dec2bin(param);
		expect(returnValue).to.equal('00000000', 'returns the value passed as a parameter');
	});
	it('Testa o metodo descomprimeFequenciaCaractere com o texto 1A100B', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: number = 256;
		const returnValue: string = example.dec2bin(param);
		expect(returnValue).to.equal('100000000', 'returns the value passed as a parameter');
	});
	it('Testa o metodo string2bin com o texto A', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: string = 'A';
		const returnValue: string = example.string2bin(param);
		expect(returnValue).to.equal('01000001', 'returns the value passed as a parameter');
	});
	it('Testa o metodo string2bin com o texto B', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: string = 'B';
		const returnValue: string = example.string2bin(param);
		expect(returnValue).to.equal('01000010', 'returns the value passed as a parameter');
	});
	it('Testa o metodo string2bin com o texto AB', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: string = 'AB';
		const returnValue: string = example.string2bin(param);
		expect(returnValue).to.equal('0100000101000010', 'returns the value passed as a parameter');
	});

});