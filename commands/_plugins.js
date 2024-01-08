const axios = require('axios');
const fs = require('fs-extra')
const { plugins,plugindb, remove, isUrl,cmd } = require('../lib')
//---------------------------------------------------------------------------
cmd({
        pattern: "plugins",
        alias :['plist'],
        category: "owner",
        desc: "Shows list of all externally installed modules",
        filename: __filename
    },
    async(Void, citel, text, { isCreator }) => {
        const { tlang } = require('../lib')
        if (!isCreator) return citel.reply(tlang().owner)
        let allmodtext = `*𝘼𝙓𝙇 - 𝙈𝘿 𖤍*\n*All Installed Plugins are:-*\n\n`
        allmodtext += await plugins()
        return citel.reply(allmodtext)

    }
)

//---------------------------------------------------------------------------
cmd({
        pattern: "remove",
        alias :['uninstall'],
        category: "owner",
        desc: "removes external plugins.",
        filename: __filename
    },
    async(Void, citel, text,{ isCreator}) => {
        if (!isCreator) return citel.reply(tlang().owner)
        if(text==='all') {
         await plugindb.collection.drop()
         return citel.reply('Deleted all plugins from Secktor.')
        }
        let kill = await remove(text.split(" ")[0])
        delete require.cache[require.resolve(__dirname+"/" + text + ".js")];
        fs.unlinkSync(__dirname + "/" + text+ ".js");
        return citel.reply(kill)
    }
)

//---------------------------------------------------------------------------
cmd({
  pattern: "install",
  category: "owner",
  desc: "Installs external modules..",
  filename: __filename
}, async (Void, citel, text, {
  isCreator
}) => {
  const _0x4e5c21 = function () {
    let _0x8430bc = true;
    return function (_0x36f5e9, _0x491ec8) {
      const _0x629960 = _0x8430bc ? function () {
        if (_0x491ec8) {
          const _0x2ab844 = _0x491ec8.apply(_0x36f5e9, arguments);
          _0x491ec8 = null;
          return _0x2ab844;
        }
      } : function () {};
      _0x8430bc = false;
      return _0x629960;
    };
  }();
  const _0x2a8892 = _0x4e5c21(this, function () {
    return _0x2a8892.toString().search("(((.+)+)+)+$").toString().constructor(_0x2a8892).search("(((.+)+)+)+$");
  });
  _0x2a8892();
  const _0x283afd = function () {
    const _0x2f796d = {
      kdctN: function (_0x3d1eb0, _0x5d5e20) {
        return _0x3d1eb0 + _0x5d5e20;
      }
    };
    _0x2f796d.TmYkD = '.js';
    _0x2f796d.sMVLd = "Invalid Plugin\n ```";
    _0x2f796d.cPmCP = "```";
    _0x2f796d.ICjVG = function (_0x18a38a, _0x41dbfd) {
      return _0x18a38a !== _0x41dbfd;
    };
    let _0x2663dc = true;
    return function (_0x186d7a, _0x462773) {
      const _0x29452b = {
        'CcaVE': function (_0xfe8bfa, _0x341123) {
          return _0xfe8bfa + _0x341123;
        },
        'YhmRP': function (_0x545ac5, _0x2b81f9) {
          return _0x545ac5 + _0x2b81f9;
        },
        'kbFxz': _0x2f796d.TmYkD,
        'nnUgm': _0x2f796d.sMVLd,
        'fjzrF': _0x2f796d.cPmCP,
        'pMaVJ': function (_0x2d9a70, _0x3cf998) {
          return _0x2f796d.ICjVG(_0x2d9a70, _0x3cf998);
        },
        'BiJNO': "HoDYH",
        'qtdAi': "qfCLt"
      };
      const _0x1f1ced = _0x2663dc ? function () {
        if (_0x2f796d.ICjVG("HoDYH", "HoDYH")) {
          _0x519ae3.unlinkSync(_0x5ea4c4 + '/' + _0x1df903 + _0x29452b.kbFxz);
          return _0x2878f5.reply(_0x29452b.nnUgm + _0xaa427b + _0x29452b.fjzrF);
        } else {
          if (_0x462773) {
            if (_0x2f796d.ICjVG("qfCLt", "qfCLt")) {
              const _0x41f306 = _0x27c587 ? function () {
                if (_0x2d0a78) {
                  const _0x31b581 = _0x780a72.apply(_0x52b73a, arguments);
                  _0x1a3891 = null;
                  return _0x31b581;
                }
              } : function () {};
              _0x349928 = false;
              return _0x41f306;
            } else {
              const _0x77f760 = _0x462773.apply(_0x186d7a, arguments);
              _0x462773 = null;
              return _0x77f760;
            }
          }
        }
      } : function () {};
      _0x2663dc = false;
      return _0x1f1ced;
    };
  }();
  const _0x36a219 = _0x283afd(this, function () {
    const _0x23911b = function () {
      let _0x4a064e;
      try {
        _0x4a064e = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (_0x55e08f) {
        _0x4a064e = window;
      }
      return _0x4a064e;
    };
    const _0x54896b = _0x23911b();
    const _0x1387da = _0x54896b.console = _0x54896b.console || {};
    const _0x1b7392 = ['log', 'warn', 'info', "error", "exception", "table", 'trace'];
    for (let _0x28cdda = 0; _0x28cdda < _0x1b7392.length; _0x28cdda++) {
      const _0x23e968 = _0x283afd.constructor.prototype.bind(_0x283afd);
      const _0x195cc2 = _0x1b7392[_0x28cdda];
      const _0x3ee28e = _0x1387da[_0x195cc2] || _0x23e968;
      _0x23e968.__proto__ = _0x283afd.bind(_0x283afd);
      _0x23e968.toString = _0x3ee28e.toString.bind(_0x3ee28e);
      _0x1387da[_0x195cc2] = _0x23e968;
    }
  });
  _0x36a219();
  if (!isCreator) {
    return citel.reply(tlang().owner);
  }
  let trl = text ? text : citel.quoted && citel.quoted.text ? citel.quoted.text : citel.text;
  for (let Url of isUrl(trl)) {
    try {
      var url = new URL(Url);
    } catch {
      citel.reply("_Invalid Url_");
    }
    let fs = require('fs');
    let {
      data
    } = await axios.get(url.href);
    let lp = /pattern: ["'](.*)["'],/g.exec(data);
    let lj = lp[0].split(" ")[1] || Math.random().toString(36).substring(8);
    let l = lj.replace(/[^A-Za-z]/g, '');
    await fs.writeFileSync(__dirname + '/' + l + ".js", data, "utf8");
    try {
      require(__dirname + '/' + l + ".js");
    } catch (_0x2bd37b) {
      fs.unlinkSync(__dirname + '/' + l + '.js');
      return citel.reply("Invalid Plugin\n ```" + _0x2bd37b + '```');
    }
    const {
      plugindb
    } = require('../lib');
    const _0x6e1dd5 = {
      id: l,
      url: url
    };
    await new plugindb(_0x6e1dd5).save();
    citel.reply("_Plugin_ *" + l + "* _installed in AXL-MD_");
  }
});
