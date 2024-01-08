const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = "919539412641" //hy process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ajsalsd:rioHWvIFV7nkxkWz@cluster0.d0hnfmp.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'itzmeajsal@gmail.com'
global.github = 'https://github.com/A-J-S-A-L-S-P-A-R-K-Y'
global.location = 'Malappuram,Kerala'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '919539412641'
global.devs = '919539412641';
global.website = 'https://github.com/A-J-S-A-L-S-P-A-R-K-Y' //wa.me/+919539412641
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/PHL1lqr.jpg'
module.exports = {
  botname:'𝘼𝙓𝙇-𝙈𝘿-𖤍',
  ownername:'𝘈𝘑𝘟𝘈𝘓-SER',
  sessionName:false,
  author:'𝘼𝙓𝙇 - 𝙈𝘿 𖤍; 𝘈𝘑𝘟𝘈𝘓-SER',
  auto_read_status :false,
  packname:'𝘼𝙓𝙇 - 𝙈𝘿 𖤍; 𝘈𝘑𝘟𝘈𝘓-SER',
  autoreaction:false,
  antibadword :'nbwoed',
  alwaysonline:false,
  antifake :'1',
  readmessage:false,
  auto_status_saver:false,
  HANDLERS:['.'],
  warncount :3,
  disablepm:false,
  levelupmessage:false,
  antilink:'chat.whatsapp.com',
  antilinkaction:'remove',
  BRANCH:'main', 
  ALIVE_MESSAGE:'ʜᴇy ɪ ᴀᴍ ꜱᴛɪʟʟ ᴀʟɪᴠᴇ\n\n*© 𝘼𝙓𝙇 - 𝙈𝘿 𖤍*',
  autobio:true,
  OPENAI_API_KEY:false,
  heroku:false,
  HEROKU: {
    HEROKU:false,
    API_KEY:'1abfce1e-1bee-4334-9f6c-f4c1cb1cafab',
    APP_NAME:'zeropgg'
},
  VERSION:'v.1.0',
  LANG: process.env.THEME|| 'AXL',
  WORKTYPE:'public'
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
