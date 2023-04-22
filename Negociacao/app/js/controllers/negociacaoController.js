import { Negociacao } from "../models/negociacao.js";
import { ListaNegociacoes } from "../models/listaNegociacoes.js";

export class NegociacaoController {

    #campoData;
    #campoQuantidade;
    #campoValor;
    #listaNegociacoes = new ListaNegociacoes();

    constructor() {
        this.#campoData = document.getElementById("data-negociacao");
        this.#campoQuantidade = document.getElementById("numero-acoes");
        this.#campoValor = document.getElementById("valor");
    }

    criarNegociacao() {
        let data = this.#campoData.value;
        let quantidade = this.#campoQuantidade.value;
        let valor = this.#campoValor.value;
        let novaNegociacao = new Negociacao(data, quantidade, valor);
        this.#listaNegociacoes.adicionar(novaNegociacao);
        console.log(this.#listaNegociacoes);
    }
}