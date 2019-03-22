/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('DRDMS.view.region.RegionModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.region',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            folderSort: true,
            autoLoad: true,
            type: 'tree',
            root: null,
            model: 'Region',
            pageSize: 20,
            proxy: {
                type: 'ajax',
                url: '/base/api/tree/regions',
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
            pageSize: 20,
            model: 'Region',
            proxy: {
                type: 'ajax2',
                url: '/rest/resources/{entityId}',
                reader: 'result'
            }
        }
    }
});
