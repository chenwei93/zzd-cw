Ext.define('RBase.view.resource.ResourceShowForm', {
    extend: 'Ext.panel.Panel',


    xtype: 'resource-showform',


    defaults: {
        layout: 'hbox',

        padding: '20 0 0 0',
        scrollable: true,
        defaultType: 'displayfield'
    },
    items: [{
        items: [{
            fieldLabel: '资源池编码',
            name: 'poolCode',
            flex: 2,
            anchor: '-5',
            bind: '{resource.poolCode}'
        }, {
            fieldLabel: '路径/库名',
            name: 'path',
            flex: 2,
            anchor: '-5',
            bind: '{resource.path}'
        }]
    }, {
        items: [{
            fieldLabel: '文件名/表名',
            name: 'name',
            flex: 2,
            anchor: '-5',
            bind: '{resource.name}'
        }, {
            fieldLabel: '资源大小',
            name: 'size',
            flex: 2,
            anchor: '-5',
            bind: '{resource.size}'
        }]
    }]
});