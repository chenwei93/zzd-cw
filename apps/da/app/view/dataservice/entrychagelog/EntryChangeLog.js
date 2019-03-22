Ext.define('DA.view.dataservice.entrychangelog.EntryChangeLog', {
    extend: 'Ext.grid.Panel',
    xtype: 'entry-changelog',


    requires: [
        'DA.model.Entry',
        'DA.view.dataservice.entrychangelog.EntryChangeLogModel',
        'DA.view.dataservice.entrychangelog.EntryChangeLogController'
    ],
    controller: 'entry-changelog',
    viewModel: {
        type: 'entry-changelog'
    },
    bind: {
        store: '{list}'
    },
    selModel: {
        selType: 'checkboxmodel'
    },
    tbar: [{
        ui: 'default',
        text: '批量审核',
        iconCls: 'x-fa fa-list-ol',
        handler: 'onDeal'
    }],
    listeners: {
        'rowdblclick': 'onShow'
    },
    columns: [{
        xtype: 'gridcolumn',
        dataIndex: 'resTitle',
        text: '目录标题',
        flex: 1
    }, {
        text: '变更状态',
        dataIndex: 'changeType'
    }, {
        xtype: 'datecolumn',
        format: 'Y-m-d H:i:s',
        text: '变更时间',
        flex: 0.5,
        dataIndex: 'updateTime'
    }, {
        text: '节点名称',
        flex: 0.5,
        dataIndex: 'jd'
    }, {
        text: '确认状态',
        flex: 0.5,
        dataIndex: 'confirm',
        xtype:'booleancolumn',
        trueText: '已确认',
        falseText: '未确认',
    }, {
        xtype: 'actioncolumn',
        items: [
            {
                iconCls: 'x-fa fa-eye',
                handler: 'onShow1',
                tooltip: '查看'
            }
        ],
        cls: 'content-column',
        align: 'center',
        width: 50,
        text: '操作',
        right: 0,
        tooltip: '操作'
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store
    }

});
