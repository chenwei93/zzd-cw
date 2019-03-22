Ext.define('Cmdb.store.ShowData', {
    extend: 'Ext.data.Store',

    storeId: 'show-data',
    model: 'Cmdb.model.ShowData',
    autoLoad: true,
    pageSize: 0
});
