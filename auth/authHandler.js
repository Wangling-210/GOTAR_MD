import { makeWASocket, useMultiFileAuthState, DisconnectReason } from '@whiskeysockets/baileys';

import configManager from '../utils/manageConfigs.js';

import group from '../commands/group.js'

import readline from 'readline';

async function promptUserNumber() {

    return new Promise((resolve) => {

        const rl = readline.createInterface({

            input: process.stdin,

            output: process.stdout,
        });

        rl.question('Enter your WhatsApp number with country code (ex 509xxx): ', (number) => {

            rl.close();
            resolve(number.trim());
        });
    });
}

async function connectToWhatsApp(handleMessage) {
    
    const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys');

    const sock = makeWASocket({ auth: state, printQRInTerminal: true, syncFullHistory: false });

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('connection.update', async (update) => {

        const { connection, lastDisconnect } = update;

        if (connection === 'close') {

            const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;

            if (shouldReconnect) connectToWhatsApp(handleMessage);

        } else if (connection === 'open') { 

            console.log("Connection okay")
            
        }
    });

    setTimeout(async () => {

        if (!state.creds.registered) {

            console.log(`
            ⡏⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿
⣿⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠁⠀⣿
⣿⣧⡀⠀⠀⠀⠀⠙⠿⠿⠿⠻⠿⠿⠟⠿⠛⠉⠀⠀⠀⠀⠀⣸⣿
⣿⣿⣷⣄⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿
⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣴⣿⣿⣿⣿
⣿⣿⣿⡟⠀⠀⢰⣹⡆⠀⠀⠀⠀⠀⠀⣭⣷⠀⠀⠀⠸⣿⣿⣿⣿
⣿⣿⣿⠃⠀⠀⠈⠉⠀⠀⠤⠄⠀⠀⠀⠉⠁⠀⠀⠀⠀⢿⣿⣿⣿
⣿⣿⣿⢾⣿⣷⠀⠀⠀⠀⡠⠤⢄⠀⠀⠀⠠⣿⣿⣷⠀⢸⣿⣿⣿
⣿⣿⣿⡀⠉⠀⠀⠀⠀⠀⢄⠀⢀⠀⠀⠀⠀⠉⠉⠁⠀⠀⣿⣿⣿
⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿
⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿

            ✅ Hello Guy GOTAR MD BY 金𝙶𝙾𝚃𝙰𝚁 𝚆𝚁𝙻𝙳金 Enjoy`);

            try {

                const number = await promptUserNumber();

                console.log(`🔄 Requesting a pairing code for ${number}`);

                const code = await sock.requestPairingCode(number);

                console.log(`📲 Pairing Code: ${code}`);
                
                console.log('👉 Enter this code on your WhatsApp phone app to pair.');


                configManager.config.users[`${number}`] = {
                sudoList: [],
                tagAudioPath: "tag.mp3",
                antilink: false,
                response: true,
                autoreact: false,
                prefix: ".",
                reaction: "🌹",
                welcome: true,
                record:true,
                type:true
                };

                configManager.save();
            } catch (error) {
                console.error('❌ Error requesting pairing code:', error);
            }
        }
    }, 5000);

    sock.ev.on('messages.upsert', async (msg) => handleMessage(msg, sock));

    sock.ev.on('group-participants.update', async (update) => {

        await group.welcome(update,sock);

    });

    return sock;
}

export default connectToWhatsApp;
