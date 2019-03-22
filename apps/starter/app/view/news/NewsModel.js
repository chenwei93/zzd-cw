Ext.define('Starter.view.news.NewsModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.news',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            // model: 'EntryData',
            proxy: {
                type: 'ajax2',
                url: '/rest/news'
            }
        },

        entity: {
            proxy: {
                type: 'ajax2',
                // url: '/rest/news/{entityId}'
            }
        }
    }
});
