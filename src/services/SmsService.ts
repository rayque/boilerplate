require('dotenv').config();

class SmsService {
    async enviar(servicos: object, telefone: string, mensagem: string) {
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;
        const client = require('twilio')(accountSid, authToken);

        return client.messages
            .create({
                messagingServiceSid,
                body: `${mensagem}`,
                to: `55${telefone}`
            })
            .then((message: any) => {
                console.log(message.sid);
                return {
                    msg: "sms enviado"
                }
            })
            .catch(() => {
                return {
                    msg: "Não foi possível enviar o sms"
                }
            });
    }
}

export default new SmsService();