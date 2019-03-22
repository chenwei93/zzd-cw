/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('AP.view.home.Home', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-home',


    requires: [
        'Ext.ux.layout.ResponsiveColumn',
        'AP.view.home.DashboardController',
        'AP.view.home.Earnings',
        'AP.view.home.HDDUsage',
        'AP.view.home.Network',
        'AP.view.home.Sales',
        'AP.view.home.Visitors'
    ],

    controller: 'dashboard',

    scrollable: true,
    style: {
        'background-color': '#F6F6F6'
    },
    listeners: {
        hide: 'onHideView'
    },

    layout: 'column',
    defaults: {
        padding: 15
    },
    items: [{
        xtype: 'network',
        border: true,
        columnWidth: 1
    }, {
        columnWidth: 1,
        layout: 'column',
        defaults: {
            padding: 5
        },
        items: [{
            border: true,
            xtype: 'hddusage',
            columnWidth: 0.3
        }, {
            border: true,
            xtype: 'earnings',
            columnWidth: 0.3
        }, {
            border: true,
            xtype: 'sales',
            columnWidth: 0.3
        }]
    }]


});
