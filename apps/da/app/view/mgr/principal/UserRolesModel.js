/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('DA.view.mgr.principal.UserRolesModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.user-roles',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            model: 'UserRoles',
            pageSize: 20,
            proxy: {
                type: 'ajax2',
                url: 'app/store/data/mgr/roledemo.json'
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
