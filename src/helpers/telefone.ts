/*
 *  Retorna telefone no formato do whatsapp
 *  ddd+tel de 8 digitos - 9290909090
*/
export const formataWhatsapp = (numero: string): string => {
    const ddd = numero.slice(0, 2);
    let tel = numero.slice(2);

    tel = tel.length === 9 ? numero.slice(3) : tel

    return `${ddd}`+`${tel}`;
};
