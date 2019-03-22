Ext.define('Cmdb.view.mgr.jkgl.Jkgl', {
    extend: 'Ext.grid.Panel',
    xtype: 'jkgl',


    requires: [
        'Cmdb.view.mgr.jkgl.JkglController',
        'Cmdb.view.mgr.jkgl.JkglModel'
    ],
    viewModel: {
        type: 'jkgl'
    },
    bind: {
        store: '{list}'
    },
    controller: 'jkgl',
    title: '接口管理'
});