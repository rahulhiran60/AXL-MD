//---------------------------------------------------------------------------
const Secktor = require('../lib')
Secktor.cmd({
        pattern: "ping",
        desc: "To check ping",
        category: "general",
        react: "🗿",
        filename: __filename,
    },
    async(Void,text) => {
        var inital = new Date().getTime();
        const { key } = await Void.sendMessage( {text:'```Checking Ping!```'});
        var final = new Date().getTime();
       await Secktor.sleep(1000)
       return await Void.sendMessage({text:'*Pong' + (final - inital) + 'ms*', edit: key});
    }
);
