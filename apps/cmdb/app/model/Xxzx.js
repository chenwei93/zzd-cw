Ext.define('Cmdb.model.Xxzx', {
    extend: 'Cmdb.model.Base',
    fields: ['title', 'nextperson', 'region', 'c_time', 'des',
        'pre_person'],

    proxy: {
        type: 'localstorage',
        id: 'xxzx'
    }
});