Ext.define('ETL.view.taskcon.TaskConModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.taskcon',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            proxy: {
                type: 'ajax2',
                url: ETL.base.ViewController.HTTP_PREFIX+'/showJobsAll',
                actionMethods:{
                    read:'POST'
                }
            }
        },

        entity: {
            // model:'Resource',
           // model:'ServerCatalog',
            proxy: {
                type: 'ajax2',
                url: '/api/Resource/{entityId}',
                reader: 'result'
            }
        }
    }
});
