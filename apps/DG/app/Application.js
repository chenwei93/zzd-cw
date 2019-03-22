/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('DG.Application', {
    extend: 'Ext.app.Application',

    name: 'DG',
    statics: {
        PREFIX: "/dg"
    },
    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
    stores: [
        'DG.store.MenuTree'
    ],

    launch: function () {
        // 增加全局的URL前缀，需要设置PREFIX，如果PREFIX=null，则不加前缀
        Ext.Ajax.on({
            beforerequest: function (conn, opts) {
                if (opts.url == null || DG.Application.PREFIX == null) {
                    return;
                }
                if (opts.proxy) {
                    if (opts.proxy.needDG == false) {
                        opts.url = opts.url
                    } else {
                        opts.url = DG.Application.PREFIX + opts.url;

                    }
                } else {
                    opts.url = DG.Application.PREFIX + opts.url;
                }
            }
        });
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
