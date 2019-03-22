Ext.define('Cmdb.view.ops.aqgl.hggl.Hggl', {
    extend: 'Ext.grid.Panel',
    xtype: 'hggl',


    requires: [
        'Cmdb.view.ops.aqgl.hggl.HgglController',
        'Cmdb.view.ops.aqgl.hggl.HgglModel'
    ],
    viewModel: {
        type: 'hggl'
    },
    bind: {
        store: '{list}'
    },
    controller: 'hggl',
    tbar: [{
        text: '新增合规',
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
        text: '工作标题／单号',
        dataIndex: 'title',
        flex: 1
    }, {
        text: '工作来源',
        dataIndex: 'gdly',
        flex: 1
    }, {
        text: '工作状态',
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