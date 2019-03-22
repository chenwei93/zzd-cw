Ext.define('AP.view.profile.Profile', {
    extend: 'Ext.panel.Panel',
    xtype: 'profile',

    requires: ['AP.view.profile.ProfileController'],

    tbar: [{
        ui: 'default',
        text: '中心重置',
        iconCls: 'x-fa fa-history',
        handler: 'onReset'
    }],
    layout: 'fit',
    items: [{
        width: '100%',
        height: '100%',
        xtype: 'uxiframe',
        src: '/ext-ui/jdjk/jdjk.html'
    }]
});