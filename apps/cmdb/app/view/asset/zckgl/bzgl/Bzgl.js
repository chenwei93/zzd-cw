Ext.define('Cmdb.view.asset.zckgl.bzgl.Bzgl', {
    extend: 'Ext.grid.Panel',
    xtype: 'bzgl',


    requires: [
        'Cmdb.view.asset.zckgl.bzgl.BzglController',
        'Cmdb.view.asset.zckgl.bzgl.BzglModel'
    ],
    viewModel: {
        type: 'bzgl'
    },
    bind: {
        store: '{list}'
    },
    controller: 'bzgl',
    title: '标准管理'
});