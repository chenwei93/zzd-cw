Ext.define('DRDMS.view.home.HomeCenterTodo', {
    extend: 'Ext.panel.Panel',
    xtype: 'todo',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.form.field.Text',
        'Ext.button.Button',
        'Ext.selection.CheckboxModel'
    ],

    cls: 'todo-list shadow-panel',
    columnLines: false,
    title: '待审核目录',
    height: 400,
    bodyPadding: '1 2 1 1',
    layout: 'fit',
    header: {
        items: [{
            handler: 'onDeal',
            // textAlign: 'left',
            iconCls: 'x-fa fa-upload',
            tooltip: '审核',
            width: 15,
            height: 15
        }]
    },
    items: [
        {
            xtype: 'gridpanel',
            cls: 'dashboard-todo-list',
            header: false,
            hideHeaders: true,
            reference: 'todogrid',
            viewModel: true,
            bind: {
                store: '{unapproved}'
            },
            listeners: {
                'rowdblclick': 'onShow'
            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'homeTitle',
                    text: 'title',
                    flex: 0.9
                }
            ],
            // tbar: [{
            //     handler: 'onDeal',
            //     style: {
            //         "padding": "7px 0px 7px 0px",
            //         "border-color": "#35BAF6",
            //         "background-color": "#ffffff"
            //     },
            //     textAlign: 'left',
            //     text: '批量处理'
            // }],
            bbar: {
                width: 400,
                xtype: 'pagingtoolbar',
                displayInfo: true,
                store: this.store,
                // displayMsg: null,
                // emptyMsg: null,
                style: {
                    "padding": "7px 0px 7px 0px"
                },
                inputItemWidth: 30
            },
            selModel: {
                selType: 'checkboxmodel'
            }
        }
    ]
});
