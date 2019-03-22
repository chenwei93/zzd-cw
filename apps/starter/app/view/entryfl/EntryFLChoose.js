Ext.define('Starter.view.entryfl.EntryFLChoose', {
    extend: 'Ext.tab.Panel',
    xtype: 'entryfl-choose',


    requires: [
        'Starter.view.entryfl.EntryFLCatalog'
    ],


    tabPosition: 'bottom',
    // tabRotation: 0,　

    items: [{
        title: '国标主题分类',
        catalogCode: 'CatalogGB',
        items: [{
            xtype: 'entryfl-catalog',
            reference: 'catalogGb'
        }]
    }, {
        title: '实施应用分类',
        catalogCode: 'CatalogSS',
        items: [{
            xtype: 'entryfl-catalog',
            reference: 'catalogSs'

        }]
    }, {
        title: '行业分类',
        catalogCode: 'CatalogHY',
        items: [{
            xtype: 'entryfl-catalog',
            reference: 'catalogHy'

        }]
    }]
});
