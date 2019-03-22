Ext.define('Starter.view.dictionary.DictionaryGrid', {
    extend: 'Ext.grid.Panel',

    xtype: 'dictionary-grid',

    tbar: [{
        text: '添加'
    }],
    frame: true,
    store: {},
    columns: [{
        text: '名称',
        flex: 1,
        dataIndex: 'title'
    }, {
        text: '编码',
        flex: 1,
        dataIndex: 'code'
    }, {
        text: '描述',
        flex: 1,
        dataIndex: 'description'
    }, {
        xtype: 'actioncolumn',
        items: [{
            xtype: 'button',
            iconCls: 'x-fa fa-plus',
            handler: 'onAdd',
            tooltip: '新增'
        }, {
            xtype: 'button',
            iconCls: 'x-fa fa-close',
            handler: 'onDelete',
            tooltip: '删除'
        }],
        cls: 'content-column',
        align: 'center',
        width: 50,
        text: '操作',
        tooltip: '操作'
    }]
});