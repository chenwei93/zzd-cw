Ext.define('Cmdb.view.asset.zckgl.catalog.CatalogZT', {
    extend: 'Ext.tree.Panel',
    xtype: 'catalogzt',


    requires: [
        'Cmdb.model.Catalog',
        'Cmdb.view.asset.zckgl.catalog.CatalogAdd',
        'Cmdb.view.asset.zckgl.catalog.CatalogEdit',
        'Cmdb.view.asset.zckgl.catalog.CatalogZTModel',
        'Cmdb.view.asset.zckgl.catalog.CatalogZTController'
    ],
    controller: 'catalogzt',
    viewModel: {
        type: 'catalogzt'
    },
    bind: {
        store: '{list}'
    },
    rootVisible: false,
    tbar: [{
        text: '新增主题分类',
        ui: 'default',
        iconCls: 'x-fa fa-plus',
        handler: 'onAddClick'
    }, '->', {
        xtype: 'textfield',
        emptyText: '输入查询内容直接回车'
    }, {
        iconCls: 'x-fa fa-refresh',
        tooltip: '重置',
        handler: 'onreset'
    }, {
        iconCls: 'x-fa fa-navicon',
        tooltip: '更多条件查询',
        handler: 'onQuery'
    }],
    columns: [{
        xtype: 'treecolumn', //this is so we know which column will show the tree
        text: '主题名称',
        dataIndex: 'text',
        flex: 1,
        sortable: false
    }, {
        text: '主题编码',
        dataIndex: 'code',
        flex: 1,
        sortable: true
    }, {
        text: '主题描述',
        dataIndex: 'desc',
        flex: 2,
        sortable: false
    }, {
        xtype: 'actioncolumn',
        right: 0,
        items: [
            {
                iconCls: 'x-fa fa-pencil',
                tooltip:'编辑',
                handler: 'onRealm'
            },
            {
                iconCls: 'x-fa fa-close',
                tooltip:'删除',
                handler: 'onDelete'
            }
        ],

        cls: 'content-column',
        width: 50,
        align: 'center',
        text: '操作',
        tooltip: '操作 '
    }]
});
