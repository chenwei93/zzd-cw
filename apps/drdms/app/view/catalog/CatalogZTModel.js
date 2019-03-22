Ext.define('DRDMS.view.catalog.CatalogZTModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.catalogzt',

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
                url: '/base/api/tree/catalogs/CatalogGB',
                reader: {
                    rootProperty: function (rs) {
                        if (rs.children != null) {
                            if (rs.children.length == 1) {
                                return rs.children[0].children;
                            } else {
                                return rs.children

                            }
                        }
                    }
                }
            }
        },

        entity: {
            model: 'Resource',
            proxy: {
                type: 'ajax2',
                url: '/api/Resource/{entityId}',
                reader: 'result'
            }
        }
    }
});
