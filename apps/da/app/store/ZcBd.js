Ext.define('DA.store.ZcBd', {
    extend: 'Ext.data.Store',

    alias: 'store.zc-bd',
    storeId: 'zc-bd',

    autoLoad: true,
    proxy: {
        type: 'ajax2',
        url: 'app/store/data/mgr/workorder/ZcBd.json'
    },


});
