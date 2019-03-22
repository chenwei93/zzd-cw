Ext.define('DG.view.roleconf.entryGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'entry-grid',

    tbar: [{
        xtype: 'textfield',
        readOnly: true,
        fieldLabel: '信息资源名',
        name: 'tableName',
        bind: '{tableName}'
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
        text: '显示名',
        flex: 1,
        dataIndex: 'columnComment'
    }, {
        text: '数据类型',
        flex: 1,
        dataIndex: 'dataType'
    }, {
        text: '长度',
        flex: 1,
        dataIndex: 'characterMaximumLength'
    }, {
        text: '是否主键',
        flex: 1,
        dataIndex: 'columnKey'
    }, {
        text: '是否为空',
        flex: 1,
        dataIndex: 'isNullable'
    }, {
        xtype: 'actioncolumn',
        text: '操作',
        items: [{
            iconCls: 'x-fa fa-plus',
            tooltip: '加入',
            handler: 'onEntryJion'
        }],
        width: 50,
        align: 'center',
        tooltip: '操作'
    }]
});
