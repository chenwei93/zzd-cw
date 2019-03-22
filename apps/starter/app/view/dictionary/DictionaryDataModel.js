/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Starter.view.dictionary.DictionaryDataModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.dictionary',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            pageSize: 20,
            proxy: {
                type: 'ajax2',
                url: '/rest/dictionary'
            }
        },

        entity: {
            pageSize: 20,
            proxy: {
                type: 'ajax2',
                url: '/rest/dictionary/{entityId}',
                reader: 'result'
            }
        }
    }
});
