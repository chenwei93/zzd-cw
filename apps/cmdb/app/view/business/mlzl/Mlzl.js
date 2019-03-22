Ext.define('Cmdb.view.business.mlzl.Mlzl', {
    extend: 'Ext.grid.Panel',
    xtype: 'mlzl',

    requires:[
        'Cmdb.view.business.mlzl.MlzlController',
        'Cmdb.view.business.mlzl.MlzlEntry',
        'Cmdb.view.business.mlzl.mlzlList',
        'Cmdb.view.business.mlzl.MlzlModel',
        'Cmdb.view.business.mlzl.MlzlServer',
        'Cmdb.view.business.mlzl.MlzlZhShow',
        'Cmdb.view.business.mlzl.DatasetGrid'
    ],
    bind: {
        store: '{list}'
    },
    listeners: {
        rowdblclick: 'onRowDblClick'
    },
    id: 'mlzlGrid',
    columns: [
        {
        text: "资产种类",
        flex: 1,
        dataIndex: 'zc_type',
    }, {
        text: "类型",
        flex: 1,
        dataIndex: 'type',
    }, {
        text: "名称",
        flex: 1,
        dataIndex: 'name',
    }, {
        text: "厂家",
        flex: 1,
        dataIndex: 'factory',
    }, {
        text: "数量",
        flex: 1,
        dataIndex: 'number',
    }, {
        text: "总配额",
        flex: 1,
        dataIndex: 'total',
    }, {
        text: "可用配额",
        flex: 1,
        dataIndex: 'available'
    }, {
        text: "租户/接入数",
        flex: 1,
        dataIndex: 'access',

    }]
});
