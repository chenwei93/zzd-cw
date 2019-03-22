Ext.define('DA.store.AllDb', {
    extend: 'Ext.data.Store',

    alias: 'store.alldb',
    storeId: 'alldb',
    model: 'DA.model.AllDb',
    autoLoad: true,
    pageSize: 0

});
