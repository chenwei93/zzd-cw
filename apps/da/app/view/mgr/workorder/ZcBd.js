Ext.define('DA.view.mgr.workorder.ZcBd', {
    extend: 'Ext.grid.Panel',
    xtype: 'zc-bd',


    requires: [
        'DA.store.ZcBd',
        'DA.view.mgr.workorder.ZcBdController',
        'DA.view.mgr.workorder.ZcBdAddItem',
        'DA.view.mgr.workorder.ZcBdAdd',
        'DA.view.mgr.workorder.ZcBdEdit',
        'DA.view.mgr.workorder.ZcBdItemEdit',
        'DA.view.mgr.workorder.ZcBdModel',
        'DA.view.mgr.workorder.ZcBdShow',
        'DA.view.mgr.workorder.ZcBdGrid',
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
