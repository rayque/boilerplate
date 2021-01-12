import express from "express";
import WhatsappController from "./controllers/WhatsappController";

const routes = express.Router();

routes.post('/whatsapp/enviar', WhatsappController.enviar);

export default routes;