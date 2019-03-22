Ext.define('Cmdb.view.asset.zckgl.gxgl.Gxgl', {
    extend: 'Ext.grid.Panel',
    xtype: 'gxgl',


    requires: [
        'Cmdb.view.asset.zckgl.gxgl.GxglController',
        'Cmdb.view.asset.zckgl.gxgl.GxglModel'
    ],
    viewModel: {
        type: 'gxgl'
    },
    bind: {
        store: '{list}'
    },
    controller: 'gxgl',
    title: '关系管理'
});