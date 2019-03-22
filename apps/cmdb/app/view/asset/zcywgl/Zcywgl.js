Ext.define('Cmdb.view.asset.zcywgl.Zcywgl', {
    extend: 'Ext.grid.Panel',
    xtype: 'zcywgl',


    requires: [
        'Cmdb.view.asset.zcywgl.ZcywglController',
        'Cmdb.view.asset.zcywgl.ZcywglModel'
    ],
    viewModel: {
        type: 'zcywgl'
    },
    bind: {
        store: '{list}'
    },
    controller: 'zcywgl',
    title: '资产业务管理'
});