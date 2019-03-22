Ext.define('Cmdb.view.monitor.jkq.Jkq', {
    extend: 'Ext.panel.Panel',
    xtype: 'jkq',


    requires:['Cmdb.view.monitor.jkq.JkqController',
        'Cmdb.view.monitor.jkq.JkqModel',],
    scrollable: true,

    defaults: {
        bodyPadding: 20
    },
    items: [{
        xtype: 'chart-nc'
    }, {
        xtype: 'chart-ncsyl'
    }, {
        xtype: 'chart-sjqs'
    }]


});
