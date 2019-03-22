Ext.define('Cmdb.view.asset.zcwh.entry.EntryViewForm', {
    extend: 'Ext.form.Panel',
    xtype: 'entryview-form',

    requires: [
        'Cmdb.view.asset.zcwh.entry.EntryViewFormBase',
        'Cmdb.view.asset.zcwh.entry.EntryViewFormExt'
    ],
    frame: false,
    scrollable: true,
    layout: 'anchor',
    defaults: {
        xtype: 'container',
        defaultType: 'displayfield',
        flex: 1
    },
    height: 510,
    items: [{
        xtype: 'entryview-formbase',
        bodyPadding: 10,
        scrollable: true
    }, {
        xtype: 'entryview-formext',
        bodyPadding: 10,
        scrollable: true
    }]
});
