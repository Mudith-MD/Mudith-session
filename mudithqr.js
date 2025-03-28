const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Mudith_Tech,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function Mudith-MD_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Mudith_Tech = Mudith_Tech({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Mudith_Tech.ev.on('creds.update', saveCreds)
			Qr_Code_By_Mudith_Tech.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Mudith_Tech.sendMessage(Qr_Code_By_Wasi_Tech.user.id, { text: '' + b64data });
	
				   let Mudith-MD_TEXT = `
*_Session Connected By Mudith Tech_*
*_Made With 🤍_*
______________________________________
╔════◇
║ *『AMAZING YOU'VE CHOSEN MUDITH MD』*
║ _You Have Completed the First Step to Deploy a Whatsapp Bot._
╚════════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ *Ytube:* _youtube.com/@1
║❒ *Owner:* _https://wa.me/message/JRM6G4KX5JAVO1_
║❒ *Repo:* _https://github.com/Mudith-MD/Mudith_King_
║❒ *WaGroup:* _https://chat.whatsapp.com/JRM6G4KX5JAVO1_
║❒ *WaChannel:* _https://whatsapp.com/channel/JRM6G4KX5JAVO1_
║❒ *Plugins:* _https://github.com/Itmudith 
╚════════════════════════╝
_____________________________________
	
_Don't Forget To Give Star To My Repo_`
	 await Qr_Code_By_Mudith_Tech.sendMessage(Qr_Code_By_Mudith_Tech.user.id,{text:MUDITH_MD_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Mudith_Tech.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					Mudith-MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await Mudith-MD_QR_CODE()
});
module.exports = router
