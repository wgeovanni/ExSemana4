export class ListaNegociacoes {

    #negociacoes = [];

    adicionar(negociacao) {
        this.#negociacoes.push(negociacao);
    }

    get listaNegociacoes() {
        return [].concat(this.#negociacoes);
    }
}