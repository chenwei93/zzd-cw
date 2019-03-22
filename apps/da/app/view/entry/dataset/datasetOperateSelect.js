Ext.define('DA.view.entry.dataset.datasetOperateSelect', {
    extend: 'Ext.grid.Panel',
    xtype: 'dataset-select',

    tbar: {
        reference: 'select-tbar',
        items: [{
            tooltip: '添加',
            iconCls: 'x-fa fa-plus-circle',
            handler: 'onAddDataset',
        }, {
            tooltip: '清空',
            iconCls: 'x-fa fa-trash-o',
            handler: 'onRefresh',
        }]
    },
    emptyText: "未选择资源",
    viewConfig: {
        deferEmptyText: false
    },
    scrollable: true,
    store: {
        model: 'Entry',
        data: []
    },
    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 2
    },
    columns: [{
        text: '数据集显示名',
        flex: 1,
        dataIndex: 'title'
    }, {
        text: '数据集名称',
        flex: 1,
        dataIndex: 'entityName'
    }, {
        text: '资源ID',
        flex: 1,
        dataIndex: 'resId'
    }, {
        text: '数据库',
        flex: 1,
        dataIndex: 'sql'
    }, {
        text: '表',
        flex: 1,
        dataIndex: 'table'
    // }, {
    //     text: '外键',
    //     flex: 1,
    //     dataIndex: 'foreignKey',
    //     reference: 'foreignKey',
    }, {
        xtype: 'actioncolumn',
        items: [{
            iconCls: 'x-fa fa-close',
            handler: 'onRemoveRecord',
            tooltip: '删除'
        }, {
            iconCls: 'x-fa fa-pencil',
            handler: 'oninputScript',
            tooltip: '脚本自定义'
        }],
        cls: 'content-column',
        width: 50,
        align: 'center',
        text: '操作',
        tooltip: '操作'
    }],
    listeners: [{
        select: 'onRowClick'
    }]
});
