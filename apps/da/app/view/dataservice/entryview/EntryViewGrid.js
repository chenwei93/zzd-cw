Ext.define('DA.view.dataservice.entry.EntryViewGrid', {
    extend: 'Ext.grid.Panel',

    requires: [
        'DA.view.dataservice.entry.EntryView',
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
