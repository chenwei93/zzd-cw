Ext.define('Cmdb.model.User', {
    extend: 'Cmdb.model.Principal',

    fields: [
        'nick', {
            name: 'nick',
            mapping: 'displayName'
        }
    ]
});