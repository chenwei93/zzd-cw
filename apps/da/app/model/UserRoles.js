Ext.define('DA.model.UserRoles', {
    extend: 'DA.model.Base',

    fields: [
        'name', 'title', 'des', {
            name: 'admin',
            type: 'boolean'
        }
    ]
});
