Ext.define('RBase.view.resource.ResourceAdd', {
    extend: 'Ext.panel.Panel',
    xtype: 'resource-add',

    requires: [
        'Ext.form.field.Date',
        'RBase.view.resource.ResourceAddBase',
        'RBase.view.resource.ResourceAddTab',
        'RBase.view.resource.ResourceAddController'
    ],
    controller: 'resource-add',
    defaultType: 'textfield',

    defaults: {
        anchor: '100%'
    },
    scrollable: true,
    tbar: [{
        text: '保存',
        handler: 'onSave'
    }, {
        text: '取消',
        handler: 'onCancel'
    }],

    items: [{
        xtype: 'resource-addbase',
        reference: 'resource-addbase'
    }, {
        xtype: 'fieldset',
        title: '资源结构信息',
        margin: 20,
        border: false,
        items: [{
            xtype: 'resource-addtab',
            reference: 'fields_grid'
        }]

    }]

});
