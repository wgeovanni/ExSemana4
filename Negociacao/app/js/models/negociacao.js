export class Negociacao {

    #data;
    #quantidade;
    #valor;

    constructor(data, quantidade, valor) {
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }

    get data() {
        return [].concat(this.#data);
    }

    set data(data) {
        this.#data = data;
    }

    get quantidade() {
        return this.#quantidade;
    }

    set quantidade(quantidade) {
        this.#quantidade = quantidade;
    }

    get valor() {
        return this.#valor;
    }

    set valor(valor) {
        this.#valor = valor;
    }
}