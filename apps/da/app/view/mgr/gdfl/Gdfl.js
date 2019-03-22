Ext.define('DA.view.mgr.gdfl.Gdfl', {
    extend: 'Ext.grid.Panel',
    xtype: 'gdfl',


    requires: [
        'DA.view.mgr.gdfl.GdflController',
        'DA.view.mgr.gdfl.GdflEdit',
        'DA.view.mgr.gdfl.GdflModel'
    ],
    viewModel: {
        type: 'gdfl'
    },
    bind: {
        store: '{list}'
    },
    controller: 'gdfl',

    tbar: [{
        text: '新增',
        handler: 'onAdd',
        iconCls: 'x-fa fa-plus',
        ui: 'default'
    }],
    columns: [{
        text: "标题",
        dataIndex: "text",
        flex: 1
    }, {
        text: "编码",
        dataIndex: "code",
        flex: 1
    }, {
        xtype: 'actioncolumn',
        items: [
            {
                xtype: 'button',
                iconCls: 'x-fa fa-pencil',
                tooltip: '编辑',
                handler: 'onEdit'
            }
        ],

        cls: 'content-column',
        width: 80,
        align: 'center',
        text: '操作'

    }]
});
