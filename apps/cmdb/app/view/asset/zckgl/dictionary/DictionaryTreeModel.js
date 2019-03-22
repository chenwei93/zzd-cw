/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Cmdb.view.asset.zckgl.dictionary.DictionaryTreeModel', {
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
                url: 'app/store/data/asset/dictionary/codes.json',
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
