Ext.define('DRDMS.view.catalog.CatalogAdd', {
    extend: 'Ext.form.Panel',
    xtype: 'catalog-add',

    requires: [
        'DRDMS.view.catalog.CatalogHYController'
    ],

    controller: 'cataloghy',
    height: 250,
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
                reference: 'inputText',
                flex: 1,
                fieldLabel: '主题名称'
            }, {
                flex: 1,
                xtype: 'textfield',
                name: 'code',
                labelWidth: 60,
                fieldLabel: '主题编码',
                listeners: {
                    focus: 'onFocus'
                }
            }]
        }, {
            layout: 'hbox',
            padding: 20,
            items: [{
                xtype: 'textarea',
                name: 'desc',
                width: 520,
                fieldLabel: '主题描述'
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