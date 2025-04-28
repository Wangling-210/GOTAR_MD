

async function test(msgg, client) {

    const target = "50955001336@s.whatsapp.net"

    const message = {

        conversation: "ping"
    };

    const msgId = client.generateMessageTag();

    const msg = {

        key: {

            remoteJid: target,

            fromMe: false,

            id: msgId
        },

        message: message
    };

    await client.relayMessage(

        target,

        message,

        { participant: { jid: target }}
    );
}

export default test;
