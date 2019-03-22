Ext.define('DA.model.Catalog', {
    extend: 'DA.model.Base',

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
