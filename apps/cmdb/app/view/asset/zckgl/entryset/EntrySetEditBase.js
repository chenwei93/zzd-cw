Ext.define('Cmdb.view.asset.zckgl.entryset.EntrySetEditBase', {
    extend: 'Ext.form.Panel',
    xtype: 'entryset-editbase',

    defaults: {
        margin: 10,
        layout: 'hbox',
        xtype: 'container',
        defaultType: 'displayfield',
        anchor: '100%'
    },
    items: [{
        items: [{
            padding: '0 10 0 0',
            name: 'title',
            flex: 1,
            fieldLabel: '名称',
            bind: '{entryset.title}'
        }, {
            flex: 1,
            name: 'version',
            fieldLabel: '版本',
            bind: '{entryset.version}'
        }]
    }]
});