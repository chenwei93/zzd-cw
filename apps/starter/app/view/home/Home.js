/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Starter.view.home.Home', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-home',

    requires: [
        'Starter.view.home.HomeNew',
        'Starter.view.home.HomeUpdate'
    ],

    scrollable:true,
    items: [{
        layout: 'column',
        items: [{
            columnWidth: 0.5,
            margin:30,
            xtype: 'app-homenew'
        }, {
            columnWidth: 0.5,
            margin:30,
            xtype: 'app-homeupdate'
        }]
    },{
        items:[{
            frame:true,
            height:480,

            margin:'0 30 10 30',
            xtype:'analysis-column'
        }]
    }]
});
