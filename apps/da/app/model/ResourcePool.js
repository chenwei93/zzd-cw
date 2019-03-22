Ext.define('DA.model.ResourcePool', {
    extend: 'DA.model.Base',

    fields: [
        'name', 'memo', 'pollingTimeMillis', {
            name: 'allowFormat'
        },
        'autoCreateResource', {
            name: 'base',
            type: 'string'
        }, {
            name: 'code',
            type: 'string'
        }, {
            name: 'Rtitle',
            mapping: 'resourceNode.title'
        }, {
            name: 'Rname',
            mapping: 'resourceNode.idRel'

        }, {
            name: 'autoCreateResource',
            type: 'bool'
        }, {
            name: 'enableIndexer',
            type: 'bool'
        }, {
            name: 'enableSearch',
            type: 'bool'
        }, {
            name: 'enableWatched',
            type: 'bool'
        }, {
            name: 'username',
            mapping: 'dbProperty.username'
        }, {
            name: 'password',
            mapping: 'dbProperty.password'
        }, {
            name: 'jdbcUrl',
            mapping: 'dbProperty.jdbcUrl'
        }]
});
