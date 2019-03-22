Ext.define('DA.view.dataservice.entryset.EntrySetEdit', {
    extend: 'Ext.panel.Panel',
    xtype: 'entryset-edit',

    tbar: [{
        text: '保存',
        iconCls: 'x-fa fa-save',
        ui: 'default',
        handler: 'onMetadata'
    }],
    controller: 'entryset-edit',
    items: [{
        xtype: 'entryset-editbase',
        margin: '0 0 20 0'
    }, {
        border: true,
        reference: 'metadata',
        xtype: 'entryset-editmetadata'
    }]

});
