Ext.define('DRDMS.view.home.HomeCenterToup', {
    extend: 'Ext.panel.Panel',
    xtype: 'toup',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.form.field.Text',
        'Ext.button.Button',
        'Ext.selection.CheckboxModel'
    ],

    cls: 'todo-list shadow-panel',
    controller: 'homecenter',
    title: '待发布目录',
    height: 400,
    bodyPadding: '1 2 1 1',
    layout: 'fit',
    header: {
        items: [{
            handler: 'onDealtoup',
            // textAlign: 'left',
            iconCls: 'x-fa fa-paper-plane',
            tooltip: '发布',
            width: 15,
            height: 15
        }]
    },
    items: [
        {
            xtype: 'gridpanel',
            columnLines: false,
            cls: 'dashboard-todo-list',
            header: false,
            reference: 'toupgrid',
            hideHeaders: true,
            scrollable: true,
            viewModel: true,
            bind: {
                store: '{unpublished}'
            },
            listeners: {
                'rowdblclick': 'onShow'
            },
            columns: [
                {
                    dataIndex: 'homeTitle',
                    flex: 0.9
                }
            ],
            // tbar: [{
            //     handler: 'onDealtoup',
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
                // displayMsg: null,
                // emptyMsg: null,
                store: this.store,
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
