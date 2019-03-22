Ext.define('DRDMS.view.entry.EntryPublishedCenterModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.entry-publishedcenter',

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
                // url: '/drdms/api/entries/{entityId}'
                url: 'app/view/entry/data/{entityId}.json'
            }
        }
    }
});