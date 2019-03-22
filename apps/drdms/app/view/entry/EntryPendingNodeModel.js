Ext.define('DRDMS.view.entry.EntryPendingNodeModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.entry-pendingnode',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            model: 'Entry',
            proxy: {
                type: 'ajax2',
                url: '/drdms/api/entries?query=example&biz.currentState=Generated'
            }
        },

        entity: {
            model: 'Entry',
            proxy: {
                type: 'ajax2',
                url: '/drdms/api/entries/{entityId}',
            }
        }
    }
});