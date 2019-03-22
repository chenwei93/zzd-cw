Ext.define('Starter.view.principal.Principal', {
    extend: 'Ext.tree.Panel',
    xtype: 'principal',

    requires: [
        'Starter.model.Principal',
        'Starter.view.principal.PrincipalModel',
        'Starter.view.principal.PrincipalController',
        'Starter.view.principal.PrincipalEdit',
        'Starter.view.principal.PrincipalAdd'
    ],
    id:'catatree',
    controller: 'principal',
    reserveScrollbar: true,
    useArrows: true,
    rootVisible: false,
    multiSelect: true,
    singleExpand: true,
    viewModel: {
        type: 'principal'
    },
    bind: {
        store: '{list}'
    },
    cls: 'shadow',
    tbar: [{
        ui: 'default',
        text: '刷新',
        iconCls: 'x-fa fa-refresh',
        handler: 'reloadStore'
    }, '->', {
        xtype: 'textfield',
        emptyText: '输入查询内容直接回车'
    }, {
        iconCls: 'x-fa fa-refresh',
        title: '重置',
        handler: 'onreset'
    }, {
        iconCls: 'x-fa fa-navicon',
        title: '更多条件查询',
        handler: 'onQuery'
    }],

    columns: [{
        xtype: 'treecolumn',
        text: "部门名称",
        flex: 1,
        dataIndex: 'text'
    }, {
        text: "部门编码",
        flex: 1,
        dataIndex: 'code'
    }, {
        text: "顺序",
        flex: 1,
        dataIndex: 'orders'
    }, {
        xtype: 'actioncolumn',
        right: 0,
        defaults: {
            defaultType: 'button'
        },
        items: [
            {
                iconCls: 'x-fa fa-pencil',
                handler: 'onEdit'
            },
            {
                iconCls: 'x-fa fa-plus',
                handler: 'onAdd'
            },
            {
                iconCls: 'x-fa fa-close',
                handler: 'onDelete'
            }
        ],

        cls: 'content-column',
        width: 60,
        text: '操作',
        align: 'center',
        tooltip: '操作'
    }]
});