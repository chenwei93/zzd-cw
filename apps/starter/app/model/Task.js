Ext.define('Starter.model.Task', {
    extend: 'Starter.model.Base',

    fields: [
        'id', 'targetFile',
        {name: 'department', mapping: 'targetDepartment.name'},
        {
            name: 'startTime',
            type: 'date'
            , dateFormat : 'c'
        }, {
            name: 'endTime',
            type: 'date'
            , dateFormat : 'c'
        }
    ]
});