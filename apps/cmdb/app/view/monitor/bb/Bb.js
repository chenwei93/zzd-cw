Ext.define('Cmdb.view.monitor.bb.Bb', {
    extend: 'Ext.grid.Panel',
    xtype: 'bb',


    requires: [
        'Cmdb.view.monitor.bb.BbController',
        'Cmdb.view.monitor.bb.BbModel'
    ],
    viewModel: {
        type: 'bb'
    },
    bind: {
        store: '{list}'
    },
    controller: 'bb',
    title: '报表'
});