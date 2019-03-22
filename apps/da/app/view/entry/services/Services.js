Ext.define('DA.view.entry.service.Services', {
    extend: 'Ext.panel.Panel',
    xtype: 'services',


    requires: [
        'DA.view.entry.services.ServicesController',
        'DA.view.entry.services.ServicesShow',
        'DA.view.entry.services.ServicesOperate',
        'DA.view.entry.services.ServicesBase',
        'DA.view.entry.services.ServicesChooseDataset',
        'DA.view.entry.services.ServicesModel'
    ],
    tbar: [{
        ui: 'default',
        text: '保存',
        iconCls: 'x-fa fa-save',
        handler: 'onSave'
    }],
    viewModel: {
        type: 'services'
    },
    scrollable: true,
    defaults: {
        margin: 10
    },
    controller: 'services',
    items: [{
        flex: 1,
        reference: 'serbase',
        xtype: 'services-base'
    }, {
        flex: 1,
        reference: 'seroperate',
        xtype: 'services-operate'
    }],
    listeners: {
        render: 'onServicesRender'
    }
});
