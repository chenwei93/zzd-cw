Ext.define('Cmdb.view.asset.zckgl.catalog.CatalogHY', {
    extend: 'Ext.tree.Panel',
    xtype: 'cataloghy',


    requires: [
        'Cmdb.model.Catalog',
        'Cmdb.view.asset.zckgl.catalog.CatalogEdit',
        'Cmdb.view.asset.zckgl.catalog.CatalogHYModel',
        'Cmdb.view.asset.zckgl.catalog.CatalogHYController'
    ],
    controller: 'cataloghy',
    viewModel: {
        type: 'cataloghy'
    },
    bind: {
        store: '{list}'
    },
    scrollable: true,
    rootVisible: false,
    tbar: [{
        text: '新增行业分类',
        ui: 'default',
        iconCls: 'x-fa fa-plus',
        handler: 'onAddClick'
    }, '->', {
        xtype: 'textfield',
        reference: 'searchText',
        emptyText: '输入查询内容直接回车',
        triggers: {
            bar: {
                cls: 'x-form-clear-trigger',
                handler: function () {
                    this.reset();
                }
            }
        },
        listeners: {
            specialkey: 'onSpecialkey'
        }
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
                tooltip: '编辑',
                handler: 'onRealm'
            },
            {
                iconCls: 'x-fa fa-close',
                tooltip: '删除',
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