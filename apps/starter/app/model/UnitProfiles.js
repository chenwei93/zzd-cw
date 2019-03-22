Ext.define('Starter.model.UnitProfiles', {
    extend: 'Starter.model.Base',

    fields: [
        'id', {
            name: 'name',
            mapping: 'target.name'
        }
    ]
});