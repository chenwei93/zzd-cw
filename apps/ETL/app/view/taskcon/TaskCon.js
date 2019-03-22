Ext.define('ETL.view.taskcon.TaskCon', {
    extend: 'Ext.grid.Panel',
    xtype: 'taskcon',

    requires: ['ETL.view.taskcon.TaskConModel',
        'ETL.view.taskcon.TaskConAdd',
        'ETL.view.taskcon.TaskConEdit',
        'ETL.view.taskcon.TaskConShow',
        'ETL.view.taskcon.TaskConController'],

    controller: 'taskcon',
    viewModel: {
        type: 'taskcon'
    },
    bind: {
        store: '{list}'
    },
    tbar: [{
        text: '新增',
        ui: 'default',
        handler: 'onAdd'
    },
        '->', {
            xtype: 'textfield',
            fieldLabel: '任务名称',
            labelWidth: 60,
            reference: 'searchText',
            emptyText: '输入查询内容直接回车',
            triggers: {
                bar: {
                    cls: 'x-form-clear-trigger',
                    handler: function () {
                        this.reset();
                    }
                }
            },
        }, {
            xtype: 'combo',
            store: {
                data: [{
                    name: '已发布',
                    value: '已发布'
                }, {
                    name: '未发布',
                    value: '未发布'
                }]
            },
            displayField: 'name',
            valueField: 'value',
            emptyText: '状态',
            queryMode: 'local',
            reference: 'status'
        }, {
            xtype: 'datefield',
            reference: 'time1',
        }, {
            xtype: 'displayfield',
            value: '-',

        }, {
            xtype: 'datefield',
            reference: 'time2',

        }, {
            text: '搜索',
            ui: 'default',
            handler: 'onSearch'
        }],
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '任务名称',
        flex: 1,
        sortable: true,
        dataIndex: 'name'
    }, {
        text: '描述',
        flex: 2,
        sortable: true,
        dataIndex: 'description'
    }, {
        text: '创建时间',
        flex: 1,
        sortable: true,
        dataIndex: 'createDate'
    }, {
        text: '状态',
        flex: 1,
        sortable: true,
        dataIndex: 'status'
    }, {
        xtype: 'actioncolumn',
        right: 0,
        items: [
            {
                xtype: 'button',
                iconCls: 'x-fa fa-stop',
                handler: 'onPublish',
                margin: 5,
                tooltip: '发布'
            }, {
                xtype: 'button',
                iconCls: 'x-fa fa-edit',
                handler: 'onEdit',
                margin: 5,
                tooltip: '编辑'
            }, {
                xtype: 'button',
                iconCls: 'x-fa fa-eye',
                handler: 'onDetail',
                margin: 5,
                tooltip: '详细'
            }, {
                xtype: 'button',
                iconCls: 'x-fa fa-times',
                handler: 'onDelete',
                margin: 5,
                tooltip: '删除'
            }
        ],
        width: 120,
        align: 'center',
        text: '操作',
        tooltip: '操作'
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store
    }
});
