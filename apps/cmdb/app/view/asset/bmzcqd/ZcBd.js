Ext.define('Cmdb.view.asset.bmzcqd.ZcBd', {
    extend: 'Ext.grid.Panel',
    xtype: 'zc-bd',


    requires: [
        'Cmdb.store.ZcBd',
        'Cmdb.view.asset.bmzcqd.ZcBdController',
        'Cmdb.view.asset.bmzcqd.ZcBdAddItem',
        'Cmdb.view.asset.bmzcqd.ZcBdAdd',
        'Cmdb.view.asset.bmzcqd.ZcBdEdit',
        'Cmdb.view.asset.bmzcqd.ZcBdItemEdit',
        'Cmdb.view.asset.bmzcqd.ZcBdModel',
        'Cmdb.view.asset.bmzcqd.ZcBdShow',
        'Cmdb.view.asset.bmzcqd.ZcBdGrid',
    ],
    controller: 'zc-bd',
    store: {
        type: 'zc-bd'
    },
    tbar: [{
        text: '新增',
        handler: 'onAdd'
    }],
    columns: [{
        text: '标题',
        dataIndex: 'bd_title',
        flex: 1
    }, {
        text: '编码',
        dataIndex: 'bd_code',
        flex: 1
    }, {
        text: '工作类别',
        dataIndex: 'bd_type',
        flex: 1,
        renderer: function (data) {
            var arr = {
                event: "事件管理",
                question: '问题管理',
                audit: '审计管理',
                attendance: '值班管理',
                inspection: '巡检管理',
                emergency: '应急演练管理',
                project: '项目管理'
            };
            if (arr[data]) {
                return arr[data]
            } else {
                return data
            }
        }
    }, {
        text: '描述',
        dataIndex: 'bd_des',
        flex: 2,
    }, {
        xtype: 'actioncolumn',
        items: [
            {
                xtype: 'button',
                iconCls: 'x-fa fa-cog',
                tooltip: '配置',
                handler: 'onEdit'
            }, {
                xtype: 'button',
                iconCls: 'x-fa fa-pencil',
                tooltip: '修改',
                handler: 'onItemEdit'
            }
        ],

        cls: 'content-column',
        width: 80,
        align: 'center',
        text: '操作'
    }]
});
