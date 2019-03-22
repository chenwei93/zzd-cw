Ext.define('Cmdb.view.dashboard.gz.gdcl.Gdcl', {
    extend: 'Ext.grid.Panel',
    xtype: 'gdcl',


    requires: [
        'Cmdb.view.dashboard.gz.gdcl.GdclController',
        'Cmdb.view.dashboard.gz.gdcl.GdclModel'
    ],
    viewModel: {
        type: 'gdcl'
    },
    bind: {
        store: '{list}'
    },
    controller: 'gdcl',
    title: '工单处理状态饼图'
});