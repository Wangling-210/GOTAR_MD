async function bug(message, client, texts, num) {

    const remoteJid = message.key.remoteJid;

    await client.sendMessage(remoteJid, {

        image: { url: `${num}.png` },

        caption: `> ${texts}`,

        contextInfo: {

            externalAdReply: {

                title: "Join Our WhatsApp Channel",

                body: "金𝙶𝙾𝚃𝙰𝚁 𝚆𝚁𝙻𝙳金",

                mediaType: 1, // Image preview

                thumbnailUrl: `https://whatsapp.com/channel/0029VbAJA1THwXbA74a5pO1s`,

                renderLargerThumbnail: false,

                mediaUrl: `${num}.png`,

                sourceUrl: `${num}.png`
            }
        }
    });
}

export default bug;
