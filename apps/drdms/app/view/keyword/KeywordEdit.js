Ext.define('DRDMS.view.keyword.KeywordEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'keyword-edit',


    controller: 'keyword',
    height: 350,
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
                name: 'title',
                flex: 1,
                fieldLabel: '主题名称',
                bind: '{keyword.title}'
            }, {
                flex: 1,
                xtype: 'textfield',
                name: 'code',
                labelWidth: 60,
                fieldLabel: '主题编码',
                bind: '{keyword.code}'
            }]
        }, {
            layout: 'hbox',
            // flex: 1,
            padding: 20,
            items: [{
                xtype: 'textarea',
                name: 'description',
                width: 520,
                // flex: 2,
                fieldLabel: '主题描述',
                bind: '{keyword.description}'
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
});