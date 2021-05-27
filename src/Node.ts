export class Node {
    public _peso: number;
    public _caracter: string;
    public _nodeEsquerdo: any = null;
    public _nodeDireito: any = null;

    /* Constructor */

    constructor(peso: number, caracter: string) {
        this._peso = peso;
        this._caracter = caracter;
    }
}
