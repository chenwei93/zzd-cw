Ext.define('Cmdb.view.mgr.xtgl.Xtgl', {
    extend: 'Ext.grid.Panel',
    xtype: 'xtgl',


    requires: [
        'Cmdb.view.mgr.xtgl.XtglController',
        'Cmdb.view.mgr.xtgl.XtglModel'
    ],
    viewModel: {
        type: 'xtgl'
    },
    bind: {
        store: '{list}'
    },
    controller: 'xtgl',
    title: '系统管理'
});