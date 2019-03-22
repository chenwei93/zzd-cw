Ext.define('RBase.view.resource.ResourceEdit', {
    extend: 'Ext.panel.Panel',
    xtype: 'resource-edit',

    requires: [
        'RBase.view.resource.ResourceEditBase',
        'RBase.view.resource.ResourceEditTab',
        'RBase.view.resource.ResourceEditController'
    ],
    controller: 'resource-edit',
    defaultType: 'textfield',

    defaults: {
        anchor: '100%',
        labelWidth: 120,
        bodyPadding: 10
    },
    tbar: [{
        text: '保存',
        handler: 'onSave'
    }, {
        text: '取消',
        handler: 'onCancel'
    }],

    items: [{
        xtype: 'resource-editbase'
    }, {
        xtype: 'fieldset',
        title: '资源结构信息',
        margin: 20,
        border: false,
        items: [{
            xtype: 'resource-edittab',
            reference: 'fields_grid'
        }]
    }]
});
