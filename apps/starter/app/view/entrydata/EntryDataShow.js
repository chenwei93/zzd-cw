Ext.define('Starter.view.entrydata.EntryDataShow', {
    extend: 'Ext.form.Panel',
    xtype: 'entrydata-show',

    requires: [
        'Starter.view.entrydata.EntryDataBase',
        'Starter.view.entrydata.EntryDataExt'
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
        xtype: 'entrydata-base',
        bodyPadding: 10,
        scrollable: true
    }, {
        xtype: 'entrydata-ext',
        bodyPadding: 10,
        scrollable: true
    }]
});