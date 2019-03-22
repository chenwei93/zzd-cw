Ext.define('DG.view.roleconf.CleanRoles', {
    extend: 'Ext.grid.Panel',
    xtype: 'clean-roles',

    tbar: [{
        ui: 'default',
        text: '全部加入',
        handler: 'onAllAdd'
    }, {
        ui: 'default',
        text: '全部清空',
        handler: 'onAllRemove'
    }],
    height: 250,
    store: {
        data: []
    },
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '名称',
        flex: 1,
        dataIndex: 'columnName'
    }, {
        xtype: 'widgetcolumn',
        widget: {
            xtype: 'combo',
            bind: '{record.type}',
            displayField: 'name',
            valueField: 'value',
            store: {
                data: [{
                    name: '不处理',
                    value: 1
                }, {
                    name: '去掉重复的记录',
                    value: 2
                }, {
                    name: '去除为空记录',
                    value: 3
                }, {
                    name: '去除数据长度不符合',
                    value: 4
                }]
            },
        },
        text: '清洗策略',
        flex: 1,
        dataIndex: 'type'
    }, {
        text: '执行条件',
        xtype: 'widgetcolumn',
        widget: {
            xtype: 'textfield',
            bind: '{record.condition}'
        },
        flex: 1,
        dataIndex: 'condition'
    }, {
        text: '顺序',
        xtype: 'widgetcolumn',
        widget: {
            xtype: 'numberfield',
            bind: '{record.order}',
            maxValue: 10,
            minValue: 0
        },
        flex: 1,
        dataIndex: 'order'
    }, {
        xtype: 'actioncolumn',
        text: '操作',
        items: [{
            iconCls: 'x-fa fa-close',
            tooltip: '删除',
            handler: 'onOneRemove'
        }],
        width: 50,
        align: 'center',
        tooltip: '操作'
    }],
});
