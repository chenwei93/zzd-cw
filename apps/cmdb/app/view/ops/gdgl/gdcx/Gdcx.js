Ext.define('Cmdb.view.ops.gdgl.gdcx.Gdcx', {
    extend: 'Ext.grid.Panel',
    xtype: 'gdcx',


    requires: [
        'Cmdb.view.ops.gdgl.gdcx.GdcxController',
        'Cmdb.view.ops.gdgl.gdcx.GdcxModel'
    ],
    viewModel: 'gdcx',
    bind: {
        store: '{list}'
    },

    controller: 'gdcx',
    tbar: {
        xtype: 'container',
        border: false,
        items: [{
            xtype: 'toolbar',
            layout: 'hbox',
            defaults: {
                labelAlign: 'top',
            },
            items: [{
                xtype: 'textfield',
                flex: 1,
                name: 'code',
                fieldLabel: '标题／单号',
                emptyText: '输入工单关键字进行筛选'
            }, {
                xtype: 'textfield',
                flex: 1,
                name: 'person',
                emptyText: '选择工单处理人进行筛选',
                fieldLabel: '当前处理人'
            }, {
                xtype: 'textfield',
                flex: 1,
                name: 'fqr',
                emptyText: '选择工单创建人进行筛选',
                fieldLabel: '发起人'
            }, {
                xtype: 'textfield',
                flex: 1,
                name: 'fqr',
                emptyText: '选择工单优先级进行筛选',
                fieldLabel: '优先级'
            }]
        }, {
            xtype: 'toolbar',
            layout: 'hbox',
            defaults: {
                labelAlign: 'top',
            },
            items: [{
                xtype: 'textfield',
                flex: 1,
                name: 'gdly',
                emptyText: '选择工单来源人进行筛选',
                fieldLabel: '工单来源'
            }, {
                xtype: 'textfield',
                flex: 1,
                name: 'gdzt',
                emptyText: '选择工单状态进行筛选',
                fieldLabel: '工单状态'
            }, {
                xtype: 'textfield',
                flex: 1,
                name: 'yqzt',
                emptyText: '选择工单逾期状态进行筛选',
                fieldLabel: '逾期状态'
            }, {
                xtype: 'datefield',
                flex: 1,
                name: 'fqsj',
                fieldLabel: '发起时间'
            }]
        }, {
            xtype: 'toolbar',
            layout: 'column',
            defaults: {
                labelAlign: 'top',
            },
            items: [{
                xtype: 'datefield',
                columnWidth: 0.25,
                name: 'gxsj',
                fieldLabel: '更新时间'
            }]
        }, {
            xtype: 'toolbar',
            items: [{
                ui: 'default',
                iconCls: 'x-fa fa-plus',
                text: '新建工单',
                handler: 'onXjgd'
            }]
        }]
    },
    columns: [{
        dataIndex: 'title',
        text: '工单标题／单号',
        flex: 1
    }, {
        dataIndex: 'person',
        text: '当前处理人',
        flex: 1
    }, {
        dataIndex: 'fqr',
        text: '发起人',
        flex: 1
    }, {
        dataIndex: 'yxj',
        text: '优先级',
        flex: 1
    }, {
        dataIndex: 'gdly',
        text: '工单来源',
        flex: 1
    }, {
        dataIndex: 'gdzt',
        text: '工单状态',
        flex: 1
    }, {
        dataIndex: 'yqzt',
        text: '逾期状态',
        flex: 1

    }]
});