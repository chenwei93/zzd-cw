Ext.define('Cmdb.view.mgr.lcgl.lcpz.Lcpz', {
    extend: 'Ext.grid.Panel',
    xtype: 'lcpz',


    requires: [
        'Cmdb.view.mgr.lcgl.lcpz.LcpzController',
        'Cmdb.view.mgr.lcgl.lcpz.LcpzModel',
        'Cmdb.view.mgr.lcgl.lcpz.LcpzAdd',
        'Cmdb.view.mgr.lcgl.lcpz.LcpzEdit'
    ],
    viewModel: {
        type: 'lcpz'
    },
    bind: {
        store: '{list}'
    },
    controller: 'lcpz',
    tbar: [{
        text: '新增',
        ui: 'default',
        iconCls: 'x-fa fa-plus',
        handler: 'onAdd'
    }],
    columns: [{
        dataIndex: "title",
        text: "流程名称",
        flex: 1
    }, {
        dataIndex: "code",
        text: "流程编码",
        flex: 1
    }, {
        dataIndex: "updateTime",
        text: "流程发布时间",
        flex: 1
    }, {
        dataIndex: "changeTime",
        text: "流程变更日期",
        flex: 1
    }, {
        dataIndex: "version",
        text: "流程版本",
        flex: 1
    }, {
        xtype: 'actioncolumn',
        right: 0,
        items: [
            {
                iconCls: 'x-fa fa-pencil',
                tooltip: '编辑',
                handler: 'onEdit'
            }
        ],

        cls: 'content-column',
        width: 50,
        align: 'center',
        text: '操作',
        tooltip: '操作 '

    }]
});
