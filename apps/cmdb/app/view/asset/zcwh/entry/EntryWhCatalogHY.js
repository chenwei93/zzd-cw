Ext.define('Cmdb.view.asset.zcwh.entry.EntryWhCatalogHY', {
    extend: 'Ext.tree.Panel',
    xtype: 'entrywh-cataloghy',

    requires: [
        'Cmdb.model.Catalog',
        'Cmdb.view.asset.zcwh.entry.EntryWhCatalogController'
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
                    // url: '/base/api/tree/catalogs/CatalogHY',
                    url: 'app/store/data/asset/entry/CatalogHY.json',
                    reader: {
                        rootProperty: 'children[0].children'
                    }
                }
            };
            me.setStore(store);
        }
    }
});