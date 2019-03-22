/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('DA.view.mgr.principal.UserModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.user',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            model: 'Principal',
            pageSize: 20,
            proxy: {
                type: 'ajax2',
                url: '/base/api/users'
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
