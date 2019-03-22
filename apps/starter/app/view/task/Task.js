Ext.define('Starter.view.task.Task', {
    extend: 'Ext.grid.Panel',
    xtype: 'task',


    requires: [
        'Starter.model.Task',
        'Starter.view.task.TaskExport',
        'Starter.view.task.TaskController',
        'Starter.view.task.TaskModel'

    ],

    controller: 'task',
    viewModel: {
        type: 'task'
    },
    bind: {
        store: '{list}'
    },

    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '导出任务',
        dataIndex: 'targetFile',
        flex: 1
    }, {
        text: '部门',
        dataIndex: 'department'
    }, {
        text: '状态',
        dataIndex: 'status',
        renderer: function (value, record) {
            switch (value) {
                case 'New':
                    return '新任务';
                case 'Process':
                    return '处理中';
                case 'Success':
                    return '完成';
                case 'Failure':
                    return '失败';
            }
        }
    }, {
        xtype: 'numbercolumn',
        text: '下载次数',
        dataIndex: 'downloadCount',
        renderer: function (value, record) {
            if (value == 0) return "未下载";
            return value;
        }
    }, {
        xtype: 'datecolumn',
        text: '开始时间',
        format: 'Y-m-d H:i:s',
        dataIndex: 'startTime',
        flex: 1
    }, {
        xtype: 'datecolumn',
        text: '完成时间',
        format: 'H:i:s',
        dataIndex: 'endTime'
    }, {
        text: '成功/失败',
        dataIndex: 'successCount',
        renderer: function (value, cell, record, arg2) {
            return value + "/" + record.get('errorCount');
        }
    }, {
        xtype: 'actioncolumn',
        width: 50,
        items: [{
            iconCls: 'x-fa fa-download',
            tooltip: '下载',
            handler: function (grid, rowIndex, colIndex, cell, event, record, row) {
                var targetFile = encodeURI(record.get('targetFile')),
                    targetFilePath = record.get('targetFilePath'),
                    taskId = record.get('id');
                // console.log('TaskId传递',targetFile, targetFilePath, taskId);
                window.location.href = '/raw/downloadFile/' + targetFilePath + '?root=Cache&title=' + targetFile + "&taskId=" + taskId;
                this.up('task').getStore().reload({
                    type: 'ajax2',
                    url: '/rest/tasks?sort=endTime,desc'
                });

            }
        }]
    }],

    tbar: {
        //ui: 'toolbar',
        items: [
            {
                text: '目录导出',
                ui: 'default',
                iconCls: 'x-fa fa-download',
                handler: 'onExport'
            }, {
                ui: 'default',
                text: '刷新',
                iconCls: 'x-fa fa-refresh',
                handler: 'reloadStore'

            }, '->', {
                xtype: 'combo',
                queryMode: 'local',
                triggerAction: 'all',
                forceSelection: false,
                editable: false,
                name: 'title',
                displayField: 'name',
                valueField: 'value',
                emptyText: '未下载',
                store: {
                    fields: ['name', 'value'],
                    data: [
                        {name: '未下载', value: true},
                        {name: '已下载', value: false}
                    ]
                }
            }, {
                xtype: 'textfield',
                emptyText: '输入查询内容直接回车'
            }, {
                iconCls: 'x-fa fa-refresh',
                title: '重置',
                handler: 'onreset'
            }
        ]
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store

    }
});