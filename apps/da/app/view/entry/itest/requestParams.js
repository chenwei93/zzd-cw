Ext.define('DA.view.entry.itest.requestParams', {
    extend: 'Ext.form.Panel',
    xtype: 'request-params',


    layout: 'column',
    scrollable: true,
    defaults: {
        columnWidth: 1,
        xtype: 'textfield',
        padding: 8,
    },
    dockedItems: {
        xtype: 'toolbar',
        dock: 'bottom',
        items: ['->', {
            xtype: 'button',
            ui: 'default',
            text: '发送',
            handler: 'onSend'
        }]
    },
    items: [],
    listeners: {
        render: 'onRequestParamsRender'
    }
});
