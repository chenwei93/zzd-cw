Ext.define('DRDMS.view.entry.EntryWH', {
    extend: 'Ext.grid.Panel',
    xtype: 'entry-wh',

    requires: [
        'DRDMS.model.Entry',
        'DRDMS.view.entry.EntryWHModel',
        'DRDMS.view.entry.EntryWHController'
    ],
    columnLines: true,
    viewModel: {
        type: 'entry-wh'
    },
    bind: {
        store: '{list}'
    },
    controller: 'entry-wh',
    listeners: {
        'rowdblclick': 'onShow'
    },
    tbar: [ '->', {
        xtype: 'textfield',
        reference: 'searchText',
        emptyText: '输入查询内容直接回车',
        listeners: {
            specialkey: 'onSpecialkey'
        }
    }, {
        iconCls: 'x-fa fa-refresh',
        tooltip: '重置',
        handler: 'onReset'
    }, {
        iconCls: 'x-fa fa-navicon',
        tooltip: '更多条件查询',
        handler: 'onQuery'
    }],
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: "资源标题",
        width: 250,
        dataIndex: 'title',
        locked: true
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
        xtype: 'actioncolumn',
        locked: true,
        items: [
            {
                iconCls: 'x-fa fa-pencil',
                handler: 'onEdit'
            },
            {
                iconCls: 'x-fa fa-eye',
                handler: 'onShow1'
            },
            {
                iconCls: 'x-fa fa-close',
                handler: 'onDelete'
            }
        ],
        cls: 'content-column',
        // width: 80,
        align: 'center',
        text: '操作',
        tooltip: '操作 '
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store
    }
});