Ext.define('Cmdb.store.TimeLine', {
    extend: 'Ext.data.Store',

    alias: 'store.timeline',
    model: 'Cmdb.model.TimeLine',
    autoLoad: true,
    pageSize: 0
});
