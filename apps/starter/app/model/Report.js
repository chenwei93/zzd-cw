Ext.define('Starter.model.Report', {
    extend: 'Starter.model.Base',
//"2017-10-18T13:17:34.303+0000"
    fields: [
        'id', 'title',
        {
            name: 'createTime',
            type: 'date',
            dateFormat : 'c'

        }, {
            name: 'generateTime',
            type: 'date',
            dateFormat : 'c'
        },
        {
            name: 'generated',
            type: 'boolean'
        }, {
            name: 'dept',
            mapping: 'department.name'
        },
        'targetClass', 'sourceType'
    ]

    // hasOne: [
    //     {name: 'author', model: 'Principal'},
    //     {name: 'department', model: 'Principal'}
    // ]
});