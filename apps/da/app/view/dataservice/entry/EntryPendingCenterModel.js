Ext.define('DA.view.dataservice.entry.EntryPendingCenterModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.entry-pendingcenter',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            // model: 'Entry',
            pageSize: 25,
            proxy: {
                type: 'ajax2',
                url1: '/drdms/api/entries?query&biz.currentState=UnApproved,UnPublished',
                url: 'resources/data/dataservice/entry/pending.json',
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
