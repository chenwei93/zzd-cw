Ext.define('Cmdb.view.asset.sjkfgl.Sjkfgl', {
    extend: 'Ext.grid.Panel',
    xtype: 'sjkfgl',


    requires: [
        'Cmdb.store.asset.Sjkfgl',
        'Cmdb.view.asset.sjkfgl.SjkfglController'
    ],
    store: {
        type: 'sjkfgl'
    },
    controller: 'sjkfgl',
    tbar: [{
        ui: 'default',
        text: '资产申请',
        handler: 'onZcsq'
    }, {
        ui: 'default',
        text: '新建工单',
        handler: 'onXjgd'
    }, '->', {
        xtype: 'combo',
        reference: 'chooseType',
        displayField: 'name',
        valueField: 'value',
        emptyText: '选择状态',
        store: {
            fields: ['name', 'value'],
            data: [
                {name: '待办', value: 'db'},
                {name: '已办', value: 'yb'},
                {name: '办结', value: 'bj'},
                {name: '关注', value: 'gz'}
            ]
        },
        value: 'db',
        listeners: {
            change: 'onChooseSelect'
        }
    }, {
        xtype: 'datefield',
        emptyText: '开始日期'
    }, '-', {
        xtype: 'datefield',
        emptyText: '结束日期'
    }, {
        xtype: 'button',
        text: '搜索',
        handler: 'onSearch'

    }],
    columns: [{
        dataIndex: 'title',
        text: '资源名称',
        flex: 1
    }, {
        dataIndex: 'name',
        text: '待办名称',
        flex: 1
    }, {
        dataIndex: 'status',
        text: '状态',
        flex: 1
    }, {
        dataIndex: 'c_time',
        text: '处理时间',
        flex: 1
    }, {
        dataIndex: 'pre_person',
        text: '上一步操作人',
        flex: 1
    }, {
        dataIndex: 'now_person',
        text: '当前处理人',
        flex: 1
    }, {
        xtype: 'actioncolumn',
        items: [
            {
                xtype: 'button',
                reference: 'dealbtn',
                iconCls: 'x-fa fa-hand-paper-o',
                // tooltip: '处理',
                handler: 'onDeal'
            }
        ],

        cls: 'content-column',
        width: 80,
        align: 'center',
        text: '操作',
        renderer: function (a, b, record) {
            if (record.get('status') == 'sqsh') {
                this.items[0].tooltip = '申请审核';
            }
        }
    }],
    listeners: {
        render: 'onFwzcRender'
    }
});