Ext.define('AP.view.service.ServiceModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.service',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            model: 'Service',
            proxy: {
                type: 'ajax2',
                url: '/ap/api/services?query=example&type=Default'
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
