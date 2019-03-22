/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Starter.view.entrydata.EntryDataProjectionModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.entrydata-projection',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            model: 'EntryData',
            pageSize: 20,
            proxy: {
                type: 'ajax2',
                url: '/rest/entryDatas?projection=EntryDataProjection&sort=createTime,desc'
            }
        },

        entity: {
            pageSize: 20,
            model: 'Report',
            proxy: {
                type: 'ajax2',
                url: '/rest/reports/{entityId}',
                reader: 'result'
            }
        }
    }
});
