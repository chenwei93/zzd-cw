Ext.define('Cmdb.view.ops.jkzcwh.jkpz.Jkpz', {
    extend: 'Ext.grid.Panel',
    xtype: 'jkpzx',


    requires: [
        'Cmdb.view.ops.jkzcwh.jkpz.JkpzController',
        'Cmdb.view.ops.jkzcwh.jkpz.JkpzModel',
        'Cmdb.view.ops.jkzcwh.jkpz.JkpzEdit',
        'Cmdb.view.ops.jkzcwh.jkpz.JkpzShow',
        'Cmdb.view.ops.jkzcwh.jkpz.JkpzsqForm',
        'Cmdb.view.ops.jkzcwh.jkpz.JkpzsqShow',
        'Cmdb.view.ops.jkzcwh.jkpz.JkpzWHEdit',
        'Cmdb.view.ops.jkzcwh.jkpz.JkpzWHShow'
    ],
    store: {
        type: 'zcfp'
    },
    controller: 'jkpzx',
    tbar: [{
        text: '新增接口',
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
        text: '接口名称',
        dataIndex: 'j_title',
        flex: 1
    }, {
        text: '编码',
        dataIndex: 'j_code',
        flex: 1
    }, {
        text: '序号',
        dataIndex: 'j_xh',
        flex: 1
    }, {
        text: '描述',
        dataIndex: 'j_des',
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
                if (record.get('type') == 'jk') {
                    return true
                }
            })
        }
    }
});
