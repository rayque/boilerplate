import {formataWhatsapp} from "../helpers";

require('dotenv').config();

class WhatsappService {
    async enviar(servicos: object, telefone: string, mensagem: string) {
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        const telefoneFrom = process.env.TWILIO_TELEFONE_FROM;
        const client = require('twilio')(accountSid, authToken);

        telefone = formataWhatsapp(telefone);

        return client.messages
            .create({
                body: `${mensagem}`,
                from: `whatsapp:${telefoneFrom}`,
                to: `whatsapp:55${telefone}`
            })
            .then((message: any) => {
                console.log(message.sid);
                return {
                    msg: "whatsapp enviado"
                }
            })
            .catch(() => {
                return {
                    msg: "Não foi possível enviar o whatsapp"
                }
            });
    }
}

export default new WhatsappService();