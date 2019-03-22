/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Starter.view.catalog.CatalogTreeModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.catalogtree',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            // autoLoad:true,
            type: 'tree',
            model: 'Catalog',
            pageSize: 20,
            proxy: {
                type: 'ajax',
                url: '/rest/tree/catalogs/CatalogGB',
                reader: {
                    rootProperty: 'children',
                    transform: function (rs) {
                        for (var i = 0; i < rs.children.length; i++) {
                            rs.children[i].expanded = true
                        }
                        return rs;
                    }
                }
            }
        },

        entity: {
            // model:'Resource',
            pageSize: 20,
            proxy: {
                type: 'ajax2',
                url: '/rest/resources/{entityId}',
                reader: 'result'
            }
        }
    }
});
