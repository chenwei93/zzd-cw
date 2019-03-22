Ext.define('Cmdb.view.asset.zckgl.catalog.CatalogSSModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.catalogss',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            autoLoad: true,
            folderSort: true,
            type: 'tree',
            model: 'Catalog',
            proxy: {
                type: 'ajax',
                url: 'app/store/data/asset/entry/CatalogSS.json',
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
