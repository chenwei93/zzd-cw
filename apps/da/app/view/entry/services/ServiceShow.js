Ext.define('DA.view.entry.services.ServicesShow', {
    extend: 'Ext.grid.Panel',
    xtype: 'services-show',


    requires:['DA.view.entry.services.ServicesView'],
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
