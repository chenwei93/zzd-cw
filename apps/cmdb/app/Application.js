/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Cmdb.Application', {
    extend: 'Ext.app.Application',

    name: 'Cmdb',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    defaultToken: 'portal',

    stores: [
        'Cmdb.store.User',
        'Cmdb.store.Module',
        'Cmdb.store.ShowData',
        'Cmdb.store.Wddb',
        'Cmdb.store.TimeLine',
        'Cmdb.store.DealIssue',
        'Cmdb.store.asset.DealFwzc',
        'Cmdb.store.asset.DealJkzygl',
        'Cmdb.store.asset.DealSjgx',
        'Cmdb.store.asset.DealSjhjgl',
        'Cmdb.store.asset.DealSjkfgl',
        'Cmdb.store.ModuleMenuPortal',
        'Cmdb.store.ModuleMenuOps',
        'Cmdb.store.ModuleMenuAsset',
        'Cmdb.store.ModuleMenuMgr',
        'Cmdb.store.ModuleMenuDashboard',
        'Cmdb.store.ModuleMenuMonitor',
        'Cmdb.store.ModuleMenuIntegrate',
        'Cmdb.store.ModuleMenuInterface',
        'Cmdb.store.ModuleMenuBusiness',
        'Cmdb.store.ModuleMenuEntry',
        'Cmdb.store.ops.Zcfp',
        'Cmdb.store.MlxSl',
        'Cmdb.store.Wddb',
        'Cmdb.store.AllDb',

    ],

    launch: function () {
        Ext.$id = function () {
            return 'id_' + new Date().getTime();
        }
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
