Ext.define('DA.view.entry.services.ServicesOperateSelect', {
    extend: 'Ext.grid.Panel',
    xtype: 'services-select',


    scrollable: true,
    tbar: [{
        iconCls: 'x-fa fa-plus',
        tooltip: '新增',
        handler: 'onInputAdd'
    }, {
        iconCls: 'x-fa fa-level-down',
        tooltip: '引入',
        handler: 'onInputIN'
    }],
    store: {
        data: []
    },
    plugins: [{
        ptype: 'cellediting',
        clicksToEdit: 2,
    }],
    selModel: 'cellmodel',
    columns: [{
        text: '名称',
        flex: 1,
        dataIndex: 'name',
        editor: false
    }, {
        text: '显示名',
        flex: 1,
        dataIndex: 'title',
        editor: true
    }, {
        text: '默认值',
        flex: 1,
        dataIndex: 'defaults',
        editor: true

    }, {
        text: '类型',
        flex: 1,
        dataIndex: 'dataType',
        editor: {
            xtype: 'combo',
            displayField: 'name',
            valueField: 'value',
            store: {
                autoLoad: true,
                data: [{
                    name: 'Text',
                    value: 'Text'
                }, {
                    name: 'String',
                    value: 'String'
                }, {
                    name: 'Numeric',
                    value: 'Numeric'
                }, {
                    name: 'Date',
                    value: 'Date'
                }]
            }
        }
    }, {
        xtype: 'actioncolumn',
        text: '操作',
        flex: 1,
        items: [{
            iconCls: 'x-fa fa-close',
            handler: 'onDelete',
            tooltip: '删除'
        }],
        align: 'center',
    }]
});
