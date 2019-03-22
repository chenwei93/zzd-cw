Ext.define('Cmdb.view.ops.gdgl.gryb.Gryb', {
    extend: 'Ext.grid.Panel',
    xtype: 'gryb',


    requires: [
        'Cmdb.view.ops.gdgl.gryb.GrybController',
        'Cmdb.view.ops.gdgl.gryb.GrybModel',
    ],
    controller: 'gryb',
    viewModel: 'grdb',
    bind: {
        store: '{list}'
    },
    columns: [{
        text: '工单标题／单号',
        dataIndex: 'title',
        flex: 1
    }, {
        text: '工单来源',
        dataIndex: 'gdly',
        flex: 1
    }, {
        text: '工单状态',
        dataIndex: 'gdzt',
        flex: 1
    }, {
        text: '逾期状态',
        dataIndex: 'yqzt',
        flex: 1
    }]
});