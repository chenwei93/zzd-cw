/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('DRDMS.view.principal.UserRolesModel', {
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
                url: 'app/view/principal/data/roledemo.json'
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
