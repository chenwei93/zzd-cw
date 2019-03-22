Ext.define('DA.view.mgr.principal.Principal', {
    extend: 'Ext.tree.Panel',
    xtype: 'principal',

    requires: [
        'DA.model.Principal',
        'DA.view.mgr.principal.PrincipalModel',
        'DA.view.mgr.principal.PrincipalController',
        'DA.view.mgr.principal.PrincipalEdit',
        'DA.view.mgr.principal.PrincipalAdd'
    ],
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
    cls: 'shadow',
    tbar: [{
        ui: 'default',
        text: '刷新',
        iconCls: 'x-fa fa-refresh',
        handler: 'reloadStore'
    }, {
        ui: 'default',
        text: '新增',
        iconCls: 'x-fa fa-plus',
        handler: 'onNew'
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
        xtype: 'treecolumn',
        text: "部门名称",
        flex: 1,
        dataIndex: 'text',
        editor: true
    }, {
        text: "部门编码",
        flex: 1,
        dataIndex: 'code',
        editor: true
    }, {
        text: "顺序",
        flex: 1,
        dataIndex: 'orders',
        editor: true
    }, {
        xtype: 'actioncolumn',
        defaults: {
            defaultType: 'button'
        },
        items: [
            {
                iconCls: 'x-fa fa-pencil',
                tooltip:'编辑',
                handler: 'onEdit'
            },
            {
                iconCls: 'x-fa fa-plus',
                tooltip:'添加',
                handler: 'onAdd'
            },
            {
                iconCls: 'x-fa fa-close',
                tooltip:'删除',
                handler: 'onDelete'
            }
        ],

        cls: 'content-column',
        width: 70,
        align: 'center'
    }]
});
