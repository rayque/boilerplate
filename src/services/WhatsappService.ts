require('dotenv').config();

class WhatsappService {
    async enviar(servicos: object, telefone: string, mensagem: string) {
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        const telefoneFrom = process.env.TWILIO_TELEFONE_FROM;
        const client = require('twilio')(accountSid, authToken);

        return client.messages
            .create({
                body: `${mensagem}`,
                from: `whatsapp:${telefoneFrom}`,
                to: `whatsapp:${telefone}`
            })
            .then((message: any) => {
                return {
                    msg: "Mensagem enviada"
                }
            })
            .catch((e: any) => {
                return {
                    msg: "Não foi possível enviar a mensagem"
                }
            });
    }
}

export default new WhatsappService();