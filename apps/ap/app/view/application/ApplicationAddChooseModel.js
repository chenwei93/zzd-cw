/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('AP.view.application.ApplicationAddChooseModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.application-choose',

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
            model: 'Service',
            proxy: {
                type: 'ajax2',
                url: 'app/view/services/data/server.json'
            }
        }
    }
});
