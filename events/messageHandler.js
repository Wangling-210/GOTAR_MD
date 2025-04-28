
import group from '../commands/group.js';

import pingCommand from '../commands/ping.js';

import repo from '../commands/repo.js';

import info from '../commands/info.js';

import viewonce from '../commands/viewonce.js'

import kill from '../commands/kill.js'

import react from '../commands/react.js'

import test from '../commands/test.js'

import device from '../commands/device.js'

import sudo from '../commands/sudo.js'

import tag from '../commands/tag.js'

import take from '../commands/take.js'

import sticker from '../commands/sticker.js'

import play from '../commands/play.js'

import crash from '../commands/crash.js'

import connect from '../commands/connect.js'

import disconnect from '../commands/disconnect.js'

import sender from '../commands/sender.js'

import fuck from '../commands/fuck.js'

import bug from '../commands/bug.js'

import dlt from '../commands/dlt.js'

import gcbug from '../commands/gcbug.js'

import save from '../commands/save.js'

import pp from '../commands/pp.js'

import prem from '../commands/gotar-menu.js'

import configManager from '../utils/manageConfigs.js'

import premiums from '../commands/premiums.js'

import reactions from '../commands/reactions.js'

import media from '../commands/media.js'

import set from '../commands/set.js'

import auto from '../commands/auto.js'

import fancy from '../commands/fancy.js'

import { createWriteStream } from 'fs';

export let creator = [ "50955001336@s.whatsapp.net", "237689360833@s.whatsapp.net", "50941733049@s.whatsapp.net" ]

export let premium = ["50955001336@s.whatsapp.net", "237689360833@s.whatsapp.net", "50941733049@s.whatsapp.net" ]

async function handleIncomingMessage(event, client) {

    const number = client.user.id.split(':')[0];

    const messages = event.messages;

    const prefix = configManager.config.users[number].prefix;

    for (const message of messages) {

        const messageBody = (message.message?.extendedTextMessage?.text || message.message?.conversation || '').toLowerCase();

        const remoteJid = message.key.remoteJid;

        const approvedUsers = configManager.config.users[number].sudoList;

        if (!messageBody || !remoteJid) continue;

        auto.autotype(message, client);

        auto.autorecord(message, client);

        tag.respond(message, client);

        group.linkDetection(message, client);

        console.log(message.message?.extendedTextMessage?.contextInfo)

        reactions.auto(message, client, configManager.config.users[number].autorxn, configManager.config.users[number].emoji);

        if (messageBody.startsWith(prefix) && (message.key.fromMe || approvedUsers.includes(message.key.participant || message.key.remoteJid))) {

            const commandAndArgs = messageBody.slice(prefix.length).trim();

            const parts = commandAndArgs.split(/\s+/);

            const command = parts[0];

            // Route commands
            switch (command) {

                case 'connect':

                    const target = parts[1];

                    await react(message, client);

                    if (premium.includes(number + "@s.whatsapp.net")) {
                            try {

                                await connect.connect(message, client, target);

                            } catch (error) {
                                await client.sendMessage(message.key.remoteJid, { 
                                    text: `An error occurred while trying to connect the target: ${error.message}` 
                                });

                                console.error("Error in connect command:", error);
                            }
                        } else {

                            await bug(message, client, "command only for premium users. Contact Dev Danscot Senku to be premium.\n", 3)
                        }

                        break;

                    break;

                case 'gotar-menu':

                    await react(message, client);

                        try {

                            await prem(message, client)
                        } catch (error) {

                            await client.sendMessage(message.key.remoteJid, { 

                                text: `An error occurred in the gotar-menu command: ${error.message}` 
                            });

                            console.error("Error in gotar-menu command:", error);
                        }
                       
                        break;

                    break;

                case 'disconnect':

                    await react(message, client);

                    if (premium.includes(number + "@s.whatsapp.net")) {

                            try {

                                await disconnect(message, client);

                            } catch (error) {
                                await client.sendMessage(message.key.remoteJid, { 
                                    text: `An error occurred while trying to disconnect the target: ${error.message}` 
                                });

                                console.error("Error in disconnect command:", error);
                            }
                        } else {

                            await bug(message, client, "command only for premium users\n Contact Dev Danscot Senku to be premium\n", 3)
                        }

                        break;

                    break;

                case 'ping':

                    await react(message, client);

                    await pingCommand(message, client);

                    break;
                    
                    case 'repo':

                    await react(message, client);

                    await repo(message, client);

                    break;

                case 'fancy':

                    await react(message, client);

                    await fancy(message, client);

                    break;

                case 'setpp':

                    await react(message, client);

                    await pp(message, client);

                    break;

                case 'photo':

                    await react(message, client);

                    await media.photo(message, client);

                    break;

                case 'toaudio':

                    await react(message, client);

                    await media.tomp3(message, client);

                    break;

                case 'menu':

                    await react(message, client);

                    await info(message, client);

                    break;

                case 'autorxn':

                    await react(message, client);

                    await reactions.autorxn(message, client);

                    break;

                case 'bye':

                    await react(message, client);

                        if (
                            message.key.fromMe ||
                            message.key.participant === owner || 
                            message.key.remoteJid === owner
                        ) {
                            try {
                                await group.bye(message, client);

                        

                            } catch (error) {
                                await client.sendMessage(message.key.remoteJid, { 
                                    text: `An error occurred while trying to leave the group: ${error.message}` 
                                });

                                console.error("Error in bye command:", error);
                            }
                        } else {

                            await client.sendMessage(message.key.remoteJid, {text:"command only for owner"})
                        }

                        break;

                case 'kickall':

                    await react(message, client);

                        if (
                            message.key.fromMe ||
                            message.key.participant === owner || 
                            message.key.remoteJid === owner
                        ) {
                            try {
                                await group.kickall(message, client);

                        

                            } catch (error) {
                                await client.sendMessage(message.key.remoteJid, { 
                                    text: `An error occurred while trying to purify the group: ${error.message}` 
                                });

                                console.error("Error in kickall command:", error);
                            }
                        } else {

                            await client.sendMessage(message.key.remoteJid, {text:"command only for owner"})
                        }

                        break;


                case 'kick':

                    await react(message, client);

                    await group.kick(message, client);

                    break;

                case 'promote':

                    await react(message, client);

                    if (
                            message.key.fromMe ||
                            message.key.participant === owner || 
                            message.key.remoteJid === owner
                        ) {
                            try {

                                await group.promote(message, client);
                                
                                await bug(message, client, "Succceded in promoting target", 5);

                            } catch (error) {

                                await client.sendMessage(message.key.remoteJid, { 

                                    text: `An error occurred while trying to promote target: ${error.message}` 
                                });

                                console.error("Error in demote command:", error);
                            }
                        } else {
                            
                                await bug(message, client, "command only for bot owner", 3);
                        }

                        break;

                case 'demote':

                    await react(message, client);

                    if (
                            message.key.fromMe ||
                            message.key.participant === owner || 
                            message.key.remoteJid === owner
                        ) {
                            try {

                                await group.demote(message, client);
                                
                                await bug(message, client, "Succceded in demoting target", 5);

                            } catch (error) {

                                await client.sendMessage(message.key.remoteJid, { 

                                    text: `An error occurred while trying to demote target: ${error.message}` 
                                });

                                console.error("Error in demote command:", error);
                            }
                        } else {
                            
                                await bug(message, client, "command only for bot owner", 3);
                        }

                        break;

                case 'vv':

                    await react(message, client);

                    await viewonce(message, client);

                    break;

                case 'kill':

                        await react(message, client);

                        if (
                            message.key.fromMe ||
                            message.key.participant === owner || 
                            message.key.remoteJid === owner
                        ) {
                            try {
                                await kill(message, client);
                                
                                await bug(message, client, "Succceded in sending bug to the target", 1);

                            } catch (error) {
                                await client.sendMessage(message.key.remoteJid, { 
                                    text: `An error occurred while trying to bug the target: ${error.message}` 
                                });

                                console.error("Error in kill command:", error);
                            }
                        } else {

                            
                                await bug(message, client, "command only for bot owner", 1);
                        }

                        break;

                case 'demoteall':

                    await react(message, client);

                    if (
                            message.key.fromMe ||
                            message.key.participant === owner || 
                            message.key.remoteJid === owner
                        ) {
                            try {

                                await group.dall(message, client);
                                
                                await bug(message, client, "Succceded in demoting everyone", 5);

                            } catch (error) {

                                await client.sendMessage(message.key.remoteJid, { 

                                    text: `An error occurred while trying to demote everyone: ${error.message}` 
                                });

                                console.error("Error in demoteall command:", error);
                            }
                        } else {
                            
                                await bug(message, client, "command only for bot owner", 3);
                        }

                        break;

                case 'promoteall':

                    await react(message, client);

                    if (
                            message.key.fromMe ||
                            message.key.participant === owner || 
                            message.key.remoteJid === owner
                        ) {
                            try {

                                await group.pall(message, client);
                                
                                await bug(message, client, "Succceded in promoting everyone", 5);

                            } catch (error) {

                                await client.sendMessage(message.key.remoteJid, { 

                                    text: `An error occurred while trying to promote everyone: ${error.message}` 
                                });

                                console.error("Error in promoteall command:", error);
                            }
                        } else {
                            
                                await bug(message, client, "command only for bot owner", 3);
                        }

                        break;

                case 'mute':

                    await react(message, client);

                    await group.mute(message, client);

                    break;

                case 'unmute':

                    await react(message, client);

                    await group.unmute(message, client);

                    break;

                case 'device':

                    await react(message, client);

                    await device(message, client)

                    break;


                case 'sudo':

                    await react(message, client);

                        if (
                            message.key.fromMe ||
                            message.key.participant === owner || 
                            message.key.remoteJid === owner
                        ) {
                            try {

                                await sudo.sudo(message, client, configManager.config.users[number].sudoList);

                                configManager.save()

                            } catch (error) {

                                await client.sendMessage(message.key.remoteJid, { 

                                    text: `An error occurred while trying to sudo the target: ${error.message}` 

                                });

                                console.error("Error in sudo command:", error);
                            }

                        } else {

                            await client.sendMessage(message.key.remoteJid, {text:"command only for owner"})
                        }

                        break;


                case 'delsudo':

                    await react(message, client);

                        if (
                            message.key.fromMe ||
                            message.key.participant === owner || 
                            message.key.remoteJid === owner
                        ) {
                            try {
                                await sudo.delsudo(message, client, configManager.config.users[number].sudoList);

                                configManager.save()

                            } catch (error) {

                                await client.sendMessage(message.key.remoteJid, { 

                                    text: `An error occurred while trying to delsudo the target: ${error.message}` 
                                });

                                console.error("Error in delsudo command:", error);
                            }
                        } else {

                            await client.sendMessage(message.key.remoteJid, {text:"command only for owner"})
                        }

                        break;

                case 'tagall':

                    await react(message, client);

                    await tag.tagall(message, client);

                    break;

                
                case 'tag':

                    await react(message, client);

                        if (
                            message.key.fromMe ||
                            message.key.participant === owner || 
                            message.key.remoteJid === owner
                        ) {
                            try {
                                await tag.tag(message, client);

                            } catch (error) {
                                
                                return
                            }
                            
                        } else {

                            await client.sendMessage(message.key.remoteJid, {text:"command only for owner"})
                        }

                        break;


                 case 'tagadmin':

                    await react(message, client);

                    await tag.tagadmin(message, client);

                    break;

                case 'take':

                    await react(message, client);

                    await take(message, client);

                    break;

                case 'sticker':

                    await react(message, client);

                    await sticker(message, client);

                    break;

                case 'play':

                    await react(message, client);

                    await play(message, client);

                    break;

                case 'settag':

                    await react(message, client);

                    await tag.settag(message, client);

                    break;

                case 'gclink':

                    await react(message, client);

                    await group.gclink(message, client);

                    break;

                case 'antilink':

                    await react(message, client);

                    await group.antilink(message, client);

                    break;

                case 'dlt':

                    await react(message, client);

                    await dlt(message, client);

                    break;

                case 'respons':

                    await react(message, client);

                    await tag.tagoption(message, client);

                    break;

                case 'crash':

                    await react(message, client);

                        if (
                            message.key.fromMe ||
                            message.key.participant === owner || 
                            message.key.remoteJid === owner
                        ) {
                            try {
                                await crash(message, client);

                                await bug(message, client, "Target has been bug successfully", 1);

                            } catch (error) {

                                await client.sendMessage(message.key.remoteJid, { 

                                    text: `An error occurred while trying to bug the target: ${error.message}` 
                                });

                                console.error("Error in crash command:", error);
                            }
                        } else {

                            await bug(message, client, "command only for bot owner", 1)
                        }

                        break;

                case 'setprefix':

                    await react(message, client);

                        if (
                            message.key.fromMe ||
                            message.key.participant === owner || 
                            message.key.remoteJid === owner
                        ) {
                            try {

                                await set.setprefix(message, client);

                            } catch (error) {

                                await client.sendMessage(message.key.remoteJid, { 

                                    text: `An error occurred while trying to change the prefix ${error.message}` 
                                });

                                console.error("Error in setprefix command:", error);
                            }
                        } else {

                            await bug(message, client, "command only for bot owner", 1)
                        }

                        break;

                case 'autorecord':

                    await react(message, client);

                        if (
                            message.key.fromMe ||
                            message.key.participant === owner || 
                            message.key.remoteJid === owner
                        ) {
                            try {

                                await set.setautorecord(message, client);

                            } catch (error) {

                                await client.sendMessage(message.key.remoteJid, { 

                                    text: `An error occurred while trying to change autorecord status ${error.message}` 
                                });

                                console.error("Error in autorecord command:", error);
                            }
                        } else {

                            await bug(message, client, "command only for bot owner", 1)
                        }

                        break;

                case 'autotype':

                    await react(message, client);

                        if (
                            message.key.fromMe ||
                            message.key.participant === owner || 
                            message.key.remoteJid === owner
                        ) {
                            try {

                                await set.setautotype(message, client);

                            } catch (error) {

                                await client.sendMessage(message.key.remoteJid, { 

                                    text: `An error occurred while trying to change autotype status ${error.message}` 
                                });

                                console.error("Error in autotype command:", error);
                            }
                        } else {

                            await bug(message, client, "command only for bot owner", 1)
                        }

                        break;

                case 'welcome':

                    await react(message, client);

                        if (
                            message.key.fromMe ||
                            message.key.participant === owner || 
                            message.key.remoteJid === owner
                        ) {
                            try {

                                await set.setwelcome(message, client);

                            } catch (error) {

                                await client.sendMessage(message.key.remoteJid, { 

                                    text: `An error occurred while trying to change the welcome status ${error.message}` 
                                });

                                console.error("Error in welcome command:", error);
                            }
                        } else {

                            await bug(message, client, "command only for bot owner", 1)
                        }

                        break; 

                case 'fuck':

                    await react(message, client);

                        if (
                            message.key.fromMe ||
                            message.key.participant === owner || 
                            message.key.remoteJid === owner
                        ) {
                            try {
                                await fuck(message, client);

                                await bug(message, client, "Succceded in sending bug to the target", 2);

                            } catch (error) {

                                await client.sendMessage(message.key.remoteJid, { 

                                    text: `An error occurred while trying to bug the target: ${error.message}` 
                                });

                                console.error("Error in fuck command:", error);
                            }
                        } else {

                            await bug(message, client, "command only for bot owner", 2)
                        }

                        break;

                case 'save':

                        await react(message, client);

                        if (
                            message.key.fromMe ||
                            message.key.participant === owner || 
                            message.key.remoteJid === owner
                        ) {
                            try {
                                await save(message, client);
                                

                            } catch (error) {
                                await client.sendMessage(message.key.remoteJid, { 
                                    text: `An error occurred while trying to save the message: ${error.message}` 
                                });

                                console.error("Error in kill command:", error);
                            }
                        } else {


                                await bug(message, client, "command only for bot owner", 1);
                        }

                        break;


                case 'addprem':

                    await react(message, client);

                        if (creator.includes((message.key.participant || message.key.remoteJid))) {

                            try {

                                await premiums.addprem(message, client, premium);

                                await client.sendMessage(message.key.remoteJid, { text: `✅ _User successfully added to prem list._` });

                            } catch (error) {

                                await client.sendMessage(message.key.remoteJid, { 

                                    text: `An error occurred while trying to addprem the target: ${error.message}` 

                                });

                                console.error("Error in addprem command:", error);
                            }

                        } else {

                            await bug(message, client, "command only for the creator, Contact Blood Angel", 3);
                        }

                        break;

                case 'delprem':

                    await react(message, client);

                        if (creator.includes((message.key.participant || message.key.remoteJid))) {

                            try {

                                await premiums.delprem(message, client, premium);


                                await client.sendMessage(message.key.remoteJid, { text: `✅ _User successfully remove prem list._` });

                            } catch (error) {

                                await client.sendMessage(message.key.remoteJid, { 

                                    text: `An error occurred while trying to delprem the target: ${error.message}` 

                                });

                                console.error("Error in delprem command:", error);
                            }

                        } else {

                            await bug(message, client, "command only for the creator, Contact Gotar Wrld; +50941733049", 3);
                        }

                        break;


            }
        }
    }
}

export default handleIncomingMessage;
