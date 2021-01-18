import express from "express";
import MensagemController from "./controllers/MensagemController";

const routes = express.Router();
/*
json example
{
    "servicos": ["whatsapp", "sms"],
    "telefone": "92999999999",
    "mensagem": "lorem ypsum"
}
* */
routes.post('/enviar-msg', MensagemController.enviar);

export default routes;