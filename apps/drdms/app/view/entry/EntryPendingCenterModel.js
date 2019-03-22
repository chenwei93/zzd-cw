Ext.define('DRDMS.view.entry.EntryPendingCenterModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.entry-pendingcenter',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            model: 'Entry',
            pageSize: 25,
            proxy: {
                type: 'ajax2',
                url: '/drdms/api/entries?query&biz.currentState=UnApproved,UnPublished',
                // url: 'app/view/entry/data/entries.json',
            }
        },

        entity: {
            model: 'Entry',
            proxy: {
                type: 'ajax2',
                url: '/drdms/api/entries/{entityId}'
                // url: 'app/view/entry/data/{entityId}.json'
            }
        }
    }
});