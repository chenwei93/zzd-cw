Ext.define('Starter.model.Principal', {
    extend: 'Starter.model.Base',

    fields: [
        'id', 'type',
        'name',
        {
            name: 'displayName',
            mapping: 'extraAttributes.displayName'
        }, {
            name: 'code',
            mapping: 'extraAttributes.code'
        }, 'region', {
            name: 'idRel',
            mapping: 'extraAttributes.idRel'
        }, {
            name: 'orders',
            mapping: 'extraAttributes.orders'
        }, {
            name: 'dept',
            mapping: 'owner[0].name'
        }, {
            name: 'area',
            mapping: 'region.name'
        }
    ]
});