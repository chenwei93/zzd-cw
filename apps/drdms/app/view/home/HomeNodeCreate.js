Ext.define('DRDMS.view.home.HomeNodeCreate', {
    extend: 'Ext.panel.Panel',
    xtype: 'tocreate',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.form.field.Text',
        'Ext.button.Button',
        'Ext.selection.CheckboxModel'
    ],

    cls: 'todo-list shadow-panel',

    scrollable: true,
    height: 400,
    bodyPadding: '1 2 1 1',
    layout: 'fit',
    header: {
        items: [{
            handler: 'onDealcreate',
            iconCls: 'x-fa fa-exchange',
            tooltip: '变更',
            width:15,
            height:15
        }]
    },
    items: [
        {
            xtype: 'gridpanel',
            cls: 'dashboard-todo-list',
            header: false,
            hideHeaders: true,
            reference: 'crategrid',
            scrollable: true,
            viewModel: true,
            bind: {
                store: '{rejected}'
            },
            listeners: {
                'rowdblclick': 'onShow1'
            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'resTitle',
                    text: 'title',
                    flex: 0.9
                }, {
                    dataIndex: 'changeType'
                }
            ],
            // tbar: [{
            //     handler: 'onDealcreate',
            //     style: {
            //         "padding": "7px 0px 7px 0px",
            //         "border-color": "#35BAF6",
            //         "background-color": "#ffffff"
            //     },
            //     textAlign: 'left',
            //     text: '批量提交'
            // }],
            bbar: {
                xtype: 'pagingtoolbar',
                width: "50%",
                // emptyMsg: null,
                inputItemWidth: 30,
                displayInfo: true,
                // displayMsg: null,
                store: this.store,
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
