Ext.define('DRDMS.view.home.HomeNodePublish', {
    extend: 'Ext.panel.Panel',
    xtype: 'topublish',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.form.field.Text',
        'Ext.button.Button',
        'Ext.selection.CheckboxModel'
    ],

    cls: 'todo-list shadow-panel',
    height: 400,
    bodyPadding: '1 2 1 1',
    layout: 'fit',
    header: {
        items: [{
            handler: 'onDealpublish',
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
            reference: 'generatedgrid',
            scrollable: true,
            viewModel: true,
            bind: {
                store: '{generated}'
            },
            listeners: {
                'rowdblclick': 'onShow'
            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'title',
                    text: 'title',
                    flex: 0.9
                }
            ],
            // tbar: [{
            //     handler: 'onDealpublish',
            //     style: {
            //         "padding": "7px 0px 7px 0px",
            //         "border-color": "#35BAF6",
            //         "background-color": "#ffffff"
            //     },
            //     textAlign: 'left',
            //     text: '批量提交'
            // }],
            bbar: {
                width: 400,
                xtype: 'pagingtoolbar',
                displayInfo: true,
                // emptyMsg: null,
                // displayMsg: null,
                inputItemWidth: 30,
                style: {
                    "padding": "7px 0px 7px 0px"
                }

            },
            selModel: {
                selType: 'checkboxmodel'
            }
        }
    ]
});
