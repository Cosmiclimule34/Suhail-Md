const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237693538738";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_40_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTYwLFxuICAgICAgICA3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDgxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIsXG4gICAgICAgIDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyLFxuICAgICAgICAyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjksXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA1LFxuICAgICAgICA0LFxuICAgICAgICA0MSxcbiAgICAgICAgODksXG4gICAgICAgIDI0MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODgsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA2OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTEyLFxuICAgICAgICA0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEsXG4gICAgICAgIDU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODksXG4gICAgICAgIDM2LFxuICAgICAgICAxNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAzMixcbiAgICAgICAgMTkzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDgxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA1MixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgzLFxuICAgICAgICA3MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM4LFxuICAgICAgICA5NixcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNCxcbiAgICAgICAgNTksXG4gICAgICAgIDUzLFxuICAgICAgICA5MSxcbiAgICAgICAgODgsXG4gICAgICAgIDYyLFxuICAgICAgICA3MSxcbiAgICAgICAgNyxcbiAgICAgICAgMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDUyLFxuICAgICAgICA0MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDQzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRnhOQ3ErcS8weWlUNVBWK3hKZ2RrSUlnOUpTZUZheUpuaGhzWUg3bzNBND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNFRxbEFNcmlTTEM1VDJoUTJWbEVoZ1wiLFxuICBcInBob25lSWRcIjogXCI0ZjU5OGJmYS04MTFmLTRjZGQtYWI3OS1hNGFkNjYzYjM5YmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM0LFxuICAgICAgMjQyLFxuICAgICAgMTQ5LFxuICAgICAgMjIyLFxuICAgICAgNjcsXG4gICAgICAxNTAsXG4gICAgICAxMixcbiAgICAgIDE5MCxcbiAgICAgIDgyLFxuICAgICAgMTUxLFxuICAgICAgOTQsXG4gICAgICAxODYsXG4gICAgICAzNSxcbiAgICAgIDc0LFxuICAgICAgMTQzLFxuICAgICAgMTMxLFxuICAgICAgMzMsXG4gICAgICAxMjksXG4gICAgICAxODUsXG4gICAgICAxNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYxLFxuICAgICAgNTUsXG4gICAgICAyMDksXG4gICAgICAyMzAsXG4gICAgICAxNzEsXG4gICAgICAxOTcsXG4gICAgICA2NyxcbiAgICAgIDIxNyxcbiAgICAgIDk3LFxuICAgICAgNTUsXG4gICAgICAyNCxcbiAgICAgIDE0MCxcbiAgICAgIDk0LFxuICAgICAgMjMwLFxuICAgICAgMTMwLFxuICAgICAgODcsXG4gICAgICAxNTEsXG4gICAgICAxMjAsXG4gICAgICAxOTgsXG4gICAgICA2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNOTlOSFNERVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTIxNjY0NTU5MzM0ODoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCWo5Qg8J2ZtvCdmb7wnZqD8J2ZsPCdmoEg8J2ZsPCdmbotNDcg8JajlFwiLFxuICAgIFwibGlkXCI6IFwiMjExNDc2MDY5NDkwNzkxOjI1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0luNmxzQUZFUFd6dGJRR0dDRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwic0xqWlREbXVrNVFhYnlPbnlpMW9LLzFvMnBDVnd3bTNaQVVwOEpiWFhXOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjYk1BYzlQeEM3QitCY3RsbDBHUFUrc3ExY3ZuLzZxazNOclEwQ0hHcThqQm5zY05sRlNEaWJRNEdFSlF6aEVGNTQxeGNXVHgwTDlrSmF5Tk5oVVBEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ3TDhHZnhGblVKZW1hdUlWZDVaNFFoMHQ0ZWZpVVl1QXE2TXB6L0NFT2FRb2xDS0tTZ3BXL2twOHNCYXduVU1LM3U4NGpwd2ZiaTVJTGkrSnhZcHVodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MjE2NjQ1NTkzMzQ4OjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTM5NjM5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQXc2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBdzYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJlamxYeWUxZ3B5eVlnZ3l1WVZRVmRRTlVkLzl4UlBTcFpLaXhOR2VkcGNVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NzY3NzEwODEsXCJjdXJyZW50SW5kZXhcIjoyOSxcImRldmljZUluZGV4ZXNcIjpbMCwyLDI5LDE4XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk4NTM5Njc5MDFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𖣔 𝙶𝙾𝚃𝙰𝚁 𝙰𝙺-47 𖣔",
  ownername:process.env.OWNER_NAME|| "𖣔 𝙶𝙾𝚃𝙰𝚁 𝙰𝙺-47 𖣔",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
