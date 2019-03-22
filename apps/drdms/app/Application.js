/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('DRDMS.Application', {
    extend: 'Ext.app.Application',

    name: 'DRDMS',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
        'DRDMS.store.MenuTreeCenter',
        'DRDMS.store.MenuTreeNode'

    ],

    launch: function () {
        // TODO - Launch the application
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
