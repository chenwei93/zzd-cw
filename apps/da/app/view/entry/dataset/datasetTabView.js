Ext.define('DA.view.entry.dataset.datasetTabView', {
    extend: 'Ext.panel.Panel',
    xtype: 'dataset-tabview',


    items: [{
        height: 200,
        scrollable: true,
        reference: 'chooseDataset',
        xtype: 'dataset-select'
    }]

});
