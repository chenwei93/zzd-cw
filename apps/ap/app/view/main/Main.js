/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('AP.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    padding: "1 1",
    layout: 'card',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.form.field.Display',
        'Ext.window.MessageBox',

        'AP.view.main.MainController',
        'AP.view.main.MainModel'
    ],

    items: {
        xtype: 'app-home',
        routeId: 'app-home'
    }
});
