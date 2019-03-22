Ext.define('Cmdb.view.mgr.xtgl.principal.User', {
    extend: 'Ext.grid.Panel',
    xtype: 'user',

    requires: [
        'Cmdb.view.mgr.xtgl.principal.UserModel',
        'Cmdb.view.mgr.xtgl.principal.UserController',
        'Cmdb.view.mgr.xtgl.principal.UserRoles',
        'Cmdb.view.mgr.xtgl.principal.UserChangePassword'
    ],
    controller: 'user',

    reserveScrollbar: true,
    useArrows: true,
    rootVisible: false,
    multiSelect: true,
    singleExpand: true,
    viewModel: {
        type: 'user'
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
        handler: 'onreloadStore'
    }, {
        ui: 'default',
        text: '新增',
        iconCls: 'x-fa fa-plus',
        handler: 'onAdd'
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
        text: "名字",
        flex: 1,
        dataIndex: 'name',
        editor: true
    }, {
        text: "简称",
        editor: true,
        flex: 1,
        dataIndex: 'displayName'
    }, {
        text: "编码",
        flex: 1,
        dataIndex: 'code',
        editor: true
    }, {
        text: '所属部门',
        dataIndex: 'dept',
        flex: 1,
        editor: true
    }, {
        text: '所属地区',
        dataIndex: 'area',
        flex: 1,
        editor: true
    }, {
        text: '角色',
        dataIndex: '',
        reference: 'role',
        flex: 1,
        editor: false
    }, {
        xtype: 'actioncolumn',
        defaults: {
            margin: 13
        },
        items: [
            {
                iconCls: 'x-fa fa-user-plus',
                tooltip: '分配角色',
                handler: 'onUserPlus'
            }, {
                iconCls: 'x-fa fa-key',
                tooltip: '更改密码',
                handler: 'onChangePassword'
            }, {
                xtype: 'button',
                iconCls: 'x-fa fa-close',
                tooltip: '删除',
                handler: 'onDelete'
            }
        ],

        width: 120,
        text: '操作',
        align: 'center'
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store

    }
});