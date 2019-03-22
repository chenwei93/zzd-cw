Ext.define('DA.view.entry.dataset.datasetView', {
    extend: 'Ext.grid.Panel',
    xtype: 'dataset-view',


    store: {},
    scrollable: true,
    viewConfig: {
        deferEmptyText: false
    },
    emptyText: "无数据",
    listeners: {
        render: function () {
            var me = this,
                rs = me.needRs;
            var result = rs._default;
            var store = {
                autoLoad: true,
                data: result
            };
            me.setStore(store);
        }
    }
});
