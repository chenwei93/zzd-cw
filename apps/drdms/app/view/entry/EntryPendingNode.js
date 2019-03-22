Ext.define('DRDMS.view.entry.EntryPendingNode', {
    extend: 'Ext.grid.Panel',
    xtype: 'entry-pendingnode',

    columnLines: true,
    requires: [
        'DRDMS.model.Entry',
        'DRDMS.view.entry.EntryPendingNodeModel',
        'DRDMS.view.entry.EntryPendingNodeController',
    ],

    controller: 'entry-pendingnode',
    selType: 'checkboxmodel',
    viewModel: {
        type: 'entry-pendingnode'
    },
    bind: {
        store: '{list}'
    },
    tbar: [{
        text: '批量处理',
        iconCls: 'x-fa fa-list-ol',
        ui: 'default',
        handler: 'onDeal'
    }, '->', {
        xtype: 'textfield',
        emptyText: '输入查询内容直接回车',
        reference: 'searchText',
        listeners: {
            specialkey: 'onSpecialkey'
        }
    }, {
        iconCls: 'x-fa fa-refresh',
        tooltip: '重置',
        handler: 'onRestNode'
    }, {
        iconCls: 'x-fa fa-navicon',
        tooltip: '更多条件查询',
        handler: function () {
            Ext.create({
                xtype: 'no-authority'
            })
        }
    }],

    listeners: {
        'rowdblclick': 'onShow',
    },

    columns: [{
        xtype: 'rownumberer'
    }, {
        text: "资源标题",
        flex: 2,
        sortable: true,
        dataIndex: 'title'
    }, {
        text: "资源标识符",
        sortable: true,
        flex: 2,
        dataIndex: 'rid'
    }, {
        text: "资源类型",
        sortable: true,
        flex: 1,
        dataIndex: 'type'
    }, {
        text: "资源格式",
        sortable: true,
        flex: 1,
        dataIndex: 'format'
    }, {
        text: "当前状态",
        sortable: true,
        flex: 1,
        dataIndex: 'status',
        renderer: function (value) {
            if (value == 'UnPublished') {
                return '待发布'
            } else if (value == 'UnApproved') {
                return '待审核'
            }
            else if (value == 'Generated') {
                return '新生成'
            } else {
                return '已发布'
            }
        }
    }, {
        xtype: 'datecolumn',
        format: 'Y-m-d h:i:s',
        text: "创建时间",
        sortable: true,
        flex: 1,
        dataIndex: 'createTime'
    }, {
        xtype: 'actioncolumn',
        items: [
            {
                iconCls: 'x-fa fa-pencil',
                handler: 'onEdit',
                tooltip: '编辑'
            }
        ],
        cls: 'content-column',
        align: 'center',
        width: 70,
        text: '操作',
        right: 0,
        tooltip: '操作 '
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store
    }
});