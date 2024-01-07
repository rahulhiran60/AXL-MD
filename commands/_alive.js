Secktor.cmd({
            pattern: "alive",
            alias: ["alive"],
            desc: "Help list",
            category: "general",
            react: "💚",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("*❌No Such commands.*");
                else arr.push(`*🍁Command:* ${cmd.
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
                let str = `*_ʜᴇy ɪ ᴀᴍ ꜱᴛɪʟʟ ᴀʟɪᴠᴇ👨🏻‍💻_*\n_Owner:- ${Config.ownername}_\n\n_Uptime:-_ ${runtime(process.uptime())}\n_Available Ram:-_ ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
            }
