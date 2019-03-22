Ext.define('Cmdb.view.business.mlzl.MlzlServer', {
    extend: 'Ext.grid.Panel',
    xtype: 'mlzl-server',

    bind: {
        store: '{list3}'
    },
    columns: [{
        text: '服务名称',
        dataIndex: 'title',
        flex: 1
    }, {
        text: '服务唯一码',
        dataIndex: 'qname',
        flex: 0.7
    }, {
        text: '部门',
        dataIndex: 'node',
        renderer:function (data) {
          return data.title
        },
        flex: 0.5
    }]
});