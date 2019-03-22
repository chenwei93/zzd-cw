Ext.define('Cmdb.view.asset.qlzcqd.Qlzcqd', {
    extend: 'Ext.panel.Panel',
    xtype: 'qlzcqd',


    require: [
        'Cmdb.view.asset.bmzcqd.Bmzcqd'
    ],
    items: {
        xtype: 'bmzcqd'
    }
});