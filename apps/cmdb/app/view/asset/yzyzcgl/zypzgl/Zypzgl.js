Ext.define('Cmdb.view.asset.yzyzcgl.zypzgl.Zypzgl', {
    extend: 'Ext.grid.Panel',
    xtype: 'zypzgl',


    requires: [
        'Cmdb.view.asset.yzyzcgl.zypzgl.ZypzglController',
        'Cmdb.view.asset.yzyzcgl.zypzgl.ZypzglModel'
    ],
    viewModel: {
        type: 'zypzgl'
    },
    bind: {
        store: '{list}'
    },
    controller: 'zypzgl',
    title: '资源配置管理'
});