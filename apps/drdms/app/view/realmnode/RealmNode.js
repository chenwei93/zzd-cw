Ext.define('DRDMS.view.realmnode.RealmNode', {
    extend: 'Ext.grid.Panel',
    xtype: 'realmnode',

    requires: [
        'DRDMS.model.RealmNode',
        'DRDMS.view.realmnode.RealmNodeAdd',
        'DRDMS.view.realmnode.RealmNodeEdit',
        'DRDMS.view.realmnode.RealmNodeModel',
        'DRDMS.view.realmnode.RealmNodeController',
    ],
    controller: 'realmnode',
    viewModel: {
        type: 'realmnode'
    },
    bind: {
        store: '{list}'
    },
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
        text: "节点标题",
        flex: 1,
        dataIndex: 'title'
    }, {
        text: "节点单位编码",
        flex: 1,
        dataIndex: 'code'
    }, {
        text: "地区节点单位名称",
        flex: 1,
        dataIndex: 'nodeOrganizationName'
    }, {
        text: "部门系统地址",
        flex: 1,
        dataIndex: 'nodeServer'
    }, {
        text: "地区节点单位地址",
        flex: 1,
        dataIndex: 'nodeAddress'
    }, {
        text: "公钥",
        flex: 1,
        dataIndex: 'registerPublicKey'
    }, {
        xtype: 'actioncolumn',
        text: '操作',
        defaults: {
            defaultType: 'button'
        },
        items: [
            {
                iconCls: 'x-fa fa-pencil',
                tooltip: '编辑',
                handler: 'onEdit'
            },
            {
                iconCls: 'x-fa fa-close',
                tooltip: '删除',
                handler: 'onDelete'
            }
        ],
        cls: 'content-column',
        width: 70,
        align: 'center',
        tooltip: '操作'
    }]
});