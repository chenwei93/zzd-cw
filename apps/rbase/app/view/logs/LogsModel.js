/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('RBase.view.logs.LogsModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.logs',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            // model: '',
            proxy: {
                type: 'ajax2',
                url: '/rbase/api/queryLoggers?sort=end,desc',
                // url: 'app/view/logs/data/logs.json'
            }
        },
        entity: {
            // model: '',
            proxy: {
                type: 'ajax',
                url: '/rbase/api/resourcePools/{entityId}'
            }
        }
    }
});
