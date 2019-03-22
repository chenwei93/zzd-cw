/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('RBase.view.home.Home', {
    extend: 'Ext.container.Container',
    xtype: 'app-home',


    requires: [
        'Ext.ux.layout.ResponsiveColumn'
    ],

    controller: 'dashboard',

    scrollable: true,
    style: {
        "background-color": '#F6F6F6'
    },

    listeners: {
        hide: 'onHideView'
    },

    layout: 'column',
    defaults: {
        padding: 15
    },
    items: [{
        xtype: 'todo',
        columnWidth: 1
        // }, {
        //     columnWidth: 0.2,
        //     layout: 'column',
        //     items: [{
        //         xtype: 'hddusage',
        //         margin: '0 0 4 0',
        //         columnWidth: 1
        //     }, {
        //         xtype: 'earnings',
        //         margin: '0 0 4 0',
        //         columnWidth: 1
        //     }, {
        //         xtype: 'sales',
        //         columnWidth: 1
        //     }]
        // }, {
        //     columnWidth: 1,
        //     xtype: 'network'
    }]


});
