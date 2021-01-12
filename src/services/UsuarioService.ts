import {Request, Response} from "express";

class UsuarioService {
    listar() {
        return [
            {nome: "User Name"}
        ]
    }
}

export default new UsuarioService();