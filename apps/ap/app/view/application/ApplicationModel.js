Ext.define('AP.view.application.ApplicationModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.application',

    data : {
        entityId : ''
    },

    stores: {
        list : {
            model:'Application',
            proxy: {
                type: 'ajax2',
                url: '/ap/api/applications'
            }
        },

        entity : {
            // model:'Resource',
            proxy: {
                type: 'ajax2',
                url: '/api/Resource/{entityId}',
                reader: 'result'
            }
        }
    }
});
