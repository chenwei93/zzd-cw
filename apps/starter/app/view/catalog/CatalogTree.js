Ext.define('Starter.view.catalog.CatalogTree', {
    extend: 'Ext.tree.Panel',
    xtype: 'catalog-tree',


    requires: [
        'Starter.model.Catalog',
        'Starter.view.catalog.CatalogTreeModel'
    ],
    viewModel: {
        type: 'catalogtree'
    },
    bind: {
        store: '{list}'
    },

    listeners: {
        select: 'onSelect'
    },
    rootVisible: false,
    tbar: [{
        ui: 'default',
        text: '刷新',
        iconCls: 'x-fa fa-refresh',
        handler: 'reloadStore'
    },'->', {
        xtype: 'combo',
        queryMode: 'local',
        triggerAction: 'all',
        forceSelection: false,
        editable: false,
        displayField: 'name',
        valueField: 'value',
        emptyText: '选择分类',
        store: {
            fields: ['name', 'value'],
            data: [
                {name: '按主题分类', value: 'CatalogGB'},
                {name: '按行业分类', value: 'CatalogHY'},
                {name: '按实施指南分类', value: 'CatalogSS'}
            ]
        },
        listeners: {
            select: 'onChange'
        }
    }],
    columns: [{
        xtype: 'treecolumn',
        text: '名称',
        flex: 1,
        reference: 'catalogtree',
        dataIndex: 'text'
    }, {
        text: '编码',
        dataIndex: 'code'
    }, {
        text: '描述',
        flex: 1,
        dataIndex: 'desc'
    }]

});