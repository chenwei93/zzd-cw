Ext.define('AP.view.application.ApplicationAdd', {
    extend: 'Ext.panel.Panel',
    xtype: 'application-add',


    requires: [
        'AP.view.application.ApplicationAddBase',
        'AP.view.application.ApplicationAddService',
        'AP.view.application.ApplicationAddView',
        'AP.view.application.ApplicationAddController'
    ],
    controller: 'application-add',
    scrollable: true,
    tbar: [{
        ui: 'default',
        text: '保存',
        iconCls: 'x-fa fa-save',
        handler: 'onSave'
    }, {
        ui: 'default',
        text: '取消',
        iconCls: 'x-fa fa-undo',
        handler: 'onCancel'
    }],
    items: [{
        reference: 'base',
        xtype: 'appadd-base'
    }, {
        margin: '20 20',
        reference: 'service',
        xtype: 'appadd-service'
    }, {
        margin: '20 20',
        reference: 'addview',
        xtype: 'appadd-view'
    }]
});