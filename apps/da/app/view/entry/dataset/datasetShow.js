Ext.define('DA.view.entry.dataset.datasetShow', {
    extend: 'Ext.grid.Panel',
    xtype: 'dataset-show',


    height: 200,
    scrollable: true,
    tbar: [{
        ui: 'default',
        text: '更新',
        handler: 'onRenew'
    }, {
        ui: 'default',
        text: '预览',
        handler: 'onSee'
    }],
    listeners: {
        celldblclick: 'onCelldbclick'
    }

});
