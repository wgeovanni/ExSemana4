import { NegociacaoController } from "../controllers/negociacaoController.js";

const formulario = document.querySelector(".formulario");

const controller = new NegociacaoController();
formulario.addEventListener("submit", () => {
    event.preventDefault();
    controller.criarNegociacao();
})