/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('DRDMS.view.entryset.EntrySetModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.entryset',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            model: 'EntrySet',
            pageSize: 20,
            proxy: {
                type: 'ajax2',
                url: '/drdms/api/objectPackages'
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
