Ext.define('DRDMS.view.entrywh.EntryWhCatalogHY', {
    extend: 'Ext.tree.Panel',
    xtype: 'entrywh-cataloghy',

    requires: [
        'DRDMS.model.Catalog',
        'DRDMS.view.entrywh.EntryWhController'
    ],
    controller: 'entrywh',

    rootVisible: false,
    store: {},
    columns: [{
        xtype: 'treecolumn',
        flex: 1,
        dataIndex: 'text'
    }],
    listeners: {
        'selectionchange': 'onSelectionChange',
        render: function () {
            var me = this;
            var store = {
                autoLoad: true,
                type: 'tree',
                model: 'Catalog',
                folderSort: true,
                proxy: {
                    type: 'ajax',
                    url: '/base/api/tree/catalogs/CatalogHY',
                    reader: {
                        rootProperty: 'children[0].children'
                    }
                }
            };
            me.setStore(store);
        }
    }
});