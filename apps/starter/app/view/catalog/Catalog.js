Ext.define('Starter.view.catalog.Catalog', {
    extend: 'Ext.panel.Panel',
    xtype: 'catalog',

    requires: [
        'Starter.view.catalog.CatalogGrid',
        'Starter.view.catalog.CatalogTree',
        'Starter.view.catalog.CatalogController'
    ],
    controller: 'catalog',
    layout: 'border',

    items: [{
        xtype: 'catalog-tree',
        region: 'north',
        height: 220
    }, {
        xtype: 'catalog-grid',
        region: 'center',
        reference: 'cataloggrid'
    }]
});