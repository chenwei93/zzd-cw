Ext.define('ETL.view.task.Task', {
    extend: 'Ext.grid.Panel',
    xtype: 'task',

    requires: [
        'ETL.view.task.TaskModel',
        'ETL.view.taskcon.TaskShow',
        'ETL.view.task.TaskController'
    ],

    controller: 'task',
    viewModel: {
        type: 'task'
    },
    bind: {
        store: '{list}'
    },
    tbar: ['->', {
        xtype: 'textfield',
        reference: 'searchText',
        fieldLabel: '任务名称',
        labelWidth: 60,
        emptyText: '输入查询内容直接回车',
        triggers: {
            bar: {
                cls: 'x-form-clear-trigger',
                handler: function () {
                    this.reset();
                }
            }
        }
    }, {
        xtype: 'combo',
        store: {
            data: [{
                name: '启动',
                value: 'start'
            }, {
                name: '停止',
                value: 'end'
            }]
        },
        displayField: 'name',
        valueField: 'value',
        emptyText: '状态',
        queryMode: 'local',
        reference: 'status1'
    }, {
        xtype: 'datefield',
        reference: 'time1',
    }, {
        xtype: 'displayfield',
        value: '-'
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
        dataIndex: 'status1'
    }, {
        xtype: 'actioncolumn',
        right: 0,
        items: [
            {
                xtype: 'button',
                iconCls: 'x-fa fa-stop',
                handler: 'onChangeStatus',
                margin: 5
            }, {
                xtype: 'button',
                iconCls: 'x-fa fa-eye',
                handler: 'onDetail',
                margin: 5,
                tooltip: '详情'
            }, {
                xtype: 'button',
                iconCls: 'x-fa fa-undo',
                handler: 'onUndo',
                margin: 5,
                tooltip: '退回'
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
