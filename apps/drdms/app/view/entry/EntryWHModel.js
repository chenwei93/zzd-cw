Ext.define('DRDMS.view.entry.EntryWHModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.entry-wh',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            model: 'Entry',
            proxy: {
                type: 'ajax2',
                url: '/drdms/api/entries'
            }
        },

        entity: {
            model: 'Entry',
            proxy: {
                type: 'ajax2',
                url: '/drdms/api/entries/{entityId}'
            }
        }
    }
});