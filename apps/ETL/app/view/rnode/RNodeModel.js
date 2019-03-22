/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('ETL.view.rnode.RNodeModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.rnode',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            proxy: {
                type: 'ajax2',
                url: ETL.base.ViewController.HTTP_PREFIX+'/showServer',
                // url: 'app/view/rnode/demo.json'
                actionMethods:{
                    read:'POST'
                }
            }
        },

        entity: {
            proxy: {
                type: 'ajax',
                url:  ETL.base.ViewController.HTTP_PREFIX+'/showServer/{entityId}'
            }
        }
    }
});
