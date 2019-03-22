Ext.define('Cmdb.view.mgr.fwzxgl.Fwzxgl', {
    extend: 'Ext.grid.Panel',
    xtype: 'fwzxgl',


    requires: [
        'Cmdb.view.mgr.fwzxgl.FwzxglController',
        'Cmdb.view.mgr.fwzxgl.FwzxglModel'
    ],
    viewModel: {
        type: 'fwzxgl'
    },
    bind: {
        store: '{list}'
    },
    controller: 'fwzxgl',
    title: '服务总线管理'
});