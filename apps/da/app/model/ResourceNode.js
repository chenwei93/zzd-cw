Ext.define('DA.model.ResourceNode', {
    extend: 'DA.model.Base',

    fields: [
        {
            name: 'ip',
            type: 'string'
        }, {
            name: 'name',
            type: 'string'
        }, {
            name: 'title',
            type: 'string'
        }, {
            name: 'local',
            type: 'bool'
        },'ports'
    ]
});
