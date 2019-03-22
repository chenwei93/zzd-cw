Ext.define('Cmdb.view.asset.zckgl.keyword.KeywordAdd', {
    extend: 'Ext.form.Panel',
    xtype: 'keyword-add',

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
                fieldLabel: '标签名称'
            }, {
                flex: 1,
                xtype: 'textfield',
                name: 'code',
                labelWidth: 60,
                fieldLabel: '标签编码'
            }]
        }, {
            layout: 'hbox',
            padding: 20,
            items: [{
                xtype: 'textarea',
                name: 'description',
                width: 520,
                fieldLabel: '标签描述'
            }]

        }]
    }],
    buttons: [{
        text: '保存',
        handler: 'onSaveAdd'
    }, {
        text: '取消',
        handler: 'onCancelAdd'
    }]
});