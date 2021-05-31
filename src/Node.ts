export class Node {
    public _peso: number;
    public _caracter: string;
    public _nodeEsquerdo: any = null;
    public _nodeDireito: any = null;
    public _represtaBinario: string = '';

    /* Constructor */

    constructor(peso: number, caracter: string) {
        this._peso = peso;
        this._caracter = caracter;
    }

    public calculaBinario(caminho: string): void {
        // Iterate over map values
        this._represtaBinario = caminho;
        if (this._nodeEsquerdo != null)
            this._nodeEsquerdo.calculaBinario(caminho + '0');
        if (this._nodeDireito != null)
            this._nodeDireito.calculaBinario(caminho + '1');
    }
}
