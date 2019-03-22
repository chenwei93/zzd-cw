Ext.define('RBase.view.home.Todos', {
    extend: 'Ext.panel.Panel',
    xtype: 'todo',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.form.field.Text',
        'Ext.button.Button',
        'Ext.selection.CheckboxModel',
        'RBase.view.home.TodosController'
    ],

    cls: 'todo-list shadow-panel',

    controller: 'todos',
    height: 430,
    width: '77%',
    viewModel: {
        type: 'resourcepool'
    },
    layout: 'fit',
    items: [
        {
            xtype: 'gridpanel',
            cls: 'dashboard-todo-list',
            scroll: 'none',

            bind: {
                store: '{list}'
            },
            listeners: {
                'rowdblclick': 'onShow'
            },
            tbar: [{
                text: '刷新',
                handler: 'onReset',
                ui: 'default',
                iconCls: 'x-fa fa-refresh'
            }],
            columns: [{
                xtype: 'rownumberer'
            }, {
                text: '任务',
                flex: 2,
                dataIndex: 'name'
            }, {
                text: '编码',
                flex: 1,
                dataIndex: 'code'
            }, {
                text: '资源形态',
                flex: 1,
                dataIndex: 'allowFormat'
            }, {
                xtype: 'actioncolumn',
                text: '操作',
                items: [{
                    iconCls: 'x-fa fa-stop',
                    handler: 'onPlay',
                    tooltip: '暂停'
                }, {
                    iconCls: 'x-fa fa-close',
                    handler: 'onDelete',
                    tooltip: '删除'
                }],
                cls: 'content-column',
                width: 80,
                right: 0,
                align: 'center',
                tooltip: '操作 ',
                renderer: function (a, b, record, d, e, f) {
                    var enableWatched = record.data.enableWatched;
                    if (enableWatched == false) {
                        this.items[0].iconCls = 'x-fa fa-play';
                        this.items[0].tooltip = '开启';
                    } else {
                        this.items[0].iconCls = 'x-fa fa-stop';
                        this.items[0].tooltip = '暂停';
                    }
                }
            }]
        }
    ]
});
