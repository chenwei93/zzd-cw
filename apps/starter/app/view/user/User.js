Ext.define('Starter.view.user.User', {
    extend: 'Ext.grid.Panel',
    xtype: 'user',

    requires: [
        'Starter.view.user.UserModel',
        'Starter.view.user.UserController'
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

    cls: 'shadow',
    tbar: [{
        ui: 'default',
        text: '刷新',
        iconCls: 'x-fa fa-refresh',
        handler: 'reloadStore'
    },'->', {
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
        text: "名字",
        flex: 1,
        dataIndex: 'name'
    }, {
        text: "简称",
        flex: 1,
        dataIndex: 'displayName'
    }, {
        text: "编码",
        flex: 1,
        dataIndex: 'code'
    }, {
        text: '所属部门',
        dataIndex: 'dept',
        flex: 1
    },{
        text:'所属地区',
        dataIndex:'area',
        flex:1
    }, {
        xtype: 'actioncolumn',
        right: 0,
        items: [
            {
                xtype: 'button',
                iconCls: 'x-fa fa-pencil',
                handler: 'onAdd'
            },
            {
                xtype: 'button',
                iconCls: 'x-fa fa-close',
                handler: 'onDelete'
            }
        ],

        cls: 'content-column',
        width: 60,
        text: '操作',
        align: 'center',
        tooltip: '操作'
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store

    }
});