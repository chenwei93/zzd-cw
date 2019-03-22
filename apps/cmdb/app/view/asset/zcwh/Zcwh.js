Ext.define('Cmdb.view.asset.zcwh.Zcwh', {
    extend: 'Ext.panel.Panel',
    xtype: 'zcwh',


    requires: [
        'Cmdb.view.asset.zcwh.ZcwhController',
        'Cmdb.view.asset.zcwh.ZcwhTree',
        'Cmdb.view.asset.zcwh.ZcwhGrid',
        'Cmdb.view.asset.zcwh.ZcwhForm'
    ],
    controller: 'zcwh',
    layout: 'hbox',
    items: [{
        flex: 1,
        reference: 'needTree',
        xtype: 'zcwh-tree'
    }, {
        flex: 2,
        reference: 'needGrid',
        xtype: 'zcwh-grid'
    }]
});