Ext.define('RBase.view.resource.ResourceShow', {
    extend: 'Ext.panel.Panel',
    xtype: 'resource-show',


    requires: [
        'RBase.view.resource.ResourceShowBase',
        'RBase.view.resource.ResourceShowTab'
    ],


    defaultType: 'displayfield',

    defaults: {
        anchor: '100%',
        labelWidth: 120,
        bodyPadding: 10
    },
    items: [{
        xtype: 'resource-showbase'
    }, {
        xtype: 'resource-showtab'
    }]

});