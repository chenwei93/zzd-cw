Ext.define('ETL.view.logs.Logs', {
    extend: 'Ext.grid.Panel',
    xtype: 'logs',

    requires: ['ETL.view.logs.LogsShow',
        'ETL.view.logs.LogsModel',
        'ETL.view.logs.LogsController'],

    controller: 'logs',
    viewModel: {
        type: 'logs'
    },
    bind: {
        store: '{list}'
    },
    tbar: ['->', {
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
        }
    }, {
        xtype: 'combo',
        store: {
            data: [{
                name: '成功',
                value: '0'
            }, {
                name: '失败',
                value: '1'
            }]
        },
        displayField: 'name',
        valueField: 'value',
        emptyText: '状态',
        reference: 'errors',
        queryMode: 'local'
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
        dataIndex: 'jobName'
    }, {
        text: '启动时间',
        flex: 2,
        sortable: true,
        dataIndex: 'start_date'
    }, {
        text: '结束时间',
        flex: 1,
        sortable: true,
        dataIndex: 'end_date'
    }, {
        text: '状态',
        flex: 1,
        sortable: true,
        dataIndex: 'errors',
        renderer:function (data) {
            if (data.errors='0'){
                return"成功"
            }else{
                return"失败"
            }
        }
    }, {
        xtype: 'actioncolumn',
        right: 0,
        items: [
            {
                xtype: 'button',
                iconCls: 'x-fa fa-eye',
                handler: 'onDetail',
                margin: 5,
                tooltip: '详情'

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
