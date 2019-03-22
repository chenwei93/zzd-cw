Ext.define('Cmdb.view.asset.zcdj.Zcdj', {
    extend: 'Ext.grid.Panel',
    xtype: 'zcdj',


    requires:['Cmdb.view.asset.zcdj.ZcdjAdd',
        'Cmdb.view.asset.zcdj.ZcdjController',
        'Cmdb.view.asset.zcdj.ZcdjModel',
    ],
    store: {
        type: 'mlxsl'
    },
    controller: 'zcdj',
    listeners: {
        rowdblclick: 'onRowDblClick'
    },
    tbar: [{
        text: '新增',
        handler: 'onNew'
    }],
    columns: [{
        text: '名称',
        dataIndex: 'y_title',
        flex: 1
    }, {
        text: '编码',
        dataIndex: 'y_code',
        flex: 1
    }, {
        text: '登记时间',
        dataIndex: 'time',
        renderer: function (data) {
            if (data != undefined) {
                data = new Date(data);
                var Month = data.getMonth()+1;
                var ret = data.getFullYear() + '年' +
                    Month + '月' +
                    data.getDate() + '日' +
                    data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds();
                return ret
            }
        },
        flex: 1
    }]
});
