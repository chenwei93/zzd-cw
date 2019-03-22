/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Starter.Application', {
    extend: 'Ext.app.Application',

    name: 'Starter',

    statics: {
        PREFIX: "/starter"
    },

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    // 公用的Store
    stores: [
        'Starter.store.MenuTree'
    ],

    launch: function () {
        // 增加全局的URL前缀，需要设置PREFIX，如果PREFIX=null，则不加前缀
        Ext.Ajax.on({
            beforerequest: function (conn, opts) {
                if (opts.url == null || Starter.Application.PREFIX == null) {
                    return;
                }

                opts.url = Starter.Application.PREFIX + opts.url;
            }
        });
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('提示', '发现系统新版本，是否重新载入系统？',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
