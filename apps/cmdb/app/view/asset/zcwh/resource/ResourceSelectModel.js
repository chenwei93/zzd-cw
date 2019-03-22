/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Cmdb.view.asset.zcwh.resource.ResourceSelectModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.resourceselect',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            autoLoad: true,
            model: 'Entry',
            proxy: {
                type: 'ajax2',
                // url: '/drdms/api/entries'
                url: 'app/store/data/asset/entry/entries.json'
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
