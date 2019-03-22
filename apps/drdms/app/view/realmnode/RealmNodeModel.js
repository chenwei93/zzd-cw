/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('DRDMS.view.realmnode.RealmNodeModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.realmnode',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            model: 'RealmNode',
            pageSize: 20,
            proxy: {
                type: 'ajax2',
                url: '/drdms/api/realmNodes'
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
