//---------------------------------------------------------------------------
const Secktor = require('../lib')
Secktor.cmd({
        pattern: "ping",
        desc: "To check ping",
        category: "general",
        react: "🗿",
        filename: __filename,
    },
    async(Void, citel, text) => {
        var inital = new Date().getTime();
        const { key } = await Void.sendMessage(citel.chat, {text: '```Checking Ping!```'});
        var final = new Date().getTime();
       await Secktor.sleep(1000)
       return await Void.sendMessage(citel.chat, {text: '*Pong' + (final - inital) + 'ms*', edit: key});
    }
);
