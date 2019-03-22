/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('DA.view.entry.services.ServicesModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.services',

    data: {
        entityId: '',
        input: '',
        show_title:'',
        show_entityKey:'',
        show_sql:'',
        show_sqltable:'',
        version:'1.0',
    },

    stores: {
        list: {
            // model: 'Services',
            pageSize: 10,
            proxy: {
                type: 'ajax2',
                url: ''
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
