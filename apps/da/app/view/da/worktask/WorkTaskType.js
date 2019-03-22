Ext.define('DA.view.da.worktask.WorkTaskType', {
    extend: 'Ext.grid.Panel',
    xtype: 'worktask-type',

    requires: [
        'DA.view.da.worktask.WorkTaskTypeController',
        'DA.view.da.worktask.WorkTaskTypeModel',
        'DA.view.da.worktask.WorkTaskTypeShow',
        'DA.view.da.worktask.WorkTaskTypeEdit',
        'DA.view.da.worktask.ChooseMenu',
    ],
    controller: 'worktask-type',
    viewModel: {
        type: 'worktask-type'
    },
    bind: {
        store: '{list}'
    },
    listeners: {
        rowdblclick: 'onShow'
    },
    tbar: [{
        text: '新增',
        iconCls: 'x-fa fa-plus',
        ui: 'default',
        handler: 'onAdd'
    }, {
        iconCls: 'x-fa fa-refresh',
        ui: 'default',
        text: '刷新',
        handler: 'onRest'
    }, '->', {
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
        text: '任务类型名称',
        flex: 1,
        dataIndex: 'title'
    }, {
        text: ' 上级任务节点',
        dataIndex: 'preNode'
    }, {
        text: '下级任务节点',
        dataIndex: 'nextNode'
    }, {
        text: '执行方式',
        dataIndex: 'doType',
        renderer: function (data) {
            var arr = {
                2: '手动',
                1: '自动',
                3: '手动、自动'
            };
            return arr[data];
        }
    }, {
        text: '所需时间',
        dataIndex: 'time'
    }, {
        text: '角色',
        dataIndex: 'role'
    }, {
        xtype: 'booleancolumn',
        text: '标志',
        trueText: '正常',
        falseText: '废止',
        dataIndex: 'tag'
    }, {
        text: '工单模版',
        flex: 1,
        dataIndex: 'orderTemplate'
    }, {
        xtype: 'actioncolumn',
        items: [
            {
                iconCls: 'x-fa fa-play',
                handler: 'onStart',
                tooltip: '启用'
            }, {

                iconCls: 'x-fa fa-pencil',
                handler: 'onEdit',
                tooltip: '修改'
            }, {
                iconCls: 'x-fa fa-stop',
                handler: 'onAbolish',
                tooltip: '废止'
            }
        ],
        align: 'center',
        width: 70,
        text: '操作',
        renderer: function (a, items, record) {
            if (record.get('tag') == 0) {
                Ext.Array.each(this.items, function (item, index) {
                    if (index > 0) {
                        item.hidden = true

                    }
                })
            }
        }
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store

    }

});
