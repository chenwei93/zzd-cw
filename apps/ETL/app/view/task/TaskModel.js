Ext.define('ETL.view.task.TaskModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.task',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            proxy: {
                type: 'ajax2',
                url: ETL.base.ViewController.HTTP_PREFIX+'/onSearch',
                actionMethods:{
                    read:'POST'
                },
                extraParams:{'status':'已发布'}
            }
        },

        entity: {
            // model:'Resource',
            proxy: {
                type: 'ajax',
                url: ETL.base.ViewController.HTTP_PREFIX+ '/api/Resource/{entityId}',
                reader: 'result'
            }
        }
    }
});
