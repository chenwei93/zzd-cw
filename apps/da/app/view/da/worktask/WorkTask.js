Ext.define('DA.view.da.worktask.WorkTask', {
    extend: 'Ext.grid.Panel',
    xtype: 'worktask',

    requires: [
        'DA.view.da.worktask.WorkTaskController',
        'DA.view.da.worktask.WorkTaskModel',
        'DA.view.da.worktask.WorkTaskDeal',
    ],
    controller: 'worktask',
    viewModel: {
        type: 'worktask'
    },
    bind: {
        store: '{list}'
    },
    tbar: [{
        text: '发起任务',
        iconCls: 'x-fa fa-plus',
        ui: 'default',
        handler: 'onInitiate'
    }, {
        iconCls: 'x-fa fa-refresh',
        ui: 'default',
        text: '刷新',
        handler: 'onRest'
    }, '->', {
        xtype: 'combo',
        fieldLabel: '状态',
        labelWidth: 35,
        name: 'status',
        store: {
            data: [{
                title: '已按时完成',
                name: 'ontime'
            }, {
                title: '未按时已完成',
                name: 'outtime'
            }, {
                title: '未完成',
                name: 'undo'
            }, {
                title: '回退',
                name: 'back'
            }]
        },
        displayField: 'title',
        valueField: 'name',
        listeners: {
            change: 'onChangeStatus'
        }
    }, {
        xtype: 'textfield',
        reference: 'searchText',
        emptyText: '输入查询内容直接回车',
        listeners: {
            specialkey: 'onSpecialkey'
        }
    }, {
        iconCls: 'x-fa fa-search',
        ui: 'default',
        tooltip: '查询',
        handler: 'onSearch'
    }],
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '任务名称',
        flex: 1,
        dataIndex: 'taskTitle'
    }, {
        text: '任务编号',
        flex: 1,
        dataIndex: 'TaskNumber'
    }, {
        text: '下发时间',
        flex: 1,
        dataIndex: 'sendTime'
    }, {
        text: '要求时间',
        flex: 1,
        dataIndex: 'requestTime'
    }, {
        text: '任务内容',
        flex: 1,
        dataIndex: 'taskDesc'
    }, {
        text: '当前状态',
        dataIndex: 'status',
        renderer: function (data) {
            var arr = {
                2: '手动',
                1: '自动',
                3: '手动、自动'
            };
            return arr[data];
        }
    }, {
        text: '工单模版',
        flex: 1,
        dataIndex: 'orderTemplate'
    }, {
        xtype: 'actioncolumn',
        items: [
            {
                iconCls: 'x-fa fa-pencil',
                handler: 'onDeal',
                tooltip: '处理'
            }
        ],
        align: 'center',
        width: 70,
        text: '操作'
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store
    }

});
