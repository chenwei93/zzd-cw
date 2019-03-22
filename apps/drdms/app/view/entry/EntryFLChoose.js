Ext.define('DRDMS.view.entry.EntryFLChoose', {
    extend: 'Ext.tab.Panel',
    xtype: 'entryfl-choose',


    requires: [
        'DRDMS.view.entry.EntryCatalog'
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