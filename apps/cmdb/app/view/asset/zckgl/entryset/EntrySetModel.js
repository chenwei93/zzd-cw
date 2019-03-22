/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Cmdb.view.asset.zckgl.entryset.EntrySetModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.entryset',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            model: 'EntrySet',
            autoLoad: true,
            type: 'tree',
            rootVisible: false,
            proxy: {
                type: 'ajax',
                // url: '/base/api/tree/catalogs/CatalogHY',
                url: 'app/store/data/asset/entryset/objectPackages.json',
                reader: {
                    rootProperty: 'children'
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
