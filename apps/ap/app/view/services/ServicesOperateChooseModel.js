/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('AP.view.services.ServicesOperateChooseModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.services-choose',

    data: {
        entityId: '',
        input: ''
    },

    stores: {
        list: {
            model: 'Service',
            pageSize: 10,
            proxy: {
                type: 'ajax2',
                url: '/ap/api/services?query=example&qualified=ENTITY'
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
