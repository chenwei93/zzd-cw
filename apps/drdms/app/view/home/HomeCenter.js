/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('DRDMS.view.home.HomeCenter', {
    extend: 'Ext.container.Container',
    xtype: 'app-home',


    requires: [
        'DRDMS.view.home.HomeCenterModel',
        'DRDMS.view.home.HomeCenterController',
        'Ext.ux.layout.ResponsiveColumn'
    ],
    scrollable: true,
    style: {
        "background-color": '#F6F6F6'
    },

    controller: 'homecenter',
    viewModel: {
        type: 'homecenter'
    },
    layout: 'column',

    defaults: {
        padding: 15,
    },
    items: [{
        xtype: 'todo',
        reference: 'todo',
        columnWidth: 0.5
    }, {
        xtype: 'toup',
        reference: 'toup',
        columnWidth: 0.5
    }, {
        columnWidth: 1,
        layout: 'column',
        items: [{
            border: true,
            xtype: 'hddusage',
            margin: '0 5 0 0',
            columnWidth: 0.25
        }, {
            border: true,
            xtype: 'earnings',
            margin: '0 5 0 0',
            columnWidth: 0.25

        }, {
            border: true,
            xtype: 'sales',
            margin: '0 5 0 0',
            columnWidth: 0.25
        }, {
            border: true,
            xtype: 'topmovies',
            columnWidth: 0.25
        }]

    }]

});
