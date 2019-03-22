Ext.define('Cmdb.store.Wddb', {
    extend: 'Ext.data.Store',

    alias: 'store.wddb',
    storeId: 'wddb',
    model: 'Cmdb.model.Wddb',
    autoLoad: true,
    pageSize: 0
});
