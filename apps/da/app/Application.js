/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('DA.Application', {
    extend: 'Ext.app.Application',

    name: 'DA',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
        'DA.store.Module',
        'DA.store.ModuleMenuPortal',
        'DA.store.ModuleMenuDa',
        'DA.store.ModuleMenuMgr',
        'DA.store.ModuleMenuDataOpen',
        'DA.store.ModuleMenuDataService',
        'DA.store.ModuleMenuEntry'

    ],

    launch: function () {
        // TODO - Launch the application
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
