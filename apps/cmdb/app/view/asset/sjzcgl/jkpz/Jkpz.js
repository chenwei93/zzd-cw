Ext.define('Cmdb.view.asset.sjzcgl.jkpz.Jkpz', {
    extend: 'Ext.grid.Panel',
    xtype: 'jkpz',


    requires: [
        'Cmdb.view.asset.sjzcgl.jkpz.JkpzController',
        'Cmdb.view.asset.sjzcgl.jkpz.JkpzModel'
    ],
    viewModel: {
        type: 'jkpz'
    },
    bind: {
        store: '{list}'
    },
    controller: 'jkpz',
    title: '接口配置'
});