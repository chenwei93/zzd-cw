Ext.define('DG.view.roleconf.compareRoles', {
    extend: 'Ext.grid.Panel',
    xtype: 'compare-roles',


    height: 250,
    tbar: [{
        xtype: 'textfield',
        fieldLabel: '比对信息资源名',
        name: 'compareEntry',
        bind: '{compareEntry}'
    }, {
        text: '选择',
        extra: 'compare',
        handler: 'onChooseEntry'
    }, '->', {
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
        reference: 'compareDataset',
        widget: {
            xtype: 'combo',
            displayField: 'columnName',
            valueField: 'columnName',
            bind: {
                store: {
                    data: '{storeData}'
                },
                value: '{record.compareName}'
            }
        },
        text: '比对名称',
        flex: 1,
        dataIndex: 'compareName'
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
