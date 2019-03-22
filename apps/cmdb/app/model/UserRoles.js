Ext.define('Cmdb.model.UserRoles', {
    extend: 'Cmdb.model.Base',

    fields: [
        'name', 'title', 'des', {
            name: 'admin',
            type: 'boolean'
        }
    ]
});