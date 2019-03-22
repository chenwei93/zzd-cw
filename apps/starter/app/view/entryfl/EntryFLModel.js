Ext.define('Starter.view.entryfl.EntryFLModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.entry-fl',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            model: 'EntryData',
            proxy: {
                type: 'ajax2',
                url: '/rest/fullEntryData'
            }
        },

        entity: {
            model: 'EntryData',
            proxy: {
                type: 'ajax2',
                url: '/drdms/api/entries/{entityId}'
            }
        }
    }
});
