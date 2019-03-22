Ext.define('DRDMS.model.UserRoles', {
    extend: 'DRDMS.model.Base',

    fields: [
        'name', 'title', 'des', {
            name: 'admin',
            type: 'boolean'
        }
    ]
});