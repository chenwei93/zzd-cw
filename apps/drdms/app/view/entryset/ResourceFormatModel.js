/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('DRDMS.view.entryset.ResourceFormatModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.resourceformat',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            pageSize: 20,
            proxy: {
                type: 'ajax2',
                url: 'app/view/entryset/data/resourceFormat.json'
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
