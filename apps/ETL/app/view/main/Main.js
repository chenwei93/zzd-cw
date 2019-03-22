/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ETL.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    padding: "1 1",
    layout: 'card',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'ETL.view.main.MainController',
        'ETL.view.main.MainModel',
        'ETL.view.main.List'
    ],

    items: {
        xtype: 'task',
        routeId: 'task'
    }
});
