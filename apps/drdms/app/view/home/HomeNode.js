Ext.define('DRDMS.view.home.HomeNode', {
    extend: 'Ext.container.Container',
    xtype: 'app-homenode',

    requires: [
        'DRDMS.view.home.HomeNodeModel',
        'DRDMS.view.home.HomeNodeController',
        'Ext.ux.layout.ResponsiveColumn'
    ],
    style: {
        "background-color": '#F6F6F6'
    },

    controller: 'homenode',
    viewModel: {
        type: 'homenode'
    },
    layout: 'column',
    defaults: {
        padding: 15
    },
    items: [{
        xtype: 'topublish',
        reference: 'topublish',
        title: '待审核目录',
        columnWidth: 0.5
    }, {
        xtype: 'tocreate',
        reference: 'tocreate',
        title: '变更目录',
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
