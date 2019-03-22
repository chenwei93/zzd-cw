Ext.define('DA.view.mgr.resourcenode.ResourceNode', {
    extend: 'Ext.grid.Panel',
    xtype: 'resourcenode',


    requires: [
        'DA.model.ResourceNode',
        'DA.view.mgr.resourcenode.ResourceNodeModel',
        'DA.view.mgr.resourcenode.ResourceNodeShow',
        'DA.view.mgr.resourcenode.ResourceNodeAdd',
        'DA.view.mgr.resourcenode.ResourceNodeController'
    ],
    controller: 'resourcenode',
    viewModel: {
        type: 'resourcenode'
    },
    bind: {
        store: '{list}'
    },
    tbar: [{
        text: '新增',
        ui: 'default',
        iconCls: 'x-fa fa-plus-circle',
        handler: 'onAdd'
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
    listeners: {
        'rowdblclick': 'onShow'
    },
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: 'IP地址',
        dataIndex: 'ip',
        width: 150
    }, {
        text: '开放端口',
        dataIndex: 'ports',
        renderer: function (data) {
            return data ? Object.keys(data) : data;
        }
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

});
