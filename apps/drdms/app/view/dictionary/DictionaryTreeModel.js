/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('DRDMS.view.dictionary.DictionaryTreeModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.dictionarytree',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            autoLoad: true,
            type: 'tree',
            proxy: {
                type: 'ajax',
                url: '/base/api/tree/codes',
                reader: {
                    rootProperty: 'children'
                }
            }
        },

        entity: {
            pageSize: 20,
            proxy: {
                type: 'ajax2',
                url: '/base/dictionary/{entityId}',
                reader: 'result'
            }
        }
    }
});
