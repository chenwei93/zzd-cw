Ext.define('DRDMS.view.dictionary.DictionaryGrid', {
    extend: 'Ext.grid.Panel',

    xtype: 'dictionary-grid',

    tbar: [{
        text: '添加',
        ui: 'default',
        iconCls: 'x-fa fa-plus',
        handler: 'onAdd'
    }],
    selModel: 'rowmodel',
    plugins: {
        ptype: 'rowediting',
        clicksToEdit: 2,
        saveBtnText: '保存',
        cancelBtnText: "取消",
        listeners: {
            edit: 'onEEdit'
        }
    },
    frame: true,
    columns: [{
        text: '名称',
        flex: 1,
        dataIndex: 'title',
        editor: true

    }, {
        text: '编码',
        flex: 1,
        dataIndex: 'code',
        editor: true
    }, {
        text: '描述',
        flex: 1,
        dataIndex: 'description',
        editor: {}
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