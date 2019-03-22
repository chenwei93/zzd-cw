Ext.define('Cmdb.model.Catalog', {
    extend: 'Cmdb.model.Base',

    fields: [
        'id', 'text', {
            name: 'code',
            mapping: 'extraAttributes.code'
        },
        {
            name: 'value',
            mapping: 'extraAttributes.value'
        }, {
            name: 'desc',
            mapping: 'extraAttributes.desc'
        }
    ]
});