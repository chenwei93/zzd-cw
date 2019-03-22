Ext.define('DRDMS.view.entry.EntryPublishedNodeModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.entry-publishednode',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            model: 'Entry',
            proxy: {
                type: 'ajax2',
                url: '/drdms/api/entries?query=example&biz.currentState=Published'
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