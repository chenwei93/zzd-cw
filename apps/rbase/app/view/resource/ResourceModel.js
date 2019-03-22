/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('RBase.view.resource.ResourceModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.resource',

    data : {
        entityId : ''
    },

    stores: {
        list : {
            model:'Resource',
            proxy: {
                type: 'ajax2',
                url: '/rbase/api/resources'
            }
        },

        entity : {
            model:'Resource',
            proxy: {
                type: 'ajax2',
                url: '/api/Resource/{entityId}',
                reader: 'result'
            }
        }
    }
});
