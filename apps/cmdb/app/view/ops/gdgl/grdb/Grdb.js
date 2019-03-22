Ext.define('Cmdb.view.ops.gdgl.grdb.Grdb', {
    extend: 'Ext.grid.Panel',
    xtype: 'grdb',


    requires: [
        'Cmdb.view.ops.gdgl.grdb.GrdbController',
        'Cmdb.view.ops.gdgl.gdcx.GdcxModel',
    ],
    controller: 'grdb',
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