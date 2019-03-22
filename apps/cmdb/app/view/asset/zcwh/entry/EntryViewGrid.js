Ext.define('Cmdb.view.asset.zcwh.entry.EntryViewGrid', {
    extend: 'Ext.grid.Panel',

    requires: [
        'Cmdb.view.asset.zcwh.entry.EntryView',
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