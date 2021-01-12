import express from "express";
import UsuarioController from "./controllers/UsuarioController";

const routes = express.Router();

routes.post('/usuarios', UsuarioController.listar);

export default routes;