Ext.define('Starter.view.entrydata.EntryDataProjection', {
    extend: 'Ext.grid.Panel',
    xtype: 'entrydata-projection',

    requires: [
        'Starter.model.EntryData',
        'Starter.view.entrydata.EntryDataProjectionController',
        'Starter.view.entrydata.EntryDataProjectionModel'
    ],

    controller: 'entrydata-projection',
    selType: 'checkboxmodel',
    viewModel: {
        type: 'entrydata-projection'
    },
    bind: {
        store: '{list}'
    },
    tbar: [{
        text: '标记为未导出',
        ui: 'default',
        handler: 'onDeal'
    }, {
        ui: 'default',
        text: '刷新',
        iconCls: 'x-fa fa-refresh',
        handler: 'reloadStore'
    }],
    listeners: {
        'selectionchange':
            'onSelectionChange'
    },
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '信息资源名称',
        flex: 1,
        dataIndex: 'resTitle',
        reference: 'exportmgrgrid'
    }, {
        xtype: 'booleancolumn',
        text: '已导出',
        dataIndex: 'published',
        trueText: '是',
        falseText: '否'
    }, {
        text: '导出时间',
        flex: 1,
        xtype: 'datecolumn',
        format: 'Y-m-d H:i:s',
        dataIndex: 'publishDate'
    }, {
        text: '生成时间',
        flex: 1,
        xtype: 'datecolumn',
        format: 'Y-m-d H:i:s',
        dataIndex: 'createTime'
    }, {
        text: '部门',
        dataIndex: 'ownerDepartment'
    }, {
        text: '类型',
        dataIndex: 'format'
    }],
    bbar:
        {
            xtype: 'pagingtoolbar',
            displayInfo: true,
            store: this.store

        }
});