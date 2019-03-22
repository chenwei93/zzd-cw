Ext.define('DA.view.dataservice.entrychangelog.EntryChangeLogCenter', {
    extend: 'Ext.grid.Panel',
    xtype: 'entry-changelogcenter',


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
    tbar: [{
        text: '刷新',
        ui: 'default',
        iconCls: 'x-fa fa-refresh',
        handler: 'onreset'
    }, '->', {
        xtype: 'textfield',
        emptyText: '输入查询内容直接回车',
        reference: 'searchText',
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
    }],
    listeners: {
        'rowdblclick': 'onShow'
    },
    columns: [{
        dataIndex: 'resTitle',
        text: '目录标题',
        flex: 0.9
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
