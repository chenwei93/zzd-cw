Ext.define('Cmdb.view.dashboard.sj.sjhj.Sjhj', {
    extend: 'Ext.grid.Panel',
    xtype: 'sjhj',


    requires: [
        'Cmdb.view.dashboard.sj.sjhj.ChartSjhj',
        'Cmdb.view.dashboard.sj.sjhj.SjhjController',
        'Cmdb.view.dashboard.sj.sjhj.SjhjModel'
    ],
    viewModel: {
        type: 'sjhj'
    },
    bind: {
        store: '{list}'
    },
    controller: 'sjhj',
    title: '数据汇集柱状图'
});
