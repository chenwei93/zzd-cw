Ext.define('Cmdb.view.asset.zcfw.yzysq.zcqd', {
    extend: 'Ext.panel.Panel',
    xtype: 'zcqd',


    requires: [
        'Cmdb.view.asset.zcfw.yzysq.zcqdController',
        'Cmdb.view.asset.zcfw.yzysq.zcqdTree',
        'Cmdb.view.asset.zcfw.yzysq.zcqdGrid',
    ],
    controller: 'zcqd',
    layout: 'hbox',

    items: [{
        flex: 1,
        reference: 'needTree',
        xtype: 'zcqd-tree'
    }, {
        flex: 2,
        reference: 'needGrid',
        xtype: 'zcqd-grid'
    }]
});