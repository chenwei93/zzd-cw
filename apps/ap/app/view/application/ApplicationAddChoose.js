Ext.define('AP.view.application.ApplicationAddChoose', {
    extend: 'Ext.grid.Panel',
    xtype: 'application-choose',

    requires: [
        'AP.model.Service',
        'AP.view.application.ApplicationAddChooseController',
        'AP.view.application.ApplicationAddChooseModel'
    ],
    tbar: [{
        ui: 'default',
        text: '确定',
        handler: 'onSure'
    }],
    controller: 'application-choose',
    selType: 'checkboxmodel',
    scrollable: true,
    viewModel: {
        type: 'application-choose'
    },
    bind: {
        store: '{list}'
    },

    columns: [{
        text: '服务名称',
        dataIndex: 'title',
        flex: 1
    }]
});