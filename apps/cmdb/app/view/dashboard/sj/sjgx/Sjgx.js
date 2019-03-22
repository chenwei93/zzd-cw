Ext.define('Cmdb.view.dashboard.sj.sjgx.Sjgx', {
    extend: 'Ext.grid.Panel',
    xtype: 'sjgx',


    requires: [
        'Cmdb.view.dashboard.sj.sjgx.SjgxController',
        'Cmdb.view.dashboard.sj.sjgx.SjgxModel',
        'Cmdb.view.dashboard.sj.sjgx.ChartSjgx',
    ],
    viewModel: {
        type: 'sjgx'
    },
    bind: {
        store: '{list}'
    },
    controller: 'sjgx',
    title: '数据共享实时曲线图'
});
