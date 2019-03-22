/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Starter.view.home.HomeUpdateModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.home-update',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            model: 'Task',
            pageSize: 20,
            sorters: [{
                property: 'startTime', // 指定要排序的列索引
                direction: 'DESC'
            }],
            proxy: {
                type: 'ajax2',
                url: '/rest/tasks'
            }
        },
        entity: {
            pageSize: 20,
            proxy: {
                type: 'ajax2',
                url: '/rest/resources/{entityId}',
                reader: 'result'
            }
        }
    }
});
