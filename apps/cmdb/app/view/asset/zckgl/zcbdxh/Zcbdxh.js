Ext.define('Cmdb.view.asset.zckgl.zcbdxh.Zcbdxh', {
    extend: 'Ext.grid.Panel',
    xtype: 'zcbdxh',


    requires: [
        'Cmdb.view.asset.zckgl.zcbdxh.ZcbdxhController',
        'Cmdb.view.asset.zckgl.zcbdxh.ZcbdxhModel'
    ],
    viewModel: {
        type: 'zcbdxh'
    },
    bind: {
        store: '{list}'
    },
    controller: 'zcbdxh',
    title: '资产比对校核'
});