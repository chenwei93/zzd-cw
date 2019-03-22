Ext.define('RBase.view.resource.ResourceShowBase', {
    extend: 'Ext.form.Panel',


    xtype: 'resource-showbase',
    width: 600,
    margin: 20,
    defaults: {
        layout: 'hbox',
        xtype: 'container',
        defaultType: 'displayfield',
        anchor: '100%'
    },
    items: [{
        xtype: 'form',
        padding: '0 10 10 0',
        items: [{
            fieldLabel: '<span style="color:red" >*</span>' + '资源ID',
            name: 'resId',
            anchor: '-5',
            flex: 1,
            bind: '{resource.resId}',
            allowBlank: false
        }, {
            fieldLabel: '<span style="color:red" >*</span>' + '实体唯一码',
            name: 'entityKey',
            anchor: '-5',
            flex: 1,
            allowBlank: false,
            bind: '{resource.entityKey}'
        }]
    }, {
        padding: '0 10 10 0',
        items: [{
            fieldLabel: '标题',
            name: 'title',
            anchor: '-5',
            flex: 1,
            bind: '{resource.title}'

        }, {
            fieldLabel: '版本',
            name: 'version',
            anchor: '-5',
            flex: 1,
            bind: '{resource.version}'
        }]
    }, {
        padding: '0 10 10 0',
        items: [{
            fieldLabel: '创建者',
            name: 'creator',
            flex: 1,
            anchor: '-5',
            bind: '{resource.creator}'
        }, {
            fieldLabel: '资源变化',
            name: 'changeTypes',
            flex: 1,
            anchor: '-5',
            bind: '{resource.changeTypes}'
        }]
    }]
});