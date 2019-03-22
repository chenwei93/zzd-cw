Ext.define('DA.view.entry.serviceswh.ServiceWHModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.servicewh',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            model: 'Services',
            proxy: {
                type: 'ajax2',
                url: '/rest/services?query=example&status=Published'
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
