'use strict';

// import { Logger } from 'sitka';

export class Util {

    /* Private Instance Fields */
    // private static _logger: Logger = Logger.getLogger({ name: 'Util.ts' });

    /**
     * Converter um numero em string de bits (Um byte)
     * @param dec
     */
    public static dec2bin(dec: number): string {

        return dec >= 0 ? dec.toString(2).padStart(8, '0') : (~dec).toString(2).padStart(8, '0'); // eslint-disable-line no-bitwise

    }

    /**
     * Converter um numero em string de bits (Um byte)
     * @param dec
     */
     public static bin2dec(bin: string): number {
        let valor = 0;
        for (let index = bin.length; index > 0; index--) {
            if (bin.charAt(index-1)==='1')
                valor +=Math.pow(2,(bin.length-index));
         }
        return valor;
    }

    /**
     * Converter uma string em string de bits
     * @param dec
     */
    public static string2bin(str: string): string {
        let bytes: string[] = []; // char codes
        for (let p = 0; p < str.length; ++p) {
            const code = str.charCodeAt(p);
            bytes = bytes.concat([this.dec2bin(code)]);
        }
        return bytes.join('').toString();
    }

}