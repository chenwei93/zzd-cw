Ext.define('AP.view.service.Services', {
    extend: 'Ext.panel.Panel',
    xtype: 'services',


    requires: [
        'AP.view.services.ServicesController',
        'AP.view.services.ServicesShow',
        'AP.view.services.ServicesOperate',
        'AP.view.services.ServicesBase'
    ],
    tbar: [{
        ui: 'default',
        text: '保存',
        iconCls: 'x-fa fa-save',
        handler: 'onSave'
        // }, {
        //     ui: 'default',
        //     text: '发布',
        //     iconCls: 'x-fa fa-circle',
        //     handler: 'onRelease'
        // }, {
        //     ui: 'default',
        //     text: '授权',
        //     iconCls: 'x-fa fa-circle',
        //     handler: 'onAuthorize'
    }],
    scrollable: true,
    defaults: {
        margin: 10,
        layout: 'hbox',
        xtype: 'container',
        defaultType: 'textfield',
        anchor: '100%'
    },
    controller: 'services',
    items: [{
        items: [{
            flex: 1,
            reference: 'serbase',
            xtype: 'services-base'
        }]

    }, {
        items: [{
            flex: 1,
            reference: 'operate',
            xtype: 'services-operate'
        }]
    }, {
        items: [{
            flex: 1,
            xtype: 'services-tabview'
        }]
    }]

});