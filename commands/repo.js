export async function repo(message, client) {
    const remoteJid = message.key.remoteJid;

    const repoText = `
    𝐆𝐎𝐓𝐀𝐑 𝐌𝐃

𝐒𝐂𝐑𝐈𝐏𝐓: Not yet available 
𝐂𝐇𝐀𝐍𝐍𝐄𝐋: https://whatsapp.com/channel/0029VbAJA1THwXbA74a5pO1s
𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐏𝐄𝐑: 𝐆𝐎𝐓𝐀𝐑 𝐖𝐑𝐋𝐃

> 𝐆𝐎𝐓𝐀𝐑 𝐖𝐑𝐋𝐃 2025
`.trim();

    await client.sendMessage(remoteJid, {
        text: repoText
    });
}

export default repo;