/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('DA.view.entry.dataset.datasetOperateChooseModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.dataset-choose',

    data: {
        entityId: '',
        input: ''
    },

    stores: {
        list: {
            model: 'Entry',
            pageSize: 10,
            proxy: {
                type: 'ajax2',
                url: '/rest/entries?query=example&entityStatus=Default',
                url1: 'app/view/dataset/data/entries.json'
            }
        },

        entity: {
            model: 'Services',
            proxy: {
                type: 'ajax2',
                url: 'app/view/dataset/data/server.json'
            }
        }
    }
});
