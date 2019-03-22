Ext.define('Cmdb.view.monitor.zyk.Zyk', {
    extend: 'Ext.panel.Panel',
    xtype: 'zyk',


    requires: ['Cmdb.view.monitor.zyk.ZykController',
        'Cmdb.view.monitor.zyk.ZykModel'],
    scrollable: true,

    defaults: {
        bodyPadding: 20
    },
    layout: 'fit',
    items: [{
        flex: 1,
        xtype: 'uxiframe',
        src: 'app/view/jdjk/jdjk.html',
    }]

});
