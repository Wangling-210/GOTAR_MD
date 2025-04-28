
export async function prem(message, client) {

    const remoteJid = message.key.remoteJid;

    const today = new Date();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const currentDay = daysOfWeek[today.getDay()];

    const currentDate = today.getDate();

    const currentMonth = today.getMonth() + 1; 

    const currentYear = today.getFullYear();

    const owner = "金𝙶𝙾𝚃𝙰𝚁 𝚆𝚁𝙻𝙳金";

    const username = message.pushName || "Unknown";

    const t = ` 
      ◈ 𝐆𝐎𝐓𝐀𝐑 𝐌𝐃 ◈
 
「 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎 」
┏━━━━━━━━━
┃𝐁𝐨𝐭: 𝗚𝗼𝘁𝗮𝗿 𝗠𝗱
┃𝐕𝐞𝐫𝐬𝐢𝐨𝐧: 𝟭.𝟬.𝟬
┃𝐂𝐫𝐞𝐚𝐭𝐨𝐫: 金𝙶𝙾𝚃𝙰𝚁 𝚆𝚁𝙻𝙳金
┃𝐏𝐥𝐮𝐠𝐢𝐧𝐬: 40
┗─────────⳹ 
「 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐌𝐄𝐍𝐔 」
┏━━━━━━━━━
┃𝐂𝐨𝐧𝐧𝐞𝐜𝐭 𝟸𝟹𝟽𝐱𝐱𝐱𝐱
┃𝐑𝐞𝐜𝐨𝐧𝐧𝐞𝐜𝐭 𝟸𝟹𝟽𝐱𝐱𝐱𝐱            
┃𝐃𝐢𝐬𝐜𝐨𝐧𝐧𝐞𝐜𝐭 𝟸𝟹𝟽𝐱𝐱𝐱𝐱       
┗─────────⳹ 
> 𝐆𝐎𝐓𝐀𝐑 𝐖𝐑𝐋𝐃 2025
    `
;

    await client.sendMessage(remoteJid, {

        image: { url: "gotar.png" },

        caption: t,

        contextInfo: {

            participant: '0@s.whatsapp.net',

            remoteJid: 'status@broadcast',

            quotedMessage: { conversation:"金𝙶𝙾𝚃𝙰𝚁 𝚆𝚁𝙻𝙳金"}, 

            isForwarded: true,
        },


    });
}   

export default prem;
