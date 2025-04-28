
import configManager from '../utils/manageConfigs.js'

export async function info(message, client) {

    const remoteJid = message.key.remoteJid;

    const today = new Date();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const currentDay = daysOfWeek[today.getDay()];

    const currentDate = today.getDate();

    const currentMonth = today.getMonth() + 1; 

    const currentYear = today.getFullYear();

    const owner = "金𝙶𝙾𝚃𝙰𝚁 𝚆𝚁𝙻𝙳金";

    const number = client.user.id.split(':')[0];

    const username = message.pushName || "Unknown";

    const t = ` 
┏─圓 𝐆𝐎𝐓𝐀𝐑 𝐌𝐃 圓
┃𝐁𝐨𝐭: 𝗚𝗼𝘁𝗮𝗿 𝗠𝗱
┃𝐕𝐞𝐫𝐬𝐢𝐨𝐧: 1.0
┃𝐌𝐞𝐦𝐨𝐫𝐲:
┃𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦: 𝗟𝗶𝗻𝘂𝘅
┃𝐏𝐥𝐮𝐠𝐢𝐧𝐬: 40
┃𝐃𝐞𝐯: シ︎𝙶𝙾𝚃𝙰𝚁 𝚆𝚁𝙻𝙳シ︎
┗─────────⳹ 
 𝐆𝐎𝐓𝐀𝐑 𝐌𝐃
┏─「 🔰𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔 」圓
┃𝐏𝐢𝐧𝐠
┃𝐌𝐞𝐧𝐮
┃𝐒𝐮𝐝𝐨
┃𝐃𝐞𝐯𝐢𝐜𝐞
┃𝐃𝐞𝐥𝐬𝐮𝐝𝐨
┃𝐀𝐮𝐭𝐨𝐫𝐱𝐧
┃𝐒𝐞𝐭𝐏𝐫𝐞𝐟𝐢𝐱
┃𝐆𝐨𝐭𝐚𝐫-𝐦𝐞𝐧𝐮
┃𝐀𝐮𝐭𝐨𝐭𝐲𝐩𝐞 𝐎𝐧/𝐎𝐟𝐟
┃𝐀𝐮𝐭𝐨𝐫𝐞𝐜𝐨𝐫𝐝 𝐎𝐧/𝐎𝐟𝐟
┃𝐅𝐚𝐧𝐜𝐲
┃𝐒𝐜𝐫𝐢𝐩𝐭
┗─────────⳹ 

┏─「 👥𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔 」
┃𝐊𝐢𝐜𝐤
┃𝐏𝐮𝐫𝐠𝐞
┃𝐌𝐮𝐭𝐞
┃𝐔𝐧𝐦𝐮𝐭𝐞
┃𝐏𝐫𝐨𝐦𝐨𝐭𝐞
┃𝐃𝐞𝐦𝐨𝐭𝐞
┃𝐆𝐜𝐥𝐢𝐧𝐤
┃𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤 𝐎𝐧/𝐎𝐟𝐟
┃𝐏𝐫𝐨𝐦𝐨𝐭𝐞𝐚𝐥𝐥
┃𝐃𝐞𝐦𝐨𝐭𝐞𝐚𝐥𝐥
┃𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐎𝐧/𝐎𝐟𝐟
┃𝐓𝐚𝐠
┃𝐓𝐚𝐠𝐚𝐥𝐥
┃𝐓𝐚𝐠𝐚𝐝𝐦𝐢𝐧
┃𝐒𝐞𝐭𝐭𝐚𝐠
┃𝐑𝐞𝐬𝐩𝐨𝐧𝐬
┗──────────⳹ 
┏─ 「 📂𝐌𝐄𝐃𝐈𝐀 𝐌𝐄𝐍𝐔 」
┃𝐓𝐚𝐤𝐞
┃𝐕𝐕
┃𝐒𝐚𝐯𝐞
┃𝐏𝐡𝐨𝐭𝐨
┃𝐒𝐞𝐭𝐩𝐩
┃𝐓𝐨𝐚𝐮𝐝𝐢𝐨
┃𝐒𝐭𝐢𝐜𝐤𝐞𝐫
┗──────────⳹ 

┏─「 ⛓️𝐁𝐔𝐆 𝐌𝐄𝐍𝐔 」
┃𝐂𝐫𝐚𝐬𝐡 509𝐱𝐱𝐱
┃𝐅𝐮𝐜𝐤 509𝐱𝐱𝐱
┃𝐊𝐢𝐥𝐥 509𝐱𝐱𝐱 
┗─────────⳹ 
 𝐆𝐎𝐓𝐀𝐑 𝐌𝐃

            𓊈𝗧𝗛𝗔𝗡𝗞𝗦𓊉
✵𝐆𝐨𝐭𝐚𝐫 𝐖𝐫𝐥𝐝 (𝐌𝐞/𝐃𝐞𝐯)
✵𝐃𝐞𝐯 𝐒𝐞𝐧𝐤𝐮 (𝐁𝐚𝐬𝐞) 
✵𝐁𝐥𝐨𝐨𝐝 𝐀𝐧𝐠𝐞𝐥 (𝐂𝐨𝐥𝐥𝐚𝐛)
✵𝐋𝐢𝐦𝐮𝐥𝐞 𝐒𝐨𝐥𝐢𝐭𝐚𝐫𝐢𝐮𝐬 (𝐂𝐨𝐥𝐥𝐚𝐛)
✵𝐒𝐡𝐚𝐝𝐨𝐰 𝐌𝐢𝐭𝐧𝐢𝐤 (𝐂𝐨𝐥𝐥𝐚𝐛)
✵𝐂𝐇: https://whatsapp.com/channel/0029VbAJA1THwXbA74a5pO1s

> 𝐆𝐎𝐓𝐀𝐑 𝐖𝐑𝐋𝐃 2025
    `
;

    await client.sendMessage(remoteJid, {

        image: { url: "gotar.png" },

        caption: t,

        contextInfo: {

            participant: '0@s.whatsapp.net',

            remoteJid: 'status@broadcast',

            quotedMessage: { conversation:"https://whatsapp.com/channel/0029VbAJA1THwXbA74a5pO1s"}, 

            isForwarded: true,
        },


    });

    await client.sendMessage(remoteJid, {

            audio: { url: "gotar.mp3" }, 

            mimetype: 'audio/mp4',

            ptt: true,
        });
}   

export default info;
