Ext.define('AP.view.service.ServiceWHModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.servicewh',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            model: 'Service',
            proxy: {
                type: 'ajax2',
                url: '/ap/api/services?query=example&type=Custom'
            }
        },

        entity: {
            // model:'Resource',
            proxy: {
                type: 'ajax2',
                url: '/api/Resource/{entityId}',
                reader: 'result'
            }
        }
    }
});
