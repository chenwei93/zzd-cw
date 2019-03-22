/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Starter.view.task.TaskModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.task',

    data: {
        entityId: ''
    },

    stores: {
        list: {
            pageSize: 20,
            model: 'Task',
            proxy: {
                type: 'ajax2',
                url: '/rest/tasks?sort=endTime,desc'
            }
        },

        entity: {
            pageSize: 20,
            model: 'Task',
            proxy: {
                type: 'ajax2',
                url: '/rest/reports/{entityId}',
                reader: 'result'
            }
        }
    }
});
