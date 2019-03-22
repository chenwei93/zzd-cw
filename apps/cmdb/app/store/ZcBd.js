Ext.define('Cmdb.store.ZcBd', {
    extend: 'Ext.data.Store',

    alias: 'store.zc-bd',
    storeId: 'zc-bd',

    autoLoad: true,
    proxy: {
        type: 'ajax2',
        url: 'app/store/data/asset/bmzcqd/ZcBd.json'
    },


});
