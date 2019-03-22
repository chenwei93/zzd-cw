/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('DA.view.entry.services.ServicesOperateChooseModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.services-choose',

    data: {
        entityId: '',
        input: ''
    },

    stores: {
        list: {
            model: 'Services',
            pageSize: 10,
            proxy: {
                type: 'ajax2',
                url: 'resources/data/entry/services/choose.json',
                ur1: '/rest/entries?query=example&entityStatus=Default'
            }
        },

        entity: {
            model: 'Services',
            proxy: {
                type: 'ajax2',
                url: 'app/view/services/data/server.json'
            }
        }
    }
});
