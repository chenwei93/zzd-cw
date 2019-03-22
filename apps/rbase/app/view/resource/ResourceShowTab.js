Ext.define('RBase.view.resource.ResourceShowTab', {
    extend: 'Ext.tab.Panel',
    xtype: 'resource-showtab',


    requires: [
        'RBase.view.resource.ResourceShowForm',
        'RBase.view.resource.ResourceShowGrid'
    ],
    margin: 20,
    defaults: {

        scrollable: true,
        defaultType: 'displayfield'
    },

    items: [{
        padding: '20 0 0 0',
        title: '实体资源描述信息',
        items: [{
            xtype: 'resource-showform'
        }]
    }, {
        title: '资源结构信息',
        items: [{
            xtype: 'resource-showgrid'
        }]
    }]
});
