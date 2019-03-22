Ext.define('DRDMS.view.entry.EntryViewGrid', {
    extend: 'Ext.grid.Panel',

    requires: [
        'DRDMS.view.entry.EntryView',
    ],
    xtype: 'entry-viewgrid',
    controller: 'entry-view',
    viewModel: {
        type: 'entry-pendingcenter'
    },
    config: {
        entityId: null
    },

    items: [{
        xtype: 'entry-view'
    }]
});