Ext.define('Cmdb.view.ops.yzyzcpz.zyfp.Zyfp', {
    extend: 'Ext.grid.Panel',
    xtype: 'zyfp',


    requires: [
        'Cmdb.view.ops.yzyzcpz.zyfp.ZyfpController',
        'Cmdb.view.ops.yzyzcpz.zyfp.ZyfpModel',
        'Cmdb.view.ops.yzyzcpz.zyfp.ZyfpEdit',
        'Cmdb.view.ops.yzyzcpz.zyfp.ZyfpShow',
        'Cmdb.view.ops.yzyzcpz.zyfp.ZyfpWHEdit',
        'Cmdb.view.ops.yzyzcpz.zyfp.ZyfpWHShow',
        'Cmdb.view.ops.yzyzcpz.zyfp.YzypzForm',
        'Cmdb.view.ops.yzyzcpz.zyfp.YzysqForm',
        'Cmdb.view.ops.yzyzcpz.zyfp.YzysqFormShow',
    ],
    // viewModel: {
    //     type: 'zyfp'
    // },
    // bind: {
    //     store: '{list}'
    // },
    store: {
        type: 'zcfp'
    },
    controller: 'zyfp',
    tbar: [{
        text: '新增资源',
        ui: 'default',
        handler: 'onNew'
        // }, '->', {
        // xtype: 'combo',
        // displayField: 'name',
        // valueField: 'value',
        // emptyText: '选择状态',
        // store: {
        //     fields: ['name', 'value'],
        //     data: [
        //         {name: '全部', value: 'All'},
        //         {name: '待办', value: 'Grdb'},
        //         {name: '已办', value: 'Gryb'}
        //     ]
        // },
        // listeners: {
        //     change: 'onChooseSelect'
        // }
    }],
    columns: [{
        text: '资产名称',
        dataIndex: 'z_title',
        flex: 1
    }, {
        text: '编码',
        dataIndex: 'code',
        flex: 1
    }, {
        text: '序号',
        dataIndex: 'xh',
        flex: 1
    }, {
        text: '描述',
        dataIndex: 'des',
        flex: 1
    }, {
        xtype: 'actioncolumn',
        items: [
            {
                xtype: 'button',
                iconCls: 'x-fa fa-eye',
                tooltip: '查看',
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
                if (record.get('type') == null) {
                    return true
                }
            })
        }
    }
});
