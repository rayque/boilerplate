import {Request, Response} from "express";
import UsuarioService from "../services/WhatsappService";


class WhatsappController {
    async enviar(req: Request, res: Response) {
        try {
            const {servicos, telefone, mensagem} = req.body;
            const usuarios: object = await UsuarioService.enviar(servicos, telefone, mensagem);

            return res.json(usuarios);

        } catch (e) {
            console.log("==============");
            console.log(e);
        }
    }
}

export default new WhatsappController();