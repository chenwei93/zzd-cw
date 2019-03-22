Ext.define('DRDMS.view.entryset.ResourceFormatEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'resourceformat-edit',


    controller: 'resourceformat',
    height: 300,
    layout: 'vbox',
    anchor: '100%',
    items: [{
        items: [{
            padding: 20,
            layout: 'hbox',
            flex: 1,
            items: [{
                xtype: 'textfield',
                padding: '0 10 0 0',
                name: 'text',
                flex: 1,
                fieldLabel: '形态标题',
                bind: '{resourceformat.name}'
            }, {
                flex: 1,
                xtype: 'textfield',
                name: 'code',
                labelWidth: 60,
                fieldLabel: '形态编码',
                bind: '{resourceformat.code}'
            }]
        }, {
            layout: 'hbox',
            // flex: 1,
            padding: 20,
            items: [{
                xtype: 'textarea',
                name: 'desc',
                width: 520,
                // flex: 2,
                fieldLabel: '描述',
                bind: '{resourceformat.describtion}'
            }]

        }]
    }],
    buttons: [{
        text: '保存',
        handler: 'onSave'
    }, {
        text: '取消',
        handler: 'onCancel'
    }]
})