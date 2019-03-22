Ext.define('Cmdb.view.ops.ywjkt.Ywjkt', {
    extend: 'Ext.panel.Panel',
    xtype: 'ywjkt',


    requires: [
        'Cmdb.view.ops.ywjkt.YwjktController',
        'Cmdb.view.ops.ywjkt.YwjktModel'
    ],
    controller: 'ywjkt',
    items: [{
        xtype: 'zkt'
    }]
});