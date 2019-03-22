Ext.define('Cmdb.view.ops.gdgl.gdtj.Gdtj', {
    extend: 'Ext.grid.Panel',
    xtype: 'gdtj',


    requires: [
        'Cmdb.view.ops.gdgl.gdtj.GdtjController',
        'Cmdb.view.ops.gdgl.gdtj.GdtjModel'
    ],
    viewModel: 'gdtj',
    bind: {
        store: '{list}'
    },

    controller: 'gdtj',
    columns: [{
        dataIndex: 'title',
        text: '工单标题／单号',
        flex: 1
    }, {
        dataIndex: 'person',
        text: '当前处理人',
        flex: 1
    }, {
        dataIndex: 'fqr',
        text: '发起人',
        flex: 1
    }, {
        dataIndex: 'yxj',
        text: '优先级',
        flex: 1
    }, {
        dataIndex: 'gdly',
        text: '工单来源',
        flex: 1
    }, {
        dataIndex: 'gdzt',
        text: '工单状态',
        flex: 1
    }, {
        dataIndex: 'yqzt',
        text: '逾期状态',
        flex: 1

    }]
});