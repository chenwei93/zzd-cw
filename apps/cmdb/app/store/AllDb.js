Ext.define('Cmdb.store.AllDb', {
    extend: 'Ext.data.Store',

    alias: 'store.alldb',
    storeId: 'alldb',
    model: 'Cmdb.model.AllDb',
    autoLoad: true,
    pageSize: 0

});
