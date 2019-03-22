Ext.define('Cmdb.view.asset.zcwh.entry.EntryFLModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.entry-fl',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            model: 'Entry',
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/asset/entry/entries.json'
                // url: '/drdms/api/entries'
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