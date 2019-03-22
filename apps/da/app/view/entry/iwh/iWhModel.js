Ext.define('DA.view.entry.iwh.iWhModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.iwh',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            model: 'Services',
            proxy: {
                type: 'ajax2',
                url1: '/rest/services',
                url: 'resources/data/entry/services/server.json'
            }
        },
        entity: {
            // model: '',
            proxy: {
                type: 'ajax',
                url: '/rbase/api/resourcePools/{entityId}'
            }
        }
    }
});
