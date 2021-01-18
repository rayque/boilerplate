import {Request, Response} from "express";
import WhatsappService from "../services/WhatsappService";


class WhatsappController {
    async enviar(req: Request, res: Response) {
        try {
            const {servicos, telefone, mensagem} = req.body;
            const whatsapp: object = await WhatsappService.enviar(servicos, telefone, mensagem);

            return res.json(whatsapp);
        } catch (e) {
            console.log("==============");
            console.log(e);
        }
    }
}

export default new WhatsappController();