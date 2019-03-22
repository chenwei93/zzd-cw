Ext.define('ETL.view.logs.LogsModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.logs',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            proxy: {
                type: 'ajax2',
                url: ETL.base.ViewController.HTTP_PREFIX+'/showJobsLog',
                actionMethods:{
                    read:'POST'
                }
            }
        },

        entity: {
            // model:'Resource',
            proxy: {
                type: 'ajax2',
                url: ETL.base.ViewController.HTTP_PREFIX+ '/api/Resource/{entityId}',
                reader: 'result'
            }
        }
    }
});
