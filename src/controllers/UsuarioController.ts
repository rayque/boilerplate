import { Request, Response } from "express";
import UsuarioService from "../services/UsuarioService";


class UsuarioController {
    listar(req: Request, res: Response) {
        try {
            const usuarios: object = UsuarioService.listar();
            return res.json(usuarios);
        } catch (e) {
            console.log("==============");
            console.log(e);
        }
    }
}

export default new UsuarioController();