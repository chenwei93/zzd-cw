Ext.define('DA.model.chooseResource', {
    extend: 'DA.model.Base',

    fields: [
        'title', {
            name: 'name',
            mapping: 'description.name'

        }, {
            name: 'size',
            mapping: 'description.size'
        }, {
            name: 'total',
            mapping: 'description.total'
        }, {
            name: 'path',
            mapping: 'locator.path'
        }
    ]
});
