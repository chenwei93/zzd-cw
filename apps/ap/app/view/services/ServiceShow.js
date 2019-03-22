Ext.define('AP.view.services.ServicesShow', {
    extend: 'Ext.grid.Panel',
    xtype: 'services-show',


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