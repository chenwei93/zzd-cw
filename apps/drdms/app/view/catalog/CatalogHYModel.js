Ext.define('DRDMS.view.catalog.CatalogHYModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.cataloghy',

    data : {
        entityId : ''
    },

    stores: {
        list: {
            autoLoad:true,
            type: 'tree',
            model: 'Catalog',
            proxy: {
                type: 'ajax',
                url: '/base/api/tree/catalogs/CatalogHY',
                reader: {
                    rootProperty: 'children[0].children'
                }
            }
        },
        entity : {
            // model:'Resource',
            proxy: {
                type: 'ajax2',
                url: '/api/Resource/{entityId}',
                reader: 'result'
            }
        }
    }
});
