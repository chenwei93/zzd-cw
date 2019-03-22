Ext.define('DRDMS.view.entry.EntryChangeLogModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.entry-changelog',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            model: 'Entry',
            proxy: {
                type: 'ajax2',
                url: '/drdms/api/changes'
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