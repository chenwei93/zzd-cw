Ext.define('AP.view.services.ServicesOperateSelect', {
    extend: 'Ext.grid.Panel',
    xtype: 'services-select',

    tbar: [{
        tooltip: '添加',
        iconCls: 'x-fa fa-plus-circle',
        handler: 'onAdd'
    }, {
        tooltip: '删除',
        iconCls: 'x-fa fa-minus-circle',
        handler: 'onDelete'
    }, {
        tooltip: '清空',
        iconCls: 'x-fa fa-trash-o',
        handler: 'onRefresh'
    }],
    emptyText:"未选择服务",
    viewConfig : {
        deferEmptyText:false

    },
    selType: 'checkboxmodel',
    scrollable: true,
    listeners: {
        'itemClick': 'onClick'
    },
    columns: [{
        text: '服务名称',
        flex: 1,
        dataIndex: 'title'
    }]
});