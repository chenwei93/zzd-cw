Ext.define('ETL.view.rnode.RNode', {
    extend: 'Ext.grid.Panel',
    xtype: 'rnode',


    requires: [
        'ETL.view.rnode.RNodeModel',
        'ETL.view.rnode.RNodeController',
        'ETL.view.rnode.RNodeAdd',
        'ETL.view.rnode.RNodeAdd'
    ],
    controller: 'rnode',
    viewModel: {
        type: 'rnode'
    },
    bind: {
        store: '{list}'
    },
    tbar: [{
        text: '新增',
        ui: 'default',
        iconCls: 'x-fa fa-plus-circle',
        handler: 'onAdd'
    }],
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: 'IP地址',
        dataIndex: 'address',
        width: 150
    }, {
        text: '开放端口',
        dataIndex: 'port',
    }, {
        text: '标识名',
        dataIndex: 'name'
    }, {
        text: '名称',
        dataIndex: 'title',
        flex: 1,
    }, {
        xtype: 'booleancolumn',
        text: '本地',
        dataIndex: 'local',
        trueText: '是',
        falseText: '否'
    }, {
        xtype: 'actioncolumn',
        items: [{
            iconCls: 'x-fa fa-eye',
            handler: 'onShow1',
            tooltip: '查看'
        }, {
            iconCls: 'x-fa fa-pencil',
            handler: 'onEdit',
            tooltip: '编辑'
        }, {
            iconCls: 'x-fa fa-close',
            handler: 'onDelete',
            tooltip: '删除'
        }],
        width: 80,
        align: 'center',
        text: '操作'
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store
    }
});
