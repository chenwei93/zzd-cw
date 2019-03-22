Ext.define('Cmdb.view.asset.zcwh.entry.EntryFLChoose', {
    extend: 'Ext.tab.Panel',
    xtype: 'entryfl-choose',

    plain:true,
    frame:false,
    requires: [
        'Cmdb.view.asset.zcwh.entry.EntryCatalog',
    ],


    tabPosition: 'bottom',
    // tabRotation: 0,　

    items: [{
        title: '国标主题分类',
        catalogCode: 'CatalogGB',
        items: [{
            xtype: 'entryfl-catalog'
        }]
    }, {
        title: '实施应用分类',
        catalogCode: 'CatalogSS',
        items: [{
            xtype: 'entryfl-catalog'
        }]
    }, {
        title: '行业分类',
        catalogCode: 'CatalogHY',
        items: [{
            xtype: 'entryfl-catalog'
        }]
    }]
});