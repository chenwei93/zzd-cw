Ext.define('Cmdb.view.ops.aqgl.aqjcgl.Aqjcgl', {
    extend: 'Ext.grid.Panel',
    xtype: 'aqjcgl',


    requires: [
        'Cmdb.view.ops.aqgl.aqjcgl.AqjcglController',
        'Cmdb.view.ops.aqgl.aqjcgl.AqjcglModel'
    ],
    viewModel: {
        type: 'aqjcgl'
    },
    bind: {
        store: '{list}'
    },
    controller: 'aqjcgl',
    tbar: [{
        text: '新增安全检测',
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
        text: '工单标题／单号',
        dataIndex: 'title',
        flex: 1
    }, {
        text: '工单来源',
        dataIndex: 'gdly',
        flex: 1
    }, {
        text: '工单状态',
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