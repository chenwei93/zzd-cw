Ext.define('Cmdb.view.asset.bmzcqd.Bmzcqd', {
    extend: 'Ext.panel.Panel',
    xtype: 'bmzcqd',


    requires: [
        'Cmdb.view.asset.bmzcqd.BmzcqdController',
        'Cmdb.view.asset.bmzcqd.BmzcqdTree',
        'Cmdb.view.asset.bmzcqd.BmzcqdGrid',
        'Cmdb.view.asset.bmzcqd.ZcEdit',
    ],
    controller: 'bmzcqd',
    layout: 'hbox',
    items: [{
        flex: 1,
        reference: 'needTree',
        xtype: 'bmzcqd-tree'
    }, {
        flex: 2,
        reference: 'needGrid',
        xtype: 'bmzcqd-grid'
    }],
    listeners: {
        render: 'onRender'
    }
});
