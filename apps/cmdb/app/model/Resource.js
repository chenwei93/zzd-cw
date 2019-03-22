Ext.define('Cmdb.model.Resource', {
    extend: 'Cmdb.model.Base',

    fields: [
        'creator', 'description', 'entityKey', 'generateTime',
        'lastUpdateTime', {
            name: 'name',
            mapping: 'locator.name'
        },
        {
            name: 'path',
            mapping: 'locator.path'
        },
        {
            name: 'poolCode',
            mapping: 'locator.poolCode'
        }, 'resId', 'summary', 'title', 'version'
    ]
});