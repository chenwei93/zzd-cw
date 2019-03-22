Ext.define('Cmdb.view.dashboard.gz.rykq.Rykq', {
    extend: 'Ext.grid.Panel',
    xtype: 'rykq',


    requires: [
        'Cmdb.view.dashboard.gz.rykq.RykqController',
        'Cmdb.view.dashboard.gz.rykq.RykqModel'
    ],
    viewModel: {
        type: 'rykq'
    },
    bind: {
        store: '{list}'
    },
    controller: 'rykq',
    title: '人员考勤统计表柱状图'
});