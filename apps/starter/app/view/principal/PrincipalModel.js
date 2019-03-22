/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Starter.view.principal.PrincipalModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.principal',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            autoLoad: true,
            folderSort: true,
            type: 'tree',
            model: 'Principal',
            pageSize: 20,
            proxy: {
                type: 'ajax',
                url: '/rest/tree/departments',
                // url:'app/view/principal/demo.json',
                reader: {
                    rootProperty: 'children',
                    totalProperty: 'totalElements',
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
