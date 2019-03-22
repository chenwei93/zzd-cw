Ext.define('AP.view.services.ServicesInput', {
    extend: 'Ext.panel.Panel',
    xtype: 'services-input',


    controller: 'services-operate',
    viewModel: 'services-choose',
    layout: 'vbox',
    items: [{
        margin: 10,
        height: 50,
        html: '输入脚本'
    }, {
        margin: 10,
        flex: 1,
        width: '100%',
        height: '100%',
        reference: 'textareaInput',
        bind: '{input}',

        xtype: 'textarea'
    }],
    buttons: [{
        ui: 'default',
        text: '保存',
        handler: 'onSave'
    }, {
        ui: 'default',
        text: '取消',
        handler: 'onCancel'
    }],
    listeners: {
        render: 'onRenderInput'
    }
});