Ext.define('DA.view.entry.dataset.datasetEdit', {
    extend: 'Ext.panel.Panel',
    xtype: 'dataset-edit',


    requires: [
        'DA.view.entry.dataset.datasetEditController',
        'DA.view.entry.dataset.datasetShow',
        'DA.view.entry.dataset.datasetOperate',
        'DA.view.entry.dataset.datasetBase',
        'DA.view.entry.dataset.datasetTabView'
    ],
    viewModel: {
        type: 'dataset'
    },
    tbar: [{
        ui: 'default',
        text: '保存',
        iconCls: 'x-fa fa-save',
        handler: 'onSave'
    }],
    scrollable: true,
    layout: 'column',
    defaults: {
        margin: 10,
        columnWidth: 1
    },
    controller: 'dataset-edit',
    items: [{
        reference: 'serbase',
        xtype: 'dataset-base'
    }, {
        reference: 'operate',
        xtype: 'dataset-operate'
        // }, {
        //     xtype: 'dataset-tabview'
    }],
    listeners: {
        render: 'onServicesRender'
    }
});
