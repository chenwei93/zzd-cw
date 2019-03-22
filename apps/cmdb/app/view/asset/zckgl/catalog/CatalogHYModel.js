Ext.define('Cmdb.view.asset.zckgl.catalog.CatalogHYModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.cataloghy',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            autoLoad: true,
            type: 'tree',
            model: 'Catalog',
            proxy: {
                type: 'ajax',
                // url: '/base/api/tree/catalogs/CatalogHY',
                url: 'app/store/data/asset/entry/CatalogHY.json',
                reader: {
                    rootProperty: 'children[0].children'
                }
            }
        },
        entity: {
            // model:'Resource',
            proxy: {
                type: 'ajax2',
                url: '/api/Resource/{entityId}',
                reader: 'result'
            }
        }
    }
});
