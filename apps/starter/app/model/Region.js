Ext.define('Starter.model.Region', {
    extend: 'Starter.model.Base',

    fields: [
        'id', {
            name: 'rank',
            mapping: 'extraAttributes.rank'

        },
        'name', {
            name: 'code',
            mapping: 'extraAttributes.code'
        }, {
            name: 'idRel',
            mapping: 'extraAttributes.idRel'
        }
    ]
});