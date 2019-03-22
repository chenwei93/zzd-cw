Ext.define('DRDMS.view.catalog.CatalogEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'catalog-edit',


    controller: 'cataloghy',
    height: 350,
    layout: 'vbox',
    // defaults: {
    //     xtype: 'container',
    //     defaultType: 'textfield',
    anchor: '100%',
    // },
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
                fieldLabel: '主题名称',
                bind: '{catalog.text}'
            }, {
                flex: 1,
                xtype: 'textfield',
                name: 'code',
                labelWidth: 60,
                fieldLabel: '主题编码',
                bind: '{catalog.code}'
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
                fieldLabel: '主题描述',
                bind: '{catalog.desc}'
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