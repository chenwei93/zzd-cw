Ext.define('DA.view.entry.services.ServicesOperateGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'services-grid',


    scrollable: true,
    tbar: [{
        iconCls: 'x-fa fa-plus',
        tooltip: '新增',
        handler: 'onOutputAdd'
    }, {
        iconCls: 'x-fa fa-level-down',
        tooltip: '引入',
        handler: 'onOutputIN'
    }],
    store:{
       data:[]
    },
    plugins: [{
        ptype: 'cellediting',
        clicksToEdit: 2,
        clicksToMoveEditor: 1,
        autoCancel: false
    }],
    selModel: 'cellmodel',
    columns: [{
        flex: 1,
        text: '名称',
        dataIndex: 'name',
        editor: false,
    }, {
        text: '显示名',
        flex: 1,
        dataIndex: 'title',
        editor: {
            allowBlank: false,
        },
    }, {
        text: '默认值',
        dataIndex: 'defaults',
        editor: true,
        flex: 1,
    }, {
        xtype: 'actioncolumn',
        text: '操作',
        flex: 1,
        items: [{
            iconCls: 'x-fa fa-close',
            handler: 'onDelete',
            tooltip: '删除'
        }, {
            iconCls: 'x-fa fa-edit',
            handler: 'onEdit',
            tooltip: '脚本'
        }],
        align: 'center',
        dataIndex: 'expression'
    }]
});
