'use strict';

import { expect } from 'chai';
import { Util } from '../src/util';

describe('Util class', () => {
	it('Testa o metodo dec2bin com o numero 10', () => {
		const param: number = 10;
		const returnValue: string = Util.dec2bin(param);
		expect(returnValue).to.equal('00001010', 'returns the value passed as a parameter');
	});

	it('Testa o metodo dec2bin com o numero -10', () => {
		const param: number = -10;
		const returnValue: string = Util.dec2bin(param);
		expect(returnValue).to.equal('00001001', 'returns the value passed as a parameter');
	});

	it('Testa o metodo descomprimeFequenciaCaractere com o texto 1A100B', () => {
		const param: number = 0;
		const returnValue: string = Util.dec2bin(param);
		expect(returnValue).to.equal('00000000', 'returns the value passed as a parameter');
	});
	it('Testa o metodo descomprimeFequenciaCaractere com o texto 1A100B', () => {
		const param: number = 256;
		const returnValue: string = Util.dec2bin(param);
		expect(returnValue).to.equal('100000000', 'returns the value passed as a parameter');
	});
	it('Testa o metodo string2bin com o texto A', () => {
		const param: string = 'A';
		const returnValue: string = Util.string2bin(param);
		expect(returnValue).to.equal('01000001', 'returns the value passed as a parameter');
	});
	it('Testa o metodo string2bin com o texto B', () => {
		const param: string = 'B';
		const returnValue: string = Util.string2bin(param);
		expect(returnValue).to.equal('01000010', 'returns the value passed as a parameter');
	});
	it('Testa o metodo string2bin com o texto AB', () => {
		const param: string = 'AB';
		const returnValue: string = Util.string2bin(param);
		expect(returnValue).to.equal('0100000101000010', 'returns the value passed as a parameter');
	});

	it('Testa o metodo bin2dec com o texto 11', () => {
		const param: string = '11';
		const returnValue: number = Util.bin2dec(param);
		expect(returnValue).to.equal(3, 'returns the value passed as a parameter');
	});
	it('Testa o metodo bin2dec com o texto 00000000', () => {
		const param: string = '00000000';
		const returnValue: number = Util.bin2dec(param);
		expect(returnValue).to.equal(0, 'returns the value passed as a parameter');
	});
	it('Testa o metodo bin2dec com o texto 1111111', () => {
		const param: string = '11111111';
		const returnValue: number = Util.bin2dec(param);
		expect(returnValue).to.equal(255, 'returns the value passed as a parameter');
	});
	it('Testa o metodo bin2dec com o texto 00000101', () => {
		const param: string = '00000101';
		const returnValue: number = Util.bin2dec(param);
		expect(returnValue).to.equal(5, 'returns the value passed as a parameter');
	});
});