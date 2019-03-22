Ext.define('DG.view.roleconf.ChangeRoles', {
    extend: 'Ext.grid.Panel',
    xtype: 'change-roles',

    height: 250,
    tbar: [{
        ui: 'default',
        text: '全部加入',
        handler: 'onAllAdd'
    }, {
        ui: 'default',
        text: '全部清空',
        handler: 'onAllRemove'
    }],
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
                    name: '数值转换',
                    value: 2
                }]
            }
        },
        text: '清洗策略',
        flex: 1,
        dataIndex: 'type'
    }, {
        text: '执行规则',
        xtype: 'widgetcolumn',
        widget: {
            xtype: 'textfield',
            bind: '{record.rule}'
        },
        flex: 1,
        dataIndex: 'rule'
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
        // text: '是否并行',
        // flex: 1,
        // xtype: 'widgetcolumn',
        // widget: {
        //     xtype: 'combo',
        //     bind: '{record.bx}',
        //     store: [
        //         '是',
        //         '否'
        //     ]
        // },
        // dataIndex: 'bx'
    // }, {
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
