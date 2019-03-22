Ext.define('Cmdb.view.ops.rjfwzcpz.fwsmwh.Fwsmwh', {
    extend: 'Ext.grid.Panel',
    xtype: 'fwsmwh',


    requires: [
        'Cmdb.view.ops.rjfwzcpz.fwsmwh.FwsmwhController',
        'Cmdb.view.ops.rjfwzcpz.fwsmwh.FwsmwhModel',
        'Cmdb.view.ops.rjfwzcpz.fwsmwh.FwsmwhEdit',
        'Cmdb.view.ops.rjfwzcpz.fwsmwh.FwsmwhShow',
        'Cmdb.view.ops.rjfwzcpz.fwsmwh.FwsmwhsqFrom',
        'Cmdb.view.ops.rjfwzcpz.fwsmwh.FwsmwhsqShow',
        'Cmdb.view.ops.rjfwzcpz.fwsmwh.FwsmwhWHEdit',
        'Cmdb.view.ops.rjfwzcpz.fwsmwh.FwsmwhWHShow'

    ],
    // viewModel: {
    //     type: 'fwsmwh'
    // },
    // bind: {
    //     store: '{list}'
    // },
    store: {
        type: 'zcfp'
    },
    controller: 'fwsmwh',
    tbar: [{
        text: '新增服务',
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
        text: '资产名称',
        dataIndex: 'f_title',
        flex: 1
    }, {
        text: '资产编号',
        dataIndex: 'f_code',
        flex: 1
    }, {
        text: '实施负责人',
        dataIndex: 'f_ssfzr',
        flex: 1
    }, {
        text: '计划开始时间',
        dataIndex: 'f_beginTime',
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
    }],
    listeners: {
        render: function () {
            this.getStore().filterBy(function (record) {
                if (record.get('type') == 'fw') {
                    return true
                }
            })
        }
    }
});
