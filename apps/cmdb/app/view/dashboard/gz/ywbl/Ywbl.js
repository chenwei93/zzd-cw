Ext.define('Cmdb.view.dashboard.gz.ywbl.Ywbl', {
    extend: 'Ext.grid.Panel',
    xtype: 'ywbl',


    requires: [
        'Cmdb.view.dashboard.gz.ywbl.YwblController',
        'Cmdb.view.dashboard.gz.ywbl.YwblModel'
    ],
    viewModel: {
        type: 'ywbl'
    },
    bind: {
        store: '{list}'
    },
    controller: 'ywbl',
    title: '业务办理饼图'
});