/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Starter.view.report.ReportModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.report',

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
            model: 'Report',
            proxy: {
                type: 'ajax2',
                url: '/rest/reports/{entityId}',
                reader: 'result'
            }
        }
    }
});
