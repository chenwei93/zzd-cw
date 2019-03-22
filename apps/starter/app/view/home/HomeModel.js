/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Starter.view.home.HomeModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.home',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            model: 'Report',
            pageSize: 20,
            proxy: {
                type: 'ajax2',
                url: '/rest/reports?projection=ReportProjection&sort=createTime,desc'
            }
        },
        entity: {
            pageSize: 20,
            // model:'Resource',
            proxy: {
                type: 'ajax2',
                url: '/rest/resources/{entityId}',
                reader: 'result'
            }
        }
    }
});
