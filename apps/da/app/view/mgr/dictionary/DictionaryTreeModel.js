/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('DA.view.mgr.dictionary.DictionaryTreeModel', {
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
                url1: '/base/api/tree/codes',
                url: 'resources/data/mgr/dictionary/Dictionary.json',
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
