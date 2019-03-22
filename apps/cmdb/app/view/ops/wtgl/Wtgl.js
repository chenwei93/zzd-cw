Ext.define('Cmdb.view.ops.wtgl.Wtgl', {
    extend: 'Ext.grid.Panel',
    xtype: 'wtgl',


    requires: [
        'Cmdb.view.ops.wtgl.WtglController',
        'Cmdb.view.ops.wtgl.WtglModel'
    ],
    viewModel: {
        type: 'wtgl'
    },
    bind: {
        store: '{list}'
    },
    controller: 'wtgl',
    tbar: [{
        text: '新增问题',
        ui: 'default',
        handler: 'onNew'
    }, '->', {
        xtype: 'combo',
        displayField: 'name',
        valueField: 'value',
        emptyText: '选择状态',
        store: {
            fields: ['name', 'value'],
            data: [
                {name: '全部', value: 'All'},
                {name: '待办', value: 'Grdb'},
                {name: '已办', value: 'Gryb'}
            ]
        },
        listeners: {
            change: 'onChooseSelect'
        }
    }],
    columns: [{
        text: '问题',
        dataIndex: 'title',
        flex: 1
    }, {
        text: '问题来源',
        dataIndex: 'gdly',
        flex: 1
    }, {
        text: '问题状态',
        dataIndex: 'gdzt',
        flex: 1
    }, {
        text: '逾期状态',
        dataIndex: 'yqzt',
        flex: 1
    }, {
        xtype: 'actioncolumn',
        items: [
            {
                xtype: 'button',
                iconCls: 'x-fa fa-hand-paper-o',
                tooltip: '处理',
                handler: 'onDeal'
            }
        ],

        cls: 'content-column',
        width: 80,
        align: 'center',
        text: '操作'
    }]
});