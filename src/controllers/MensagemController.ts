import {Request, Response} from "express";
import WhatsappService from "../services/WhatsappService";
import SmsService from "../services/SmsService";

class MensagemController {
    async enviar(req: Request, res: Response) {
        try {
            const {servicos, telefone, mensagem} = req.body;
            let result: Array<string> = [];

            if (servicos.includes('whatsapp')) {
                const whatsapp = await WhatsappService.enviar(servicos, telefone, mensagem);
                result.push(whatsapp);
            }

            if (servicos.includes('sms')) {
                const sms = await SmsService.enviar(servicos, telefone, mensagem);
                result.push(sms);
            }

            return res.json(result);
        } catch (e) {
            console.log();
            console.log("============== ERROR ============== ");
            console.log(e);
        }
    }
}

export default new MensagemController();
