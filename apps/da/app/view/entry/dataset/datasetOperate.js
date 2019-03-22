Ext.define('DA.view.entry.dataset.datasetOperate', {
    extend: 'Ext.panel.Panel',
    xtype: 'dataset-operate',


    requires: [
        'DA.model.Services',
        'DA.view.entry.dataset.datasetOperateChooseModel',
        'DA.view.entry.dataset.datasetOperateChoose',
        'DA.view.entry.dataset.datasetOperateGrid',
        'DA.view.entry.dataset.datasetOperateSelect',
        'DA.view.entry.dataset.datasetView',
        'DA.view.entry.dataset.datasetOperateController'
    ],

    // controller: 'dataset-operate',
    layout: 'column',
    defaults: {
        margin: '0 0 15 0',
        columnWidth: 1,
        height: 200,
        border: true,
    },
    items: [{
        border: false,
        reference: 'dataset-tabview',
        xtype: 'dataset-tabview'
    }, {
        height: 400,
        xtype: 'dataset-grid'
    }]
});
