Ext.define('DA.view.da.worktask.WorkTaskTypeModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.worktask-type',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            // model: 'Entry',
            pageSize: 25,
            proxy: {
                type: 'ajax2',
                url: 'resources/data/da/worktask/WorkTaskType.json',
                // url: 'app/view/entry/data/entries.json',
            }
        },

        entity: {
            // model: 'Entry',
            proxy: {
                type: 'ajax2',
                url: '/drdms/api/entries/{entityId}'
                // url: 'app/view/entry/data/{entityId}.json'
            }
        }
    }
});
