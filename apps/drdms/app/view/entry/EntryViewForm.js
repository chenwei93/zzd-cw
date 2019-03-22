Ext.define('DRDMS.view.entry.EntryViewForm', {
    extend: 'Ext.form.Panel',
    xtype: 'entryview-form',

    requires: [
        'DRDMS.view.entry.EntryViewFormBase',
        'DRDMS.view.entry.EntryViewFormExt'
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
